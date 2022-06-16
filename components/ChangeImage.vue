<template>
  <div class="relative getHeightSection">
    <transition :name="moments[momentsindex].name">
      <img
        v-bind:src="moments[momentsindex].image"
        v-bind:key="moments[momentsindex].id"
        class="image"
        :class="stopFade ? 'stop-fade' : ''"
      />
    </transition>

    <div class="absolute z-50 top-[290px] md:top-0 left-0 w-full h-[50vh] md:h-full">
      <div class="container relative h-full">
        <div class="hidden md:grid grid-cols-12 gap-x-[32px]">
          <div class="col-span-6 col-start-4">
            <div class="pt-[66px]">
              <div class="bg-filter-circle max-w-[664px] max-h-[198px] rounded-[50%]"></div>
              <div class="relative z-[2] flex flex-col items-center justify-center">
                <div class="text-blue-100 uppercase h2">Tận hưởng</div>
                <div class="font-bold uppercase h2 text-linear-2 my-[4px]">Từng khoảng khắc</div>
                <div class="max-w-[366px] w-full h-[4px] bg-line-green-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="md:absolute left-0 bottom-[32px] w-full">
          <div class="hidden md:flex items-center justify-center space-x-[19px]">
            <div
              class="border border-white rounded-[20px] box-style max-w-[156px] max-h-[180px] w-full h-full flex flex-col items-center justify-center py-[19px] cursor-pointer"
              v-for="(moment, index) in moments"
              :key="index"
              @mouseover="getCurrentMoment(index)"
              @mouseleave="stopFade = false"
              :class="moments[momentsindex].id === index + 1 ? 'active' : ''"
            >
              <div class="mt-[8px] flex items-center justify-center">
                <div v-if="moments[momentsindex].id === index + 1">
                  <JIcon :name="moment.iconActive" class="w-[48px] h-[48px]" />
                </div>
                <div v-else>
                  <JIcon :name="moment.icon" class="w-[48px] h-[48px] text-white" />
                </div>
              </div>
              <div></div>
              <div class="font-bold text-center caption" v-html="moment.title"></div>
            </div>
          </div>
          <div class="md:hidden grid grid-cols-2 gap-x-[8px] gap-y-[16px]">
            <div
              class="border border-white rounded-[20px] box-style w-full h-full flex flex-col items-center justify-center p-[12px] cursor-pointer"
              v-for="(moment, index) in moments"
              :key="index"
              @click="getCurrentMoment(index)"
              :class="moments[momentsindex].id === index + 1 ? 'active' : ''"
            >
              <!-- <div
                v-if="moments[momentsindex].id === index + 1"
                class="mt-[8px] flex items-center justify-center"
              >
                <JIcon :name="moment.iconActive" class="w-[48px] h-[48px]" />
              </div> -->
              <div class="flex items-center justify-center text-black">
                <JIcon :name="moment.icon" class="w-[48px] h-[48px]" />
              </div>
              <div></div>
              <div class="font-bold text-center caption" v-html="moment.title"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      momentsindex: 0,
      stopFade: false,
      moments: [
        {
          id: 1,
          icon: 'moon',
          name: 'slide-fade',
          iconActive: 'moon-active',
          title: 'Chăm sóc <br/> giấc ngủ',
          image: '/images/home/cham-soc-giac-ngu.jpg',
          duration: 3500,
        },
        {
          id: 2,
          icon: 'sun',
          name: 'slide-fade',
          iconActive: 'sun-active',
          title: 'Sinh hoạt <br/> hằng ngày',
          image: '/images/home/sinh-hoat-hang-ngay.jpg',
          duration: 3500,
        },
        {
          id: 3,
          icon: 'relax-person',
          name: 'slide-fade',
          iconActive: 'relax-person-active',
          title: 'Thư giãn <br/> nghỉ ngơi',
          image: '/images/home/thu-gian-nghi-ngoi.jpg',
          duration: 3500,
        },
        {
          id: 4,
          icon: 'working',
          name: 'slide-fade',
          iconActive: 'working-active',
          title: 'Học tập <br/> làm việc',
          image: '/images/home/hoc-tap-lam-viec.jpg',
          duration: 3500,
        },
      ],
    }
  },

  mounted() {
    if (this.stopFade) {
      this.getCurrentMoment(this.momentsindex)
    } else {
      setInterval(() => {
        this.textRotate()
      }, this.moments[this.momentsindex].duration)
    }
  },

  methods: {
    getCurrentMoment(idx) {
      this.momentsindex = idx
      this.stopFade = true
    },
    textRotate() {
      if (this.stopFade) {
        return
      }
      this.momentsindex += 1
      if (this.momentsindex >= this.moments.length) {
        this.momentsindex = 0
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.getHeightSection {
  @apply h-[600px] md:h-[488px] lg:h-[650px];
  @screen xl {
    height: calc(100vh - var(--header-height-lg));
  }
}
img {
  width: 100%;
  height: auto;
  display: block;
  position: absolute;
}

/* prefix with transition name */
.slide-fade-enter-active {
  opacity: 1;
  z-index: 10;
}

.slide-fade-leave-active {
  opacity: 1;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 1;
}
.active {
  @apply bg-white max-md:border-green-50;
  box-sizing: border-box;
}
.stop-fade .slide-fade-enter,
.stop-fade .slide-fade-leave-to,
.stop-fade .slide-fade-enter-active,
.stop-fade .slide-fade-leave-active {
  opacity: 1;
  -webkit-transition: none;
  transition: none;
}

.bg-filter-circle {
  @apply absolute w-full h-full z-[1];
  background: rgba(255, 255, 255, 0.9);
  filter: blur(50px);
  transform: matrix(1, 0, 0, 1, 0, 0);
}
</style>
