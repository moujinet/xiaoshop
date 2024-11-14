export const defaultConfig: IConfig = {
  projectRoot: './',
  cacheRoot: '.cache',

  migration: {
    tablePrefix: 'xiaoshop_',
    migrations: '{{ NESTJS_ROOT }}/src/migrations',
    typeorm: '{{ NESTJS_ROOT }}/scripts/typeorm.js',
    datasource: '{{ NESTJS_ROOT }}/src/config/datasource.ts',
  },

  region: {
    cacheDir: '{{ CACHE_ROOT }}/region',
    outputDir: '{{ ADMIN_ROOT }}/public/assets/json',
  },

  alias: {
    ADMIN_ROOT: 'apps/admin',
    WEB_ROOT: 'apps/web',
    MP_ROOT: 'apps/mp',
    CLI_ROOT: 'packages/cli',
    SHARED_ROOT: 'packages/shared',
    UI_ROOT: 'packages/ui',
    NESTJS_ROOT: 'services/nestjs',
  },
}
