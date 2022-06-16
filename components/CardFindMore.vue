<template>
  <div
    class="card-find rounded-[16px] overflow-hidden relative bg-white flex flex-col h-full justify-between"
  >
    <NuxtLink
      :to="{
        name: find.path,
      }"
    >
      <div class="overflow-hidden">
        <JPicture :src="find.image" class="picture-cover image" />
      </div>
    </NuxtLink>
    <div
      class="xl:py-[24px] md:py-[17px] py-[12px] xl:px-[32px] md:px-[22px] px-[16px] flex flex-col h-full justify-between"
    >
      <div>
        <NuxtLink
          :to="{
            name: find.path,
          }"
          class="line-clamp-3 title p2 font-extrabold"
        >
          {{ find.title }}
        </NuxtLink>
        <div class="font-medium text-gray-600 mt-[6px]">
          {{ find.description }}
        </div>
      </div>
      <div class="xl:mt-[24px] md:mt-[11px] mt-[8px]">
        <JButton icon="DoubleRight" title="Khám phá" :path="find.path" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    find: {
      type: Object,
      require: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.card-find {
  @apply w-full h-full bg-white;
  .image {
    @apply object-cover w-full h-full scale-100 duration-200 ease-out;
  }
  .title {
    @apply text-black duration-200;
  }
  &:hover {
    box-shadow: 0px 0px 30px rgba(38, 41, 43, 0.1);
    .image {
      @apply scale-110;
    }
    .title {
      @apply text-green-50;
    }
  }
}
</style>
