module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'mycloud1',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '주식을 배워보자' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },{rel: "stylesheet",href:"https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css"}
    ],
    script:[
    {
      defer:"",
      src:"https://use.fontawesome.com/releases/v5.15.3/js/all.js"
    }
    
  ]
  },
  /*    
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

