<template>
  <div class="relative wrapper">
    <div class="animated-circle-text">
      <svg viewBox="0 0 244.1 244.1">
        <path
          id="circlePath"
          d="M226.6,122.1c0,57.7-46.8,104.5-104.5,104.5S17.6,179.8,17.6,122.1S64.4,17.6,122.1,17.6
        S226.6,64.4,226.6,122.1z"
          fill="transparent"
        />
        <text>
          <textPath xlink:href="#circlePath">Tư vấn liên hệ &emsp; Tư vấn liên hệ</textPath>
        </text>
      </svg>
    </div>
    <div class="absolute">
      <NuxtLink
        :to="{ name: 'contact' }"
        class="w-[100px] h-[100px] md:w-[60px] md:h-[60px] lg:w-[106px] lg:h-[106px] rounded-full bg-white flex items-center justify-center box-style cursor-pointer"
      >
        <div class="font-bold text-blue-100">Hỗ trợ</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.animated-circle-text {
  width: 170px;
  height: 170px;
  overflow: hidden;
  position: relative;
}
.animated-circle-text svg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  animation-name: rotate;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.animated-circle-text text {
  @apply uppercase font-bold font-display text-[1rem];
  fill: white;
}
.animated-circle-text text textPath {
  letter-spacing: 10px;
}

@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.box-style {
  box-sizing: border-box;
  box-shadow: 0px 1px 17px rgba(0, 242, 254, 0.85);
  backdrop-filter: blur(10px);
}
</style>
