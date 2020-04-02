
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      // <!-- Open Graph / Facebook -->
      { property:"og:type", content:"website" },
      { property:"og:url", content:"https://mercairun.netlify.com/" },
      { property:"og:title", content:"MERCAIRUN" },
      { property:"og:description", content:"MERCAIRUN - Reparto a domicilio durante la cuarentena." },
      { property:"og:image", content:"https://mercairun.netlify.com/icon.png" },

      // <!-- Twitter -->
      {property:"twitter:card", content:"summary_large_image"},
      {property:"twitter:url", content:"https://mercairun.netlify.com/"},
      {property:"twitter:title", content:"MERCAIRUN"},
      {property:"twitter:description", content:"MERCAIRUN - Reparto a domicilio durante la cuarentena."},
      {property:"twitter:image", content:"https://mercairun.netlify.com/icon.png"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
