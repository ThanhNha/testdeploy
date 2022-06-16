<template>
  <div class="relative">
    <div class="max-h-[810px] w-full">
      <video
        id="video"
        width="100%"
        height="100%"
        :autoplay="false"
        poster="/images/video-1.jpg"
        playsinline
        :controls="isPlay"
        loop
        class="object-cover object-center video max-h-[810px] w-full"
        @click="functionPauseVideo()"
      >
        <source :src="video" type="video/mp4" />
      </video>
    </div>
    <button
      class="absolute text-white transition-all duration-300 ease-in-out transform -translate-x-1/2 -translate-y-1/2 rounded-full hover:text-orange-500 top-1/2 left-1/2 hover:text-green-200"
      @click="functionPlayVideo()"
      :class="isPlay ? 'opacity-0 z-[-1]' : 'opacity-100 z-10'"
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
      isPlay: false,
    }
  },
  methods: {
    functionPlayVideo() {
      const video = document.querySelector('#video')
      if (video) {
        video.play()
        this.isPlay = true
      }
    },
    functionPauseVideo() {
      const video = document.querySelector('#video')
      if (video) {
        video.pause()
        this.isPlay = false
      }
    },
  },
}
</script>
