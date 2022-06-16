<template>
  <main>
    <section>
      <div class="container">
        <div class="py-4">
          <div class="space-x-[4px] breadcrumb">
            <div class="flex items-center space-x-2 lg:space-x-3">
              <NuxtLink
                :to="{ name: 'index' }"
                class="font-medium text-gray-500 transition duration-200 ease-in-out caption hover:text-green-100"
                >Trang chủ</NuxtLink
              >
              <JIcon name="breadcrumb" />
              <NuxtLink
                :to="{ name: 'blog' }"
                class="font-medium text-gray-500 transition duration-200 ease-in-out caption hover:text-green-100"
                >Blog</NuxtLink
              >
              <JIcon name="breadcrumb" />
              <span class="font-semibold text-gray-700 caption">{{ currentTag.name }}</span>
            </div>
          </div>
        </div>
        <div class="overflow-hidden inline-block mb-[16px] md:mb-[22px] xl:mb-[32px]">
          <div class="font-bold uppercase h2 text-linear-2 text-shadow">{{ currentTag.name }}</div>
          <div class="line mt-[8px]"></div>
        </div>
        <div class="pb-[28px] md:pb-[39px] xl:pb-[56px]">
          <div
            class="grid grid-cols-12 gap-[16px] md:gap-[22px] xl:gap-[32px]"
            v-if="!$fetchState.pending"
          >
            <div class="col-span-full xl:hidden">
              <div class="text-[20px] leading-[150%] text-blue-300 mb-[4px] font-bold">TAGS</div>
              <Tag :tags="postObjTag.tags" />
            </div>

            <div class="xl:col-span-9 col-span-full">
              <div
                class="relative col-span-full grid grid-cols-2 md:grid-cols-3 gap-[6px] md:gap-[10px] lg:gap-[16px] xl:gap-[32px]"
              >
                <JCardBlog
                  v-for="(item, index) in postObjTag.items"
                  :key="index"
                  :item="item"
                  :prevID="index"
                />
              </div>
            </div>

            <div class="relative hidden col-span-3 xl:block">
              <div class="sticky top-[var(--header-height-lg)]">
                <div class="text-[20px] leading-[150%] text-blue-300 mb-[16px] font-bold">TAGS</div>
                <Tag :tags="postObjTag.tags" />
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
import { formatDate } from '@/lib/global.js'
export default {
  data() {
    return {
      SocialMeta: {
        title: 'RalliSmart Blog - Tổng hợp kiến thức về chiếu sáng vì con người',
        description:
          'Tìm hiểu thêm về giải pháp chiếu sáng vì con người hay mẹo sử dụng sản phẩm từ góc độ chuyên gia của RalliSmart.',
      },
      postObjTag: {},
      currentTag: {},
    }
  },

  async fetch() {
    const queryNes = this.$route.params.nested
    const { data: postObjTag } = await this.$api.post.listTag(queryNes)
    this.postObjTag = postObjTag
    this.currentTag = postObjTag.tags.find((tag) => tag.slug === queryNes)
  },
  methods: {
    formatDate,
  },
}
</script>
<style lang="scss" scoped>
.card {
  @apply duration-200 bg-white;

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
.text-shadow {
  text-shadow: 0px 4px 20px rgba(181, 252, 235, 0.82);
}

.list_tag {
  display: flex;
  white-space: nowrap;
  width: 100%;
  transition: all 0.2s ease-out;
  overflow-x: auto;
  scroll-behavior: smooth;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
}
</style>
