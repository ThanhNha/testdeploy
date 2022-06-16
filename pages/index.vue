<template>
  <main>
    <section class="bg-banner">
      <div class="container">
        <div class="relative xl:pt-[139px] md:pt-[97px] pt-[70px]">
          <div class="bg-filter max-w-[843px] max-h-[362px]"></div>
          <div class="relative z-[2]">
            <h1 class="font-bold p1 text-linear-1">RalliSmart</h1>
            <div
              class="md:max-w-[366px] max-w-[130px] w-full h-[4px] bg-line-green mt-[8px] mb-[24px]"
            ></div>
            <div class="text-blue-300 uppercase h3 mb-[12px]">Bước đầu cho</div>
            <div class="font-bold uppercase h1 text-linear-2">
              Cuộc sống <br class="block md:hidden" />
              thông minh
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative bg-banner-2">
      <div class="container">
        <div
          class="grid grid-cols-12 md:gap-x-[32px] pt-[40px] md:pt-[48px] xl:pt-[72px] mb-[40px]"
        >
          <div
            class="flex flex-col items-center justify-center text-white col-span-full lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4"
          >
            <div class="uppercase h2 mb-[8px]">ánh sáng tự nhiên</div>
            <div class="font-bold uppercase h2 text-shadow-white">Cho nhịp sống hiện đại</div>
            <div class="max-w-[366px] w-full h-[4px] bg-line-white my-[20px]"></div>
            <div class="font-medium text-center">
              RalliSmart tạo ra môi trường chiếu sáng phù hợp với
              <span class="font-bold">nhịp sinh học</span> của con người, mang lại
              <span class="font-bold">sức khỏe và năng suất làm việc</span> cho người Việt.
            </div>
          </div>
        </div>
      </div>
      <ILine class="absolute bottom-0 hidden w-full lg:block h-[64%]" />
      <div class="absolute bottom-[44px] w-full flex lg:hidden items-center justify-center">
        <JButton title="Tìm hiểu thêm" icon="DoubleRight" @click.native="openPopup()" />
      </div>
    </section>

    <section>
      <ChangeImage />
    </section>

    <section>
      <SliderImages />
    </section>

    <section class="bg-device pt-[48px] relative">
      <KinesisContainer class="lg:h-[600px] xl:h-[839px] relative z-10">
        <KinesisElement
          :strength="20"
          duration="8000"
          class="absolute top-[72px] left-[50px] 2xl:left-[120px] overflow-hidden lg:block hidden w-[180px] h-[180px] xl:w-[262px] xl:h-[262px]"
        >
          <AnimateAppear animate="zoom">
            <div class="relative rounded-full">
              <img src="/images/home/image-circle-1.png" class="object-cover w-full h-full" />
            </div>
          </AnimateAppear>
        </KinesisElement>
        <KinesisElement
          :strength="40"
          duration="8000"
          class="absolute top-[120px] xl:top-[167px] right-[150px] 2xl:right-[177px] overflow-hidden lg:block hidden w-[140px] h-[140px] xl:w-[178px] xl:h-[178px]"
        >
          <AnimateAppear animate="zoom">
            <div class="relative rounded-full">
              <img src="/images/home/image-circle-2.png" class="object-cover w-full h-full" />
            </div>
          </AnimateAppear>
        </KinesisElement>
        <KinesisElement
          :strength="20"
          duration="8000"
          class="absolute bottom-[72px] right-[90px] 2xl:right-[115px] rounded-full overflow-hidden lg:block hidden w-[200px] h-[200px] xl:w-[333px] xl:h-[333px]"
        >
          <AnimateAppear animate="zoom">
            <div class="relative rounded-full">
              <img src="/images/home/image-circle-3.png" class="object-cover w-full h-full" />
            </div>
          </AnimateAppear>
        </KinesisElement>
        <KinesisElement
          :strength="40"
          duration="8000"
          class="absolute bottom-[50px] xl:bottom-[103px] left-[40px] xl:left-[150px] rounded-full w-[160px] h-[160px] xl:w-[271px] xl:h-[271px] overflow-hidden lg:block hidden"
        >
          <AnimateAppear animate="zoom">
            <div class="relative rounded-full">
              <img src="/images/home/image-circle-4.png" class="object-cover w-full h-full" />
            </div>
          </AnimateAppear>
        </KinesisElement>

        <!-- PC -->
        <div
          class="hidden lg:block lg:absolute lg:top-1/2 lg:left-1/2 lg:translate-x-[-50%] lg:translate-y-[-50%] lg:max-w-[400px] xl:max-w-[620px]"
        >
          <div class="xl:mb-[32px] md:mb-[22px] mb-[16px] text-center">
            <div class="flex flex-col space-y-[8px]">
              <h3 class="font-normal text-blue-100 uppercase h3">
                Trải nghiệm chiếu sáng thông minh
              </h3>
              <h2 class="font-bold uppercase h2 text-shadow text-linear-2">
                ngay trên thiết bị <br class="block md:hidden" />
                cỦA bạn
              </h2>
              <div class="line w-full md:w-[366px] h-[6px] m-auto"></div>
            </div>
            <div class="xl:mt-[24px] md:mt-[17px] mt-[12px]">
              <p class="font-medium">
                Thông qua công nghệ 3D, Rạng Đông mang tới những trải nghiệm về ánh sáng chân thực
                ngay khi sử dụng máy tính hoặc điện thoại, giúp bạn tận hưởng giải pháp chiếu sáng
                thông minh RalliSmart trọn vẹn, nhanh chóng.
              </p>
            </div>
          </div>

          <div class="flex items-center justify-center">
            <JButton title="TRẢI NGHIỆM SMART HOME 3D TOUR" icon="DoubleRight" path="smart-home" />
          </div>
        </div>
      </KinesisContainer>

      <!-- Mobile -->
      <div class="container relative z-10 block lg:hidden">
        <div class="text-center mb-[32px]">
          <div class="max-sm:max-w-[246px] mx-auto mb-6">
            <h3 class="mb-2 font-normal text-blue-100 uppercase h3">
              Trải nghiệm chiếu sáng thông minh
            </h3>
            <h2 class="mb-2 font-bold uppercase h2 text-shadow text-linear-2">
              ngay trên thiết bị <br />
              cỦA bạn
            </h2>
            <div class="line w-full md:w-[366px] h-[6px] m-auto"></div>
          </div>
          <div class="font-medium text-black text-center max-sm:max-w-[500px] mx-auto">
            Thông qua công nghệ 3D, Rạng Đông mang tới những trải nghiệm về ánh sáng chân thực ngay
            khi sử dụng máy tính hoặc điện thoại, giúp bạn tận hưởng giải pháp chiếu sáng thông minh
            RalliSmart trọn vẹn, nhanh chóng.
          </div>
        </div>

        <div class="flex items-center justify-center">
          <JButton
            title="TRẢI NGHIỆM SMART HOME 3D TOUR"
            icon="DoubleRight"
            path="smart-home"
            class="w-full"
          />
        </div>

        <div class="relative z-10 block lg:hidden">
          <JPicture src="/images/home/image-circle-group.png" class="picture-cover" />
        </div>
      </div>

      <div class="absolute top-0 left-0 w-full h-full">
        <img src="/images/home/experience_light.png" class="object-cover w-full h-full lg:hidden" />
        <img
          src="/images/home/experience_light_pc.png"
          class="hidden object-cover w-full h-full lg:block"
        />
      </div>
    </section>

    <section class="xl:py-[82px] md:py-[57px] py-[41px] bg-banner-3">
      <div class="container">
        <div class="grid grid-cols-2 xl:gap-[34px] md:gap-[24px] gap-[16px] mb-[24px] xl:mb-[32px]">
          <div class="col-span-full md:col-span-1 flex-col flex xl:space-y-[32px]">
            <div class="flex flex-col space-y-[8px] md:w-[462px] text-center md:text-left">
              <h3 class="font-normal text-blue-100 uppercase h3">KHƠI NGUỒN</h3>
              <h2 class="font-bold uppercase h2 text-linear-2">CẢM HỨNG SÁNG TẠO</h2>
              <div class="line-2 h-[6px] md:block hidden"></div>
              <div class="bg-line-green-2 h-[6px] md:hidden block"></div>
            </div>
          </div>
          <div class="col-span-full md:col-span-1 flex xl:space-y-[41px]">
            <p
              class="text-[#2F2F2F] max-lg:text-center font-medium leading-[150%] max-sm:max-w-[500px] mx-auto"
            >
              Ánh sáng ảnh hưởng trực tiếp tới thị giác của con người khiến chúng ta tỉnh táo hoặc
              buồn ngủ, thư thái hoặc mệt mỏi. Điều chỉnh ánh sáng giúp chúng ta tập trung vào công
              việc, tăng năng suất làm việc và tạo ra cảm hứng sáng tạo tuyệt vời.
            </p>
          </div>
        </div>

        <div
          class="grid grid-cols-2 grid-rows-3 md:grid-rows-2 gap-2 md:gap-x-[24px] md:gap-y-[17px] xl:gap-x-[34px] xl:gap-y-[24px]"
        >
          <div
            class="group col-span-full md:col-span-1 row-span-2 md:row-span-full rounded-[10px] overflow-hidden"
          >
            <JPicture
              src="/images/home/image-inspired-1.jpg"
              class="duration-300 picture-cover group-hover:scale-105"
            />
          </div>

          <div class="group col-span-1 row-span-1 rounded-[10px] overflow-hidden">
            <JPicture
              src="/images/home/image-inspired-2.jpg"
              class="duration-300 picture-cover group-hover:scale-105"
            />
          </div>
          <div class="group col-span-1 row-span-1 rounded-[10px] overflow-hidden">
            <JPicture
              src="/images/home/image-inspired-3.jpg"
              class="duration-300 picture-cover group-hover:scale-105"
            />
          </div>
        </div>
        <div class="flex items-center justify-center mt-[40px]">
          <JButton title="KHÁM PHÁ" icon="DoubleRight" path="smart-office" />
        </div>
      </div>
    </section>

    <section
      v-if="postFil && postFil.items && postFil.items.length > 0"
      class="bg-gray-100 xl:py-[45px] md:py-[32px] py-[23px]"
    >
      <div class="container">
        <SliderExplore :items="postFil.items" />
      </div>
    </section>

    <section v-if="banner" class="bg-gray-100">
      <div class="container">
        <JImage :src="banner.image_url || '/images/cover.jpg'" class="picture-cover" />
      </div>
    </section>

    <section
      v-if="productsTopView && productsTopView.length > 0"
      class="xl:pt-[88px] md:pt-[62px] pt-[44px] xl:pb-[83px] md:pb-[58px] pb-[42px] bg-gray-100"
    >
      <div class="container">
        <div class="grid grid-cols-12 xl:gap-x-[32px] md:gap-x-[22px] gap-x-[16px]">
          <div class="col-span-full md:col-span-8 md:col-start-3 xl:col-span-6 xl:col-start-4">
            <div class="relative z-[2] flex flex-col items-center justify-center">
              <div class="text-blue-100 uppercase h2">Lộ trình hoàn hảo</div>
              <div class="font-bold uppercase h2 text-linear-2 my-[8px]">Cho ngôi nhà hiện đại</div>
              <div class="max-w-[366px] w-full h-[4px] bg-line-green-2"></div>
              <div class="xl:mt-[24px] md:mt-[17px] mt-[12px] font-medium text-center">
                Tìm những sản phẩm bạn cần để bắt đầu với RalliSmart
              </div>
            </div>
          </div>
        </div>
        <div class="xl:pt-[48px] md:pt-[34px] pt-[24px] xl:pb-[40px] md:pb-[28px] pb-[20px]">
          <SliderProduct :products="productsTopView" />
        </div>
        <div class="flex items-center justify-center">
          <JButton icon="DoubleRight" title="Khám phá" path="smart-kit" />
        </div>
      </div>
    </section>
    <JModal2 :show="currentModal === 'sampleModal'" @close="currentModal = null">
      <div class="relative">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-[24px] md:gap-[20px]">
          <div
            class="border border-white rounded-[20px] bg-white bg-opacity-40 box-style p-[24px] text-white w-full h-full flex flex-col items-center justify-center relative z-40"
            v-for="(item, index) in list"
            :key="index"
          >
            <JIcon :name="item.icon" class="w-[32px] h-[32px]" />
            <div class="p1 font-bold my-[8px]">{{ item.title }}</div>
            <div class="font-medium text-center caption">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
    </JModal2>
    <SocialMeta
      title="RalliSmart - Bước đầu cho cuộc sống thông minh"
      description="RalliSmart là thương hiệu chuyên biệt về Giải pháp Chiếu sáng Thông minh, Chiếu sáng vì con người của Công ty Cổ phần Bóng điện - Phích nước Rạng Đông, nhằm cung cấp những giải pháp tối ưu cho người Việt."
    />
  </main>
