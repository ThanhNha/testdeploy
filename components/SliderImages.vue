<template>
  <div>
    <div class="relative h-style">
      <div class="bg-blur h-[300px] md:h-[430px] absolute z-50 w-full">
        <div
          class="flex flex-col items-center xl:space-y-[26px] md:space-y-[18px] space-y-[13px] xl:pt-[94px] md:pt-[66px] pt-[47px]"
        >
          <div class="h2 tracking-[1rem] md:tracking-[1.5em] text-shadow uppercase text-white">
            RalliSmart
          </div>
          <div class="h2 text-shadow-2 text-white uppercase font-bold relative z-10">
            an tâm mọi phút giây
          </div>
        </div>
      </div>
      <div class="relative w-full h-screen xl:pt-[175px] md:pt-[123px] pt-[88px] md:block hidden">
        <div class="box-border absolute w-full h-[100vh] overflow-hidden bg-image-1">
          <div class="icon-block is-desktop">
            <div
              class="border border-white rounded-full w-[88px] h-[88px] m-[6px] flex items-center justify-center text-white"
            >
              <JIcon name="heart" />
            </div>
          </div>
          <div class="overlay-background">
            <div class="wrap-line-icon is-desktop">
              <div class="line-left"></div>
              <div class="line-right"></div>
            </div>
          </div>
          <div class="content rounded-[20px] overflow-hidden">
            <div class="w-[493px] h-[208px] bg-white bg-opacity-70 p-[32px]">
              <div class="text-linear-2 h3 font-bold uppercase">
                Chiếu sáng phù hợp nhịp sinh học
              </div>
              <div class="font-medium text-black mt-[20px]">
                Thiết lập chế độ đèn bật - tắt để ngôi nhà luôn hoạt động như có người ở nhà.
              </div>
            </div>
          </div>
          <div class="img-bg-wrap have-bg"></div>
        </div>
        <div class="box-border absolute w-full h-[100vh] overflow-hidden bg-image-2">
          <div class="icon-block is-desktop">
            <div
              class="border border-white rounded-full w-[88px] h-[88px] m-[6px] flex items-center justify-center text-white"
            >
              <JIcon name="shield" />
            </div>
          </div>
          <div class="overlay-background">
            <div class="wrap-line-icon is-desktop">
              <div class="line-left"></div>
              <div class="line-right"></div>
            </div>
          </div>
          <div class="content rounded-[20px] overflow-hidden">
            <div class="w-[340px] lg:w-[493px] h-[208px] bg-white bg-opacity-70 p-[32px]">
              <div class="text-linear-2 h3 font-bold uppercase">
                Giải pháp bảo vệ <span class="inline-block w-max">an ninh</span>,
                <span class="inline-block w-max">an toàn</span>
              </div>
              <div class="font-medium text-black mt-[20px]">
                Hệ thống cửa thông minh liên tục cập nhật khi có người vào nhà thông qua app tiện
                lợi.
              </div>
            </div>
          </div>
          <div class="img-bg-wrap have-bg"></div>
        </div>
        <div class="box-border absolute w-full h-[100vh] overflow-hidden bg-image-3">
          <div class="icon-block is-desktop">
            <div
              class="border border-white rounded-full w-[88px] h-[88px] m-[6px] flex items-center justify-center"
            >
              <JIcon name="house-close" />
            </div>
          </div>
          <div class="overlay-background">
            <div class="wrap-line-icon is-desktop">
              <div class="line-left"></div>
              <div class="line-right"></div>
            </div>
          </div>
          <div class="content rounded-[20px] overflow-hidden">
            <div class="w-[340px] lg:w-[493px] h-[208px] bg-white bg-opacity-70 p-[32px]">
              <div class="text-linear-2 h3 font-bold uppercase">Chế độ không ở nhà</div>
              <div class="font-medium text-black mt-[20px]">
                Thiết lập chế độ đèn bật - tắt để ngôi nhà luôn hoạt động như có người ở nhà.
              </div>
            </div>
          </div>
          <div class="img-bg-wrap have-bg"></div>
        </div>
        <div class="box-border absolute w-full h-[100vh] overflow-hidden bg-image-4">
          <div class="icon-block is-desktop">
            <div
              class="border border-white rounded-full w-[88px] h-[88px] m-[6px] flex items-center justify-center"
            >
              <JIcon name="champ" />
            </div>
          </div>
          <div class="overlay-background">
            <div class="wrap-line-icon is-desktop">
              <div class="line-left"></div>
              <div class="line-right"></div>
            </div>
          </div>
          <div class="content rounded-[20px] overflow-hidden">
            <div class="w-[493px] h-[208px] bg-white bg-opacity-70 p-[32px]">
              <div class="text-linear-2 h3 font-bold uppercase">Thư giãn</div>
              <div class="font-medium text-black mt-[20px]">
                Tận hưởng thời gian thư giãn nhẹ nhàng với ánh đèn thơ mộng, giúp toàn bộ cơ thể
                được thả lỏng sau ngày dài mệt mỏi.
              </div>
            </div>
          </div>
          <div class="img-bg-wrap have-bg"></div>
        </div>
      </div>

      <div class="block md:hidden">
        <div class="bg-1 bg-mobile">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              class="border border-white rounded-full w-[88px] h-[88px] m-[6px] flex items-center justify-center text-white"
            >
              <JIcon name="heart" />
            </div>
            <div class="wrap-line-icon">
              <div class="line-down"></div>
            </div>
          </div>
          <div class="absolute bottom-[36px] mx-[22px]">
            <div class="content rounded-[20px] overflow-hidden">
              <div class="bg-white bg-opacity-70 p-[32px]">
                <div class="text-linear-2 h3 font-bold uppercase">
                  Chiếu sáng phù hợp nhịp sinh học
                </div>
                <div class="font-medium text-black mt-[20px]">
                  Thiết lập chế độ đèn bật - tắt để ngôi nhà luôn hoạt động như có người ở nhà.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-2 bg-mobile">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              class="border border-white rounded-full w-[88px] h-[88px] m-[6px] flex items-center justify-center text-white"
            >
              <JIcon name="shield" />
            </div>
            <div class="wrap-line-icon">
              <div class="line-up"></div>
              <div class="line-down"></div>
            </div>
          </div>
          <div class="absolute bottom-[36px] mx-[22px]">
            <div class="content rounded-[20px] overflow-hidden">
              <div class="bg-white bg-opacity-70 p-[32px]">
                <div class="text-linear-2 h3 font-bold uppercase">
                  Giải pháp bảo vệ <span class="inline-block w-max">an ninh</span>,
                  <span class="inline-block w-max">an toàn</span>
                </div>
                <div class="font-medium text-black mt-[20px]">
                  Hệ thống cửa thông minh liên tục cập nhật khi có người vào nhà thông qua app tiện
                  lợi.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-3 bg-mobile">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              class="border border-white rounded-full w-[88px] h-[88px] m-[6px] flex items-center justify-center"
            >
              <JIcon name="house-close" />
            </div>
            <div class="wrap-line-icon">
              <div class="line-up"></div>
              <div class="line-down"></div>
            </div>
          </div>
          <div class="absolute bottom-[36px] mx-[22px]">
            <div class="content rounded-[20px] overflow-hidden">
              <div class="bg-white bg-opacity-70 p-[32px]">
                <div class="text-linear-2 h3 font-bold uppercase">chế độ không ở nhà</div>
                <div class="font-medium text-black mt-[20px]">
                  Thiết lập chế độ đèn bật - tắt để ngôi nhà luôn hoạt động như có người ở nhà.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-4 bg-mobile">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              class="border border-white rounded-full w-[88px] h-[88px] m-[6px] flex items-center justify-center"
            >
              <JIcon name="champ" />
            </div>
            <div class="wrap-line-icon">
              <div class="line-up"></div>
              <div class="line-down"></div>
            </div>
          </div>
          <div class="absolute bottom-[36px] mx-[22px]">
            <div class="content rounded-[20px] overflow-hidden">
              <div class="bg-white bg-opacity-70 p-[32px]">
                <div class="text-linear-2 h3 font-bold uppercase">Thư giãn</div>
                <div class="font-medium text-black mt-[20px]">
                  Tận hưởng thời gian thư giãn nhẹ nhàng với ánh đèn thơ mộng, giúp toàn bộ cơ thể
                  được thả lỏng sau ngày dài mệt mỏi.
                </div>
              </div>
            </div>
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
.bg-mobile {
  @apply relative;
}
.bg-1 {
  background: url('../static/images/home/image-1.jpg') no-repeat;
  background-size: cover;
  @apply h-[720px];
  background-position: 38% 40%;
}
.bg-2 {
  background: url('../static/images/home/image-2.jpg') no-repeat;
  background-size: cover;
  @apply h-[720px];
  background-position: 38% 40%;
}

