<template>
  <div v-if="item" class="relative">
    <AnimateAppear class="group card h-full xl:rounded-[20px] md:rounded-[14px] rounded-[10px]">
      <div class="xl:p-4 p-3 flex flex-col h-full space-y-[8px] group max-xl:overflow-hidden">
        <NuxtLink
          :to="{
            name: 'blog-slug',
            params: { slug: item.slug },
          }"
        >
          <div
            class="overflow-hidden rounded-[8px] relative"
            :class="
              classCard === true
                ? ' aspect-w-2 aspect-h-1 md:aspect-w-1 md:aspect-h-1'
                : 'md:aspect-w-3 md:aspect-h-2 aspect-w-2 aspect-h-1'
            "
          >
            <JImage
              :src="item.image_url || '/images/cover-col.jpg'"
              class="w-full h-full object-cover image"
            />
          </div>
        </NuxtLink>

        <div class="flex flex-col h-full space-y-[4px] relative">
          <div class="text-blue-300 font-medium">{{ formatDate(item.created_at) }}</div>
          <NuxtLink
            :to="{
              name: 'blog-slug',
              params: { slug: item.slug },
            }"
          >
            <div class="line-clamp-2 font-semibold text-[#2F2F2F] title">
              {{ item.title }}
            </div>
          </NuxtLink>
        </div>

        <div class="lg:hidden">
          <Tag :tags="item.tag" :isCard="true" />
        </div>

        <div class="lg:flex hidden relative z-50 items-center flex-wrap">
          <div class="w-full relative">
            <Tag :tags="item.tag" :isCard="true" class="" />
          </div>
        </div>
      </div>
    </AnimateAppear>
  </div>
</template>

<script>
import { formatDate } from '@/lib/global.js'
export default {
  props: {
    item: {
      type: Object,
      default: () => null,
    },
    classCard: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {}
  },

  mounted() {},

  computed: {},
  methods: {
    formatDate,
    onSlideTagLeft(event) {
      let tagContainer = event.target.closest('.scroll-container-tag')
      const listTags = tagContainer.querySelector('.list_tag')
      listTags.scrollLeft -= 100
    },

    onSlideTagRight(event) {
      let tagContainer = event.target.closest('.scroll-container-tag')
      const listTags = tagContainer.querySelector('.list_tag')

      listTags.scrollLeft += 100
    },
  },
}
</script>
<style lang="scss" scoped>
.card {
  @apply duration-200;
  .image {
    @apply scale-100 duration-200;
  }
  .title {
    @apply duration-200;
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
.line {
  background: linear-gradient(
    89.98deg,
    rgba(7, 189, 137, 0) 0%,
    #07bd89 0.01%,
    rgba(7, 189, 137, 0) 100%
  );
  height: 8px;
}
</style>
