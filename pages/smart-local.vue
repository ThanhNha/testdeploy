<template>
  <main class="lg:mt-0 md:mt-[72px]">
    <h1></h1>
    <JBanner
      img="/images/smart-local/banner.jpg"
      className="h-[30vh] md:h-[calc(70vh-var(--header-height-md))] xl:h-[calc(100vh-var(--header-height-lg))]"
    />
    <section class="xl:pt-[72px] md:pt-[50px] pt-[36px] xl:pb-[87px] md:pb-[61px] pb-[44px]">
      <div class="container">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:gap-y-[52px] md:gap-y-[36px] gap-y-[26px] gap-x-[20px] lg:gap-x-0"
        >
          <CardCombo v-for="(card, index) in comboData.combo || []" :key="index" :item="card" />
        </div>
      </div>
    </section>

    <!--  -->
    <section
      class="bg-table xl:pt-[72px] md:pt-[50px] pt-[36px] xl:pb-[42px] md:pb-[29px] pb-[21px]"
    >
      <div class="md:container">
        <div class="grid grid-cols-12 gap-x-[32px] xl:gap-y-[28px] md:gap-y-[32px] gap-y-[14px]">
          <div
            class="col-span-full md:col-span-8 md:col-start-3 xl:col-span-6 xl:col-start-4 mx-[20px] md:mx-0"
          >
            <div class="flex flex-col items-center justify-center">
              <div class="h2 font-bold text-linear-2 uppercase mb-[8px] text-center">
                Trải nghiệm <br class="block md:hidden" />
                đa dạng
              </div>
              <div class="w-[366px] h-[6px] bg-line-green-2"></div>
              <div class="mt-[24px] font-medium text-black text-center">
                RalliSmart phát triển đa dạng các dòng sản phẩm combo giúp khách hàng có thể trải
                nghiệm nhiều tính năng của hệ thống trước khi quyết định nâng cấp toàn bộ không gian
                sống.
              </div>
            </div>
          </div>
          <div class="col-span-full xl:col-span-10 xl:col-start-2">
            <Table />
          </div>
        </div>
      </div>
    </section>

    <!--  -->

    <section
      v-if="comboData.combo_ble && comboData.combo_ble.length > 0"
      id="combo-ble"
      name="Combo Ble"
      class="xl:pt-[64px] md:pt-[45px] pt-[32px] pb-[12px] last:pb-[56px] bg-gray-100 section"
    >
      <div class="container">
        <div
          class="grid grid-cols-12 xl:gap-x-[32px] md:gap-x-[22px] gap-x-[16px] xl:gap-y-[28px] md:gap-y-[20px] gap-y-[14px]"
        >
          <div class="col-span-full">
            <div class="flex flex-col items-center justify-center">
              <div class="h2 font-bold text-linear-2 uppercase mb-[8px]">
                Danh sách <br class="block md:hidden" />
                combo BLE
              </div>
              <div class="w-[150px] md:w-[366px] h-[6px] bg-line-green-2"></div>
            </div>
          </div>
          <div class="col-span-full">
            <div
              class="grid grid-cols-1 md:grid-cols-3 xl:flex items-center justify-center xl:space-x-[32px] gap-x-[20px]"
            >
              <CardCombo2
                v-for="(combo, index) in comboData.combo_ble"
                :key="index"
                :combo="combo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="comboData.combo_wifi && comboData.combo_wifi.length > 0"
      id="combo-wifi"
      name="Combo Wifi"
      class="xl:pt-[64px] md:pt-[45px] pt-[32px] pb-[12px] last:pb-[56px] bg-gray-100 section"
    >
      <div class="container">
        <div
          class="grid grid-cols-12 xl:gap-x-[32px] md:gap-x-[22px] gap-x-[16px] xl:gap-y-[28px] md:gap-y-[20px] gap-y-[14px]"
        >
          <div class="col-span-full">
            <div class="flex flex-col items-center justify-center">
              <div class="h2 font-bold text-linear-2 uppercase mb-[8px]">
                Danh sách <br class="block md:hidden" />
                combo WIFI
              </div>
              <div class="w-full md:w-[366px] h-[6px] bg-line-green-2"></div>
            </div>
          </div>
          <div class="col-span-full">
            <div
              class="grid grid-cols-1 md:grid-cols-3 xl:flex items-center justify-center xl:space-x-[32px] gap-x-[20px]"
            >
              <CardCombo2
                v-for="(combo, index) in comboData.combo_wifi"
                :key="index"
                :combo="combo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="comboData.combo_remote && comboData.combo_remote.length > 0"
      id="combo-remote"
      name="Combo Remote"
      class="xl:pt-[64px] md:pt-[45px] pt-[32px] pb-[12px] last:pb-[56px] bg-gray-100 section"
    >
      <div class="container">
        <div
          class="grid grid-cols-12 xl:gap-x-[32px] md:gap-x-[22px] gap-x-[16px] xl:gap-y-[28px] md:gap-y-[20px] gap-y-[14px]"
        >
          <div class="col-span-full">
            <div class="flex flex-col items-center justify-center">
              <div class="h2 font-bold text-linear-2 uppercase mb-[8px] text-center">
                Danh sách <br class="block md:hidden" />
                combo Remote
              </div>
              <div class="w-full md:w-[366px] h-[6px] bg-line-green-2"></div>
            </div>
          </div>
          <div class="col-span-full">
            <div
              class="grid grid-cols-1 md:grid-cols-3 xl:flex items-center justify-center xl:space-x-[32px] gap-x-[20px]"
            >
              <CardCombo2
                v-for="(combo, index) in comboData.combo_remote"
                :key="index"
                :combo="combo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <SocialMeta
      title="Smart Local - Trải nghiệm một phần của cuộc sống thông minh"
      description="Smart Local mang lại cái nhìn tổng quan cho khách hàng về giải pháp Chiếu sáng thông minh và trải nghiệm những tiện ích hấp dẫn của cuộc sống hiện đại."
    />
  </main>
