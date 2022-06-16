<template>
  <div class="flex flex-col space-y-[14px]">
    <div :id="`link_${item.id}`" v-for="(item, index) in listClass" :key="index" class="navigation">
      <div class="relative cursor-pointer" @click="clickMenu(item.id)">
        <div class="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          class="absolute top-0 left-0 caption text-white flex items-center justify-center w-full h-full"
        >
          <!-- {{ index + 1 }} -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listClass: [],
      current: 0,
    }
  },
  mounted() {
    const self = this
    self.listClass = document.querySelectorAll('.section')
    window.addEventListener('scroll', function () {
      self.scrollPage()
    })
    self.$nextTick(function () {
      self.setCurrentMenu()
    })
  },
  methods: {
    clickMenu(id) {
      var offsetTop = document.getElementById(id).offsetTop
      this.scrollTo(offsetTop, 2000, this.easeOutCubic, function () {})
      this.current = id
    },
    easeOutCubic: function (t) {
      return --t * t * t + 1
    },
    scrollTo(Y, duration, easingFunction, callback) {
      var start = Date.now(),
        elem = document.documentElement ? document.documentElement : document.body,
        from = elem.scrollTop
      if (from === Y) {
        callback()
        return /* Prevent scrolling to the Y point if already there */
      }
      function min(a, b) {
        return a < b ? a : b
      }
      function scroll(timestamp) {
        var currentTime = Date.now(),
          time = min(1, (currentTime - start) / duration),
          easedT = easingFunction(time)
        elem.scrollTop = easedT * (Y - from) + from
        if (time < 1) requestAnimationFrame(scroll)
        else if (callback) callback()
      }
      requestAnimationFrame(scroll)
    },
    scrollPage() {
      var scrollDistance = document.documentElement.scrollTop
      if (document.querySelectorAll('.section').length > 0) {
        document.querySelectorAll('.section').forEach((element, index) => {
          let scrollDistanceValue = scrollDistance + screen.height / 2
          if (element.clientHeight < screen.height) {
            scrollDistanceValue = scrollDistance + element.clientHeight / 2
          }
          if (element.id === 'footer') {
            if (element.clientHeight > screen.height / 2) {
              scrollDistanceValue = scrollDistance + element.clientHeight
            } else {
              scrollDistanceValue =
                scrollDistance + screen.height / 2 + (screen.height / 2 - element.clientHeight + 20)
            }
          }
          if (element.offsetTop <= scrollDistanceValue) {
            if (
              document.querySelector('.navigation.active') !== null &&
              this.currentActive !== element.id
            ) {
              this.currentActive = element.id
            }
            if (document.querySelectorAll('.navigation')[index] !== null) {
              this.currentActive = element.id
            }
          }
        })
        let nextActiveId = 'link_' + this.currentActive
        let currentActiveElement = document.querySelector(
          '.navigation.active:not(#' + nextActiveId + ')'
        )
        currentActiveElement && currentActiveElement.classList.remove('active')
        if (this.currentActive) {
          document.getElementById(nextActiveId).classList.add('active')
        }
      }
    },
    setCurrentMenu() {
      this.scrollPage()
    },
  },
}
</script>

<style scoped lang="scss">
.loader {
  @apply relative w-[16px] h-[16px] rounded-full border-[1px] border-gray-600;
  background: rgba($color: #000000, $alpha: 1);
}
.active {
  .loader {
    @apply relative w-[16px] h-[16px] rounded-full border-none;
    background: radial-gradient(
      105.41% 449.53% at 10.53% 72.37%,
      rgba(59, 83, 230, 0.79) 3.03%,
      rgba(0, 151, 204, 0.79) 47.38%,
      rgba(104, 225, 62, 0.79) 100%
    );
    animation: animate 1.3s linear infinite;
    span {
      @apply absolute w-full h-full rounded-full;
      background: radial-gradient(
        105.41% 449.53% at 10.53% 72.37%,
        rgba(59, 83, 230, 0.79) 3.03%,
        rgba(0, 151, 204, 0.79) 47.38%,
        rgba(104, 225, 62, 0.79) 100%
      );
      &:nth-child(1) {
        filter: blur(5px);
      }
      &:nth-child(2) {
        filter: blur(10px);
      }
      &:nth-child(3) {
        filter: blur(25px);
      }
      &:nth-child(4) {
        filter: blur(50px);
      }
    }
    &::after {
      content: '';
      @apply absolute bg-[#000000] inset-[2px] rounded-full;
      opacity: 0.86;
    }
  }
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
