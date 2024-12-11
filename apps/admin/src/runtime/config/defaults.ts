import type { IWorkspace } from '../workspace'

export const DEFAULT_WORKSPACE_ID = 'shop'

export const DEFAULT_WORKSPACES: IWorkspace[] = [
  { id: 'shop', name: '店铺', desc: '店铺管理', icon: 'store', sort: 1 },
  { id: 'app', name: '应用', desc: '应用管理', icon: 'classify-3', sort: 2 },
  { id: 'manage', name: '系统', desc: '系统管理', icon: 'settings-6', sort: 99 },
  { id: 'built-in', name: '', sort: 999, hidden: true },
]
