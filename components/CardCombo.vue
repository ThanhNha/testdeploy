<template>
  <div>
    <AnimateAppear>
      <div class="rounded-[20px] relative overflow-hidden">
        <JPicture :src="item.image_url" class="picture-cover" />
        <div
          class="lg:absolute lg:top-1/2 lg:-translate-y-1/2 xl:right-[49px] md:right-[34px] right-[25px] max-w-full lg:max-w-[450px] w-full mt-[10px] lg:mt-0"
        >
          <div>
            <div class="text-blue-100 uppercase h3">Combo</div>
            <div class="h2 font-bold text-linear-1 uppercase my-[8px]">{{ item.name }}</div>
            <div class="w-full bg-line-green h-[6px]"></div>
          </div>
          <div
            class="h4 font-bold text-blue-50 xl:mt-[24px] md:mt-[17px] mt-[12px] xl:mb-[32px] md:mb-[22px] mb-[16px]"
          >
            Giá: {{ item.price_smart | formatPrice }}
          </div>
          <div
            class="list ml-[24px] font-medium text-black description_combo"
            v-html="item.description"
          ></div>
          <div class="xl:mt-[32px] md:mt-[22px] mt-[16px] flex items-center space-x-[16px]">
            <JButton
              title="Xem chi tiết"
              variant="secondary"
              @click.native="currentModal = 'sampleModal'"
            />
            <JButton
              title="Mua combo"
              :href="`https://rangdongstore.vn/don-hang?combo_id=${item.id}`"
            />
          </div>
        </div>
      </div>
    </AnimateAppear>
    <JModal :show="currentModal === 'sampleModal'" @close="currentModal = null">
      <div>
        <div class="font-bold text-center uppercase h3 text-linear-2">{{ item.name }}</div>
        <div class="my-[10px] md:my-[12px] xl:my-[24px]">
          <div class="md:grid md:grid-cols-2 lg:grid-cols-5 gap-[8px]">
            <div
              class="md:p-[8px] bg-white rounded-[16px] grid grid-cols-5 lg:flex lg:flex-col gap-x-[8px] md:mb-0 mb-[10px] last:mb-0"
              v-for="(product, index) in item.products"
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
          <div class="p1 text-blue-50">Giá: {{ item.price_smart | formatPrice }}</div>
        </div>
        <div class="flex items-center justify-center">
          <JButton
            title="Mua combo tại rạng đông store"
            icon="DoubleRight"
            :href="`https://rangdongstore.vn/don-hang?combo_id=${item.id}`"
            class="hidden md:block"
          />
          <JButton
            title="Mua combo tại rạng đông store"
            :href="`https://rangdongstore.vn/don-hang?combo_id=${item.id}`"
            class="block md:hidden"
          />
        </div>
      </div>
    </JModal>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      currentModal: null,
    }
  },
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  li {
    @apply relative mb-[4px] lg:mb-[8px] last:mb-0;
  }

  p:before {
    position: absolute;
    @apply w-[12px] h-[12px] top-[5px] rounded-full border border-white bg-green-50 left-[-24px];
    vertical-align: middle;
    display: inline-block;
    content: '';
    box-sizing: border-box;
    box-shadow: 0px 0px 10px rgba(4, 216, 155, 0.7);
  }
}

::v-deep {
  .description_combo {
    p {
      @apply relative mb-[4px] lg:mb-[8px] last:mb-0;
    }

    p:before {
      position: absolute;
      @apply w-[12px] h-[12px] top-[5px] rounded-full border border-white bg-green-50 left-[-24px];
      vertical-align: middle;
      display: inline-block;
      content: '';
      box-sizing: border-box;
      box-shadow: 0px 0px 10px rgba(4, 216, 155, 0.7);
    }
  }
}
</style>
