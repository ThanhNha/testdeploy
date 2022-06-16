<template>
  <div
    class="cursor-pointer fixed lg:bottom-[156px] md:bottom-[234px] md:right-[2px] bottom-[80px] lg:right-[24px] right-0 z-[90] shadow-style bg-white rounded-full md:w-[48px] w-[37px] md:h-[48px] h-[37px] flex items-center justify-center hover:bg-green-100 duration-200 text-[#1E2E7B] hover:text-white max-md:right-[5px]"
    id="backTop"
    @click="backToTop()"
    v-if="isTop && !isNotShow"
  >
    <JIcon name="arrow-up" class="max-md:h-[20px]" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isTop: false,
    }
  },
  mounted() {
    const self = this
    window.addEventListener('scroll', function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 700) {
        self.isTop = true
      } else {
        self.isTop = false
      }
    })
  },
  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
  computed: {
    isNotShow() {
      if (this.$route.name) {
        return (
          this.$route.name.startsWith('account') ||
          this.$route.name.startsWith('order') ||
          this.$route.name.startsWith('cart')
        )
      }
      return false
    },
  },
}
</script>
<style lang="scss" scoped>
.shadow-style {
  box-shadow: 0px 4px 20px rgba(4, 216, 155, 0.4);
}
</style>
