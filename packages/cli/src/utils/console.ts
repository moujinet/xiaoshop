import { format } from 'node:util'
import * as color from 'picocolors'
import { cancel, log, note, spinner } from '@clack/prompts'

import { onDebug } from './env'

export const step = spinner()

export const Console = {
  title: (msg: string | any, ...args: any[]) => {
    log.info(color.bold(color.blue(format(msg, ...args.map(arg => color.white(arg))))))
  },

  info: (msg: string | any, ...args: any[]) => {
    log.info(format(msg, ...args.map(arg => color.cyan(arg))))
  },

  error: (msg: string | any, ...args: any[]) => {
    if (msg instanceof Error) {
      log.error(color.red(msg.message))

      if (msg.stack) {
        onDebug(() => {
          note(msg.stack)
        })
      }
    }
    else {
      log.error(format(msg, ...args.map(arg => color.redBright(arg))))
    }
  },

  success: (msg: string | any, ...args: any[]) => {
    log.success(format(msg, ...args.map(arg => color.blueBright(arg))))
  },

  fail: (msg: string | any, ...args: any[]) => {
    log.error(format(msg, ...args.map(arg => color.redBright(arg))))
  },

  cancel: (msg: string | any, ...args: any[]) => {
    cancel(format(msg, ...args.map(arg => color.yellowBright(arg))))
  },

  note: (message: string, title?: string) => {
    note(message, title && color.yellowBright(title))
  },

  step: {
    start: (msg: string, ...args: any[]) => {
      step.start(`${color.magenta(format(msg, ...args.map(arg => color.greenBright(arg))))} ...`)
    },

    done: (msg: string, ...args: any[]) => {
      step.stop(`${color.blueBright(format(msg, ...args.map(arg => color.greenBright(arg))))} Done.`)
    },

    success: (msg: string, ...args: any[]) => {
      step.stop(`${format(msg, ...args.map(arg => color.greenBright(arg)))}    ${color.green('✓')}`)
    },

    fail: (msg: string, ...args: any[]) => {
      step.stop(`${format(msg, ...args.map(arg => color.red(arg)))}    ${color.red('✕')}`)
    },

    skip: (msg: string, ...args: any[]) => {
      step.stop(`${format(msg, ...args.map(arg => color.cyan(arg)))}    ${color.yellow('☻')}`)
    },

    message: (msg: string, ...args: any[]) => {
      step.message(`${format(msg, ...args.map(arg => color.yellow(arg)))} ...`)
    },
  },
}