.bg-3 {
  background: url('../static/images/home/image-3.jpg') no-repeat;
  background-size: cover;
  @apply h-[720px];
  background-position: 38% 40%;
}

.bg-4 {
  background: url('../static/images/home/image-4-mobile.jpg') no-repeat;
  background-size: cover;
  @apply h-[720px];
  background-position: 38% 40%;
  @screen md {
    background: url('../static/images/home/image-4.jpg') no-repeat;
  }
}

@screen md {
  .h-style {
    height: calc(100vh + 127px);
  }
}
.wrap-line-icon {
  @apply md:absolute relative;
  width: 100%;
  top: 50%;
  transition: all 0.2s;
  opacity: 1;
}

.line-left,
.line-right {
  animation: lineDraw 0.5s 0.5s linear forwards;
}
.wrap-line-icon .line-left,
.wrap-line-icon .line-right {
  @apply absolute h-[3px] bg-white top-0 w-[75%] z-20;
  transition: width 0.5s 0.5s;
}
.line-left {
  left: 25%;
}
.line-right {
  right: 25%;
}
.line-down {
  @apply absolute h-[330px] bg-white top-[-7px] left-1/2 w-[2px] z-20;
}

.line-up {
  @apply absolute h-[330px] bg-white top-[-424px] left-1/2 w-[2px] z-20;
}

