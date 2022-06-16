<template>
  <div>
    <div
      :id="`link_${item.id}`"
      v-for="(item, index) in listClass"
      :key="index"
      @click="clickMenu(item.id)"
    >
      <GradientLoader :number="item.id" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listClass: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
      ],
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

<style lang="scss" scoped></style>
