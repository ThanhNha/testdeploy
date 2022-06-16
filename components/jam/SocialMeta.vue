<template>
  <span v-if="false" />
</template>

<script>
import site from '@/config/site.json'

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
    capitalize: {
      type: Boolean,
      default: true,
    },
    capitalize: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    titleCapitalize() {
      return this.capitalize ? this.capitalizeText(this.title) : this.title
    },
    imageCover() {
      return this.image
        ? `https://jamstackvietnam.com${this.image}`
        : 'https://jamstackvietnam.com/cover.jpg'
    },
  },

  methods: {
    capitalizeText(string) {
      return string
        .toLowerCase()
        .replace(/(?:^|\s)\S/g, function (a) {
          return a.toUpperCase()
        })
        .replace('Jamstack', 'JAMstack')
    },
  },

  head() {
    return {
      title: this.titleCapitalize,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.titleCapitalize,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.imageCover,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.titleCapitalize,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.titleCapitalize,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.imageCover,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.imageCover,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.titleCapitalize,
        },
      ],
    }
  },

  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@type': 'Organization',
      name: site.SITE_NAME,
      description: this.description,
      url: site.BASE_URL,
      image: site.BASE_URL + site.SITE_COVER,
      logo: `${site.BASE_URL}${site.SITE_LOGO}`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: site.SITE_HOTLINE,
        contactType: 'Customer service',
      },
      sameAs: Object.values(site.SOCIAL_LINKS),
    }
  },
}
</script>
