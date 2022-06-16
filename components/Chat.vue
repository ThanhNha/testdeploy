<template>
  <a
    href="https://www.messenger.com/t/210447577069458"
    target="_blank"
    class="fixed lg:right-[24px] right-[5px] z-[100] lg:bottom-[56px] bottom-[30px] block max-md:max-w-[37px]"
  >
    <JIcon name="chat" class="hidden md:block" />
    <JPicture src="/images/messager.png" class="block md:hidden" />
  </a>
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
}
</script>
