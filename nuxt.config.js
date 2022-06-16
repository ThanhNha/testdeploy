import site from './config/site.json'

const API_URL = process.env.API_URL || 'https://api.rangdongstore.vn'

export default {
  target: 'static',

  head: {
    title: 'RalliSmart - Bước đầu cho cuộc sống thông minh',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover, user-scalable=0',
      },

      {
        hid: 'robots',
        name: 'robots',
        content: process.env.IS_PRODUCTION ? 'index' : 'noindex',
      },
      {
        hid: 'description',
        name: 'description',
        content: site.SITE_DESCRIPTION,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: site.SITE_TITLE,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: site.SITE_DESCRIPTION,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: site.BASE_URL + site.SITE_COVER,
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: site.SITE_TITLE,
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: site.SITE_NAME,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: site.SITE_TITLE,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: site.SITE_DESCRIPTION,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: site.BASE_URL + site.SITE_COVER,
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: site.BASE_URL + site.SITE_COVER,
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: site.SITE_TITLE,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  router: {
    extendRoutes: (routesIn) => {
      routesIn.forEach((route) => {
        switch (route.name) {
          case 'index':
            route.path = '/'
            break

          case 'welcome':
            route.path = '/welcome'
            break

          case 'blog':
            route.path = '/tin-tuc'
            break

          case 'blog-nested':
            route.path = '/tin-tuc/:nested'
            break

          case 'blog-slug':
            route.path = '/:slug'
            break

          case 'faq':
            route.path = '/cau-hoi-thuong-gap'
            break

          case 'faq-slug':
            route.path = '/cau-hoi-thuong-gap/:slug'
            break

          case 'suggest':
            route.path = '/goi-y-thiet-ke'
            break

          case 'suggest-slug':
            route.path = '/goi-y-thiet-ke/:slug'
            break

          case 'contact':
            route.path = '/dang-ky-tu-van'
            break

          case 'contact-success':
            route.path = '/cam-on'
            break

          case 'smart-home':
            route.path = '/smart-home'
            break

          case 'smart-kit':
            route.path = '/smart-kit'
            break

          case 'smart-local':
            route.path = '/smart-local'
            break

          case 'smart-office':
            route.path = '/smart-office'
            break

          case 'vlog':
            route.path = '/vlog'
            break

          case 'wiki-app':
            route.path = '/wiki-app'
            break

          case 'wiki':
            route.path = '/wiki-app'
            break

          default:
            break
        }
      })
      return routesIn
    },
  },

  plugins: [
    '@/plugins/api.js',
    '@/plugins/jsonld',
    '@/plugins/vue-observe-visibility.client.js',
    '@/plugins/filter.js',
    {
      src: '@/plugins/nuxt-swiper-plugin.client.js',
      ssr: false,
    },
    '@/plugins/helper',
  ],

  axios: {
    baseUrl: API_URL,
    credentials: true,
  },

  components: {
    dirs: [
      '~/components',
      {
        path: '~/components/jam/',
        prefix: 'J',
      },
      {
        path: '~/components/icons/',
        prefix: 'I',
      },
    ],
  },

  buildModules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/svg'],

  modules: [
    'nuxt-i18n',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
  ],

  tailwindcss: {
    cssPath: '~/assets/scss/global.scss',
    configPath: '~/config/tailwind.js',
    viewer: false,
  },

  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
      '3xl': 1920,
    },
  },

  pwa: {
    manifest: {
      name: 'Rallismart',
      lang: 'vi',
      useWebmanifestExtension: false,
      theme_color: '#2FB689',
    },
    icon: {
      fileName: 'icon-pwa.png'
    }
  },

  content: {
    liveEdit: false,
  },

  sitemap: {
    hostname: site.BASE_URL,
    path: '/sitemap.xml',
    cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: true,
    gzip: true,
  },

  googleAnalytics: {
    id: site.GOOGLE_ANALYTICS_ID,
  },

  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const slugify = function (str, separator) {
          str = str
            .toLowerCase()
            .replace(/\t/g, '')
            .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
            .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
            .replace(/ì|í|ị|ỉ|ĩ/g, 'i')
            .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
            .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
            .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
            .replace(/đ/g, 'd')
            .replace(/\s+/g, '-')
            .replace(/[^A-Za-z0-9_-]/g, '')
            .replace(/-+/g, '-')

          if (separator) {
            return str.replace(/-/g, separator)
          }
          return str
        }

        document.slug = document.custom_slug || slugify(document.title)
      }
    },
  },

  build: {
    babel: {
      plugins: [
        [
          '@babel/plugin-proposal-private-methods',
          {
            loose: true,
          },
        ],
      ],
    },
  },
}
