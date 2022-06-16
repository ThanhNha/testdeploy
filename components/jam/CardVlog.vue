<template>
  <div @click="openLightBox()" class="">
    <AnimateAppear class="relative group h-full">
      <div class="lg:p-4 p-2 flex flex-col h-full space-y-[8px] rounded-[20px] card group">
        <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-[8px]">
          <JImage
            :src="item.image_url || '/images/cover-col.jpg'"
            class="w-full h-full object-cover image"
          />
        </div>
        <div class="flex flex-col h-full space-y-[4px]">
          <div class="text-blue-300 font-medium">{{ formatDate(item.created_at) }}</div>
          <div class="line-clamp-2 font-semibold text-[#2F2F2F] title">
            {{ item.title }}
          </div>
        </div>
      </div>
    </AnimateAppear>
    <VideoVlog :index="lightboxIndex" :link="item.video_url" @close="closeLightBox()" />
  </div>
</template>

<script>
import { formatDate } from '@/lib/global.js'

export default {
  props: ['item'],

  data() {
    return {
      lightboxIndex: null,
    }
  },
  methods: {
    formatDate,
    openLightBox() {
      this.lightboxIndex = 0
      document.body.classList.add('overflow-hidden')
    },
    closeLightBox() {
      this.lightboxIndex = null
    },
  },
}
</script>
<style lang="scss" scoped>
.card {
  @apply duration-200 bg-white cursor-pointer;

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
