
const pkg = require("./package");
require("dotenv").config();
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
      { name: "msapplication-TileColor", content: "#da532c" },
      { name: "theme-color", content: "#ffffff" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [
    "~/assets/css/main.css",
    "~/assets/css/animate.css",
    "~/assets/css/responsive.css"
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // ssr: false to only include it on client-side
    { src: "~/plugins/client-plugins.js", ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",
    "@nuxtjs/dotenv"
  ],

  /*
   ** Build configuration
   */
  build: {
    vendor: ["jump.js", "sal.js", "vue-carousel", "axios", "swiper", "'~/assets/mylib.js'"],

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
