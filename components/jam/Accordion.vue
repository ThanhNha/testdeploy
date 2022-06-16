<template>
  <ul
    class="flex flex-col flex-wrap w-full xl:hidden xl:flex-row xl:items-center xl:ml-auto menu-items xl:w-auto"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      class="flex flex-col justify-between w-full collapsible"
      :class="{
        active: collapseActive === index,
        'flex-none': collapseActive !== index,
      }"
    >
      <div
        class="relative transition duration-300 px-[16px] py-[12px] ease-out outline-none cursor-pointer font-semibold select-none flex justify-between items-center"
        :class="{
          'flex-grow bg-green-400 text-white': collapseActive === index,
          'flex-none text-green-500': collapseActive !== index,
        }"
        data-cursor-size
        v-if="item.link"
      >
        <NuxtLink :to="{ name: item.link }" class="text-left" @click.native="toggle()">{{
          item.title
        }}</NuxtLink>
      </div>
      <div
        class="relative transition duration-300 px-[16px] py-[12px] ease-out outline-none cursor-pointer font-semibold select-none flex justify-between items-center"
        v-else
        :class="{
          'flex-grow bg-green-400 text-white': collapseActive === index,
          'flex-none text-green-500': collapseActive !== index,
        }"
        @click="toggleCollapse(index)"
      >
        <div class="text-left">{{ item.title }}</div>
        <JIcon
          name="arrow-down-mobile"
          class="duration-150"
          :class="collapseActive === index ? '-rotate-180' : 'rotate-0'"
        ></JIcon>
      </div>
      <div
        class="collapsible-content flex flex-col space-y-[16px] w-full pl-[24px]"
        :class="collapseActive === index ? 'my-[12px]' : ''"
      >
        <template v-for="(item, idx) in item.sub">
          <NuxtLink
            :to="{ name: item.link.name }"
            class="font-semibold text-green-400"
            :key="idx"
            @click.native="toggle()"
          >
            {{ item.title }}
          </NuxtLink>
        </template>
      </div>
    </div>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      collapseActive: -1,
    }
  },

  mounted() {
    document.querySelectorAll('.collapsible .collapsible-content').forEach(function (el) {
      el.style.maxHeight = el.scrollHeight + 'px'
    })
  },

  methods: {
    ...mapMutations({ toggle: 'menu/toggle' }),

    toggleCollapse(index) {
      this.collapseActive = this.collapseActive !== index ? index : null
    },
  },
}
</script>

<style lang="scss" scoped>
.collapsible {
  .collapsible-content {
    @apply overflow-hidden max-h-0 duration-500 ease-out w-11/12;
  }
  &:not(.active) {
    .collapsible-content {
      max-height: 0 !important;
    }
  }
}
.animation-icon {
  @apply relative w-[20px] h-[20px];
  &:before,
  &:after {
    content: '';
    @apply absolute bg-gray-700 transform ease-out duration-300;
  }
  /* Vertical line */
  &:before {
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    margin-left: -1px;
    border-radius: 25px;
  }
  /* horizontal line */
  &:after {
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    margin-top: -1px;
    border-radius: 25px;
  }
}
.active {
  &:before {
    transform: rotate(90deg);
  }
  &:after {
    transform: rotate(180deg);
  }
}
</style>
