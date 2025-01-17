import * as handlebars from 'handlebars'
import {
  camelCase,
  capitalize,
  kebabCase,
  pascalCase,
  snakeCase,
  startCase,
} from 'es-toolkit/string'

// helloWorld
handlebars.registerHelper('camelCase', camelCase)

// Hello
handlebars.registerHelper('capitalize', capitalize)

// hello-world
handlebars.registerHelper('kebabCase', kebabCase)

// HelloWorld
handlebars.registerHelper('pascalCase', pascalCase)

// hello_world
handlebars.registerHelper('snakeCase', snakeCase)

// Hello World
handlebars.registerHelper('titleCase', startCase)

// hello world
handlebars.registerHelper('lowerCase', (value: string) => value.toLowerCase())

// #isEquals
handlebars.registerHelper('isEquals', (a: any, b: any, options: any) => {
  return a === b ? options.fn(this) : options.inverse(this)
})

export { handlebars }
