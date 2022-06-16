<template v-if="items">
  <div class="flex flex-col lg:space-y-[20px] space-y-[10px]">
    <div class="group" v-for="(item, index) in items" :key="index">
      <div
        class="lg:p-4 p-3 rounded-[12px] border-[1px] duration-500 bg-gray-700 cursor-pointer group-hover:border-green-500"
        :class="currentTab === item.slug ? 'border-green-500' : 'border-blue-100'"
        @click="handleTab(item.slug)"
      >
        <div
          class="flex justify-between items-center"
          :class="currentTab === item.slug ? 'tab-active' : ''"
        >
          <div
            class="text-[20px] leading-[150%] max-w-[80%] text-white duration-400 group-hover:text-green-500 duration-200"
            :class="currentTab === item.slug ? 'font-semibold' : 'font-medium'"
          >
            {{ item.name }}
          </div>
          <div class="lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] text-white hover:font-bold">
            <JIcon
              name="arrowDown"
              class="duration-300"
              :class="currentTab === item.slug ? 'rotate-[-180deg] ' : ''"
            />
          </div>
        </div>
        <transition mode="out-in" name="Tab-fade" @before-enter="beforeEnterTab" @enter="enterTab">
          <div class="mt-[12px]" v-show="currentTab === item.slug">
            <div class="text-white" v-html="item.answer"></div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['items'],

  data() {
    return {
      currentTab: '1',
    }
  },
  methods: {
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
    animation: accordeonAni 200ms ease-out;
    overflow: hidden;
  }
  &-leave {
    display: block;
  }
  &-leave-to {
    display: block;
  }
  &-leave-active {
    animation: accordeonAni 200ms ease-out;
    animation-direction: reverse;
    overflow: hidden;
  }
}
</style>
