<template>
  <main class="sm:mt-[70px] lg:mt-0">
    <section>
      <!-- PC -->
      <div class="relative md:block hidden">
        <img src="/images/wiki-app/bg-banner.jpg" class="w-full h-full absolute" />
        <img
          src="/images/wiki-app/banner_shape_bottom.png"
          class="absolute bottom-0 right-0 left-0 w-full max-h-[284.5px]"
        />

        <div class="container pt-[60px] xl:pt-[142px] pb-[46px] relative">
          <img
            src="/images/wiki-app/blur-white-shape.png"
            class="absolute right-0 top-0 md:block hidden"
          />
          <div class="grid grid-cols-12 gap-[32px]">
            <div class="col-span-full md:col-span-7 relative">
              <div class="relative inline-block">
                <JPicture src="/images/wiki-app/banner_phone.png" />
                <img
                  src="/images/wiki-app/banner-shape-bottom-phone.png"
                  class="absolute bottom-0 left-0 transform translate-y-2/3"
                />
              </div>
              <JPicture
                src="/images/wiki-app/sound_machine.png"
                class="inline-block transform translate-y-[24px]"
              />
            </div>

            <div class="col-span-full md:col-span-5 xl:pt-[54px] relative">
              <div class="inline-block mb-6 relative">
                <h1
                  class="md:text-[32px] lg:text-[40px] xl:text-[48px] leading-[120%] font-display font-bold uppercase text-shadow text-linear-2 mb-6"
                >
                  APP RalliSmart
                </h1>
                <div class="line-2 w-full h-[6px]"></div>
              </div>

              <div class="font-medium text-[#111111] relative">
                RalliSmart cung cấp hai ứng dụng miễn phí phù hợp với nhu cầu của khách hàng. Ứng
                dụng mang lại trải nghiệm chân thực về cuộc sống thông minh, hiện đại và mang tính
                tương lai.
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile -->
      <div class="relative md:hidden">
        <img
          src="/images/wiki-app/banner-bg-mobile.jpg"
          class="w-full h-full object-cover max-sm:object-top absolute"
        />
        <img
          src="/images/wiki-app/banner-shape-mobile.png"
          class="w-full h-full object-cover object-bottom absolute bottom-0"
        />
        <!--  -->
        <div class="container py-[36px] px-[20px] relative">
          <div class="grid grid-cols-1 gap-y-[32px]">
            <div class="col-span-full">
              <div class="inline-block mb-3 relative">
                <h1
                  class="banner__title--mobile text-[32px] sm:text-[40px] leading-[120%] font-display font-bold uppercase text-shadow text-linear-2 mb-3"
                >
                  APP RalliSmart
                </h1>
                <div class="line-2 w-full h-[6px]"></div>
              </div>

              <div class="font-medium text-[#111111] relative">
                RalliSmart cung cấp hai ứng dụng miễn phí phù hợp với nhu cầu của khách hàng. Ứng
                dụng mang lại trải nghiệm chân thực về cuộc sống thông minh, hiện đại và mang tính
                tương lai.
              </div>
            </div>
            <div class="col-span-full relative">
              <div class="flex items-end">
                <img src="/images/wiki-app/banner_phone-moblie.png" />
                <img src="/images/wiki-app/sound_machine-moblie.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="grid grid-cols-12 xl:gap-[32px] md:gap-[22px] gap-[16px]">
          <div class="lg:col-start-2 col-span-full lg:col-span-10">
            <div class="xl:py-[56px] md:py-[39px] py-[28px]">
              <div class="flex flex-col items-center lg:space-y-[16px] space-y-[8px]">
                <h3 class="h3 font-normal text-blue-100 uppercase">lựa chọn</h3>
                <h2 class="font-bold uppercase h2 text-shadow text-linear-2">ứng dụng phù hợp</h2>
                <div class="line w-[366px] h-[6px] m-auto"></div>
              </div>
              <div class="xl:mt-[48px] md:mt-[34px] mt-[24px]">
                <TableWiki />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="xl:py-[56px] md:py-[39px] py-[28px] bg-gray-100">
      <div class="container">
        <div class="md:max-w-[491px]">
          <div class="flex flex-col space-y-[8px]">
            <h2 class="font-bold uppercase md:w-auto w-[70%] h2 text-shadow text-linear-2">
              thư viện chiếu sáng
            </h2>
            <div class="line-2 md:w-[366px] h-[6px]"></div>
          </div>
          <p class="font-medium mt-[20px]">
            APP RalliSmart được thiết lập 12 cảnh sáng đa dạng, giúp khách hàng sử dụng nhanh chóng,
            được thiết kế bởi chuyên gia chiếu sáng.
          </p>
        </div>
      </div>
      <SliderWiki />
    </section>
    <section class="assistant-banner">
      <div class="xl:py-[75px] md:py-[52px] py-[32px]">
        <div class="container">
          <div class="flex md:flex-row flex-col md:justify-between md:items-end">
            <div class="flex-shrink-0 flex flex-col space-y-[8px] md:mr-[148px] lg:mr-0">
              <h3 class="h3 font-normal text-white uppercase">tích hợp</h3>
              <h2 class="font-bold uppercase h2 text-shadow-2 text-white">cùng trợ lý ảo</h2>
              <div class="line-2 h-[6px]"></div>
            </div>

            <div class="text-white max-w-[489px]">
              Chức năng tích hợp trợ lý ảo chỉ áp dụng với app RalliSmart V2, nhằm quản lý toàn bộ
              ngôi nhà với các
            </div>
          </div>
          <div class="lg:mt-[62px] md:mt-[43px] mt-[31px]">
            <div class="grid lg:grid-cols-4 grid-cols-2 xl:gap-x-[32px] gap-x-[16px]">
              <BoxService v-for="(item, index) in BoxService" :key="index" :item="item" />
            </div>
            <div class="flex items-center justify-center lg:mt-[56px] md:mt-[39px] mt-[28px]">
              <JButton title="TÌM HIỂU THÊM" variant="primary" icon="DoubleRight" path="faq" />
            </div>
          </div>
          <div class="lg:mt-[64px] md:mt-[45px] mt-[32px]">
            <div class="rounded-[16px] overflow-hidden">
              <div class="md:block hidden">
                <JPicture src="images/wiki-app/digital-tablet.jpg" class="picture-cover" />
              </div>
              <div class="md:hidden block">
                <JPicture src="images/wiki-app/digital-tablet-mobile.jpg" class="picture-cover" />
              </div>
            </div>
          </div>
          <div class="xl:mt-[96px] md:mt-[67px] mt-[48px]">
            <div class="flex flex-col items-center space-y-[8px]">
              <h3 class="h3 font-normal text-white uppercase">CÂU HỎI THƯỜNG GẶP VỀ</h3>
              <h2 class="font-bold uppercase text-white h2 text-shadow">APP RalliSmart</h2>
              <div class="line w-[366px] h-[6px] m-auto"></div>
            </div>
            <div class="xl:mt-[48px] md:mt-[34px] mt-[24px]">
              <div class="max-w-[806px] min-h-[335px] m-auto">
                <TabsQuestion :items="Questions" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <SocialMeta :title="SocialMeta.title" :description="SocialMeta.description" />
  </main>
