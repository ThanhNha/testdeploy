<template>
  <section class="bg-gray-100 h-screen relative">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
      <div class="container flex items-center justify-center">
        <div class="grid grid-cols-12 gap-3 md:gap-6 xl:gap-[32px] py-[56px] bg-white">
          <div
            class="col-span-full md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6 text-center flex flex-col items-center justify-center"
          >
            <div class="mb-[25px] inline-block">
              <JIcon name="Error_page" />
            </div>

            <div class="text-green-50 font-semibold uppercase mb-4 h3">KHÔNG TÌM THẤY TRANG</div>

            <div class="text-gray-500 mb-6 md:mb-[32px]">
              Trang bạn yêu cầu hiện tại không tồn tại, chúng tôi rất tiếc vì sự cố này
            </div>
            <JButton icon="DoubleRight" title="QUAY LẠI TRANG CHỦ" path="index" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  layout: 'blank',
}
</script>
