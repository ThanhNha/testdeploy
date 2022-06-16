<template>
  <div
    v-if="item"
    class="rounded-[12px] box-service duration-150 flex flex-col items-center xl:py-[32px] md:py-[22px] py-[16px]"
  >
    <div
      class="md:w-[100px] md:h-[100px] w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center"
    >
      <div class="md:w-[72px] md:h-[72px] w-[45px] h-[45px]">
        <JPicture :src="item.icon" class="picture-cover" />
      </div>
    </div>
    <div class="xl:mt-[24px] md:mt-[15px] mt-[12px]">
      <h4 class="h4 text-white font-bold text-center">{{ item.name }}</h4>
    </div>
  </div>
</template>
<script>
export default {
  props: ['item'],
}
</script>

<style lang="scss" scoped>
.box-service {
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
    border: 1px solid #ffffff;

    box-shadow: 0px 4px 20px rgba(4, 216, 155, 0.4);
  }
}
</style>
