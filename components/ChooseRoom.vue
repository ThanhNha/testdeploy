<template>
  <div class="relative h-[900px]">
    <transition :name="rooms[roomsindex].name">
      <img
        v-bind:src="rooms[roomsindex].image"
        v-bind:key="rooms[roomsindex].id"
        class="image"
        :class="stopFade ? 'stop-fade' : ''"
      />
    </transition>

    <div class="absolute z-50 top-0 left-0 w-full h-full">
      <div class="container relative h-full">
        <div class="grid grid-cols-12 gap-x-[32px]">
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
        <div class="absolute left-0 bottom-[32px] w-full">
          <div class="flex items-center justify-center space-x-[19px]">
            <div
              class="border border-white rounded-[20px] box-style max-w-[156px] max-h-[180px] w-full h-full flex flex-col items-center justify-center py-[19px] cursor-pointer"
              v-for="(room, index) in rooms"
              :key="index"
              :class="rooms[roomsindex].id === index + 1 ? 'active' : ''"
            >
              <div></div>
              <div class="font-bold text-center caption" v-html="room.title"></div>
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
      roomsindex: 0,
      stopFade: false,
      rooms: [
        {
          id: 1,
          title: 'Phòng khách',
          href: '',
          image: '/images/smart-home/living.jpg',
          name: 'slide-fade',
          enter: 'ease-out duration-300',
          out: 'ease-in duration-200',
          duration: 2000,
        },
        {
          id: 2,
          title: 'Phòng ngủ',
          href: '',
          image: '/images/smart-home/bed.jpg',
          name: 'slide-fade',
          enter: 'ease-out duration-300',
          out: 'ease-in duration-200',
          duration: 2000,
        },
        {
          id: 3,
          title: 'Phòng bếp',
          href: '',
          image: '/images/smart-home/kitchen.jpg',
          name: 'slide-fade',
          enter: 'ease-out duration-300',
          out: 'ease-in duration-200',
          duration: 2000,
        },
        {
          id: 4,
          title: 'Khu vực nhà vệ sinh',
          href: '',
          image: '/images/smart-home/bath.jpg',
          name: 'slide-fade',
          enter: 'ease-out duration-300',
          out: 'ease-in duration-200',
          duration: 2000,
        },
      ],
    }
  },

  mounted() {
    if (this.stopFade) {
      this.getCurrentRoom(this.roomsindex)
    } else {
      setInterval(() => {
        this.textRotate()
      }, this.moments[this.roomsindex].duration)
    }
  },
  methods: {
    getRoom(obj) {
      this.currentRoom = obj
      this.activeFade = !this.activeFade
    },

    textRotate() {
      this.roomsindex += 1
      if (this.roomsindex >= this.rooms.length) {
        this.roomsindex = 0
      }
    },
  },
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: auto;
  display: block;
  position: absolute;
  -webkit-transition: all 3s ease-out;
  transition: all 3s ease-out;
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
  opacity: 0;
}
.active {
  @apply bg-white;
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
</style>
