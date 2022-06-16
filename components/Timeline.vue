<template>
  <section class="ps-timeline-sec">
    <div class="container">
      <ol class="ps-timeline">
        <li>
          <AnimateAppear animate="slideLeft" :delay="300">
            <div class="img-handler-top">
              <div class="flex items-center justify-center">
                <JPicture src="images/welcome/light-1.png" />
              </div>
            </div>
            <div class="ps-bot w-full">
              <div class="flex flex-col items-center justify-center">
                <div class="p1 font-bold text-white text-shadow-white uppercase">20 năm trước</div>
                <div class="w-[103px] h-[3px] bg-line-green-2 mt-[8px] mb-[16px]"></div>
                <div class="caption text-white text-center">
                  đèn hẹn giờ là một cải <br />
                  tiến vượt bậc
                </div>
              </div>
            </div>
          </AnimateAppear>
          <span class="ps-sp-top"></span>
        </li>

        <li>
          <AnimateAppear animate="slideLeft" :delay="600">
            <div class="img-handler-top">
              <div class="flex items-center justify-center">
                <JPicture src="images/welcome/light-2.png" />
              </div>
            </div>
            <div class="ps-bot w-full">
              <div class="flex flex-col items-center justify-center">
                <div class="p1 font-bold text-white text-shadow-white uppercase">15 năm trước</div>
                <div class="w-[103px] h-[3px] bg-line-green-2 mt-[8px] mb-[16px]"></div>
                <div class="caption text-white text-center">
                  đèn cảm ứng chuyển động <br />
                  được coi là thực sự thông minh
                </div>
              </div>
            </div>
          </AnimateAppear>
          <span class="ps-sp-top"></span>
        </li>

        <li>
          <AnimateAppear animate="slideLeft" :delay="900">
            <div class="img-handler-top">
              <div class="flex items-center justify-center">
                <JPicture src="images/welcome/light-3.png" />
              </div>
            </div>
            <div class="ps-bot w-full">
              <div class="flex flex-col items-center justify-center">
                <div class="p1 font-bold text-white text-shadow-white uppercase">10 năm trước</div>
                <div class="w-[103px] h-[3px] bg-line-green-2 mt-[8px] mb-[16px]"></div>
                <div class="caption text-white text-center">
                  đèn cảm biến ánh sáng là một <br />
                  phát minh tuyệt vời...
                </div>
              </div>
            </div>
          </AnimateAppear>
          <span class="ps-sp-top"></span>
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
import AnimateAppear from './AnimateAppear.vue'
export default { components: { AnimateAppear } }
</script>

