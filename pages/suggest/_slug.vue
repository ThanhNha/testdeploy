<template>
  <main>
    <section class="xl:mb-[32px] md:mb-[22px] mb-[16px]">
      <div class="container">
        <div class="breadcrumb caption text-gray-500 md:pt-[16px] pt-[12px]">
          <ul class="flex flex-wrap items-center font-medium">
            <li class="flex items-center mb-[8px] md:mb-0">
              <NuxtLink to="/">Trang chủ</NuxtLink>
              <JIcon name="chervon-breadcrumb" class="mx-[12px]" />
            </li>
            <li class="flex items-center mb-[8px] md:mb-0">
              <NuxtLink :to="{ name: 'suggest' }">Gợi ý thiết kế</NuxtLink>
              <JIcon name="chervon-breadcrumb" class="mx-[12px]" />
            </li>
            <li class="font-semibold text-gray-700 mb-[8px] md:mb-0">{{ room.title }}</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="xl:pb-[56px] md:pb-[39px] pb-[28px]">
      <div class="container">
        <div class="grid grid-cols-12 xl:gap-x-[32px] md:gap-x-[22px] gap-y-[16px]">
          <div class="col-span-full md:col-span-6">
            <div class="sticky top-[10px]">
              <div class="aspect-w-3 aspect-h-2">
                <JPicture :src="room.image_url || '/images/cover-row.jpg'" class="picture-cover" />
              </div>
              <div class="xl:mt-[20px] md:mt-[14px] mt-[10px]">
                <div class="grid grid-cols-2">
                  <div class="flex flex-col xl:space-y-[12px] md:space-y-[8px] space-y-[6px]">
                    <div
                      v-if="room.category"
                      class="flex items-center xl:space-x-[20px] md:space-x-[14px] space-x-[10px]"
                    >
                      <JIcon name="house" />
                      <span class="font-medium p2">{{ room.category }}</span>
                    </div>
                    <div
                      v-if="room.type"
                      class="flex items-center xl:space-x-[20px] md:space-x-[14px] space-x-[10px]"
                    >
                      <JIcon name="bed" />
                      <span class="font-medium p2">{{ room.type }}</span>
                    </div>
                  </div>
                  <div class="bg-green-opacity xl:ml-[15px]">
                    <div class="p2 font-medium mb-[4px]">Diện tích</div>
                    <div class="font-medium text-gradient p2">{{ room.size }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-full md:col-span-6">
            <h1 class="font-bold uppercase h4 text-linear-2">{{ room.title }}</h1>
            <div
              class="border border-gray-300 rounded-[10px] py-[12px] xl:px-[32px] md:px-[22px] px-[16px] xl:my-[32px] md:my-[22px] my-[16px]"
            >
              <div class="grid grid-cols-2 xl:gap-x-[32px] md:gap-x-[22px] gap-x-[16px]">
                <div class="flex flex-col xl:space-y-[20px] md:space-y-[8px] space-y-[6px]">
                  <div class="font-medium text-gray-600 p2">Loại trần</div>
                  <div class="font-bold text-black p1">{{ room.ceiling }}</div>
                </div>
                <div class="flex flex-col xl:space-y-[20px] md:space-y-[8px] space-y-[6px]">
                  <div class="font-medium text-gray-600 p2">Độ sáng gợi ý</div>
                  <div class="font-bold text-black p1">{{ room.light }}</div>
                </div>
              </div>
            </div>
            <div
              v-if="room.products && room.products.length > 0"
              class="xl:mt-[36px] md:mt-[22px] mt-[16px]"
            >
              <div class="font-bold text-black p1">Loại đèn và số lượng gợi ý</div>
              <div class="lg:mt-[22px] md:mt-[15px] mt-[11px]">
                <div class="bg-green lg:p-[20px] md:p-[14px] p-[10px] flex flex-col space-y-[16px]">
                  <div
                    class="flex items-center justify-between text-blue-300"
                    v-for="(product, index) in room.products"
                    :key="index"
                  >
                    <div class="font-medium">{{ product.title }}</div>
                    <div class="font-semibold">{{ product.quantity }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="room.detail" class="xl:mt-[36px] md:mt-[22px] mt-[16px]">
              <div class="font-bold text-black p1">Gợi ý chi tiết</div>
              <div
                class="xl:mt-[12px] md:mt-[8px] mt-[6px] text-gray-600"
                v-html="room.detail"
              ></div>
              <div
                class="xl:mt-[32px] md:mt-[22px] mt-[16px] flex items-center xl:space-x-[24px] md:space-x-[17px] space-x-[12px]"
              >
                <JButton icon="download" title="Lưu gợi ý" className="w-full md:w-auto" />
                <JButton
                  title="Nhận tư vấn"
                  variant="secondary"
                  path="contact"
                  className="w-full md:w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      v-if="room.products && room.products.length > 0"
      class="xl:pt-[88px] md:pt-[62px] pt-[44px] xl:pb-[40px] md:pb-[36px] pb-[28px] bg-gray-100 mb-[12px]"
    >
      <div class="container">
        <div class="font-bold uppercase h4 text-linear-2">Một số sản phẩm phù hợp</div>
        <div class="xl:pt-[48px] md:pt-[34px] pt-[24px] xl:pb-[40px] md:pb-[28px] pb-[20px]">
          <SliderProduct :products="room.products" />
        </div>
      </div>
    </section>
    <section
      v-if="relatedRoom && relatedRoom.length > 0"
      class="bg-gray-100 xl:py-[40px] md:py-[28px] py-[20px] xl:mb-[12px] md:mb-[8px] mb-[6px]"
    >
      <div class="container">
        <div class="h4 font-bold text-linear-2 uppercase xl:mb-[32px] md:mb-[22px] mb-[16px]">
          Gợi ý cho bạn
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 xl:gap-[32px] md:gap-[22px] gap-[16px]">
          <NuxtLink
            :to="{ name: 'suggest-slug', params: { slug: 'demo' } }"
            class="relative overflow-hidden rounded-[16px] group"
            v-for="(room, index) in relatedRoom"
            :key="index"
          >
            <div class="aspect-w-3 aspect-h-2">
              <JPicture
                :src="room.image_url"
                class="duration-200 scale-100 picture-cover group-hover:scale-105"
              />
            </div>
            <div class="absolute bottom-0 w-full h-[50%] bg-card p-[20px]">
              <div class="flex items-end justify-start h-full font-bold text-white h4">
                {{ room.title }}
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="bg-gray-100 xl:py-[82px] md:py-[60px] py-[43px]">
      <div class="container">
        <div class="grid grid-cols-12 xl:xl:gap-x-[32px] md:gap-x-[22px] gap-x-[16px]">
          <div class="col-span-full">
            <div class="flex flex-col items-start justify-center text-center md:text-left">
              <div class="text-blue-100 uppercase h3">
                Chưa sẵn sàng trang bị cho toàn bộ ngôi nhà?
              </div>
              <div class="h2 font-bold uppercase text-linear-2 my-[8px]">
                Trải nghiệm Chiếu sáng thông minh siêu tiết kiệm
              </div>
              <div class="w-[381px] h-[6px] bg-line-green"></div>
            </div>
          </div>
        </div>
        <div
          class="xl:mt-[32px] md:mt-[22px] mt-[16px] grid md:grid-cols-2 xl:xl:gap-x-[32px] md:gap-x-[22px] gap-y-[16px]"
        >
          <CardCategory
            v-for="(category, indexC) in categories"
            :key="indexC"
            :category="category"
          />
        </div>
      </div>
    </section>
    <SocialMeta
      title="Thiết kế ánh sáng tối ưu cho không gian của bạn"
      description="RalliSmart hỗ trợ bạn tìm kiếm giải pháp thiết kế ánh sáng tối ưu cho không gian của bạn."
    />
  </main>
</template>

<script>
export default {
  async asyncData({ $api, params }) {
    const { data } = await $api.room.show(params.slug)
    const room = data.item
    const relatedRoom = data.related_rooms

    return {
      room,
      relatedRoom,
    }
  },

  data() {
    return {
      categories: [
        {
          title: 'Smart Kit',
          description: 'Nhóm sản phẩm trải nghiệm giải pháp chiếu sáng thông minh cơ bản',
          image: '/images/suggest/smart-kit.jpg',
          path: 'smart-kit',
        },
        {
          title: 'Smart Local',
          description: 'Nhóm sản phẩm trải nghiệm chiếu sáng tích hợp smartphone',
          image: '/images/suggest/smart-local.jpg',
          path: 'smart-local',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.bg-green-opacity {
  background: rgba(7, 155, 113, 0.1);
  @apply rounded-full px-[32px] py-[8px];
}
.bg-green {
  background: linear-gradient(
    89.94deg,
    rgba(7, 189, 137, 0.1) 2.92%,
    rgba(0, 110, 140, 0.1) 79.81%,
    rgba(1, 66, 81, 0.1) 103.13%
  );
}
.text-gradient {
  background: -webkit-linear-gradient(89.92deg, #07bd89 2.93%, #006e8c 51.07%, #013a46 99.92%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bg-card {
  background: linear-gradient(360deg, #01566b 4.48%, rgba(61, 198, 124, 0) 100%);
}
</style>
