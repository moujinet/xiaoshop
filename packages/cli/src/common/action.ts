import { dirname } from 'node:path/posix'
import { merge } from 'es-toolkit/object'
import { mkdirp } from 'mkdirp'

import { ConfigPath } from '@/config'
import { renderString, renderTemplate } from '@/utils/render'
import { Console } from '@/utils/console'
import { existsSync } from 'node:fs'
import { writeFile } from 'node:fs/promises'

export abstract class AbstractAction implements ICommandAction {
  templates: ICommandActionTemplate[] = []

  abstract run(): Promise<void>

  async generateTemplates(data: Record<string, any>): Promise<void> {
    const cwd = process.cwd()
    const templates = this.getTemplates(data)

    for (const tpl of templates) {
      const isNew = !tpl.type || tpl.type === 'add'
      const destDir = tpl.dest.includes('.')
        ? dirname(tpl.dest)
        : tpl.dest

      // Start
      Console.step.start(
        `%s %s ...`,
        isNew ? 'Create' : 'Update',
        tpl.dest.replace(cwd, './'),
      )

      // Already Exists
      if (isNew && existsSync(tpl.dest)) {
        Console.step.skip(
          `%s is already exists.`,
          tpl.dest.replace(cwd, '.'),
        )

        continue
      }

      // Create Dirs
      if (!existsSync(destDir))
        await mkdirp(destDir)

      const content = renderTemplate(tpl.template, {
        ...data,
        isNew,
      })

      // Not Found
      if (!content) {
        Console.step.fail(
          'Template %s not found.',
          tpl.dest.replace(cwd, '.'),
        )

        continue
      }

      if (isNew) {
        await writeFile(tpl.dest, content, 'utf-8')
      }
      else {
        // Update
      }

      // Done
      Console.step.success(
        'Generated %s done.',
        tpl.dest.replace(cwd, '.'),
      )
    }
  }

  getTemplates(data: Record<string, any>): ICommandActionTemplate[] {
    return this.templates.map((temp) => {
      return {
        ...temp,
        dest: renderString(temp.dest, merge(ConfigPath.paths, data)),
      }
    })
  }
}