</template>

<script>
export default {
  name: 'Smart local',
  data() {
    return {
      cards: [
        {
          image: 'images/smart-local/image-1.jpg',
          title: 'An ninh, an toàn',
          price: '15.459.000 Đ',
          list: [
            'Cảnh báo khi cửa mở',
            'Cảnh báo khi có khói',
            'Cảnh báo khi nồng độ bụi mịn tăng cao',
            'Đèn tự động bật sáng khi có người trong khu vực',
            'Sử dụng App RalliSmart V2',
          ],
        },
        {
          image: 'images/smart-local/image-2.jpg',
          title: 'Giải pháp sức khỏe',
          price: '15.459.000 Đ',
          list: [
            'Theo dõi thông số về mức độ bụi mịn, độ ẩm',
            'Điều khiển đèn thông minh, máy lọc không khí, máy điều hòa',
            'Kịch bản gợi ý tập trung vào ánh sáng HCL',
            'Hỗ trợ thiết lập kịch bản cá nhân',
            'Sử dụng App RalliSmart V2',
          ],
        },
      ],

      comboData: {},
    }
  },

  async fetch() {
    const { data } = await this.$api.product.comboFilter({
      category_id: 1,
    })
    this.comboData = data
  },
  methods: {
    clickMenu(id) {
      var offsetTop = document.getElementById(id).offsetTop
      this.scrollTo(offsetTop, 2000, this.easeOutCubic, function () {})
      this.current = document.getElementById(id)
    },
    easeOutCubic: function (t) {
      return --t * t * t + 1
    },
    scrollTo(Y, duration, easingFunction, callback) {
      var start = Date.now(),
        elem = document.documentElement ? document.documentElement : document.body,
        from = elem.scrollTop

      if (from === Y) {
        callback()

        return /* Prevent scrolling to the Y point if already there */
      }

      function min(a, b) {
        return a < b ? a : b
      }

      function scroll(timestamp) {
        var currentTime = Date.now(),
          time = min(1, (currentTime - start) / duration),
          easedT = easingFunction(time)

        elem.scrollTop = easedT * (Y - from) + from

        if (time < 1) requestAnimationFrame(scroll)
        else if (callback) callback()
      }

      requestAnimationFrame(scroll)
    },
  },
}
</script>

<style lang="scss" scoped>
.bg-table {
  background: url('../static/images/smart-local/banner-table.jpg') no-repeat;
  background-size: cover;
  @screen lg {
    background-attachment: fixed;
  }
}
</style>
