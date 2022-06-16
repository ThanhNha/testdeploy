<template>
  <div :class="{ 'menu-is-opened': menuIsOpened }">
    <JTheHeader />
    <Nuxt keep-alive />
    <JTheFooter />
    <Chat />
    <BackToTopButton />
  </div>
</template>

<script>
export default {
  name: 'default',
  computed: {
    menuIsOpened() {
      return this.$store.state.menu.isOpened
    },
  },
}
</script>

<style lang="scss" scoped>
@screen max-lg {
  .menu-is-opened {
    @apply fixed overflow-y-scroll w-full;
  }
}
</style>
