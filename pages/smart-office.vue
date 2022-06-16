<template>
  <main class="lg:mt-0 md:mt-[72px]">
    <JBanner
      img="/images/smart-office/banner.jpg"
      className="w-full h-[30vh] md:h-[calc(70vh-var(--header-height-md))] xl:h-[calc(100vh-var(--header-height-lg))]"
    />

    <section class="xl:pt-[72px] xl:pb-[54px] md:py-[50px] py-[36px]">
      <div class="container">
        <div class="grid grid-cols-12 xl:gap-x-[32px] md:gap-x-[22px] gap-y-[16px]">
          <div class="col-span-full lg:col-span-6">
            <div class="flex flex-col md:items-start items-center text-center md:text-left">
              <div class="h3 text-blue-100 uppercase">Giải pháp toàn diện</div>
              <div class="h2 font-bold uppercase text-linear-2 my-[4px]">
                Cho không gian <br class="lg:block hidden" />
                làm việc hiện đại
              </div>
              <div class="w-[528px] h-[6px] bg-line-green md:block hidden"></div>
              <div class="w-full h-[6px] bg-line-green-2 md:hidden block"></div>
            </div>
            <div
              class="xl:mt-[32px] md:mt-[22px] mt-[16px] font-medium text-black text-center md:text-left"
            >
              Smart Office từ RalliSmart mang lại trải nghiệm tuyệt vời cho nhịp sống văn phòng bận
              rộn.
            </div>
            <AnimateAppear class="xl:mt-[40px] md:mt-[28px] mt-[20px] lg:mx-0 md:mx-[96px]">
              <JPicture src="/images/smart-office/city.png" class="picture-cover" />
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
                :class="index === 4 ? 'xl:col-start-2' : ''"
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

    <section>
      <div class="container">
        <div class="grid grid-cols-12 xl:gap-x-[32px] md:gap-x-[22px] gap-y-[16px]">
          <div class="col-span-full">
            <AnimateAppear>
              <div>
                <div class="h2 font-bold uppercase text-linear-2 my-[4px] md:text-left text-center">
                  Trải nghiệm 3D
                </div>
                <div class="w-[400px] h-[6px] bg-line-green md:block hidden"></div>
                <div class="w-full h-[6px] bg-line-green-2 md:hidden block"></div>
              </div>
            </AnimateAppear>
          </div>
          <div class="col-span-full flex items-end xl:space-x-[16px] md:space-x-[10px]">
            <div
              class="py-[10px] xl:px-[10px] md:px-[8px] px-[8px] rounded-full cursor-pointer hover:text-green-100 duration-200 md:block hidden w-max"
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
                class="w-full absolute bg-white rounded border border-green-50 z-[100]"
                :class="isToggleCurrent ? 'block opacity-100' : 'hidden opacity-0'"
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
      </div>
      <div class="xl:mt-[32px] md:mt-[22px] mt-[16px]">
        <div class="bg-style">
          <a :href="currentRoom.href" target="_blank" rel="noopener noreferrer">
            <img :src="currentRoom.image" class="w-full h-full max-h-screen object-cover" />
          </a>
        </div>
      </div>
    </section>

    <section class="bg-gray-100 xl:py-[86px] md:py-[60px] py-[43px]">
      <div class="container">
        <div class="grid grid-cols-12 xl:gap-x-[32px] md:gap-x-[22px] gap-x-[16px]">
          <div class="md:col-span-8 md:col-start-3 col-span-full">
            <div class="text-center flex flex-col items-center justify-center">
              <div class="h3 text-blue-100 uppercase">Cùng RalliSmart</div>
              <div class="h2 font-bold uppercase text-linear-2 my-[8px]">Bắt đầu trải nghiệm</div>
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
      title="Smart Office - Giải pháp toàn diện cho không gian làm việc hiện đại"
      description="Gia tăng hiệu suất làm việc với Smart Office của RalliSmart nhờ giải pháp chiếu sáng được thiết kế tỉ mỉ dựa trên học thuyết Chiếu sáng vì con người (HCL)."
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
          icon: 'efficiency',
          title: 'Hiệu suất',
          description: 'Thay đổi cường độ ánh sáng giúp tăng hiệu quả làm việc',
        },
        {
          icon: 'manager',
          title: 'Quản lý dễ dàng',
          description: 'Kiểm soát toàn bộ văn phòng từ xa thông qua ứng dụng tiện dụng',
        },
        {
          icon: 'save',
          title: 'Tiết kiệm',
          description: 'Không còn lo lắng quên tắt thiết bị điện, gây lãng phí điện năng',
        },
        {
          icon: 'heart',
          title: 'An toàn',
          description: 'Hệ thống cảm biến khói nhanh chóng phát hiện và cảnh báo',
        },
        {
          icon: 'shield',
          title: 'Vì sức khỏe con người',
          description: 'Theo dõi chỉ số độ ẩm không khí, bụi mịn để điều chỉnh thích hợp.',
        },
      ],
      rooms: [
        {
          id: 1,
          title: 'Phòng giám đốc',
          href: '',
          image: '/images/smart-home/living.jpg',
        },
        {
          id: 2,
          title: 'Phòng làm việc',
          href: '',
          image: '/images/smart-home/bed.jpg',
        },
        {
          id: 3,
          title: 'Phòng họp',
          href: '',
          image: '/images/smart-home/kitchen.jpg',
        },
        {
          id: 4,
          title: 'WC',
          href: '',
          image: '/images/smart-home/bath.jpg',
        },
        {
          id: 5,
          title: 'Pantry',
          href: '',
          image: '/images/smart-home/bath.jpg',
        },
        {
          id: 6,
          title: 'Hầm & bãi gửi xe',
          href: '',
          image: '/images/smart-home/bath.jpg',
        },
        {
          id: 7,
          title: 'Lễ tân',
          href: '',
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
    }
  },
  created() {
    this.getRoom(this.rooms[0])
  },
  methods: {
    getRoom(obj) {
      this.currentRoom = obj
      this.activeFade = !this.activeFade
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
