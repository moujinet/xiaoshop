export default defineMiddleware((to) => {
  const APP_NAME = import.meta.env.VITE_APP_NAME

  useHead({
    title: to.meta.desc
      ? `${to.meta.desc} | ${APP_NAME}`
      : to.meta.name
        ? `${to.meta.name} | ${APP_NAME}`
        : APP_NAME,
  })
})
