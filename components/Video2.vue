<template>
  <div class="relative">
    <div class="max-h-[810px] w-full">
      <video
        id="video2"
        width="100%"
        height="100%"
        :autoplay="false"
        poster="/images/video-2.jpg"
        :controls="isPlay2"
        playsinline
        loop
        class="object-cover object-center video max-h-[810px] w-full"
        @click="functionPauseVideo2()"
      >
        <source :src="video" type="video/mp4" />
      </video>
    </div>
    <button
      class="absolute text-white transition-all duration-300 ease-in-out transform -translate-x-1/2 -translate-y-1/2 rounded-full hover:text-orange-500 top-1/2 left-1/2 hover:text-green-200"
      @click="functionPlayVideo2()"
      :class="isPlay2 ? 'opacity-0 z-[-1]' : 'opacity-100 z-10'"
    >
      <JIcon name="play-btn" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isPlay2: false,
    }
  },
  methods: {
    functionPlayVideo2() {
      const video2 = document.querySelector('#video2')
      if (video2) {
        video2.play()
        this.isPlay2 = true
      }
    },
    functionPauseVideo2() {
      const video2 = document.querySelector('#video2')
      if (video2) {
        video2.pause()
        this.isPlay2 = false
      }
    },
  },
}
</script>
