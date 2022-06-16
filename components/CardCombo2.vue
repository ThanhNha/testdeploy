<template>
  <div class="xl:w-[387px]" v-if="combo">
    <AnimateAppear class="relative overflow-hidden cursor-pointer card">
      <div class="overflow-hidden relative lg:h-[300px] xl:h-[380px] rounded-[20px]">
        <div class="overflow-hidden">
          <JPicture :src="combo.image_url" class="picture-cover image" />
        </div>
        <div class="lg:mt-[16px] md:mb-0 box">
          <div class="line-clamp-2 title p2 uppercase mb-[4px]">{{ combo.name }}</div>
          <div class="text-center p2 text-blue-50">Giá: {{ combo.price_smart | formatPrice }}</div>
          <div
            class="mt-[16px] flex md:flex-col lg:flex-row space-x-[8px] md:space-x-0 space-y-0 md:space-y-[8px] lg:space-y-0 lg:space-x-[16px] btn-group"
          >
            <JButton
              title="Mua ngay"
              className="w-full"
              size="sm"
              :href="`https://rangdongstore.vn/don-hang?combo_id=${combo.id}`"
            />
            <JButton
              title="Xem chi tiết"
              variant="secondary"
              className="w-full"
              size="sm"
              @click.native="currentModal = 'sampleModal'"
            />
          </div>
        </div>
      </div>
    </AnimateAppear>
    <JModal
      :show="currentModal === 'sampleModal' && combo.products.length"
      @close="currentModal = null"
    >
      <div>
        <div class="font-bold text-center uppercase h3 text-linear-2">{{ combo.name }}</div>
        <div class="my-[10px] md:my-[12px] xl:my-[24px]">
          <div class="md:grid md:grid-cols-2 lg:grid-cols-5 gap-[8px]">
            <div
              class="md:p-[8px] bg-white rounded-[16px] grid grid-cols-5 lg:flex lg:flex-col gap-x-[8px] mb-[10px] md:mb-0 last:mb-0"
              v-for="(product, index) in combo.products"
              :key="index"
            >
              <div class="col-span-2 lg:col-span-full">
                <div class="rounded-[16px] overflow-hidden">
                  <div class="aspect-w-1 aspect-h-1">
                    <JPicture
                      :src="product.image_url || '/images/cover-combo-square.jpg'"
                      class="picture-cover"
                      :alt="product.name"
                    />
                  </div>
                </div>
              </div>
              <div class="lg:mt-[8px] lg:py-[16px] col-span-3 lg:col-span-full">
                <div class="font-semibold text-gray-800 lg:text-center line-clamp-2">
                  {{ product.title }}
                </div>
                <div class="text-gray-600 lg:text-center line-clamp-2">
                  Model: {{ product.sku }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center xl:mb-[24px] md:mb-[17px] my-[12px]">
          <div class="p1 text-blue-50">Giá: {{ combo.price_smart | formatPrice }}</div>
        </div>
        <div class="flex items-center justify-center">
          <JButton
            title="Mua combo tại rạng đông store"
            icon="DoubleRight"
            :href="`https://rangdongstore.vn/don-hang?combo_id=${combo.id}`"
            class="hidden md:block"
          />
          <JButton
            title="Mua combo tại rạng đông store"
            :href="`https://rangdongstore.vn/don-hang?combo_id=${combo.id}`"
            class="block md:hidden"
          />
        </div>
      </div>
    </JModal>
  </div>
</template>

<script>
export default {
  props: {
    combo: {
      type: Object,
      default: function () {
        return null
      },
    },
  },
  data() {
    return {
      currentModal: null,
    }
  },
}
</script>

<style lang="scss" scoped>
.card {
  @apply w-full bg-white rounded-[20px] px-[16px] py-[20px] my-[8px] md:my-[20px] overflow-hidden;
  .image {
    @apply object-cover w-full h-full scale-100 duration-200 ease-out rounded-[8px];
  }
  .title {
    @apply text-black text-center duration-200;
  }
  .btn-group {
    @apply lg:opacity-0 duration-200;
  }
  .box {
    @apply lg:absolute lg:bottom-[-10%] w-full bg-white duration-200 py-[10px] md:py-[20px];
  }
  &:hover {
    box-shadow: 0px 0px 30px rgba(38, 41, 43, 0.1);
    .image {
      @apply scale-110;
    }
    .box {
      @apply bottom-0;
    }
    .btn-group {
      @apply opacity-100 duration-200;
    }
  }
}
</style>
