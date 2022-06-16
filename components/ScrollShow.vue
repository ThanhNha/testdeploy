<template>
  <div class="relative">
    <div class="bg-earth-3 lg:py-[83px] md:py-[58px] py-[42px]">
      <div class="container">
        <div class="mx-auto w-max">
          <JIcon name="line-dot" />
        </div>
        <div class="grid grid-cols-12 gap-x-[32px] relative">
          <div class="col-span-10 col-start-3 flex space-x-[32px]">
            <div class="max-w-[591px] max-h-[598px] w-full h-full">
              <JPicture src="images/welcome/edison.jpg" class="picture-cover" />
            </div>

            <div class="max-w-[334px] w-full flex items-end">
              <AnimateAppear :delay="400">
                <div class="text-white uppercase h3">Năm</div>
                <div class="font-bold text-white uppercase h1 text-shadow-white">1879</div>
                <div class="mt-[24px] bg-line-green w-full h-[6px]"></div>
                <div class="xl:mt-[48px] md:mt-[34px] mt-[24px] font-medium text-white">
                  Thomas Edison thành công sáng tạo ra bóng đèn dây tóc sợi đốt đầu tiên, đánh dấu
                  mốc son quan trọng trong lịch sử loài người, xóa dần khoảng cách giữa ngày và đêm.
                </div>
              </AnimateAppear>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-earth-5 lg:py-[83px] md:py-[58px] py-[42px] relative">
      <div class="top-[-36%] xl:top-[-23%] z-10 bg-linear-black-2"></div>
      <div class="container">
        <div class="grid grid-cols-12 gap-x-[32px]">
          <div class="col-span-8">
            <div class="grid grid-cols-8 gap-x-[32px] relative">
              <div class="col-span-3 col-start-2">
                <div
                  class="w-full h-[78%] bg-black rounded-full translate-y-[88%]"
                  ref="location"
                ></div>
              </div>
              <div class="col-span-4">
                <JPicture src="images/welcome/tail-lamp.png" />
              </div>
              <div id="dot-line" class="step-wrapper move-line">
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
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                      />
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
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                      />
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
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                      />
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
          <div class="flex items-end col-span-4">
            <AnimateAppear :delay="400">
              <div class="text-white uppercase h3">Sự thật</div>
              <div class="font-bold text-white uppercase h1 text-shadow-white">Thú vị</div>
              <div class="mt-[24px] bg-line-green w-[152px] h-[6px]"></div>
              <div class="mt-[48px] font-medium text-white">
                Những chiếc đui đèn thời nay vẫn giữ nguyên vẹn thiết kế của thế kỷ 19.
              </div>
            </AnimateAppear>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bg-earth-3 {
  background: url('../static/images/welcome/bg-earth-3.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  @apply xl:h-[835px];
}

.bg-earth-4 {
  background: url('../static/images/welcome/bg-earth-4.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  @apply xl:h-[835px];
}
.bg-earth-5 {
  background: url('../static/images/welcome/bg-earth-5.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  @apply xl:h-[835px];
}
.step-wrapper {
  @apply w-[410px] relative z-[80];
  transform: translate(54%, -54%);
}

.linestep {
  text-align: center;
  width: 370px;
  position: absolute;
  .num {
    color: #fff;
    border-radius: 100px;
    display: inline-block;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-weight: bold;
    background: #452df8;
  }
  p {
    width: 250px;
    position: absolute;
    margin-top: 7px;
    font-weight: 500;
    line-height: normal;
    font-size: 18px;
  }

  p.top {
    bottom: 50px;
    left: -110px;
  }
  p.bottom {
    left: -110px;
  }
  p.left {
    width: 200px;
    right: 34px;
    top: -17px;
  }
  p.right {
    width: 200px;
    left: 34px;
    top: -17px;
  }
}

.linestep {
  visibility: hidden;
}
.path {
  visibility: hidden;
}

.move-line {
  .path {
    visibility: visible;
    stroke-dasharray: 3700;
    stroke-dashoffset: 3700;
    animation: moveline 12s linear forwards;
  }
  .linestep {
    animation-name: show-step-item;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
  }
  .linestep1 {
    animation-delay: 0.4s;
  }
  .linestep2 {
    animation-delay: 0.8s;
  }
}

@keyframes show-step-item {
  from {
    transform: scale(0.2);
    opacity: 0;
  }
  to {
    visibility: visible;
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes moveline {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
