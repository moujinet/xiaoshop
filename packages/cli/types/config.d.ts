declare interface IConfig {
  /**
   * 项目根目录 {{ PROJECT_ROOT }}
   */
  projectRoot: string
  /**
   * 缓存根目录 {{ CACHE_ROOT }}
   */
  cacheRoot: string
  /**
   * TypeORM 迁移配置
   */
  migration: IConfigMigration
  /**
   * 省市地区字典生成配置
   */
  region: IConfigRegion
  /**
   * 路径别名
   */
  alias: IConfigAlias
}

declare interface IConfigMigration {
  /**
   * 自定义 TypeORM 命令行路径
   */
  typeorm: string
  /**
   * TypeORM 数据源配置
   */
  datasource: string
  /**
   * TypeORM 数据迁移文件目录
   */
  migrations: string
  /**
   * TypeORM 表前缀
   */
  tablePrefix: string

  [key: string]: string
}

declare interface IConfigRegion {
  /**
   * 缓存目录
   */
  cacheDir: string
  /**
   * 输出目录
   */
  outputDir: string

  [key: string]: string
}

declare interface IConfigAlias {
  [key: string]: string
}
