<template>
  <main>
    <section class="">
      <div class="xl:pb-[68px] md:pb-[48px] pb-[34px]">
        <div class="container">
          <section>
            <div class="py-[20px]">
              <div class="space-x-[4px] breadcrumb">
                <div class="flex items-center flex-wrap">
                  <NuxtLink
                    :to="{ name: 'index' }"
                    class="caption text-gray-500 hover:text-green-100 transition duration-200 ease-in-out font-medium mr-2 lg:mr-3"
                    >Trang chủ</NuxtLink
                  >
                  <JIcon name="breadcrumb" class="mr-2 lg:mr-3" />
                  <NuxtLink
                    :to="{ name: 'blog' }"
                    class="caption text-gray-500 hover:text-green-100 transition duration-200 ease-in-out font-medium mr-2 lg:mr-3"
                    >Blog</NuxtLink
                  >
                  <JIcon name="breadcrumb" class="mr-2 lg:mr-3" />
                  <span class="caption font-semibold text-gray-700">
                    {{ post.title }}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <div class="grid grid-cols-12 gap-[16px] md:gap-[22px] xl:gap-[32px]">
            <div class="xl:col-span-1 col-span-full relative">
              <div class="sticky top-[var(--header-height-lg)]">
                <div class="text-center xl:w-[86px]">
                  <div class="xl:block hidden">
                    <div class="text-[18px] leading-[150%] text-blue-300 font-medium">
                      {{ formatMonth(post.created_at) }}
                    </div>
                    <div class="text-[36px] leading-[150%] text-blue-300 font-medium">
                      {{ formatDay(post.created_at) }}
                    </div>
                    <div class="my-[20px] xl:max-w-[48px] bg-gray-400 h-[1px] m-auto"></div>
                  </div>

                  <div
                    class="flex xl:flex-col xl:space-y-[24px] xl:space-x-[0px] space-x-[10px] items-center xl:justify-center"
                  >
                    <div
                      class="text-[18px] leading-[150%] text-blue-300 font-medium xl:block hidden"
                    >
                      Chia sẻ
                    </div>

                    <div class="hover:scale-[1.2] duration-300">
                      <a :href="facebookUrl" target="_blank"><JIcon name="facebook" /></a>
                    </div>
                    <div class="hover:scale-[1.2] duration-300">
                      <a href="https://www.messenger.com/t/210447577069458"
                        ><JIcon name="messenger"
                      /></a>
                    </div>
                    <div
                      class="zalo-share-button"
                      data-href=""
                      data-oaid="579745863508352884"
                      data-layout="3"
                      data-color="blue"
                      data-customize="false"
                    ></div>
                    <div class="relative hover:scale-[1.2] duration-300">
                      <div @click="copyLink()" class="cursor-pointer w-[30px] h-[30px]">
                        <JIcon name="link" />
                      </div>
                      <input id="input-copy" type="hidden" />
                      <div
                        class="absolute top-[0%] bg-green-300 text-white duration-300 py-[4px] px-[12px] w-max left-[160%]"
                        :class="copySuccess ? 'opacity-100' : 'opacity-0'"
                      >
                        Đã copy link
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="lg:col-span-8 col-span-full flex flex-col">
              <section class="flex flex-col space-y-[16px]" v-if="post">
                <div class="overflow-hidden" v-if="post.image_url">
                  <JImage :src="post.image_url" class="picture-cover w-full" />
                </div>
                <div class="flex flex-wrap items-center">
                  <NuxtLink
                    v-for="(tag, index) in post.tag"
                    :key="index"
                    :to="{ name: 'blog-nested', params: { nested: tag.slug } }"
                    class="text-gray-600 md:text-gray-700 text-[10px] hover:text-green-100 my-[4px] py-1 px-2 md:py-[2px] md:px-[12px] bg-gray-100 hover:bg-[#EBF9F5] duration-150 rounded-[30px] inline-block font-semibold max-lg:shadow mr-2 mb-2"
                  >
                    {{ tag.name }}
                  </NuxtLink>
                </div>
                <div class="h3 text-[#2F2F2F] font-bold">
                  {{ post.title }}
                </div>
                <div class="text-blue-300 font-semibold" v-html="post.summary"></div>
              </section>
              <section class="xl:mt-[32px] md:mt-[22px] mt-[16px]">
                <div class="prose" v-html="post.detail"></div>

                <div class="flex xl:hidden items-center justify-end space-x-[10px] mt-[12px]">
                  <div class="text-[18px] leading-[150%] text-blue-300 font-medium xl:hidden">
                    Chia sẻ:
                  </div>
                  <div class="hover:scale-[1.2] duration-300">
                    <a :href="facebookUrl" target="_blank"><JIcon name="facebook" /></a>
                  </div>
                  <div class="hover:scale-[1.2] duration-300">
                    <a :href="messagerUrl"><JIcon name="messenger" /></a>
                  </div>
                  <div
                    class="zalo-share-button"
                    data-href=""
                    data-oaid="579745863508352884"
                    data-layout="3"
                    data-color="blue"
                    data-customize="false"
                  ></div>
                  <div class="relative hover:scale-[1.2] duration-300">
                    <div @click="copyLink()" class="cursor-pointer w-[30px] h-[30px]">
                      <JIcon name="link" />
                    </div>
                    <input id="input-copy" type="hidden" />
                    <div
                      class="absolute top-[0%] bg-green-300 text-white duration-300 py-[4px] px-[12px] w-max left-[160%]"
                      :class="copySuccess ? 'opacity-100' : 'opacity-0'"
                    >
                      Đã copy link
                    </div>
                  </div>
                </div>
              </section>
              <section class="xl:mt-[40px] md:mt-[28px] mt-[20px]">
                <div class="grid sm:grid-cols-2 grid-cols-1 gap-[16px] md:gap-[22px] xl:gap-[32px]">
                  <div
                    class="col-span-full text-[24px] leading-[120%] font-bold font-display text-linear-2"
                  >
                    BÀI VIẾT LIÊN QUAN
                  </div>
                  <JCardBlog
                    v-for="(item, indexR) in related_items.slice(0, 4)"
                    :key="indexR"
                    :item="item"
                    :classCard="false"
                  >
                  </JCardBlog>
                </div>
              </section>
            </div>

            <!-- Tags -->
            <div class="lg:col-span-3 col-span-full relative">
              <div class="sticky top-[var(--header-height-lg)]">
                <div class="p1 mb-[16px] font-bold text-blue-300">TAGS</div>
                <Tag :tags="tags" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <SocialMeta
      title="RalliSmart Blog - Tổng hợp kiến thức về chiếu sáng vì con người"
      description="Tìm hiểu thêm về giải pháp chiếu sáng vì con người hay mẹo sử dụng sản phẩm từ góc độ chuyên gia của RalliSmart."
    />
  </main>
