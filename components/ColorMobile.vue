<template>
  <div class="relative flex items-center justify-center h-[400px]">
    <div class="relative">
      <div class="relative z-50">
        <svg
          width="211"
          height="212"
          viewBox="0 0 211 212"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <circle
            cx="105.614"
            cy="106.311"
            r="97.3706"
            fill="url(#pattern0)"
            stroke="white"
            stroke-width="1.0093"
          />
          <line
            x1="203.038"
            y1="111.865"
            x2="210.44"
            y2="111.865"
            stroke="white"
            stroke-width="0.336435"
            stroke-linecap="round"
          />
          <line
            x1="181.028"
            y1="44.8436"
            x2="186.236"
            y2="40.6803"
            stroke="white"
            stroke-width="0.336435"
            stroke-linecap="round"
          />
          <line
            x1="22.2305"
            y1="172.019"
            x2="27.4391"
            y2="167.856"
            stroke="white"
            stroke-width="0.336435"
            stroke-linecap="round"
          />
          <line
            x1="19.0696"
            y1="40.6455"
            x2="24.8444"
            y2="43.9795"
            stroke="white"
            stroke-width="0.336435"
            stroke-linecap="round"
          />
          <line
            x1="182.241"
            y1="167.819"
            x2="188.016"
            y2="171.153"
            stroke="white"
            stroke-width="0.336435"
            stroke-linecap="round"
          />
          <line
            x1="0.168217"
            y1="111.865"
            x2="7.56954"
            y2="111.865"
            stroke="white"
            stroke-width="0.336435"
            stroke-linecap="round"
          />
          <line
            x1="106.313"
            y1="203.543"
            x2="106.313"
            y2="210.945"
            stroke="white"
            stroke-width="0.336435"
            stroke-linecap="round"
          />
          <line
            x1="105.809"
            y1="0.168217"
            x2="105.809"
            y2="7.56954"
            stroke="white"
            stroke-width="0.336435"
            stroke-linecap="round"
          />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use
                xlink:href="#image0_2501_7936"
                transform="translate(0 -0.000297265) scale(0.00059453)"
              />
            </pattern>
          </defs>
        </svg>

        <div
          class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[90%] h-[90%] z-20"
        >
          <JPicture src="images/welcome/color-mobile.png" class="picture-cover" />
        </div>

        <div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[80%] h-[80%]">
          <JPicture :src="currentImage.image" class="picture-cover" />
        </div>
      </div>
      <div
        class="w-[45px] h-[45px] select-none border border-white z-50 font-medium bg-white hover:text-white hover:bg-green-50 duration-200 cursor-pointer rounded-full flex items-center justify-center absolute top-[-25%] left-1/2 -translate-x-1/2"
        @click="getCurrentTime(1)"
        :class="currentImage.id === 1 ? 'bg-green-50 text-white' : 'text-black'"
      >
        12:00
      </div>
      <div
        class="w-[45px] h-[45px] select-none border border-white z-50 font-medium bg-white hover:text-white hover:bg-green-50 duration-200 cursor-pointer rounded-full flex items-center justify-center absolute top-0 right-[-12%]"
        @click="getCurrentTime(2)"
        :class="currentImage.id === 2 ? 'bg-green-50 text-white' : 'text-black'"
      >
        15:00
      </div>
      <div
        class="w-[45px] h-[45px] select-none border border-white z-50 font-medium bg-white hover:text-white hover:bg-green-50 duration-200 cursor-pointer rounded-full flex items-center justify-center absolute top-0 left-[-12%]"
        @click="getCurrentTime(3)"
        :class="currentImage.id === 3 ? 'bg-green-50 text-white' : 'text-black'"
      >
        09:00
      </div>

      <div
        class="w-[45px] h-[45px] select-none border border-white z-50 font-medium bg-white hover:text-white hover:bg-green-50 duration-200 cursor-pointer rounded-full flex items-center justify-center absolute top-[40%] left-[-25%]"
        @click="getCurrentTime(4)"
        :class="currentImage.id === 4 ? 'bg-green-50 text-white' : 'text-black'"
      >
        06:00
      </div>
      <div
        class="w-[45px] h-[45px] select-none border border-white z-50 font-medium bg-white hover:text-white hover:bg-green-50 duration-200 cursor-pointer rounded-full flex items-center justify-center absolute top-[40%] right-[-25%]"
        @click="getCurrentTime(5)"
        :class="currentImage.id === 5 ? 'bg-green-50 text-white' : 'text-black'"
      >
        18:00
      </div>
      <div
        class="w-[45px] h-[45px] select-none border border-white z-50 font-medium bg-white hover:text-white hover:bg-green-50 duration-200 cursor-pointer rounded-full flex items-center justify-center absolute bottom-[-25%] left-1/2 -translate-x-1/2"
        @click="getCurrentTime(6)"
        :class="currentImage.id === 6 ? 'bg-green-50 text-white' : 'text-black'"
      >
        00:00
      </div>
      <div
        class="w-[45px] h-[45px] select-none border border-white z-50 font-medium text-black bg-[#FAFF00] cursor-pointer rounded-full flex items-center justify-center absolute bottom-0 right-[-12%]"
      >
        21:00
      </div>
      <div
        class="w-[45px] h-[45px] select-none border border-white z-50 font-medium bg-white hover:text-white hover:bg-green-50 duration-200 cursor-pointer rounded-full flex items-center justify-center absolute bottom-0 left-[-12%]"
        @click="getCurrentTime(7)"
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
