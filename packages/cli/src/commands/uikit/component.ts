import * as Prompt from '@clack/prompts'
import { kebabCase } from 'es-toolkit/string'

import { Console } from '@/utils/console'
import { AbstractAction } from '@/common/action'

export class ComponentAction extends AbstractAction {
  /**
   * 模板
   */
  templates: ICommandActionTemplate[] = [
    {
      template: 'uikit/index.ts.hbs',
      dest: '{{ UIKIT_ROOT }}/src/components/{{ pascalCase name }}/index.ts',
    },
    {
      template: 'uikit/props.ts.hbs',
      dest: '{{ UIKIT_ROOT }}/src/components/{{ pascalCase name }}/{{ name }}.props.ts',
    },
    {
      template: 'uikit/ui.ts.hbs',
      dest: '{{ UIKIT_ROOT }}/src/components/{{ pascalCase name }}/{{ name }}.ui.ts',
    },
    {
      template: 'uikit/vue.hbs',
      dest: '{{ UIKIT_ROOT }}/src/components/{{ pascalCase name }}/{{ name }}.vue',
    },
  ]

  async run() {
    Console.title('Generate UiKit Component Skeleton')

    const name = await Prompt.text({
      message: 'What is the component name?',
      placeholder: 'component',
      validate: (name) => {
        if (!name)
          return 'Component name is required'
      },
    })

    if (Prompt.isCancel(name)) {
      Console.cancel('Canceled')
      process.exit(0)
    }

    await this.generateTemplates({
      name: kebabCase(name),
    })
  }
}
