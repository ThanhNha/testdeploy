<template>
  <div class="card rounded-[16px] overflow-hidden flex flex-col h-full justify-between bg-white">
    <div
      class="xl:px-[48px] md:px-[34px] px-[20px] xl:pt-[35px] md:pt-[25px] pt-[18px] pb-[24px] h-full"
    >
      <div class="flex flex-col justify-between h-full">
        <div>
          <div class="p2 font-extrabold title">{{ category.title }}</div>
          <div class="font-medium text-gray-600 mt-[4px]">
            {{ category.description }}
          </div>
        </div>
        <div class="mt-[10px] md:mt-[20px]">
          <JButton icon="DoubleRight" title="Bắt đầu" :path="category.path" />
        </div>
      </div>
    </div>
    <div class="aspect-w-4 aspect-h-2 overflow-hidden">
      <JPicture :src="category.image" class="picture-cover image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  .image {
    @apply scale-100 duration-200;
  }
  .title {
    @apply text-black duration-200;
  }
  &:hover {
    box-shadow: 0px 0px 40px rgba(38, 41, 43, 0.1);
    .title {
      @apply text-green-50;
    }
    .image {
      @apply scale-105;
    }
  }
}
</style>
