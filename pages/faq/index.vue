<template>
  <main>
    <section class="bg-image--faqs">
      <div class="container pt-[67px] pb-[43px]">
        <div class="grid grid-cols-12 gap-[32px]">
          <div
            class="col-span-full md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6 text-center"
          >
            <h1
              class="uppercase banner-title text-[24px] md:text-[32px] xl:text-[40px] leading-[120%] font-display font-bold text-white text-linear-3 xl:mb-[20px] mb-[10px]"
            >
              CÂU HỎI THƯỜNG GẶP
            </h1>
            <div class="line xl:max-w-[366px] m-auto"></div>
            <div class="xl:mt-[20px] md:mt-[14px] mt-[12px] font-medium text-white">
              Giải đáp mọi thắc mắc về sản phẩm, app và những vấn đề khác mà khách hàng quan tâm.
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <section class="xl:py-[56px] md:py-[39px] py-[28px]">
        <div class="text-center">
          <h3 class="h3 uppercase font-normal text-blue-100 mb-[8px]">lựa chọn</h3>
          <h1 class="uppercase h2 banner-title font-bold text-linear-2">danh mục liên quan</h1>
          <div class="line mt-2 max-w-[366px] m-auto"></div>
        </div>
        <div class="mt-[24px] md:mt-[34px] xl:mt-[48px]">
          <div class="grid xl:grid-cols-4 grid-cols-2 xl:gap-[32px] md:gap-[22px] gap-[16px]">
            <NuxtLink
              v-for="(item, index) in faqs"
              :key="index"
              :to="{ name: 'faq-slug', params: { slug: item.slug } }"
              class="flex justify-center items-center rounded-[12px] xl:py-[65px] md:py-[46px] py-[35px] box-faqs"
            >
              <div class="p1 font-bold text-blue-300 max-w-[115px]">{{ item.title }}</div>
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>

    <section class="faqs-contact">
      <div class="container py-8 xl:pt-[60px] xl:pb-[22px]">
        <div class="grid grid-cols-12 gap-[32px] items-center">
          <div class="md:col-span-7 col-span-full">
            <div class="">
              <div
                class="text-[18px] md:text-[24px] xl:text-[32px] leading-[120%] font-display uppercase text-white mb-[8px]"
              >
                nếu bạn có bất kì thắc mắc nào,
              </div>
              <div
                class="text-[24px] md:text-[32px] xl:text-[40px] leading-[120%] font-display uppercase banner-title font-bold text-white text-linear-3"
              >
                vui lòng liên hệ chúng tôi
              </div>

              <div class="line-2 mt-2 h-[6px]"></div>

              <NuxtLink
                :to="{ name: 'contact' }"
                class="flex items-center relative z-[1] btn-question mt-5 xl:mt-[32px]"
              >
                <span class="flex self-end space-x-[10px] btn btn-secondary btn-md question">
                  <div class="title">ĐẶT CÂU HỎI</div>
                  <JIcon name="DoubleRight" class="arrow-white hidden" />
                  <JIcon name="double-arrow-right-blue" class="arrow-blue" />
                </span>
              </NuxtLink>
            </div>
          </div>

          <div class="md:col-span-5 col-span-full">
            <img src="/images/icon-faqs.png" class="block max-md:mx-auto" />
          </div>
        </div>
      </div>
    </section>
    <SocialMeta :title="SocialMedia.title" :description="SocialMedia.description" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      searchFAQs: '',
      listFaqs: [
        {
          title: 'Sản phẩm',
          slug: 'san-pham',
        },
        {
          title: 'Hệ thống',
          slug: 'he-thong',
        },
        {
          title: 'Tích hợp mở rộng',
          slug: 'tich-hop-mo-rong',
        },
        {
          title: 'Mua hàng bảo hành',
          slug: 'mua-hang-bao-hanh',
        },
      ],
      SocialMedia: {
        title: 'Giải đáp thắc mắc về RalliSmart',
        description:
          'Bạn đang thắc mắc về RalliSmart, giải pháp chiếu sáng vì con người? Chúng tôi sẵn sàng hỗ trợ.',
      },

      faqs: [],
    }
  },

  async fetch() {
    const { data } = await this.$api.faq.list()
    this.faqs = data
  },
}
</script>

<style lang="scss" scoped>
.banner-title {
  text-shadow: 0px 4px 20px rgba(181, 252, 235, 0.82);
}
.line {
  background: linear-gradient(
    89.98deg,
    rgba(7, 189, 137, 0) 0%,
    #07bd89 50.1%,
    rgba(7, 189, 137, 0) 100%
  );
  height: 6px;
}
.line-2 {
  background: linear-gradient(89.99deg, #ffffff 0.01%, rgba(255, 255, 255, 0) 82.65%);
}

.box-faqs {
  @apply relative bg-white border border-transparent rounded-[12px] cursor-pointer text-center;
  background-clip: padding-box;
  &:before {
    content: '';
    @apply absolute inset-0 rounded-[20px] z-[-1] m-[-1px] bg-green-400;
    border-radius: inherit;
  }
  &:hover {
    &:before {
      background: linear-gradient(91.74deg, #04d99c 4.6%, #07bd89 65.6%, #006e8c 202.26%);
    }
    box-shadow: 0px 4px 20px rgba(181, 252, 235, 0.82);
  }
}
.faqs-contact {
  background: linear-gradient(89.94deg, #07bd89 2.92%, #006e8c 79.81%, #014251 103.13%);
}

.bg-image {
  &--faqs {
    background-image: url('/images/banner-faqs.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    /* background-position: bottom; */
  }
}

.btn-question {
  .question {
    @apply lg:px-[26px] md:px-[18px] px-[13px] h-[38px] md:h-[49px];

    &:hover {
      .arrow-blue {
        @apply hidden;
      }
      .arrow-white {
        @apply block;
      }
    }
  }
}
</style>
