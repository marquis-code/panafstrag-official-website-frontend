const axios = require("axios");
require("dotenv").config();
// import axios from 'axios'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  routes: () => {
    return axios.get(`my.own.api.com/getSitemapRoutes`);
  },
  exclude: ["catalog/", "blog-*/", "*.html"],
  head: {
    title: "Original thinking, research help add to human knowledge",
    titleTemplate: "PANAFSTRAG | %s",
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
      { hid: "twitter:site", name: "twitter:site", content: "@panafstrag" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://panafstrag.netlify.app/",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "PANAFSTRAG official website",
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
        content: "https://panafstrag.netlify.app/",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "PANAFSTRAG official website",
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
        href: `https://panafstrag.netlify.app/`,
      },
      {
        rel: "stylesheet",
        href: 'https://fonts.googleapis.com/css?family=Oxygen&display=swap"',
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  },
  bootstrapVue: {
    icons: true,
    bootstrapCSS: true, // here you can disable automatic bootstrapCSS in case you are loading it yourself using sass
    bootstrapVueCSS: true, // CSS that is specific to bootstrapVue components can also be disabled. That way you won't load css for modules that you don't use
    componentPlugins: [], // Here you can specify which components you want to load and use
    directivePlugins: [], // Here you can specify which directives you want to load and use. Look into official docs to get a list of what's available
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/main.css",
    "@/assets/scss/custom.scss",
    "node_modules/lite-youtube-embed/src/lite-yt-embed.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/bootstrap-vue.client",
    "~/plugins/youtube.client.js",
    { src: "~/plugins/vue-datepicker", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "vue-ssr-carousel/nuxt",
    "@nuxtjs/google-analytics",
    "@nuxtjs/moment",
    "@nuxt/image",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: true,
          "Josefin+Sans": true,
          Lato: [100, 300],
          Raleway: {
            wght: [100, 400],
            ital: [100],
          },
        },
      },
    ],
  ],
  googleAnalytics: {
    id: "UA-4362322022",
    // dev: false,
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
  webfontloader: {
    google: {
      families: ["Lato:400,700"], //Loads Lato font with weights 400 and 700
    },
  },
  maintenance: {
    enabled: !!process.env.MAINTENANCE_MODE, // If given truthy value, activate maintenance mode on startup
    path: "/maintenance", // maintenance fallback content routing
    matcher: /^\/user/, // Path to be in maintenance mode (regex)
  },
  toast: {
    position: "top-center",
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/toast",
    ["@nuxtjs/dotenv"],
    "nuxt-webfontloader",
    "nuxt-maintenance-mode",
    [
      "nuxt-sweetalert2",
      {
        confirmButtonColor: "#000000",
      },
    ],
    [
      "nuxt-imagemin",
      {
        optipng: { optimizationLevel: 5 },
        gifsicle: { optimizationLevel: 2 },
      },
    ],
    // [
    //   "nuxt-social-meta",
    //   {
    //     title:
    //       "Pan Africa | Original thinking, research help add to human knowledge",
    //     description:
    //       "Pan Africa, Original thinking, research help add to human knowledge",
    //     url: "https://www.panafrica.org",
    //     img: "/static/panafricalogo.png",
    //     locale: "en-US",
    //     twitter: "@panafrica",
    //     themeColor: "#1B2432",
    //   },
    // ],
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/sitemap",
    "@nuxtjs/auth",
    // "@nuxtjs/i18n",
  ],
  moment: {
    timezone: true,
  },

  sweetalert: {
    confirmButtonColor: "#41b882",
    cancelButtonColor: "#ff7674",
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "https://panafstrag.onrender.com/api",
  },

  sitemap: {
    hostname: "https://panafstrag.netlify.app/",
    exclude: ["/admin/**", "/admin", "/login"],
    routes: async () => {
      let baseURL = "https://panafstrag.onrender.com/api";
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
      author: "panafstrag website",
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
    middleware: ["auth"],
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
  build: {
    babel: {
      compact: true,
    },
    // extend(config, ctx) {
    //   if (ctx.isClient) {
    //     config.resolve.alias["vue$"] = "vue/dist/vue.esm.js";
    //   }
    // },
  },
  generate: {
    fallback: true,
  },
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
