<template>
  <div class="w-[755px] h-[755px] relative flex items-center justify-center">
    <div class="relative w-[500px] h-[500px]">
      <div class="relative z-50 w-[500px] h-[500px]">
        <svg
          width="626"
          height="628"
          viewBox="0 0 626 628"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <circle
            cx="313.919"
            cy="315.991"
            r="289.419"
            fill="url(#pattern0)"
            stroke="white"
            stroke-width="3"
          />
          <line x1="603.5" y1="332.5" x2="625.5" y2="332.5" stroke="white" stroke-linecap="round" />
          <line
            x1="538.078"
            y1="133.297"
            x2="553.561"
            y2="120.922"
            stroke="white"
            stroke-linecap="round"
          />
          <line
            x1="66.0784"
            y1="511.297"
            x2="81.5607"
            y2="498.922"
            stroke="white"
            stroke-linecap="round"
          />
          <line
            x1="56.683"
            y1="120.817"
            x2="73.8481"
            y2="130.727"
            stroke="white"
            stroke-linecap="round"
          />
          <line
            x1="541.683"
            y1="498.817"
            x2="558.848"
            y2="508.727"
            stroke="white"
            stroke-linecap="round"
          />
          <line x1="0.5" y1="332.5" x2="22.5" y2="332.5" stroke="white" stroke-linecap="round" />
          <line x1="316" y1="605" x2="316" y2="627" stroke="white" stroke-linecap="round" />
          <line x1="314.5" y1="0.5" x2="314.5" y2="22.5" stroke="white" stroke-linecap="round" />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use
                xlink:href="#image0_2509_7970"
                transform="translate(0 -0.000297265) scale(0.00059453)"
              />
            </pattern>
          </defs>
        </svg>
        <div
          class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[90%] h-[90%] z-20"
        >
          <JPicture src="images/welcome/color.png" />
        </div>

        <div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[80%] h-[80%]">
          <JPicture :src="currentImage.image" class="picture-cover" />
        </div>
      </div>
      <div
        class="w-[55px] h-[55px] border border-white z-50 font-medium bg-white hover:text-white hover:bg-green-50 duration-200 cursor-pointer rounded-full flex items-center justify-center absolute top-[-15%] left-1/2 -translate-x-1/2"
        @mouseover="getCurrentTime(1)"
        :class="currentImage.id === 1 ? 'bg-green-50 text-white' : 'text-black'"
      >
        12:00
      </div>
      <div
        class="w-[55px] h-[55px] border border-white z-50 font-medium bg-white hover:text-white hover:bg-green-50 duration-200 cursor-pointer rounded-full flex items-center justify-center absolute top-[8%] right-[-2%]"
        @mouseover="getCurrentTime(2)"
        :class="currentImage.id === 2 ? 'bg-green-50 text-white' : 'text-black'"
      >
        15:00
      </div>
      <div
        class="w-[55px] h-[55px] border border-white z-50 font-medium bg-white hover:text-white hover:bg-green-50 duration-200 cursor-pointer rounded-full flex items-center justify-center absolute top-[8%] left-[-4%]"
        @mouseover="getCurrentTime(3)"
        :class="currentImage.id === 3 ? 'bg-green-50 text-white' : 'text-black'"
      >
        09:00
      </div>

      <div
        class="w-[55px] h-[55px] border border-white z-50 font-medium bg-white hover:text-white hover:bg-green-50 duration-200 cursor-pointer rounded-full flex items-center justify-center absolute top-[46%] left-[-15%]"
        @mouseover="getCurrentTime(4)"
        :class="currentImage.id === 4 ? 'bg-green-50 text-white' : 'text-black'"
      >
        06:00
      </div>
      <div
        class="w-[55px] h-[55px] border border-white z-50 font-medium bg-white hover:text-white hover:bg-green-50 duration-200 cursor-pointer rounded-full flex items-center justify-center absolute top-[46%] right-[-15%]"
        @mouseover="getCurrentTime(5)"
        :class="currentImage.id === 5 ? 'bg-green-50 text-white' : 'text-black'"
      >
        18:00
      </div>
      <div
        class="w-[55px] h-[55px] border border-white z-50 font-medium bg-white hover:text-white hover:bg-green-50 duration-200 cursor-pointer rounded-full flex items-center justify-center absolute bottom-[-15%] left-1/2 -translate-x-1/2"
        @mouseover="getCurrentTime(6)"
        :class="currentImage.id === 6 ? 'bg-green-50 text-white' : 'text-black'"
      >
        00:00
      </div>
      <div
        class="w-[55px] h-[55px] border border-white z-50 font-medium text-black bg-[#FAFF00] cursor-pointer rounded-full flex items-center justify-center absolute bottom-[8%] right-[-2%]"
      >
        21:00
      </div>
      <div
        class="w-[55px] h-[55px] border border-white z-50 font-medium bg-white hover:text-white hover:bg-green-50 duration-200 cursor-pointer rounded-full flex items-center justify-center absolute bottom-[8%] left-[-4%]"
        @mouseover="getCurrentTime(7)"
        :class="currentImage.id === 7 ? 'bg-green-50 text-white' : 'text-black'"
      >
        03:00
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentImage: {},
      listImage: [
        {
          id: 1,
          image: 'images/welcome/relax.png',
        },
        {
          id: 2,
          image: 'images/welcome/relax-1.png',
        },
        {
          id: 3,
          image: 'images/welcome/relax-2.png',
        },
        {
          id: 4,
          image: 'images/welcome/relax-3.png',
        },
        {
          id: 5,
          image: 'images/welcome/relax-2.png',
        },
        {
          id: 6,
          image: 'images/welcome/relax-3.png',
        },
        {
          id: 7,
          image: 'images/welcome/relax-1.png',
        },
      ],
    }
  },
  created() {
    this.getCurrentTime(this.listImage[0].id)
  },
  methods: {
    getCurrentTime(idx) {
      this.currentImage = this.listImage.find((x) => x.id === idx)
    },
  },
}
</script>

<style></style>
