<template>
  <div class="md:h-[400px]">
    <div class="relative flex flex-col items-center w-max ml-[78px]">
      <div
        class="bg-no-repeat bg-contain buld"
        :style="{
          backgroundImage: `url(${require(open
            ? '../static/images/welcome/light-on.png'
            : '../static/images/welcome/light-off.png')})`,
        }"
      ></div>
      <div class="flex items-center space-x-[12px] text-white">
        <div class="hidden md:block">Tắt đèn</div>
        <label class="switch">
          <input v-model="open" class="switch__input" type="checkbox" />
          <span class="switch__span"></span>
        </label>
        <div class="hidden md:block">Bật đèn</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.buld {
  @apply w-[200px] h-[200px] pointer-events-none;
  transition: 0.6s;
  background: url('../static/images/welcome/light-off.png');
}
@screen md {
  .buld {
    @apply w-[330px] h-[330px] pointer-events-none;
    transition: 0.6s;
  }
}

.switch input:checked ~ .buld {
  @apply w-[200px] h-[200px];
  background: url('../static/images/welcome/light-on.png');
}

input:checked {
  .switch & {
    background: linear-gradient(89.92deg, #07bd89 2.93%, #006e8c 51.07%, #013a46 99.92%);
  }
}

@screen md {
  .switch input:checked ~ .buld {
    @apply w-[330px] h-[330px];
  }
}
.switch {
  @apply border border-white relative w-[56px] h-[30px] md:w-[60px] md:h-[34px] bg-gray-300 rounded-full cursor-pointer z-[100];
  &__span {
    @apply absolute top-1/2 -translate-y-1/2 left-[2px] w-[24px] h-[24px] md:w-[28px] md:h-[28px] bg-white rounded-full  z-[100];
    transition: 0.5s;
  }
}

.switch input:checked ~ span {
  @apply left-[28px];
}
input:checked ~ .switch {
  background: linear-gradient(89.92deg, #07bd89 2.93%, #006e8c 51.07%, #013a46 99.92%);
}

input {
  @apply hidden;
}
</style>
