<template>
  <div class="hamburger h-[32px] w-[32px] flex items-center justify-center ml-auto xl:hidden">
    <div class="hamburger__icon xl:hidden h-[24px] w-[24px]" @click="toggle()">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({ toggle: 'menu/toggle' }),
  },
}
</script>

<style lang="scss" scoped>
.hamburger {
  &__icon {
    @apply flex flex-col justify-center cursor-pointer;

    div {
      width: 100%;
      height: 2px;
      margin-bottom: 3px;
      margin-top: 3px;
      @apply bg-white transition ease-out duration-200;
    }

    .menu-is-opened & {
      div {
        margin-bottom: 0;
        margin-top: 0;

        &:first-child {
          transform: translateY(calc(50% + 2px)) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
          width: 0px;
        }

        &:last-child {
          transform: translateY(calc(50% - 2px)) rotate(-45deg);
        }
      }
    }
  }
}
</style>
