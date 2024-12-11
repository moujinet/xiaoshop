export default defineMiddleware((to) => {
  const { switchTo } = useWorkspace()

  switchTo(
    to.meta.workspace,
    to.meta.module,
  )
})
