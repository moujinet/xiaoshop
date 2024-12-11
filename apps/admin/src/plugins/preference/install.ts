export default definePlugin(
  () => {
    const html = document.documentElement

    watchEffect(() => {
      const accent = usePreference('interface.accent')
      html.style.setProperty('--accent', accent.value)
    })
  },
)
