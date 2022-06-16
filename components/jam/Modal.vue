<template>
  <transition leave-active-class="duration-200">
    <div v-show="show" class="fixed inset-0 z-[100] px-4 py-6 overflow-y-auto sm:px-0">
      <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="opacity-100"
        enter-to-class="opacity-100"
        leave-active-class="duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-100"
      >
        <div v-show="show" class="fixed inset-0 transition-all transform" @click="close">
          <div class="absolute inset-0 bg-gray-800 opacity-50"></div>
        </div>
      </transition>

      <transition
        enter-active-class="duration-300 ease-out"
        enter-from-class="opacity-0 "
        enter-to-class="opacity-100 "
        leave-active-class="duration-200 ease-in"
        leave-from-class="opacity-100 "
        leave-to-class="opacity-0 "
      >
        <div
          v-show="show"
          class="absolute transition-all transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        >
          <div class="transform px-[16px]">
            <div class="ml-auto cursor-pointer w-max md:text-white" @click="close">
              <JIcon name="close" class="w-[32px] h-[32px] md:w-auto md:h-auto" />
            </div>
            <div
              class="overflow-y-scroll rounded-[18px] w-[95vw] md:w-[80vw] bg-white lg:py-[54px] md:py-[38px] py-[27px] px-[14px] mx-auto max-h-[80vh] disable-scroll"
            >
              <slot></slot>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
    },
    maxWidth: {
      default: '2xl',
    },
  },

  computed: {
    maxWidthClass() {
      return {
        sm: 'sm:max-w-sm',
        md: 'sm:max-w-md',
        lg: 'sm:max-w-lg',
        xl: 'sm:max-w-xl',
        '2xl': 'sm:max-w-2xl',
      }[this.maxWidth]
    },
  },

  mounted() {
    if (this.show) {
      document.body.style.height = '100vh'
      document.body.style.overflowY = 'hidden'
    }
    document.addEventListener('keydown', this.closeOnEscape)
  },
  destroyed() {
    document.removeEventListener('keydown', this.closeOnEscape)
    document.body.style.overflow = ''
  },

  methods: {
    close() {
      this.$emit('close')
      document.body.style.overflowY = 'scroll'
      document.body.style.height = 'auto'
    },
    closeOnEscape(e) {
      if (e.key === 'Escape' && this.show) {
        this.close()
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.disable-scroll::-webkit-scrollbar {
  display: none;
}
.disable-scroll {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.bg-overlay {
  background: rgba(1, 39, 43, 0.78);
}
</style>
