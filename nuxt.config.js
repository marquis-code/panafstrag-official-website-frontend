const axios = require("axios");
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  routes: () => {
    return axios.get(`my.own.api.com/getSitemapRoutes`);
  },
  exclude: ["catalog/", "blog-*/", "*.html"],
  head: {
    title: "Original thinking, research help add to human knowledge",
    titleTemplate: "Pan Africa | %s",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content:
          "PANAFSTRAG was founded in 1992 to provide an in-depth study and analyses of the challenges of political stability, safety and development in Africa and propose policy options and strategies for these issues while synergizing the potentials of its Diaspora for executing these policies.",
      },

      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      { hid: "twitter:site", name: "twitter:site", content: "@panafrica" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://panafrica.netlify.app/",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Pan Africa official website",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "Original thinking, research help add to human knowledge",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content:
          "https://res.cloudinary.com/marquis/image/upload/v1668940037/enagoshtazxadezqqjrj.png",
      },

      { hid: "og:site_name", property: "og:site_name", content: "PANAFSTRAG" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://panafrica.netlify.app/",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Pan Africa official website",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "PANAFSTRAG was founded in 1992 to provide an in-depth study and analyses of the challenges of political stability, safety and development in Africa and propose policy options and strategies for these issues while synergizing the potentials of its Diaspora for executing these policies.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://res.cloudinary.com/marquis/image/upload/v1668940037/enagoshtazxadezqqjrj.png",
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content:
          "https://res.cloudinary.com/marquis/image/upload/v1668940037/enagoshtazxadezqqjrj.png",
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "PANAFSTRAG",
      },
    ],
    // canonical
    link: [
      {
        hid: "canonical",
        rel: "canonical",
        href: `https://panafrica.netlify.app/`,
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/main.css",
    "@/assets/scss/custom.scss",
    "node_modules/lite-youtube-embed/src/lite-yt-embed.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/bootstrap.js", "~/plugins/youtube.client.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "vue-ssr-carousel/nuxt",
    "@nuxtjs/google-analytics",
    "@nuxt/image",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "bootstrap-vue/nuxt",
    "@nuxtjs/sitemap",
    "@nuxtjs/auth",
    // "@nuxtjs/i18n",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "https://panafrica-website.herokuapp.com/api",
  },

  sitemap: {
    hostname: "https://panafrica.netlify.app/",
    exclude: ["/admin/**", "/admin"],
    routes: async () => {
      let baseURL = "https://panafrica-website.herokuapp.com/api";
      let { data } = await axios.get(`${baseURL}/panAfrica/board-member`);
      return data.map((eachBoardMember) => `/watch/${eachBoardMember._id}`);
    },
    path: "/sitemap.xml",
    cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: true,
    gzip: true,
    defaults: {
      changefreq: "daily",
      priority: 1,
      lastmod: new Date(),
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: "PANAFSTRAG",
      author: "marquis-codes",
    },
    manifest: {
      name: "PANAFSTRAG",
      short_name: "panafstrag.org",
      description: "PANAFSTRAG official website",
      lang: "en",
      theme_color: "#000000",
      background_color: "#000000",
      orientation: "portrait",
      display: "standalone",
    },
    icon: {
      filename: "panaafricalogo.png",
    },
  },
  googleAnalytics: {
    id: "G-02WFDSB2TF",
  },
  serverMiddleware: [{ path: "/", handler: "~/servermiddleware/seo.js" }],
  router: {
    middleware: ["myMiddleware"],
  },

  // layoutTransition: {
  //   name: "fade",
  //   mode: "out-in",
  // },

  // pageTransition: {
  //   name: "fade",
  //   mode: "in-out",
  //   appear: true,
  // },
  bootstrapVue: {
    bootstrapCSS: false,
    icons: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  env: {
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  auth: {
    localStorage: false,
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/admin/signin",
            method: "post",
            propertyName: "accessToken",
          },
          logout: false,
          user: false,
        },
        tokenType: "Bearer",
        tokenName: "authorization",
        autoFetchUser: false,
      },
    },
  },
};