<style lang="scss" scoped>
.ps-timeline-sec .container ol.ps-timeline {
  @apply lg:mt-[260px] lg:mb-[200px] xl:mt-[400px] mb-[200px]  #{!important};
}
.ps-timeline-sec {
  position: relative;
  @apply overflow-hidden;
}
.ps-timeline-sec .container {
  position: relative;
}
@media screen and (max-width: 767px) {
  .ps-timeline-sec .container ol.ps-timeline li {
    height: 220px;
    float: none !important;
    width: inherit !important;
  }
  .ps-timeline-sec .container ol.ps-timeline li:nth-child(2) .img-handler-bot img {
    width: 70px;
  }
  .ps-timeline-sec .container ol.ps-timeline li:last-child {
    margin: 0;
    bottom: 0 !important;
    height: 120px;
  }
  .ps-timeline-sec .container ol.ps-timeline li:last-child .img-handler-bot {
    bottom: 40px !important;
    width: 40% !important;
    margin-left: 25px !important;
    margin-top: 0 !important;
  }
  .ps-timeline-sec .container ol.ps-timeline li:last-child .img-handler-bot img {
    width: 100%;
  }
  .ps-timeline-sec .container ol.ps-timeline li:last-child .ps-top {
    margin-bottom: 0 !important;
    top: 20px;
    width: 50% !important;
  }
  .ps-timeline-sec .container ol.ps-timeline li span {
    left: 0 !important;
  }
  .ps-timeline-sec .container ol.ps-timeline li span.ps-sp-top:before {
    content: none !important;
  }
  .ps-timeline-sec .container ol.ps-timeline li span.ps-sp-top:after {
    content: none !important;
  }
  .ps-timeline-sec .container ol.ps-timeline li span.ps-sp-bot:before {
    content: none !important;
  }
  .ps-timeline-sec .container ol.ps-timeline li span.ps-sp-bot:after {
    content: none !important;
  }
  .ps-timeline-sec .container ol.ps-timeline li .img-handler-top {
    position: absolute !important;
    bottom: 150px !important;
    width: 33% !important;

    @apply flex items-center justify-center w-full;
  }
  .ps-timeline-sec .container ol.ps-timeline li .img-handler-top img {
    margin: 0 auto !important;
    width: 80% !important;
  }
  .ps-timeline-sec .container ol.ps-timeline li .img-handler-bot {
    position: absolute !important;
    bottom: 55px !important;
    width: 30% !important;
    float: left !important;
    margin-left: 35px !important;
    margin-bottom: 0 !important;
  }
  .ps-timeline-sec .container ol.ps-timeline li p {
    text-align: left !important;
    width: 100% !important;
    margin: 0 auto !important;
    margin-top: 0px !important;
  }
  .ps-timeline-sec .container ol.ps-timeline li .ps-top {
    width: 60% !important;
    float: right !important;
    right: 0;
    top: -40px;
  }
  .ps-timeline-sec .container ol.ps-timeline li .ps-bot {
    width: 60% !important;
    float: right !important;
    right: 0;
    top: -40px;
  }
}

.ps-timeline-sec .container ol.ps-timeline {
  @apply w-full h-[3px] xl:my-[390px]	md:mt-[200px] md:mb-[150px]	my-[195px] p-0;
  background: linear-gradient(
    89.99deg,
    rgba(115, 228, 255, 0) 0.01%,
    rgba(115, 228, 255, 0.79) 16.98%,
    rgba(198, 244, 255, 0.79) 45.54%,
    rgba(115, 228, 255, 0.79) 90.51%,
    rgba(115, 228, 255, 0) 100%
  );
  list-style: none;
}
.ps-timeline-sec .container ol.ps-timeline li {
  float: left;
  width: 33%;
  padding-top: 30px;
  position: relative;
}
.ps-timeline-sec .container ol.ps-timeline li span {
  width: 20px;
  height: 20px;
  margin-left: -25px;
  background: #31d7fe;
  border: 4px solid #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 0px #fff;
  text-align: center;
  line-height: 50px -10;
  color: #df8625;
  font-style: normal;
  position: absolute;
  top: -22%;
  left: 54%;
}
.ps-timeline-sec .container ol.ps-timeline li .img-handler-top {
  @apply absolute xl:mb-[70px] md:mb-[49px]	mb-[35px] bottom-0 w-full;
}
.ps-timeline-sec .container ol.ps-timeline li .img-handler-top img {
  display: table;
  margin: 0 auto;
}
.ps-timeline-sec .container ol.ps-timeline li .img-handler-bot {
  position: absolute;
  margin-top: 60px;
  width: 100%;
}
.ps-timeline-sec .container ol.ps-timeline li .img-handler-bot img {
  display: table;
  margin: 0 auto;
}
.ps-timeline-sec .container ol.ps-timeline li p {
  text-align: center;
  width: 80%;
  margin: 0 auto;
}
.ps-timeline-sec .container ol.ps-timeline li .ps-top {
  position: absolute;
  bottom: 0;
  margin-bottom: 100px;
}
.ps-timeline-sec .container ol.ps-timeline li .ps-bot {
  @apply absolute xl:mt-[35px]	md:mt-[25px]	mt-[18px];
}
</style>
