<template v-if="tags">
  <ul class="relative flex flex-wrap" :class="{ list_tag: isCard }">
    <li class="md:pr-[4px] tag w-max" v-for="(tag, index) in tags" :key="index">
      <NuxtLink
        :to="{ name: 'blog-nested', params: { nested: tag.slug } }"
        class="text-gray-600 md:text-gray-700 text-[10px] hover:text-green-100 my-[4px] py-1 px-2 md:py-[2px] md:px-[12px] bg-gray-100 hover:bg-[#EBF9F5] duration-150 rounded-[30px] inline-block font-semibold max-lg:shadow"
      >
        {{ tag.name }}
      </NuxtLink>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    tags: {
      type: Array,
      default: function () {
        return {}
      },
    },

    isCard: {
      type: Boolean,
      default: function () {
        return false
      },
    },
  },
  setup() {},
}
</script>

<style lang="scss" scoped>
.list_tag {
  @apply flex flex-wrap;
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
