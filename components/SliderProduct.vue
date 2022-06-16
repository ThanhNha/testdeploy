<template>
  <div class="grid grid-cols-12 md:gap-x-[32px] relative">
    <div class="col-span-full">
      <a class="select-none swiper-navigation is-next">
        <JIcon name="chervon" />
      </a>
      <swiper class="flex flex-col-reverse swiper" :options="swiperOption">
        <template v-for="(product, index) in products">
          <swiper-slide :key="index" class="relative overflow-hidden cursor-pointer card">
            <a :href="product.url" target="_blank">
              <div class="overflow-hidden rounded-[8px] aspect-w-1 aspect-h-1">
                <JImage
                  :src="product.image_url || '/images/cover-row.jpg'"
                  class="picture-cover image"
                />
              </div>
            </a>
            <div class="mt-[8px]">
              <a :href="product.url" target="_blank" class="text-center line-clamp-2 title">
                {{ product.title }}
              </a>
            </div>
          </swiper-slide>
        </template>
      </swiper>
      <a class="select-none swiper-navigation is-previous">
        <JIcon name="chervon" class="transform rotate-180" />
      </a>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import '@/assets/scss/third-party/swiper.css'
export default {
  name: 'swiper-example-loop-group',
  title: 'Loop mode with multiple slides per group',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ['products'],
  data() {
    return {
      number: 1,
      getPrev: null,
      getNext: null,
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        pagination: {
          el: '.swiper-pagination1',
        },
        navigation: {
          nextEl: '.is-previous',
          prevEl: '.is-next',
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetweenSlides: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetweenSlides: 10,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        },
        on: {
          slideChange: function () {
            var currentSlide = this.realIndex + 1
          },
          paginationRender: function () {
            var totalSlides = document.querySelectorAll(
              '.swiper-pagination1 > .swiper-pagination-bullet'
            ).length
          },
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
::v-deep {
  .swiper-pagination1 {
    @apply relative top-0 text-left flex items-center;
  }

  .swiper-pagination1 {
    @apply hidden;
  }

  .swiper-navigation {
    @apply w-[40px] h-[40px] border border-gray-300 rounded-full bg-white hidden lg:flex items-center justify-center select-none text-gray-300 hover:bg-linear-2 hover:text-white hover:border-white duration-200 absolute top-1/2 z-10;
  }

  .is-next {
    @apply left-[-30px] xl:left-[-48px];
  }

  .is-previous {
    @apply right-[-30px] xl:right-[-48px];
  }

  .card {
    @apply w-full h-full bg-white rounded-[20px] p-[16px] overflow-hidden;
    .image {
      @apply object-cover w-full h-full scale-100 duration-200 ease-out rounded-[8px];
    }
    .title {
      @apply font-semibold text-blue-300 duration-200 lg:h-[48px];
    }
    &:hover {
      box-shadow: 0px 0px 30px rgba(38, 41, 43, 0.1);

      .image {
        @apply scale-110;
      }
      .title {
        @apply text-green-50;
      }
    }
  }
}
</style>