</template>
<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import AnimateAppear from '~/components/AnimateAppear.vue'

export default {
  name: 'index',
  middleware: ['redirect'],
  data() {
    return {
      currentModal: null,
      list: [
        {
          icon: 'heart',
          title: 'Bình minh',
          description:
            'Báo thức bằng ánh sáng chính là quá trình cơ thể tiếp xúc với sự thay đổi ánh sáng, tạo ra quá trình thức dậy phù hợp với chu kỳ giấc ngủ thông qua việc thay đổi hormone. Việc chuyển đổi này giúp cơ thể không mệt mỏi, bắt đầu ngày mới sảng khoái',
        },
        {
          icon: 'light',
          title: 'Buổi sáng',
          description:
            'Ánh sáng trắng 4000 - 6500K cường độ cao, giúp mọi người làm việc hiệu quả, đạt năng suất cao do ức chế melatonin và tăng cường sản xuất dopamine, serotonin và cortisol.',
        },
        {
          icon: 'relax',
          title: 'Buổi trưa',
          description:
            'Thời gian nghỉ ngơi buổi trưa dù ngắn nhưng giúp con người tỉnh táo và làm việc hiệu quả vào buổi chiều. Giảm dần cường độ ánh sáng giúp mắt chúng ta thư giãn và nhanh chóng chìm vào giấc ngủ hơn.',
        },
        {
          icon: 'light',
          title: 'Buổi chiều',
          description:
            'Thời gian học tập làm việc buổi chiều vẫn nên là ánh sáng trắng 4000 - 6500K, cường độ cao giúp mọi người làm việc hiệu quả, đạt năng suất cao.',
        },
        {
          icon: 'relax',
          title: 'Hoàng hôn',
          description:
            'Ánh sáng vàng trắng với nhiệt độ màu là 3000-4000k, thông báo thời gian nghỉ ngơi sắp tới, giúp cơ thể điều chỉnh, chuẩn bị bước vào chế độ nghỉ ngơi.',
        },
        {
          icon: 'champ',
          title: 'Buổi tối',
          description:
            'Ánh sáng vàng ấm 2700-3000K vào buổi tối giúp kích thích melatonin, góp phần thư giãn và thúc đẩy cơn buồn ngủ. Tông màu ấm cũng tạo ra cảm giác thoải mái và ấm cúng, bầu không khí thân mật.',
        },
      ],
    }
  },

  async asyncData({ $api }) {
    const query = 'chieu-sang-thong-minh'
    const { data: postFil } = await $api.post.listTag(query)
    const banner = await $api.banner.list()
    const { data: productsTopView } = await $api.product.topView()

    return {
      postFil,
      banner,
      productsTopView,
    }
  },

  methods: {
    openPopup() {
      this.currentModal = 'sampleModal'
      if ((this.currentModal = 'sampleModal')) {
        document.body.style.overflowY = 'hidden'
        document.body.style.height = '100vh'
      }
    },
  },

  components: {
    KinesisContainer,
    KinesisElement,
    AnimateAppear,
  },
}
</script>
<style lang="scss" scoped>
.bg-banner {
  background: url('../static/images/home/banner-mobile.jpg') no-repeat;
  background-size: cover;
  background-position: bottom;
  @apply h-[637px];
}

