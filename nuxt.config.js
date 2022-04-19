import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#E24F55'
  },
  loading: { color: '#00CD81' },
  i18n: {
    locales: () => [{
      code: 'fr',
      iso: 'fr-FR',
      file: 'fr-FR.js',
      name: 'Français'
    }],
    defaultLocale: 'fr'
  },
  buildModules: [
    '@nuxt/image',
    '@nuxtjs/pwa',
  ],
  css: [
    './assets/css/global.css'
  ],
  pwa: {
    icon: {
         fileName: 'favicon.ico',
    },
  },
})