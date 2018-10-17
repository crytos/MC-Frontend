const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#fff" },

  /*
  ** Global CSS
  */
  css: ["~/assets/css/main.css", "~/assets/css/animate.css"],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // ssr: false to only include it on client-side
    { src: "~/plugins/scrollmagic.js", ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ["nuxt-sass-resources-loader", "@/assets/sass/main.scss"],
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt"
  ],

  /*
  ** Build configuration
  */
  build: {
    vendor: ["scrollmagic", "jump.js"],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  }
};
