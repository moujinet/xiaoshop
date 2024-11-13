import type { IModuleMenuDefinition } from './menu'

export type IModuleInstaller = () => void

export interface IModule {
  id: string
  space: string
  name: string
  desc: string
  icon: string
  path: string
  version: string
  sort: number
}

export type IModuleDefinition = Omit<
  Partial<IModule>,
  | 'id'
  | 'space'
  | 'name'
> & {
  id: string
  space: string
  name: string
  menus?: IModuleMenuDefinition[]
  setup?: () => IModuleInstaller
}

/**
 * 定义模块
 */
export function defineModule(definition: IModuleDefinition): IModuleInstaller {
  if (!definition.id || !definition.id.trim())
    throw new Error('模块 ID 不能为空')

  if (!definition.space || !definition.space.trim())
    throw new Error('模块空间不能为空')

  if (!definition.name || !definition.name.trim())
    throw new Error('模块名称不能为空')

  return () => {
    const { load } = useSpace()

    const newModule = load(definition.space.trim(), definition)
    const metadata = useMetaData()

    metadata.push({
      id: newModule.id,
      space: newModule.space,
      name: newModule.name,
    })

    if (definition.menus && definition.menus.length) {
      const moduleMenu = useModuleMenu()

      moduleMenu.load(
        definition.menus,
        newModule.space,
        newModule.id,
      )
    }

    if (definition.setup)
      definition.setup()
  }
}

/**
 * 加载所有模块
 */
export function loadModules() {
  const modules = import.meta.glob<IModuleInstaller>('~/modules/**/install.ts', {
    eager: true,
    import: 'default',
  })

  for (const module of Object.values(modules)) {
    module()
  }
}
