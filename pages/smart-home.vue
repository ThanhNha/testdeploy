<template>
  <main class="lg:mt-0 md:mt-[72px]">
    <JBanner
      img="/images/smart-home/banner.jpg"
      className="w-full h-[30vh] md:h-[calc(70vh-var(--header-height-md))] xl:h-[calc(100vh-var(--header-height-lg))]"
    />

    <section class="xl:pt-[72px] xl:pb-[54px] md:py-[50px] py-[36px]">
      <div class="container">
        <div class="grid grid-cols-12 xl:gap-x-[32px] md:gap-x-[22px] gap-y-[16px]">
          <div class="col-span-full lg:col-span-6">
            <div class="flex flex-col md:items-start items-center text-center md:text-left">
              <div class="h3 text-blue-100 uppercase">Giải pháp toàn diện</div>
              <div class="h2 font-bold uppercase text-linear-2 my-[4px]">
                Cho ngôi nhà <br class="xl:hidden lg:block hidden" />
                của bạn
              </div>
              <div class="w-[528px] h-[6px] bg-line-green md:block hidden"></div>
              <div class="w-full h-[6px] bg-line-green-2 md:hidden block"></div>
            </div>
            <div
              class="xl:mt-[32px] md:mt-[22px] mt-[16px] font-medium text-black text-center md:text-left"
            >
              Không chỉ là chiếu sáng, RalliSmart hình thành phong cách sống lành mạnh với giải pháp
              chiếu sáng thông minh vì sức khỏe con người.
            </div>
            <AnimateAppear class="xl:mt-[40px] md:mt-[28px] mt-[20px] lg:mx-0 md:mx-[96px]">
              <JPicture src="/images/smart-home/house.jpg" class="picture-cover" />
            </AnimateAppear>
          </div>
          <div class="col-span-full lg:col-span-6">
            <div
              class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:gap-[32px] md:gap-[22px] gap-[8px]"
            >
              <AnimateAppear
                v-for="(solution, index) in solutions"
                :key="index"
                :delay="index * 300"
              >
                <div class="full-withradius border">
                  <JIcon :name="solution.icon" class="icon" />
                  <div class="font-semibold my-[8px] text-black">{{ solution.title }}</div>
                  <div class="text-black">{{ solution.description }}</div>
                </div>
              </AnimateAppear>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- nhando -->
    <section>
      <div class="container">
        <div class="grid grid-cols-12 xl:gap-x-[32px] md:gap-x-[22px] gap-y-[16px] xl:gap-y-0">
          <div class="col-span-full xl:col-span-4">
            <AnimateAppear>
              <div class="h3 text-blue-100 uppercase md:text-left text-center">
                Trải nghiệm ánh sáng
              </div>

              <div>
                <div class="h2 font-bold uppercase text-linear-2 my-[4px] md:text-left text-center">
                  Theo phòng
                </div>
                <div class="w-[400px] h-[6px] bg-line-green md:block hidden"></div>
                <div class="w-full h-[6px] bg-line-green-2 md:hidden block"></div>
              </div>
            </AnimateAppear>
          </div>
          <div
            class="col-span-full xl:col-span-7 xl:col-start-6 flex items-end xl:space-x-[16px] md:space-x-[10px]"
          >
            <div
              class="py-[10px] xl:px-[10px] md:px-[8px] px-[8px] rounded-full w-max cursor-pointer hover:text-green-100 duration-200 md:block hidden"
              v-for="(room, indexR) in rooms"
              :key="indexR"
              @click="getRoom(room)"
              :class="
                currentRoom.id === indexR + 1 ? 'bg-[#EBF9F5] text-green-100' : 'text-gray-600'
              "
            >
              <div class="p2 font-semibold">{{ room.title }}</div>
            </div>

            <div class="bg-white md:hidden block relative w-full">
              <div
                class="py-[12px] px-[12px] cursor-pointer uppercase rounded-sm w-full font-semibold bg-white text-green-50 border border-green-50 duration-150"
                @click="isToggleCurrent = !isToggleCurrent"
              >
                {{ currentRoom.title }}
              </div>

              <div
                class="w-full absolute bg-white rounded border border-green-50 z-10"
                :class="isToggleCurrent ? 'block visited: ' : 'hidden invisible'"
              >
                <div
                  class="py-[12px] px-[12px] uppercase w-full font-semibold text-green-50"
                  @click="getRoom(item)"
                  v-for="(item, idx) in rooms"
                  :key="idx"
                >
                  {{ item.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:mt-[32px] md:mt-[22px] mt-[16px]">
          <div class="bg-style">
            <div
              class="duration-200"
              :class="isZoom ? 'fixed top-0 left-0 w-[99vw] h-screen z-[9999]' : 'relative'"
            >
              <iframe
                :src="currentRoom.href"
                frameborder="0"
                :class="isZoom ? 'w-[99vw] h-screen' : 'w-full h-[720px]'"
              ></iframe>
              <div class="absolute top-[12px] right-[1%]">
                <div
                  class="bg-white text-green-50 hover:bg-green-50 hover:text-white py-[8px] px-[12px] font-bold cursor-pointer rounded"
                  @click="zoom"
                >
                  {{ isZoom ? 'Thu nhỏ' : 'Phóng to' }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="xl:py-[72px] md:py-[50px] py-[36px]">
      <div class="container">
        <div class="grid grid-cols-12 xl:gap-x-[32px] md:gap-x-[22px] gap-x-[16px]">
          <div class="col-span-full md:col-span-8 md:col-start-3">
            <div class="text-center flex flex-col items-center justify-center">
              <div class="h3 text-blue-100 uppercase">Khách hàng nói gì</div>
              <div class="h2 font-bold uppercase text-linear-2 my-[8px]">
                VỀ Smart Home của RalliSmart?
              </div>
              <div class="w-full md:w-[366px] h-[6px] bg-line-green-2"></div>
            </div>
          </div>
        </div>
        <div
          class="xl:mt-[48px] md:mt-[34px] mt-[24px] grid grid-cols-1 md:grid-cols-2 xl:gap-x-[32px] md:gap-x-[22px] gap-y-[16px]"
        >
          <AnimateAppear :delay="300">
            <Video :video="videos[0]" />
          </AnimateAppear>
          <AnimateAppear :delay="600">
            <Video2 :video="videos[1]" />
          </AnimateAppear>
        </div>
      </div>
    </section>

    <section class="bg-gray-100 xl:py-[86px] md:py-[60px] py-[43px]">
      <div class="container">
        <div class="grid grid-cols-12 xl:gap-x-[32px] md:gap-x-[22px] gap-x-[16px]">
          <div class="md:col-span-8 md:col-start-3 col-span-full">
            <div class="text-center flex flex-col items-center justify-center">
              <div class="h3 text-blue-100 uppercase">Bắt đầu trải nghiệm</div>
              <div class="h2 font-bold uppercase text-linear-2 my-[8px]">Cùng RalliSmart</div>
              <div class="w-full md:w-[381px] h-[6px] bg-line-green-2"></div>
            </div>
          </div>
        </div>
        <div
          class="xl:mt-[32px] md:mt-[22px] mt-[16px] grid md:grid-cols-2 xl:gap-x-[32px] md:gap-x-[22px] gap-y-[16px]"
        >
          <AnimateAppear
            v-for="(category, indexC) in categories"
            :key="indexC"
            :delay="indexC * 200"
          >
            <CardCategory :category="category" />
          </AnimateAppear>
        </div>
      </div>
    </section>

    <section class="bg-suggestions relative">
      <div
        class="absolute left-0 top-1/2 -translate-y-1/2 w-full xl:w-[1000px] h-full lg:h-[381px] bg-linear-blue"
      ></div>

      <div class="container h-full">
        <div
          class="grid grid-cols-12 xl:gap-x-[32px] md:gap-x-[22px] gap-x-[16px] relative z-[2] h-full"
        >
          <div
            class="col-span-full md:col-span-10 lg:col-span-9 xl:col-span-8 text-white flex flex-col items-start justify-center relative xl:ml-[16px]"
          >
            <div class="h3 uppercase mb-[8px] lg:mb-[12px]">Bạn đang tìm kiếm</div>
            <h1 class="h2 font-bold uppercase text-shadow-white">
              Ý tưởng riêng <br />
              cho ngôi nhà của mình?
            </h1>
            <div
              class="w-[366px] h-[6px] bg-line-white-2 xl:my-[20px] md:my-[17px] my-[12px]"
            ></div>
            <JButton icon="DoubleRight" title="Gợi ý thiết kế" path="suggest" />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-find-more xl:py-[72px] md:py-[50px] py-[36px]">
      <div class="container">
        <div class="grid grid-cols-12 xl:gap-x-[32px] md:gap-x-[22px] gap-y-[16px]">
          <div class="col-span-full lg:col-span-4 text-white">
            <div class="h3 uppercase">Tìm hiểu thêm về</div>
            <div class="h1 font-bold uppercase text-shadow-white">RalliSmart</div>
            <div class="w-[291px] h-[6px] bg-line-green"></div>
          </div>
          <div class="col-span-full lg:col-span-8">
            <div class="grid md:grid-cols-2 xl:gap-x-[32px] md:gap-x-[22px] gap-y-[16px]">
              <AnimateAppear v-for="(find, indexF) in finds" :key="indexF" :delay="indexF * 300">
                <CardFindMore :find="find" />
              </AnimateAppear>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SocialMeta
      title="Smart Home - Giải pháp toàn diện cho ngôi nhà của bạn"
      description="Smart Home của RalliSmart giúp nâng tầm trải nghiệm của bạn trong chính ngôi nhà của mình với mục tiêu cân bằng nhịp sống hiện đại, tập trung vào sức khoẻ con người."
    />
  </main>
</template>

<script>
import SocialMeta from '~/components/SocialMeta.vue'
import AnimateAppear from '~/components/AnimateAppear.vue'
export default {
  data() {
    return {
      isToggleCurrent: false,
      activeFade: false,
      solutions: [
        {
          icon: 'touch',
          title: 'Tiện nghi',
          description: 'Điều khiển ánh sáng của căn nhà trong một lần chạm.',
        },
        {
          icon: 'light',
          title: 'Sáng tạo',
          description: 'Tự do khám phá 16 triệu màu ánh sáng và tạo ra sự kết hợp thú vị.',
        },
        {
          icon: 'heart',
          title: 'An toàn',
          description: 'Ánh sáng điều chỉnh nhịp sinh hoạt cho cuộc sống khỏe mạnh.',
        },
        {
          icon: 'chip',
          title: 'Thông minh',
          description: 'Ánh sáng thay đổi theo kịch bản, hoạt cảnh đã được thiết lập sẵn.',
        },
        {
          icon: 'shield',
          title: 'Bảo mật',
          description:
            'Nhờ công nghệ BLE, giải pháp của RalliSmart hoạt động ổn định và bảo mật cao.',
        },
        {
          icon: 'connect',
          title: 'Tích hợp',
          description: 'Tích hợp quản lý các thiết bị điện trong nhà trên điện thoại thông minh.',
        },
      ],
      rooms: [
        {
          id: 1,
          title: 'Phòng khách',
          href: 'http://rallismart.rangdong.com.vn/iframe/Phongkhach/index.html',
          image: '/images/smart-home/living.jpg',
        },
        {
          id: 2,
          title: 'Phòng ngủ chính',
          href: 'http://rallismart.rangdong.com.vn/iframe/PNMaster/index.html',
          image: '/images/smart-home/bed.jpg',
        },
        {
          id: 3,
          title: 'Phòng ngủ trẻ em',
          href: 'http://rallismart.rangdong.com.vn/iframe/PNTE/index.html',
          image: '/images/smart-home/kitchen.jpg',
        },
        {
          id: 4,
          title: 'Phòng bếp',
          href: 'http://rallismart.rangdong.com.vn/iframe/Bep/index.html',
          image: '/images/smart-home/bath.jpg',
        },
      ],
      videos: ['/video/video-1.mp4', '/video/video-2.mp4'],
      categories: [
        {
          title: 'Smart Kit',
          description: 'Nhóm sản phẩm trải nghiệm giải pháp chiếu sáng thông minh cơ bản',
          image: 'images/smart-home/smart-kit.jpg',
          path: 'smart-kit',
        },
        {
          title: 'Smart Local',
          description: 'Nhóm sản phẩm trải nghiệm chiếu sáng tích hợp smartphone',
          image: 'images/smart-home/smart-local.jpg',
          path: 'smart-local',
        },
      ],
      finds: [
        {
          path: 'wiki',
          image: 'images/smart-home/image-wiki-app.jpg',
          title: 'App RalliSmart',
          description: 'Nhóm sản phẩm trải nghiệm giải pháp chiếu sáng thông minh cơ bản',
        },
        {
          path: 'faq',
          image: 'images/smart-home/image-faq.jpg',
          title: 'Câu hỏi thường gặp',
          description:
            'Toàn bộ những thắc mắc về sản phẩm, cách sử dụng và tích hợp hệ thống RalliSmart.',
        },
      ],
      currentRoom: {},
      isZoom: false,
    }
  },
  created() {
    this.getRoom(this.rooms[0])
  },
  methods: {
    getRoom(obj) {
      this.currentRoom = obj
      this.isToggleCurrent = false
    },
    zoom() {
      this.isZoom = !this.isZoom
    },
  },
  components: { SocialMeta, AnimateAppear },
}
</script>

<style lang="scss" scoped>
.border {
  @apply flex flex-col items-center justify-center text-center xl:p-[24px]	md:p-[17px]	p-[12px];
}
.full-withradius {
  @apply relative bg-white border border-transparent rounded-[20px] h-full;
  background-clip: padding-box;
  .icon {
    @apply text-black duration-150;
  }
  &:before {
    content: '';
    @apply absolute inset-0 rounded-[20px] z-[-1] m-[-1px] bg-gray-200;
    border-radius: inherit;
  }
  &:hover {
    .icon {
      @apply text-green-50;
    }
    &:before {
      background: linear-gradient(91.74deg, #04d99c 4.6%, #07bd89 65.6%, #006e8c 202.26%);
    }
    box-shadow: 0px 4px 20px rgba(181, 252, 235, 0.82);
  }
}
.bg-style {
  @apply h-[30vh] md:h-[70%] xl:h-[720px];
}

.bg-suggestions {
  background: url('/images/smart-home/bg-suggestions.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  @apply h-full lg:max-h-screen xl:py-[226px]	md:py-[158px]	py-[113px];
}

.bg-find-more {
  background: url('/images/smart-home/bg-find-more.jpg') no-repeat;
  background-size: cover;
  background-position: center;
}

.bg-linear-blue {
  background: linear-gradient(
    358.89deg,
    rgba(0, 72, 98, 0) -8.49%,
    rgba(0, 72, 98, 0) -8.49%,
    rgba(0, 151, 204, 0.59) 25.44%,
    rgba(0, 151, 204, 0.76) 66.86%,
    rgba(0, 72, 98, 0) 99.01%
  );
}

.fadein {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  animation: opacity 1s infinite linear;
}

@keyframes opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 100;
  }
}
</style>
