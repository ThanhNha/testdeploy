<template>
  <main>
    <section>
      <div class="container">
        <div class="py-4">
          <div class="space-x-[4px] breadcrumb">
            <div class="flex items-center lg:space-x-3 space-x-2">
              <NuxtLink
                :to="{ name: 'index' }"
                class="caption text-gray-500 hover:text-green-100 transition duration-200 ease-in-out font-medium"
                >Trang chủ</NuxtLink
              >
              <JIcon name="breadcrumb" />
              <span class="caption font-semibold text-gray-700">Blog</span>
            </div>
          </div>
        </div>
        <div class="overflow-hidden inline-block mb-[16px] md:mb-[22px] xl:mb-[32px]">
          <div class="font-bold uppercase h2 text-linear-2 text-shadow">BLOG</div>
          <div class="line mt-[8px]"></div>
        </div>
        <div class="pb-[28px] md:pb-[39px] xl:pb-[56px]">
          <div
            class="grid grid-cols-12 gap-[16px] md:gap-[22px] xl:gap-[32px]"
            v-if="!$fetchState.pending"
          >
            <div class="col-span-full lg:hidden">
              <div class="text-[20px] leading-[150%] text-blue-300 mb-[4px] font-bold">TAGS</div>
              <Tag :tags="postObj.tags" />
            </div>

            <div class="xl:col-span-9 col-span-full">
              <div
                class="xl:p-4 p-3 xl:rounded-[20px] md:rounded-[14px] rounded-[10px] overflow-hidden card group mb-[16px] md:mb-[22px] xl:mb-[32px]"
                v-for="(blog, index) in postObj.items.data.slice(0, 1)"
                :key="index"
              >
                <div class="grid grid-cols-9 gap-[16px] md:gap-[22px] xl:gap-[32px] group">
                  <div class="md:col-span-5 col-span-full">
                    <NuxtLink
                      :to="{
                        name: 'blog-slug',
                        params: { slug: blog.slug },
                      }"
                    >
                      <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-[8px]">
                        <JImage
                          :src="blog.image_url || '/images/cover-row.jpg'"
                          class="picture-cover image"
                        />
                      </div>
                    </NuxtLink>
                  </div>
                  <div class="md:col-span-4 col-span-full">
                    <div class="text-blue-300 mb-[4px] text-[18px] leading-[150%] font-medium">
                      {{ formatDate(blog.created_at) }}
                    </div>

                    <NuxtLink :to="{ name: 'blog-slug', params: { slug: blog.slug } }">
                      <div
                        class="text-[18px] md:text-[24px] leading-[150%] line-clamp-3 font-bold mb-3 title text-[#2F2F2F]"
                      >
                        {{ blog.title }}
                      </div>
                    </NuxtLink>

                    <Tag :tags="blog.tag" />

                    <div class="font-medium line-clamp-4 text-[#2F2F2F]">
                      {{ blog.summary }}
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="relative col-span-full grid grid-cols-2 md:grid-cols-3 gap-[6px] md:gap-[10px] lg:gap-[16px] xl:gap-[32px]"
              >
                <JCardBlog
                  v-for="(item, index) in postObj.items.data.slice(1)"
                  :key="index"
                  :item="item"
                  :prevID="index"
                />
              </div>

              <section class="pt-[32px] mx-auto">
                <Pagination :data="postObj.items" />
              </section>
            </div>

            <div class="col-span-3 relative xl:block hidden">
              <div class="sticky top-[var(--header-height-lg)]">
                <div class="text-[20px] leading-[150%] text-blue-300 mb-[16px] font-bold">TAGS</div>
                <Tag :tags="postObj.tags" />
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
      featuredPost: [],
      postObj: {},
      banner: [],
      checkedTags: '',
    }
  },

  watch: {
    '$route.query': function () {
      this.$fetch()
    },
  },
  async fetch() {
    const { query } = this.$route
    const params = { page: 1, ...query }
    const { data: postObj } = await this.$api.post.list(params)
    this.postObj = postObj
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
