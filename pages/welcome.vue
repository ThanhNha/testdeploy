<template>
  <main>
    <!--Mobile-->
    <div class="block md:hidden">
      <section class="bg-[#020102] relative md:hidden block">
        <div class="overflow-hidden">
          <div class="translate-x-[-50%] translate-y-[-20%] md:translate-y-[-20%]">
            <EarthAnimation class="shadow-white" />
          </div>
        </div>
        <div class="absolute top-[6px] w-full">
          <div class="container">
            <div class="flex items-center justify-between">
              <div>
                <NuxtLink to="/">
                  <JIcon name="logo-mobile" />
                </NuxtLink>
              </div>
              <div class="cursor-pointer" @click="setCookie">
                <div class="font-bold text-white uppercase">Về trang chủ</div>
              </div>
            </div>
            <div class="relative z-20 flex flex-col items-center justify-center mt-[120px]">
              <div class="h2 text-white uppercase tracking-[4px]">Hành trình</div>
              <div class="w-[366px] h-[6px] bg-line-white mt-[8px] mb-[24px]"></div>
              <div class="font-bold text-white uppercase h1 text-shadow-white">
                Khám phá ánh sáng
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="relative">
        <div
          class="absolute left-0 z-30 flex items-center justify-center w-full top-0 translate-y-[-90%]"
        >
          <JIcon name="line-dot-mobile" />
        </div>
      </div>
      <section class="relative overflow-hidden bg-mobile-1">
        <div class="container">
          <div class="relative">
            <div
              class="absolute top-[50%] left-0 w-[105px] h-[105px] parallax z-40"
              data-speed="15"
            >
              <JPicture src="/images/welcome/earth-11.png" />
            </div>
            <div class="md:w-[715px] mx-auto pt-[20px]">
              <JPicture src="/images/welcome/earth-1.png" />
            </div>
            <div
              class="absolute bottom-[-50%] right-[-20px] md:right-[-80px] w-[133px] h-[133px] md:w-[423px] md:h-[289px] parallax z-40"
              data-speed="26"
            >
              <JPicture src="/images/welcome/earth-12.png" />
            </div>
          </div>
          <div class="mt-[32px]">
            <AnimateAppear :delay="400">
              <div class="max-w-[250px] w-full h-full text-white">
                <div>
                  Mặt trời là nguồn cung cấp ánh sáng duy nhất, con người dần quen định hình thời
                  gian và nhịp sống theo mặt trời.
                </div>
                <div class="mt-[20px] bg-line-green w-full h-[6px]"></div>
              </div>
            </AnimateAppear>
          </div>

          <div class="flex items-center justify-center">
            <JIcon name="line-dot-mobile" />
          </div>

          <div class="grid grid-cols-1 gap-y-[12px]">
            <div class="flex items-end">
              <div class="relative w-full">
                <div class="w-full transform translate-y-[72px]">
                  <JPicture src="/images/welcome/earth-2.png" class="picture-cover" />
                </div>
                <div
                  class="absolute bottom-[-12%] xl:bottom-0 left-[10px] z-30 w-[125px] translate-y-[50%]"
                >
                  <JPicture src="/images/welcome/earth-22.png" />
                </div>
                <div
                  class="absolute bottom-[-50%] right-0 z-30 parallax w-[130px] md:w-auto"
                  data-speed="14"
                >
                  <JPicture src="/images/welcome/earth-21.png" />
                </div>
              </div>
            </div>
            <div class="pt-[100px]">
              <AnimateAppear :delay="400">
                <div>
                  <div class="font-bold text-white uppercase h1 text-shadow-white mb-[3px]">
                    1,7 - 2 triệu
                  </div>
                  <div class="text-white uppercase h3">Năm trước</div>
                  <div class="my-[12px] bg-line-green w-full h-[6px]"></div>
                  <div class="font-medium text-white">
                    Lửa xuất hiện trong cuộc sống của con người từ chiếu sáng, nấu nướng hay xua
                    đuổi thú dữ. Từ đó, họ liên tục tìm kiếm các giải pháp để duy trì ánh lửa vào
                    ban đêm như củi, nến, đèn dầu,...
                  </div>
                </div>
              </AnimateAppear>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <JIcon name="line-dot-mobile" />
        </div>
      </section>

      <section class="bg-mobile-2 relative pb-[30px]">
        <div class="container">
          <div class="relative">
            <div class="absolute bottom-[-130%] left-[20px] w-full h-full z-[100] xl:block hidden">
              <div class="container">
                <div class="z-20 w-max">
                  <LightSwitch />
                </div>
              </div>
            </div>

            <div class="absolute bottom-[-42%] left-[-32px] z-[100] md:hidden block">
              <div class="container">
                <div class="z-20 w-max">
                  <LightSwitchMobile />
                </div>
              </div>
            </div>
            <JPicture src="/images/welcome/edison.jpg" class="picture-cover" />
          </div>

          <div class="mt-[32px]">
            <AnimateAppear :delay="400">
              <div class="flex flex-col items-end justify-end w-full">
                <div class="text-white uppercase h3">Năm</div>
                <div class="font-bold text-white uppercase h1 text-shadow-white">1879</div>
                <div class="my-[12px] bg-line-green-rotate w-[80px] h-[6px]"></div>
                <div class="font-medium text-right text-white">
                  Thomas Edison thành công sáng tạo ra bóng đèn dây tóc sợi đốt đầu tiên, đánh dấu
                  mốc son quan trọng trong lịch sử loài người, xóa dần khoảng cách giữa ngày và đêm.
                </div>
              </div>
            </AnimateAppear>
          </div>

          <div>
            <JPicture src="/images/welcome/tail-lamp-mobile.png" class="picture-cover" />
            <div class="mt-[32px] flex flex-col text-white items-center justify-center">
              <div class="h2 uppercase">Sự thật</div>
              <div class="font-bold uppercase h1 text-shadow-white">Thú vị</div>
              <div class="w-[165px] h-[5px] bg-line-green-2 mt-[12px] mb-[16px]"></div>
              <div class="text-center px-[56px]">
                Những chiếc đui đèn thời nay vẫn giữ nguyên vẹn thiết kế của thế kỷ 19.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="relative bg-mobile-3">
        <div class="container">
          <div class="grid grid-cols-8 gap-x-[8px] pt-[74px]">
            <div class="col-span-6">
              <AnimateAppear :delay="400">
                <div>
                  <div class="text-white uppercase h3">Năm</div>
                  <div class="font-bold text-white uppercase h1 text-shadow-white mb-[3px]">
                    1937
                  </div>
                  <div class="my-[12px] bg-line-green w-[80px] h-[4px]"></div>
                  <div class="font-medium text-white">
                    Đèn huỳnh quang được trình diễn trước công chúng tại hội chợ quốc tế New York,
                    giải quyết sự thiếu hụt về năng lượng của thế kỷ 20
                  </div>
                </div>
              </AnimateAppear>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-[#020102] pt-[73px]">
        <div class="container">
          <div class="grid grid-cols-12 lg:gap-x-[32px] md:gap-x-[22px] gap-x-[16px]">
            <div class="col-span-full">
              <div class="flex items-center justify-center">
                <div>
                  <div class="font-bold text-white uppercase h1 text-shadow-white">
                    Nửa cuối thế kỷ 20
                  </div>
                  <div class="my-[24px] bg-line-green-2 w-full h-[6px]"></div>
                  <div class="font-medium text-center text-white">
                    Hàng loạt đèn LED được ra đời - thay đổi <br />
                    toàn bộ tương lai loài người
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 pt-[32px]">
            <AnimateAppear v-for="(item, index) in times" :key="index" :delay="index * 300">
              <div class="aspect-w-1 aspect-h-1">
                <JPicture :src="item.image" class="picture-cover" />
              </div>
              <div class="text-white text-center px-[12px] mt-[27px]">
                <div class="p2 font-extrabold mb-[12px]">{{ item.title }}</div>
                <div class="font-medium" v-html="item.description"></div>
              </div>
            </AnimateAppear>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <JIcon name="line-dot-mobile" />
        </div>
      </section>
      <section class="bg-mobile-4 relative pt-[52px]">
        <div class="container">
          <div class="mt-[32px] flex flex-col text-white items-center justify-center">
            <div class="font-bold uppercase h1 text-shadow-white">Thế kỷ 21</div>
            <div class="w-[165px] h-[5px] bg-line-green-2 mt-[12px] mb-[16px]"></div>
            <div class="text-center">
              Cuộc cách mạng ánh sáng xanh bắt đầu, tạo ra những thành phố không ngủ.
              <span class="font-medium"> Smart Lighting xuất hiện </span>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-[#020102]">
        <div class="container">
          <div class="flex flex-col space-y-[32px]">
            <div class="flex items-center space-x-[8px]" v-for="(time, idx) in timeline" :key="idx">
              <div class="w-4/12">
                <div class="aspect-w-1 aspect-h-1">
                  <JPicture :src="time.image" class="picture-cover" :alt="time.title" />
                </div>
              </div>
              <div class="flex items-center justify-center w-8/12 text-white">
                <div class="flex flex-col">
                  <div class="font-extrabold p1">{{ time.title }}</div>
                  <div class="w-full h-[3px] bg-line-green my-[8px]"></div>
                  <div class="font-medium">{{ time.description }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-[72px]"></div>
        </div>
      </section>
      <section class="bg-[#020102] pb-[48px]">
        <div class="circle-first"></div>
        <div class="circle-second"></div>
        <div class="container">
          <div class="grid grid-cols-8 gap-x-[8px]">
            <div class="col-span-6 col-start-2">
              <AnimateAppear :delay="400">
                <div class="text-white uppercase h3">Năm</div>
                <div class="font-bold text-white uppercase h1 text-shadow-white">2014</div>
                <div class="mt-[24px] bg-line-green w-full h-[6px]"></div>
                <div class="xl:mt-[48px] md:mt-[34px] mt-[24px] font-medium text-white">
                  Học thuyết Chiếu sáng vì sức khỏe con người (Human-centric Lighting) chính thức
                  được công nhận tại giải Nobel cao quý, đánh dấu bước ngoặt cho ngành chiếu sáng
                  thông minh.
                </div>
              </AnimateAppear>
            </div>
            <div class="col-span-full">
              <ColorMobile />
            </div>
          </div>
        </div>
      </section>
      <section class="bg-mobile-5">
        <div class="container">
          <div class="flex items-center justify-center flex-col pt-[93px]">
            <div class="text-center text-blue-300 h2">BẮT ĐẦU KỶ NGUYÊN SỐNG THÔNG MINH CÙNG</div>
            <div class="text-[32px] leading-[38px] font-display font-bold text-linear-2 my-[8px]">
              RALLISMART
            </div>
            <div class="w-[234px] h-[6px] bg-line-green-2"></div>
            <div class="xl:mt-[44px] md:mt-[31px] mt-[22px]">
              <JButton path="index" title="Khám phá" />
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- PC -->
    <div class="relative hidden md:block">
      <section
        class="bg-earth pt-[32px] pb-[100px] overflow-hidden relative section hidden md:block"
        id="hanh-trinh-kham-pha"
        name="Hành Trình Khám Phá"
      >
        <div class="container">
          <div class="pb-[22px] relative z-50">
            <NuxtLink to="/">
              <div class="w-[61px] h-[72px]">
                <JPicture src="/images/logo-welcome.png" />
              </div>
            </NuxtLink>
          </div>

          <div class="relative z-20 flex flex-col items-center justify-center">
            <div class="h2 text-white uppercase tracking-[4px]">Hành trình</div>
            <div class="w-[366px] h-[6px] bg-line-green-2 mt-[8px] mb-[24px]"></div>
            <h1 class="font-bold text-white uppercase h1 text-shadow-white">Khám phá ánh sáng</h1>
          </div>

          <div class="xl:mt-[76px] md:mt-[53px] mt-[38px]">
            <EarthAnimation />
          </div>
        </div>

        <div class="bg-linear-black bottom-[-10%] z-10"></div>
      </section>
      <div class="relative">
        <div
          class="absolute left-0 z-30 flex items-center justify-center w-full top-0 translate-y-[-90%] md:-translate-y-1/2"
        >
          <JIcon name="line-dot" />
        </div>
      </div>
      <section
        class="bg-earth-1 xl:pt-[64px] md:pt-[45px] pt-[32px] pb-[83px] overflow-hidden relative section"
        id="thoi-ky-do-da"
        name="Thời kỳ đồ đá"
      >
        <div class="bg-linear-black-2 top-[-28%] z-10"></div>
        <div class="container">
          <div class="relative">
            <div
              class="absolute top-[50%] left-[-20px] md:left-[96px] w-[195px] h-[105px] md:w-[240px] md:h-[240px] lg:w-[368px] lg:h-[287px] parallax z-40"
              data-speed="26"
            >
              <JPicture src="/images/welcome/earth-11.png" />
            </div>
            <div class="md:w-[715px] mx-auto pt-[49px]">
              <JPicture src="/images/welcome/earth-1.png" />
            </div>
            <div
              class="absolute bottom-[-50%] right-[-20px] md:right-[-80px] w-[133px] h-[133px] md:w-[423px] md:h-[289px] parallax z-40"
              data-speed="26"
            >
              <JPicture src="/images/welcome/earth-12.png" />
            </div>
          </div>
        </div>
        <div class="bg-linear-black bottom-[-12%] z-30">
          <div class="container">
            <AnimateAppear :delay="400">
              <div class="max-w-[250px] w-full h-full text-white mt-[96px]">
                <div>
                  Mặt trời là nguồn cung cấp ánh sáng duy nhất, con người dần quen định hình thời
                  gian và nhịp sống theo mặt trời.
                </div>
                <div class="mt-[20px] bg-line-green w-full h-[6px]"></div>
              </div>
            </AnimateAppear>
          </div>
        </div>
      </section>
      <section class="relative bg-earth-2 section" id="thoi-ky-tien-su" name="Thời kỳ tiền sử">
        <div class="bg-linear-black-2 top-[-23%] z-10"></div>
        <div class="relative top-0 left-0 z-20 flex items-center justify-center w-full">
          <JIcon name="line-dot" />
        </div>
        <div class="container h-full">
          <div class="grid grid-cols-12 gap-x-[20px] xl:gap-x-[32px]">
            <div class="flex items-end col-span-5 xl:col-span-4 xl:col-start-2">
              <AnimateAppear :delay="400">
                <div class="px-[12px] mb-[44px]">
                  <div class="font-bold text-white uppercase h1 text-shadow-white">
                    1,7 - 2 triệu
                  </div>
                  <div class="text-white uppercase h3">Năm trước</div>
                  <div class="mt-[24px] bg-line-green w-full h-[6px]"></div>
                  <div class="xl:mt-[48px] md:mt-[34px] mt-[24px] font-medium text-white">
                    Lửa xuất hiện trong cuộc sống của con người từ chiếu sáng, nấu nướng hay xua
                    đuổi thú dữ. Từ đó, họ liên tục tìm kiếm các giải pháp để duy trì ánh lửa vào
                    ban đêm như củi, nến, đèn dầu,...
                  </div>
                </div>
              </AnimateAppear>
            </div>
            <div class="flex items-end col-span-7">
              <div class="relative w-full">
                <div class="w-full transform translate-y-[72px]">
                  <JPicture src="/images/welcome/earth-2.png" class="picture-cover" />
                </div>
                <div
                  class="absolute bottom-[16%] xl:bottom-0 left-[-80px] z-30 w-[200px] xl:w-[284px] translate-y-[50%]"
                >
                  <JPicture src="/images/welcome/earth-22.png" />
                </div>
                <div class="absolute bottom-[-50%] right-[-20px] z-30 parallax" data-speed="26">
                  <JPicture src="/images/welcome/earth-21.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="phat-minh-ra-bong-den"
        name="Phát minh ra bóng đèn"
        class="section bg-earth-3 lg:py-[83px] md:py-[58px] py-[42px]"
      >
        <div class="container">
          <div class="mx-auto w-max translate-y-[-32%]">
            <JIcon name="line-dot" />
          </div>
          <div class="grid grid-cols-12 gap-x-[32px] relative">
            <div class="col-span-10 col-start-3 flex space-x-[32px]">
              <div class="max-w-[591px] max-h-[598px] w-full h-full">
                <JPicture src="/images/welcome/edison.jpg" class="picture-cover" />
              </div>

              <div class="max-w-[334px] w-full flex items-end">
                <AnimateAppear :delay="400">
                  <div class="text-white uppercase h3">Năm</div>
                  <div class="font-bold text-white uppercase h1 text-shadow-white">1879</div>
                  <div class="mt-[24px] bg-line-green w-full h-[6px]"></div>
                  <div class="xl:mt-[48px] md:mt-[34px] mt-[24px] font-medium text-white">
                    Thomas Edison thành công sáng tạo ra bóng đèn dây tóc sợi đốt đầu tiên, đánh dấu
                    mốc son quan trọng trong lịch sử loài người, xóa dần khoảng cách giữa ngày và
                    đêm.
                  </div>
                </AnimateAppear>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-earth-5 lg:py-[83px] md:py-[58px] py-[42px] relative xl:block hidden">
        <div class="top-[-36%] xl:top-[-23%] z-10 bg-linear-black-2"></div>
        <div class="container">
          <div class="grid grid-cols-12 gap-x-[32px]">
            <div class="col-span-8">
              <div class="grid grid-cols-8 gap-x-[32px] relative">
                <div class="col-span-3 col-start-2">
                  <div
                    class="w-full xl:h-[280px] bg-[#000] rounded-full translate-y-full relative overflow-hidden aspect-w-1 aspect-h-1"
                    ref="location"
                  >
                    <div
                      id="shadowTail"
                      class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-30%] w-full flex items-center justify-center"
                    >
                      <JPicture src="/images/welcome/shadow-tail.png" />
                    </div>
                  </div>
                </div>
                <div class="col-span-4 translate-x-[-6%] translate-y-[4%]">
                  <div>
                    <div class="relative">
                      <div id="zoom">
                        <JPicture
                          src="/images/welcome/tail-lamp-circle.png"
                          class="circle-tail-lamp"
                        />
                      </div>
                      <div
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-51%] w-[210px] xl:w-[290px]"
                        id="fadeImage"
                      >
                        <JPicture src="/images/welcome/tail-lamp.png" />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="dot-line" class="step-wrapper">
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
                    <circle id="dot-scroll" cx="24.0004" cy="100" r="4.36364" fill="#07BD89" />
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
      </section>

      <section class="bg-earth-5 lg:py-[83px] md:py-[58px] py-[42px] lg:hidden md:block hidden">
        <div class="container">
          <div class="grid grid-cols-8 gap-x-[8px]">
            <div class="col-span-6 col-start-2">
              <div class="relative w-max mx-auto">
                <div>
                  <JPicture src="/images/welcome/tail-lamp-circle.png" class="circle-tail-lamp" />
                </div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%]">
                  <JPicture src="/images/welcome/tail-lamp.png" />
                </div>
              </div>
            </div>
            <div class="col-span-6 col-start-2">
              <AnimateAppear :delay="400">
                <div>
                  <div class="text-white uppercase h3">Năm</div>
                  <div class="font-bold text-white uppercase h1 text-shadow-white mb-[3px]">
                    1937
                  </div>
                  <div class="my-[12px] bg-line-green w-[80px] h-[4px]"></div>
                  <div class="font-medium text-white">
                    Đèn huỳnh quang được trình diễn trước công chúng tại hội chợ quốc tế New York,
                    giải quyết sự thiếu hụt về năng lượng của thế kỷ 20
                  </div>
                </div>
              </AnimateAppear>
            </div>
          </div>
        </div>
      </section>
      <section
        class="bg-earth-6 xl:py-[83px] md:py-[58px] py-[42px] relative section"
        id="den-huynh-quang"
        name="Đèn huỳnh quang"
      >
        <div class="container h-full">
          <div class="grid grid-cols-12 gap-x-[32px] h-full">
            <div class="flex items-center justify-center col-span-5 col-start-2 xl:col-span-5">
              <AnimateAppear :delay="400">
                <div class="text-white uppercase h3">Năm</div>
                <div class="font-bold text-white uppercase h1 text-shadow-white">1937</div>
                <div class="mt-[24px] bg-line-green w-full h-[6px]"></div>
                <div class="xl:mt-[48px] md:mt-[34px] mt-[24px] font-medium text-white">
                  Đèn huỳnh quang được trình diễn trước công chúng tại hội chợ quốc tế New York,
                  giải quyết sự thiếu hụt về năng lượng của thế kỷ 20
                </div>
              </AnimateAppear>
            </div>
          </div>
        </div>
      </section>
      <section
        class="bg-[#020102] xl:py-[56px] md:py-[39px] py-[28px] section"
        id="den-led"
        name="Đèn LED"
      >
        <div class="container">
          <div class="grid grid-cols-12 lg:gap-x-[32px] md:gap-x-[22px] gap-x-[16px]">
            <div class="col-span-8 col-start-3 xl:col-span-6 xl:col-start-4">
              <div class="flex items-center justify-center">
                <div>
                  <div class="font-bold text-white uppercase h1 text-shadow-white">
                    Nửa cuối thế kỷ 20
                  </div>
                  <div class="my-[24px] bg-line-green-2 w-full h-[6px]"></div>
                  <div class="font-medium text-center text-white">
                    Hàng loạt đèn LED được ra đời - thay đổi <br />
                    toàn bộ tương lai loài người
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-4 pt-[51px]">
            <AnimateAppear v-for="(item, index) in times" :key="index" :delay="index * 300">
              <div class="aspect-w-1 aspect-h-1">
                <JPicture :src="item.image" class="picture-cover" />
              </div>
              <div class="text-white text-center px-[12px] mt-[27px]">
                <div class="p2 font-extrabold mb-[12px]">{{ item.title }}</div>
                <div class="font-medium" v-html="item.description"></div>
              </div>
            </AnimateAppear>
          </div>
        </div>
      </section>
      <section id="the-ky-21" name="Thế kỷ 21" class="section relative bg-earth-7">
        <div class="bg-linear-black-3 top-[-19%] z-10"></div>
        <div class="container">
          <div class="relative z-30">
            <div class="mx-auto w-max xl:mb-[57px]">
              <JIcon name="line-dot" />
            </div>
            <div class="grid grid-cols-12 xl:gap-x-[32px] md:gap-x-[22px] gap-x-[16px]">
              <div class="col-span-8 col-start-3 xl:col-span-6 xl:col-start-4">
                <div class="flex flex-col items-center justify-center text-center">
                  <div class="font-bold text-white uppercase h1 text-shadow-white">Thế kỷ 21</div>
                  <div
                    class="xl:mt-[24px] md:mt-[17px] mt-[12px] mb-[32px] bg-line-green-2 w-[366px] h-[6px]"
                  ></div>
                  <div class="text-white p2">
                    Cuộc cách mạng ánh sáng xanh bắt đầu, tạo ra những
                    <br class="hidden xl:block" />
                    thành phố không ngủ. <span class="font-bold">Smart Lighting xuất hiện</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="dong-thoi-gian"
        name="Dòng thời gian"
        class="bg-[#020102] xl:py-[56px] md:py-[39px] py-[28px] relative overflow-hidden section"
      >
        <div class="w-[998px] h-[998px] bg-linear-circle"></div>
        <div class="container">
          <Timeline />
          <div class="">
            <div class="grid grid-cols-12 xl:gap-x-[32px] md:gap-x-[22px] gap-x-[16px]">
              <div
                class="col-span-6 col-start-2 xl:col-start-2 xl:col-span-4 flex items-end xl:mb-[64px] md:mb-[45px] mb-[32px]"
              >
                <div class="relative z-10">
                  <div class="text-white uppercase h3">Năm</div>
                  <div class="font-bold text-white uppercase h1 text-shadow-white">2014</div>
                  <div class="mt-[24px] bg-line-green w-full h-[6px]"></div>
                  <div class="xl:mt-[48px] md:mt-[34px] mt-[24px] font-medium text-white">
                    Học thuyết Chiếu sáng vì sức khỏe con người (Human-centric Lighting) chính thức
                    được công nhận tại giải Nobel cao quý, đánh dấu bước ngoặt cho ngành chiếu sáng
                    thông minh.
                  </div>
                </div>
              </div>
              <div class="col-span-full xl:col-span-7 flex items-center justify-center">
                <Color />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-footer">
        <div class="container">
          <div class="flex items-center justify-center flex-col pt-[93px]">
            <div class="text-blue-300 h3">BẮT ĐẦU KỶ NGUYÊN SỐNG THÔNG MINH CÙNG</div>
            <div class="h2 font-bold text-linear-2 my-[8px]">RALLISMART</div>
            <div class="w-[234px] h-[6px] bg-line-green-2"></div>
            <div class="xl:mt-[44px] md:mt-[31px] mt-[22px]" @click="setCookie">
              <JButton title="Khám phá" />
            </div>
          </div>
        </div>
      </section>
      <div
        @click="setCookie"
        class="cursor-pointer fixed bottom-[32px] right-[20px] z-[200] md:block hidden"
      >
        <div
          class="uppercase text-white hover:text-green-50 hover:font-bold hover:tracking-[4px] duration-200"
        >
          Về trang chủ
        </div>
      </div>
      <div
        class="fixed top-1/2 -translate-y-1/2 left-[5px] xl:left-[20px] z-[9999] lg:block hidden"
      >
        <GradientLoader />
      </div>
      <!-- >=1440 -->
      <div id="light-switch" class="absolute z-50 w-full">
        <div class="container h-full">
          <div class="relative flex flex-col items-center w-max ml-[84px] xl:ml-[100px] h-[96%]">
            <div
              class="bg-no-repeat bg-contain buld sticky z-[105] top-[250px]"
              :class="open ? 'light-on' : 'light-off'"
            ></div>
            <div class="flex items-center space-x-[12px] text-white relative z-[250]">
              <div class="hidden md:block">Tắt đèn</div>
              <label class="switch">
                <input v-model="open" class="switch__input" type="checkbox" />
                <span class="switch__span"></span>
              </label>
              <div class="hidden md:block">Bật đèn</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SocialMeta
      title="RalliSmart - Hành trình khám phá ánh sáng của con người"
      description="Cùng RalliSmart tìm hiểu hành trình khám phá ánh sáng của con người từ quá khứ, hiện tại và tương lai."
    />
  </main>
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import { parallax } from '@/lib/parallax.js'
import LightSwitchLg from '../components/LightSwitchLg.vue'

