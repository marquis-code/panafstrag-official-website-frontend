import axios from "axios";
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  routes: () => {
    return axios.get(`my.own.api.com/getSitemapRoutes`);
  },
  exclude: ["catalog/", "blog-*/", "*.html"],

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Pan Africa",
    title: "Original thinking, research help add to human knowledge",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "vue-ssr-carousel/nuxt",
    "@nuxtjs/google-analytics",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // "@nuxtjs/sitemap",
    // "@nuxtjs/i18n",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  googleAnalytics: {
    id: "G-02WFDSB2TF",
  },
  serverMiddleware: [{ path: "/", handler: "~/servermiddleware/seo.js" }],
  router: {
    middleware: ["myMiddleware"],
  },
  // i18n: {
  //   locales: ["en", "fr", "es"],
  //   defaultLocale: "en",
  //   vueI18n: {
  //     fallbackLocale: "en",
  //     messages: {
  //       en: {
  //         welcome: "Welcome",
  //       },
  //       fr: {
  //         welcome: "Bienvenue",
  //       },
  //       es: {
  //         welcome: "Bienvenido",
  //       },
  //     },
  //   },
  // },
  layoutTransition: {
    name: "fade",
    mode: "out-in"
  },
  /* Page Transitions */
  pageTransition: {
    name: "fade",
    mode: "in-out",
    appear: true,
},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