</template>

<script>
import { formatDate, formatMonth, formatDay } from '@/lib/global.js'

export default {
  data() {
    return {
      copySuccess: false,
      facebookUrl: null,
      messagerUrl: null,
      post: {},
      tags: [],
      related_items: [],
    }
  },
  async fetch() {
    const slug = this.$route.params.slug
    const { data } = await this.$api.post.show(slug)
    this.post = data.item
    this.related_items = data.related_items
    this.tags = data.tag
  },
  methods: {
    formatDate,
    formatMonth,
    formatDay,
    copyLink() {
      const input = document.querySelector('#input-copy')
      input.value = window.location.href
      input.setAttribute('type', 'text')
      input.select()
      input.setSelectionRange(0, 99999)
      document.execCommand('copy')
      input.setAttribute('type', 'hidden')
      window.getSelection().removeAllRanges()
      this.copySuccess = true
      setTimeout(() => {
        this.copySuccess = false
      }, 1000)
    },
  },
  mounted() {
    this.facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
    this.messagerUrl = `fb-messenger://share/?link=${window.location.href}`
    let Script = document.createElement('script')
    Script.setAttribute('src', 'https://sp.zalo.me/plugins/sdk.js')
    document.head.appendChild(Script)
  },
}
</script>
<style lang="scss" scoped>
.prose {
  max-width: 100%;
  h2 {
    margin-bottom: 20px;
    font-size: 20px;
  }
  h3 {
    font-size: 18px;
    line-height: 150%;
  }
  p {
    line-height: 150%;
  }
  img {
    @apply w-full h-auto mx-auto;
  }
}
</style>