.bg-banner-2 {
  background: url('../static/images/home/banner-2-mobile.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  @apply h-[534px] md:h-[700px];
}

@screen md {
  .bg-banner {
    background: url('../static/images/home/banner.jpg') no-repeat;
    background-size: cover;
    @apply md:h-[450px] lg:h-[748px] max-h-screen;
  }
}

@screen lg {
  .bg-banner-2 {
    background: url('../static/images/home/banner-2.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    @apply h-[810px] 2xl:h-[900px];
  }
}

.bg-banner-3 {
  background: url('../static/images/home/banner-3.jpg') no-repeat;
  background-size: cover;
  background-position: center;
}

.bg-device {
  background: url('../static/images/home/banner-3.jpg') no-repeat;
  background-size: cover;
  background-position: center;
}

.bg-filter {
  @apply absolute w-full h-full z-[1];
  background: rgba(255, 255, 255, 0.9);
  filter: blur(100px);
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.box-style {
  box-sizing: border-box;
  box-shadow: 0px 1px 17px rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
}

.text-shadow {
  text-shadow: 0px 4px 20px rgba(181, 252, 235, 0.82);
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

.bg-green-blur {
  background: rgba(30, 255, 191, 0.2);
  filter: blur(300px);
}

.box-style {
  box-sizing: border-box;
  box-shadow: 0px 1px 17px rgba(0, 242, 254, 0.85);
  backdrop-filter: blur(40px);
}
</style>
