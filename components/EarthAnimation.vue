<template>
  <div class="floating">
    <div class="bg-circle-green w-[750px] md:w-[630px] mx-auto">
      <div class="select-none element-1 block">
        <div class="rotating">
          <JPicture src="/images/welcome/earth.png" class="picture-cover h-[626px]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@screen md {
  .bg-circle-green {
    &::before {
      content: ' ';
      background: radial-gradient(
        82.47% 1085.23% at 51.44% 60.17%,
        #03eeab 0%,
        #07bd89 11.37%,
        #047898 37.44%,
        #011372 76.3%,
        #03272f 100%
      );
      filter: blur(500px);
      @apply w-[771px] h-[771px] z-[-1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
    }
    @apply relative z-10;
  }
}
.element-1 {
  left: 2vw;
  top: 33%;
}

.rotating {
  -webkit-animation: rotating 88s linear infinite;
}

.floating {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}

@-webkit-keyframes rotating {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
