export default defineMiddleware((to) => {
  const app = useApp()

  app.setWorkspaceModule(
    to.meta.workspace,
    to.meta.module,
  )
})
