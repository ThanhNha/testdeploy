<template>
  <main>
    <div class="bg-white pb-[76px]">
      <div class="container">
        <section>
          <div class="py-4">
            <div class="space-x-[4px] breadcrumb">
              <div class="flex items-center space-x-2 lg:space-x-3">
                <NuxtLink
                  :to="{ name: 'index' }"
                  class="font-medium text-gray-500 transition duration-200 ease-in-out caption hover:text-green-100"
                  >Trang chủ</NuxtLink
                >
                <JIcon name="breadcrumb" />
                <span class="font-semibold text-gray-700 caption">Vlog</span>
              </div>
            </div>
          </div>
        </section>
        <div class="grid lg:grid-cols-3 grid-cols-2 xl:gap-[32px] md:gap-[16px] gap-[12px]">
          <div class="col-span-full">
            <div class="inline-block overflow-hidden">
              <div class="font-bold uppercase h2 text-linear-2 text-shadow">VLOG</div>
              <div class="line mt-[8px]"></div>
            </div>
          </div>
          <template v-if="videoObj.items">
            <JCardVlog v-for="(item, index) in videoObj.items.data" :key="index" :item="item">
            </JCardVlog>
          </template>
        </div>
        <div class="mt-[32px]">
          <Pagination :data="videoObj.items" />
        </div>
      </div>
    </div>
    <SocialMeta :title="SocialMeta.title" :description="SocialMeta.description" />
  </main>
</template>
<script>
export default {
  async fetch() {
    const { query } = this.$route
    const params = { page: 1, ...query }
    const { data: videoObj } = await this.$api.post.vlog(params)
    this.videoObj = videoObj
  },
  watch: {
    '$route.query': function () {
      this.$fetch()
    },
  },
  data() {
    return {
      SocialMeta: {
        title: 'RalliSmart Vlog - Câu chuyện của chuyên gia ánh sáng',
        description: 'Cùng xem chia sẻ của các chuyên gia ánh sáng từ RalliSmart.',
      },
      videoObj: {},
    }
  },
}
</script>
<style lang="scss" scoped>
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
</style>
