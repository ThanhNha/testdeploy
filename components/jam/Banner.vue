<template>
  <section class="w-full" :class="className">
    <img :src="img" class="w-full h-full object-cover max-h-screen" />
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    pageName() {
      return this.$route.name.replace('___' + this.$i18n.locale, '')
    },
  },
}
</script>
