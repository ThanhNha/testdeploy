<template>
  <div class="grid grid-cols-12 xl:gap-x-[32px] md:gap-x-[22px] gap-x-[16px]">
    <div class="col-span-full md:col-span-3">
      <div>
        <div class="text-blue-100 uppercase h3">Khám phá</div>
        <div class="font-bold uppercase h2 text-linear-2 my-[8px] text-shadow-white text-stroke">
          smart lighting
        </div>
        <div class="max-w-[195px] h-[6px] bg-line-green"></div>
      </div>
      <div
        class="xl:mt-[32px] md:mt-[22px] mt-[16px] hidden md:flex items-center xl:space-x-[12px] md:space-x-[8px] space-x-[6px]"
      >
        <a class="select-none swiper-navigation is-next-explore">
          <JIcon name="chervon" />
        </a>
        <a class="select-none swiper-navigation is-previous-explore">
          <JIcon name="chervon" class="transform rotate-180" />
        </a>
      </div>
    </div>
    <div class="col-span-full md:col-span-9">
      <swiper class="flex flex-col-reverse swiper" :options="swiperOption">
        <template v-for="(item, index) in items">
          <swiper-slide :key="index" class="relative overflow-hidden cursor-pointer card">
            <NuxtLink
              :to="{
                name: 'blog-slug',
                params: { slug: item.slug },
              }"
            >
              <div class="overflow-hidden rounded-[8px] aspect-w-1 aspect-h-1">
                <JImage :src="item.image_url || 'images/cover-col.jpg'" class="image" />
              </div>
            </NuxtLink>
            <div class="mt-[8px]">
              <div class="text-blue-300 mb-[4px] font-medium">
                {{ formatDate(item.created_at) }}
              </div>
              <NuxtLink
                :to="{
                  name: 'blog-slug',
                  params: { slug: item.slug },
                }"
                class="line-clamp-3 title"
              >
                {{ item.title }}
              </NuxtLink>
            </div>
          </swiper-slide>
        </template>
      </swiper>
    </div>
  </div>
</template>

<script>
import { formatDate } from '@/lib/global.js'
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
    items: {
      type: Array,
      require: false,
    },
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
        loop: true,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination1',
        },
        navigation: {
          nextEl: '.is-previous-explore',
          prevEl: '.is-next-explore',
        },
        breakpoints: {
          375: {
            slidesPerView: 1.4,
            spaceBetweenSlides: 10,
            centeredSlides: false,
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
            slidesPerView: 3,
            spaceBetween: 16,
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
  methods: {
    formatDate,
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
    @apply w-[40px] h-[40px] border border-gray-300 rounded-full bg-white flex items-center justify-center select-none text-gray-300 hover:bg-linear-2 hover:text-white hover:border-white duration-200 ring-0 shadow-none;
  }

  .card {
    @apply w-full h-full bg-white rounded-[20px] p-[16px] my-[20px] overflow-hidden;
    .image {
      @apply object-cover w-full h-full scale-100 duration-200 ease-out rounded-[8px];
    }
    .title {
      @apply font-semibold text-blue-300 duration-200 h-[64px] lg:h-[72px];
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
