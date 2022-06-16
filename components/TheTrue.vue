<template>
  <div class="grid grid-cols-12 gap-x-[32px]">
    <div class="col-span-8">
      <div class="grid grid-cols-8 gap-x-[32px] relative">
        <div class="col-span-3 col-start-2">
          <div class="w-full h-[78%] bg-black rounded-full translate-y-[88%]"></div>
        </div>
        <div class="col-span-4">
          <JPicture src="images/welcome/tail-lamp.png" />
        </div>
        <div class="step-wrapper move-line">
          <svg
            width="420"
            height="132"
            viewBox="0 0 420 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_1904_7160)">
              <path
                class="path"
                d="M27 100H369C379.493 100 388 91.4934 388 81V24"
                stroke="white"
                stroke-width="2"
              />
            </g>
            <g filter="url(#filter1_d_1904_7160)">
              <circle cx="24" cy="100" r="8" fill="white" />
            </g>
            <circle cx="24.0004" cy="100" r="4.36364" fill="#07BD89" />
            <g filter="url(#filter2_d_1904_7160)">
              <circle cx="388" cy="24" r="8" fill="white" />
            </g>
            <circle cx="388" cy="24.0004" r="4.36364" fill="#07BD89" />
            <defs>
              <filter
                id="filter0_d_1904_7160"
                x="11"
                y="8"
                width="402"
                height="117"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="4" dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1904_7160"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1904_7160"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_1904_7160"
                x="0"
                y="76"
                width="56"
                height="56"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="4" dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1904_7160"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1904_7160"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_d_1904_7160"
                x="364"
                y="0"
                width="56"
                height="56"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="4" dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1904_7160"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1904_7160"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
    <div class="col-span-4 flex items-end">
      <AnimateAppear :delay="400">
        <div class="h3 text-white uppercase">Sự thật</div>
        <div class="h1 font-bold uppercase text-shadow-white text-white">Thú vị</div>
        <div class="mt-[24px] bg-line-green w-[152px] h-[6px]"></div>
        <div class="mt-[48px] font-medium text-white">
          Những chiếc đui đèn thời nay vẫn giữ nguyên vẹn thiết kế của thế kỷ 19.
        </div>
      </AnimateAppear>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
