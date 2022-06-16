<template>
  <div class="grid grid-cols-12 gap-x-[32px] relative">
    <div class="col-span-full">
      <a class="select-none swiper-navigation is-next">
        <JIcon name="chervon" />
      </a>
      <swiper class="flex flex-col-reverse swiper" :options="swiperOption">
        <swiper-slide
          v-for="(image, index) in images"
          :key="index"
          class="relative overflow-hidden cursor-pointer card"
        >
          <div class="overflow-hidden rounded-[8px]">
            <JPicture :src="image" class="picture-cover image" alt="image" />
          </div>
        </swiper-slide>
      </swiper>
      <a class="select-none swiper-navigation is-previous">
        <JIcon name="chervon" class="transform rotate-180" /> </a
      >'
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
  props: {
    hotProjects: {
      type: Array,
      require: false,
    },
    total: {
      type: Number,
      require: false,
    },
  },
  data() {
    return {
      number: 1,
      getPrev: null,
      getNext: null,
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: true,
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
            slidesPerView: 4,
            spaceBetweenSlides: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 12,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 32,
          },
          1920: {
            slidesPerView: 6,
            spaceBetween: 42,
          },
          2560: {
            slidesPerView: 8,
            spaceBetween: 52,
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
      images: [
        'images/wiki-app/slide-1.jpg',
        'images/wiki-app/slide-2.jpg',
        'images/wiki-app/slide-3.jpg',
        'images/wiki-app/slide-4.jpg',
        'images/wiki-app/slide-5.jpg',
        'images/wiki-app/slide-6.jpg',
        'images/wiki-app/slide-7.jpg',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
::v-deep {
  .swiper-wrapper {
    @apply xl:ml-[12em] lg:ml-[10em];
  }
  .swiper-wrapper {
    @apply items-end xl:min-h-[450px] lg:min-h-[360px] md:min-h-[300px] min-h-[200px];
  }
  .swiper-slide {
    transition: width 0.7s ease, transform-origin 0.7s ease;
  }

  .swiper-slide-active,
  .swiper-slide-duplicate-active {
    @apply xl:w-[360px] lg:w-[300px] md:w-[255px] w-[185px]  #{!important};
  }

  .swiper-pagination1 {
    @apply relative top-0 text-left flex items-center;
  }

  .swiper-pagination1 {
    @apply hidden;
  }

  .swiper-navigation {
    @apply w-[40px] h-[40px] border border-white rounded-full bg-transparent hidden md:flex items-center justify-center select-none text-white hover:bg-linear-2 hover:text-white hover:border-white duration-200 absolute top-[58%];
  }

  .is-next {
    @apply left-[32px] z-[10];
  }

  .is-previous {
    @apply right-[32px] z-[10];
  }

  .card {
    @apply w-full h-full rounded-[20px] overflow-hidden;
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
