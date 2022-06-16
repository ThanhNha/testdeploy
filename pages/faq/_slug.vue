<template>
  <main>
    <div class="lg:mt-0 md:mt-[70px]">
      <section class="bg-image--faqs">
        <div class="container pt-[67px] pb-[43px]">
          <div class="grid grid-cols-12 gap-[32px]">
            <div
              class="col-span-full md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6 text-center"
            >
              <h1
                class="uppercase banner-title text-[24px] md:text-[32px] xl:text-[40px] leading-[120%] font-display font-bold text-white text-linear-3 xl:mb-[20px] mb-[10px]"
              >
                CÂU HỎI THƯỜNG GẶP
              </h1>
              <div class="line xl:max-w-[366px] m-auto"></div>
              <div class="xl:mt-[20px] md:mt-[14px] mt-[12px] font-medium text-white">
                Giải đáp mọi thắc mắc về sản phẩm, app và những vấn đề khác mà khách hàng quan tâm.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container">
        <div class="xl:py-[56px] md:py-[39px] py-[28px]">
          <div class="grid grid-cols-10 gap-[24px] md:gap-[34px] lg:gap-[48px]">
            <div class="md:col-span-3 col-span-full relative">
              <div class="flex-col sticky top-[var(--header-height-lg)] md:flex hidden">
                <NuxtLink
                  v-for="(item, index) in questions"
                  :key="index"
                  :to="{ name: 'faq-slug', params: { slug: item.slug } }"
                  class="p2 cursor-pointer duration-500 font-semibold py-4 px-6"
                  :class="
                    $route.params.slug == item.slug ? 'text-blue-300 active  ' : 'text-[#2F2F2F]'
                  "
                >
                  {{ item.title }}
                </NuxtLink>
              </div>
              <div class="md:hidden flex">
                <select
                  @change="onChangeFAQ"
                  class="focus:border-green-500 text-blue-300 border border-green-500 py-2 md:pl-6 bg-white font-semibold w-full rounded"
                >
                  <option
                    v-for="(item, index) in questions"
                    :key="index"
                    :value="item.slug"
                    class="text-[16px] sm:text-[18px] leading-[150%] text-[#2F2F2F] font-medium"
                  >
                    {{ item.title }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-span-full md:col-span-7" v-if="faqItem && faqItem.faqs">
              <div class="flex flex-col space-y-[10px] lg:space-y-[20px]">
                <div v-for="(item, index) in faqItem.faqs" :key="index">
                  <div class="flex flex-col lg:space-y-[16px] space-y-[11px]">
                    <div
                      id="lb_accordeon"
                      class="p-[8px] lg:p-[16px] rounded-[12px] border-[2px] duration-500"
                      :class="currentTab === item ? 'border-green-500' : 'border-gray-300'"
                    >
                      <div
                        class="flex justify-between cursor-pointer items-center"
                        @click="handleTab(item)"
                        :class="currentTab === item ? 'tab-active' : ''"
                      >
                        <div
                          class="p2 text-black max-w-[80%] font-semibold duration-500"
                          :class="currentTab === item ? 'text-green-50' : 'text-black'"
                        >
                          {{ item.question }}
                        </div>
                        <div
                          class="w-[24px] h-[24px] flex items-center justify-center text-black hover:text-green-50"
                        >
                          <JIcon
                            name="pagination"
                            class="duration-500"
                            :class="currentTab === item ? 'rotate-90' : 'rotate-[-90deg]'"
                          />
                        </div>
                      </div>

                      <transition
                        mode="out-in"
                        name="Tab-fade"
                        @before-enter="beforeEnterTab"
                        @enter="enterTab"
                      >
                        <div class="mt-[12px]" v-show="currentTab === item">
                          <div class="text-gray-500">
                            {{ item.answer }}
                          </div>
                        </div>
                      </transition>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SocialMeta :title="SocialMedia.title" :description="SocialMedia.description" />
  </main>
</template>
<script>
export default {
  data() {
    return {
      currentTab: '',
      SocialMedia: {
        title: 'Giải đáp thắc mắc về RalliSmart',
        description:
          'Bạn đang thắc mắc về RalliSmart, giải pháp chiếu sáng vì con người? Chúng tôi sẵn sàng hỗ trợ.',
      },

      items: [
        {
          title: 'Sản phẩm',
          slug: 'san-pham',
        },
        {
          title: 'Hệ thống',
          slug: 'he-thong',
        },
        {
          title: 'Tích hợp mở rộng',
          slug: 'tich-hop-mo-rong',
        },
        {
          title: 'Mua hàng bảo hành',
          slug: 'mua-hang-bao-hanh',
        },
      ],
      breadcrumb: {
        name: 'Câu hỏi thường gặp',
      },
      //
      categoryFAQs: [],
      faqs: [],

      faqItem: null,
      questions: [],
    }
  },

  async fetch() {
    const { slug } = this.$route.params
    const { data } = await this.$api.faq.show(slug)

    if (data) {
      const { item, question } = data
      this.faqItem = item
      this.questions = question
    }
  },
  methods: {
    onChangeFAQ(event) {
      const slug = event.target.value
      if (!slug) return
      this.$router.push({ name: 'faq-slug', params: { slug } })
    },
    handleTab: function (newTab) {
      if (newTab === this.currentTab) {
        this.currentTab = -10
      } else {
        this.currentTab = newTab
      }
    },
    beforeEnterTab: function (_t) {
      _t.style.display = 'block'
      _t.style.maxHeight = null
      _t.myHeight = _t.offsetHeight
      _t.style.maxHeight = 0
      _t.style.display = null
    },
    enterTab: function (_t) {
      _t.style.maxHeight = _t.myHeight + 'px'
    },
  },
}
</script>
<style lang="scss" scoped>
.active {
  border-left: 4px solid #04d99c;

  background: linear-gradient(90deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%);
}
@keyframes accordeonAni {
  0% {
    max-height: 0;
  }
}
.tab-active {
  .arrow__tab {
    transform: rotate(180deg);
  }
}
.Tab-fade {
  &-enter {
    max-height: 0;
    display: block;
  }
  &-enter-active {
    animation: accordeonAni 400ms ease-out;
    overflow: hidden;
  }
  &-leave {
    display: block;
  }
  &-leave-to {
    display: block;
  }
  &-leave-active {
    animation: accordeonAni 400ms ease-out;
    animation-direction: reverse;
    overflow: hidden;
  }
}

.bg-image {
  &--faqs {
    background-image: url('/images/banner-faqs.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    /* background-position: bottom; */
  }
}
</style>