</template>
<script>
export default {
  data() {
    return {
      SocialMeta: {
        title: 'APP RalliSmart - Điều khiển ánh sáng thông minh trong một lần chạm',
        description:
          'APP RalliSmart được tích hợp với hệ thống đèn và thiết bị điện trong gia đình, tạo trải nghiệm tối ưu cho người dùng chỉ trong một lần chạm.',
      },
      BoxService: [
        {
          name: 'Google Assistant',
          icon: '/images/wiki-app/google.png',
        },
        {
          name: 'Amazon Alexa',
          icon: '/images/wiki-app/amazone.png',
        },
        {
          name: 'Olli Maika',
          icon: '/images/wiki-app/olli.png',
        },
        {
          name: 'FPT Play BoxS',
          icon: '/images/wiki-app/fpt.png',
        },
      ],
      Questions: [
        {
          name: 'App RalliSmart có thể sử dụng trong trường hợp nào?',
          slug: '1',
          answer:
            'APP RalliSmart có thể tích hợp với hệ thống thiết bị chiếu sáng thông qua bộ điểu khiển trung tâm HC, các thiết bị điện khác như TV, điều hoà, rèm cửa,... thông qua bộ điều khiển IR và tích hợp trợ lý ảo như Google Assistant, Maiko, Alexa, Playbox S4.',
        },
        {
          name: 'APP RalliSmart có dễ sử dụng không?',
          slug: '2',
          answer:
            'Tại thời điểm thiết lập hệ thống ban đầu, khách hàng có thể gặp một số khó khăn. Tuy nhiên, RalliSmart đã lên series các <a class="text-green-50" href="https://www.youtube.com/watch?v=FyqLhNFoSlg&list=PLMCgXPqF8h9T5xzRMJJOxdV4-ajsAmCrR" target="_blank">video Hướng dẫn sử dụng </a> để khách hàng tham khảo. Bên cạnh đó, đội ngũ tư vấn của RalliSmart luôn sẵn sàng hỗ trợ khách hàng khi cần thiết.',
        },
        {
          name: '3 bước đơn giản cài đặt App RalliSmart',
          slug: '3',
          answer: `
            Bước 1: Truy cập Appstore hoặc CH Play và tìm kiếm từ khoá RalliSmart <br/>
            Bước 2: Chọn tải xuống app RalliSmart và chờ máy cài đặt <br/>
            Bước 3 Mở app lên và chọn Đăng ký tài khoản để sử dụng (điều khiển đèn thông minh) <br/>
            Để trải nghiệm tiện nghi điều khiển qua smartphone của hệ thống đèn Rallismart, mời bạn truy cập: <a class="text-green-50" href="http://bit.ly/dk-smart-phone" target="_blank">http://bit.ly/dk-smart-phone</a>
            `,
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.text-shadow {
  text-shadow: 0px 4px 20px rgba(181, 252, 235, 0.82);
}
.text-shadow-2 {
  text-shadow: 0px 4px 43px rgba(181, 218, 252, 0.82);
}
.line {
  background: linear-gradient(
    89.98deg,
    rgba(7, 189, 137, 0) 0%,
    #07bd89 50.1%,
    rgba(7, 189, 137, 0) 100%
  );
}
.line-2 {
  background: linear-gradient(89.99deg, #07bd89 0.01%, rgba(7, 189, 137, 0) 82.65%);
}

.assistant-banner {
  background-image: url('/images/wiki-app/assistant-banner.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.banner__title--mobile {
  text-shadow: 0px 4px 43px rgba(181, 218, 252, 0.82);
}
</style>