export default {
  name: 'welcome',
  layout: 'blank',
  components: {
    KinesisContainer,
    KinesisElement,
    LightSwitchLg,
  },
  data() {
    return {
      timeline: [
        {
          image: '/images/welcome/light-mobile-1.png',
          title: '20 năm trước',
          description: 'đèn hẹn giờ là một cải tiến vượt bậc',
        },
        {
          image: '/images/welcome/light-mobile-2.png',
          title: '15 năm trước',
          description: 'đèn cảm ứng chuyển động được coi là thực sự thông minh',
        },
        {
          image: '/images/welcome/light-mobile-3.png',
          title: '10 năm trước',
          description: 'đèn cảm biến ánh sáng là một phát minh tuyệt vời...',
        },
      ],
      times: [
        {
          image: '/images/welcome/image-1961.jpg',
          title: 'NĂM 1961',
          description: 'Đèn LED phát hồng ngoại ra đời',
        },
        {
          image: '/images/welcome/image-1962.jpg',
          title: 'NĂM 1962',
          description:
            'Đèn LED phát ánh sáng đỏ <br class="hidden xl:block" /> đầu tiên được phát triển',
        },
        {
          image: '/images/welcome/image-1972.jpg',
          title: 'NĂM 1972',
          description:
            'Đèn LED phát ánh sáng vàng <br class="hidden xl:block" /> với cường độ sáng gấp 10 lần',
        },
        {
          image: '/images/welcome/image-1976.jpg',
          title: 'NĂM 1976',
          description:
            'Đèn LED hiệu suất cao ứng <br class="hidden xl:block" /> dụng cho lĩnh vực thông tin liên <br class="hidden xl:block" /> lạc bằng sợi quang.',
        },
      ],
      open: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', () => parallax('.parallax'))
    window.addEventListener('scroll', this.setSectionLightSwitch)
    const self = this
    window.addEventListener('resize', function () {
      self.sizeScreen = self.$getWindowSize()
    })
    this.sizeScreen = this.$getWindowSize()
  },
  destroyed() {
    window.removeEventListener('scroll', this.setSectionLightSwitch)
    window.removeEventListener('scroll', () => parallax('.parallax'))
  },

  methods: {
    setSectionLightSwitch() {
      const mySection = document.getElementById('phat-minh-ra-bong-den')
      const offSetTop = mySection.offsetTop

      const dot = document.getElementById('dot-scroll')
      const dotLine = document.getElementById('dot-line')
      const zoom = document.getElementById('zoom')
      const fadeImage = document.getElementById('fadeImage')
      const shadowTail = document.getElementById('shadowTail')
      const offSetTopDot = this.getOffsetTop(dot)

      const myPosition = window.scrollY + 580
      if (this.open) {
        shadowTail.classList.add('shadowTail-active')
      }

      if (myPosition >= offSetTopDot + 80) {
        dotLine.classList.add('move-line')
        zoom.classList.add('animation-zoom')
        fadeImage.classList.add('animation-fade')
        this.open = true
      }

      const lightSwitch = document.getElementById('light-switch')
      lightSwitch.style.top = offSetTop + 400 + 'px'
      lightSwitch.style.height = offSetTopDot - offSetTop - 320 + 'px'
    },

    getOffsetTop(el) {
      const rect = el.getBoundingClientRect()
      return rect.top + window.scrollY
    },

    setCookie() {
      this.$cookies.set('home', true)
      this.$router.push({ name: 'index' })
    },
  },
}
</script>

<style lang="scss" scoped>
.bg-mobile-1 {
  background: url('../static/images/welcome/bg-mobile-1.jpg') no-repeat;
  background-size: cover;
  background-position: top;
}
.bg-mobile-2 {
  background: url('../static/images/welcome/bg-mobile-2.jpg') no-repeat;
  background-size: cover;
  background-position: center;
}

.bg-mobile-4 {
  background: url('../static/images/welcome/bg-mobile-4.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  @apply h-[563px];
}

.bg-mobile-3 {
  background: url('../static/images/welcome/bg-mobile-3.png') no-repeat;
  background-size: cover;
  background-position: center;
  @apply h-[670px];
}

.bg-mobile-5 {
  background: url('../static/images/welcome/bg-mobile-5.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  @apply h-[561px];
}

.bg-earth {
  background: url('../static/images/welcome/bg-earth.jpg') no-repeat;
  background-size: cover;
  background-position: center;
}

.bg-earth-1 {
  background: url('../static/images/welcome/bg-earth-1.jpg') no-repeat;
  background-size: cover;
  background-position: center;
}
.bg-earth-2 {
  background: url('../static/images/welcome/bg-earth-2.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  @apply xl:h-[835px];
}

.bg-earth-6 {
  background: url('../static/images/welcome/bg-earth-6.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  @apply h-[865px];
}

.bg-earth-7 {
  background: url('../static/images/welcome/bg-earth-7.jpg') no-repeat;
  background-size: cover;
  @apply h-[600px] xl:h-[900px];
  @screen lg {
    background-attachment: fixed;
  }
}

.bg-linear-black {
  @apply w-full h-[300px] absolute;
  background: linear-gradient(180deg, rgba(1, 3, 4, 0) 0%, #04080e 64.77%, rgba(1, 3, 4, 0) 100%);
  @screen 2xl {
    @apply w-full h-[370px] absolute;
    background: linear-gradient(180deg, rgba(1, 3, 4, 0) 0%, #04080e 64.77%, rgba(1, 3, 4, 0) 100%);
  }
}
.bg-linear-black-2 {
  @apply w-full h-[300px] absolute;
  background: linear-gradient(180deg, rgba(1, 3, 4, 0) 0%, #04080e 64.77%, rgba(1, 3, 4, 0) 100%);
}

.bg-linear-black-3 {
  @apply w-full h-[200px] xl:h-[320px] absolute;

  background: linear-gradient(
    180deg,
    rgba(4, 53, 66, 0) 0%,
    #04080e 53.19%,
    rgba(72, 85, 89, 0) 100%
  );
}

.bg-linear-circle {
  background: linear-gradient(89.92deg, #07bd89 2.93%, #006e8c 51.07%, #013a46 99.92%);
  filter: blur(500px);
  transform: rotate(-45deg);
  @apply absolute left-[-45%] top-[40%];
}

.bg-line-green-rotate {
  background: linear-gradient(90.19deg, rgba(7, 189, 137, 0) 0.16%, #07bd89 96.72%);
}
.bg-footer {
  background: url('../static/images/welcome/bg-footer.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  @apply h-[400px] xl:h-[810px];
  @screen lg {
    background-attachment: fixed;
  }
}

.star0 {
  height: 1px;
  width: 1px;
  opacity: 1;
  position: absolute;
}

.hero {
  display: inline-block;
  width: 100%;
}

.shadow-white {
  filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.8))
    drop-shadow(0px 4px 100px rgba(0, 0, 0, 0.8));
}
.circle-first {
  background: linear-gradient(89.92deg, #07bd89 2.93%, #006e8c 51.07%, #013a46 99.92%);
  filter: blur(146.244px);
  transform: rotate(-45deg);
}

.circle-second {
  background: linear-gradient(89.92deg, #07bd89 2.93%, #006e8c 51.07%, #013a46 99.92%);
  filter: blur(146.244px);
  transform: rotate(-45deg);
}
</style>

<style lang="scss" scoped>
input:checked {
  .switch & {
    background: linear-gradient(89.92deg, #07bd89 2.93%, #006e8c 51.07%, #013a46 99.92%);
  }
}

.switch {
  @apply border border-white relative w-[56px] h-[30px] md:w-[60px] md:h-[34px] bg-gray-300 rounded-full cursor-pointer z-[100];
  &__span {
    @apply absolute top-1/2 -translate-y-1/2 left-[2px] w-[24px] h-[24px] md:w-[28px] md:h-[28px] bg-white rounded-full  z-[100];
    transition: 0.5s;
  }
}

.switch input:checked ~ span {
  @apply left-[28px];
}
input:checked ~ .switch {
  background: linear-gradient(89.92deg, #07bd89 2.93%, #006e8c 51.07%, #013a46 99.92%);
}

input {
  @apply hidden;
}

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

#zoom {
  transform: scale(0);
}

#fadeImage {
  opacity: 0;
}
.animation-zoom {
  animation: fade-in 0.8s ease-in-out forwards;
  animation-delay: 1.5s;
}

.animation-fade {
  animation: fade 0.8s ease-in-out forwards;
  animation-delay: 2s;
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

@keyframes fade-in {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
#shadowTail {
  opacity: 0;
}

.shadowTail-active {
  animation: fade 0.6s ease-in-out forwards;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@screen lg {
  .step-wrapper {
    @apply w-[300px] relative z-[80];
    transform: translate(54%, -40%);
  }
  .buld {
    @apply w-[210px] h-[210px] pointer-events-none;
    transition: 0.6s;
  }

  .switch input:checked ~ .buld {
    @apply w-[210px] h-[210px];
  }

  .light-on {
    background: url('../static/images/welcome/light-on-lg.png');
  }

  .light-off {
    background: url('../static/images/welcome/light-off-lg.png');
  }
}

@screen xl {
  .step-wrapper {
    @apply w-[450px] relative z-[80];
    transform: translate(54%, -40%);
  }

  .buld {
    @apply w-[330px] h-[330px] pointer-events-none;
    transition: 0.6s;
  }

  .switch input:checked ~ .buld {
    @apply w-[330px] h-[330px];
  }

  .light-on {
    background: url('../static/images/welcome/light-on.png');
  }

  .light-off {
    background: url('../static/images/welcome/light-off.png');
  }
}
</style>