.img-bg-wrap {
  height: 100vh;
  min-height: 700px;
  @apply w-full md:w-[25%];
  transition: all 0.5s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  &::before {
    content: '';
    transition: all 0.5s;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
}

.bg-image-1 {
  > .img-bg-wrap {
    left: 0;
    background: url('../static/images/home/image-1.jpg') no-repeat;
    background-size: cover;
    background-position: 38% 40%;
  }

  .overlay-background {
    left: 0;
    background-position: 65% 50%;
  }

  .icon-block {
    @apply left-[12.5%];
    &:hover {
      ~ .content {
        box-shadow: 0px 4px 20px rgba(4, 216, 155, 0.4);
        opacity: 1;
        visibility: visible;
        pointer-events: unset;
        z-index: 12;
        transition: all 2s;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  .content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    visibility: hidden;
    z-index: 12;
    right: 5%;
    margin-left: -200px;
  }
}

.bg-image-2 {
  > .img-bg-wrap {
    left: 25%;
    background: url('../static/images/home/image-2.jpg') no-repeat;
    background-size: cover;
    background-position: 53% 50%;
  }
  .overlay-background {
    left: 25%;
    background-position: 65% 50%;
  }

  .icon-block {
    @apply left-[37.5%];
    &:hover {
      ~ .content {
        box-shadow: 0px 4px 20px rgba(4, 216, 155, 0.4);
        opacity: 1;
        visibility: visible;
        pointer-events: unset;
        z-index: 12;
        transition: all 2s;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  .content {
    @apply right-0 xl:right-[5%];
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    visibility: hidden;
    z-index: 12;
    margin-left: -200px;
  }
}
.bg-image-3 {
  > .img-bg-wrap {
    left: 50%;
    background: url('../static/images/home/image-3.jpg') no-repeat;
    background-size: cover;
    background-position: 46% 50%;
  }
  .overlay-background {
    left: 50%;
    background-position: 65% 50%;
  }

  .icon-block {
    @apply left-[62.5%];
    &:hover {
      ~ .content {
        box-shadow: 0px 4px 20px rgba(4, 216, 155, 0.4);
        opacity: 1;
        visibility: visible;
        pointer-events: unset;
        z-index: 12;
        transition: all 2s;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  .content {
    @apply left-[30%] lg:left-[20%];
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    visibility: hidden;
    z-index: 12;
    margin-left: -200px;
  }
}

.bg-image-4 {
  > .img-bg-wrap {
    left: 75%;
    background: url('../static/images/home/image-4.jpg') no-repeat;
    background-size: cover;
    background-position: 24% 50%;
  }
  .overlay-background {
    left: 75%;
    background-position: 65% 50%;
  }

  .icon-block {
    @apply left-[87.5%];
    &:hover {
      ~ .content {
        box-shadow: 0px 4px 20px rgba(4, 216, 155, 0.4);
        opacity: 1;
        visibility: visible;
        pointer-events: unset;
        z-index: 12;
        transition: all 2s;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    visibility: hidden;
    z-index: 12;
    right: calc(25% + 20px);
    margin-left: -200px;
  }
}

.overlay-background {
  @apply bg-transparent opacity-50 top-0 left-0 h-screen min-h-[700px] w-full md:w-[25%] absolute z-[2];
  transition: all 0.5s ease-in-out;
}
.icon-block {
  @apply absolute top-1/2 -translate-x-1/2 -translate-y-1/2  z-[3] text-center pointer-events-auto bg-white bg-opacity-40 cursor-pointer rounded-full;
  box-shadow: 0px 1px 17px 5px rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
}

.icon-block {
  &:hover {
    z-index: 14;
    ~ .overlay-background {
      background: linear-gradient(89.94deg, #07bd89 2.92%, #006e8c 79.81%, #014251 103.13%);
      z-index: 12;
      .line-right,
      .line-left {
        width: 0;
      }
    }
    ~ .img-bg-wrap {
      width: 100vw;
      z-index: 11;
      left: 0;
      background-position: 50% 50%;
    }
  }
}

.is-desktop {
  display: inline-block;
}

.bg-blur {
  background: linear-gradient(
    179deg,
    #07bd89 -14.36%,
    #006e8c 27.9%,
    rgba(3, 75, 90, 0.95) 47.9%,
    rgba(3, 75, 90, 0.76) 69.1%,
    rgba(1, 58, 70, 0) 97.42%
  );
}
.text-shadow {
  text-shadow: 0px 0px 30px rgba(38, 41, 43, 0.1);
  text-shadow: 0px 4px 43px rgba(181, 218, 252, 0.82);
}
.text-shadow-2 {
  text-shadow: 0px 4px 43px rgba(181, 218, 252, 0.82);
}
</style>
