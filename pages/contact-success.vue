<template>
  <main>
    <section class="relative xl:p-[75px] md:p-[52px] p-[37px]">
      <div class="absolute top-0 left-0 bottom-0 w-full h-full z-[-1]">
        <JPicture src="/images/thank/banner-thank.jpg" class="picture-cover h-full" />
      </div>
      <div class="lg:w-[540px] m-auto">
        <div
          class="text-center flex flex-col justify-center items-center xl:space-y-[40px] md:space-y-[28px] space-y-[20px]"
        >
          <JIcon name="check" />
          <div class="text-center">
            <div class="xl:w-[366px] m-auto">
              <h3 class="h3 uppercase font-normal text-white mb-[8px]">đăng kí tư vấn</h3>
              <h1 class="uppercase h2 banner-title font-bold text-white text-linear-3">
                thành công
              </h1>
              <div class="line mt-2"></div>
            </div>
            <div class="xl:mt-[24px] md:mt-[16px] mt-[12px] font-medium text-white">
              Cảm ơn Quý Khách hàng đã để lại liên hệ. RalliSmart sẽ liên hệ Quý Khách trong thời
              gian sớm nhất.
            </div>
          </div>
          <div class="flex items-center">
            <JButton title="TÌM HIỂU THÊM VỀ RalliSmart" icon="DoubleRight" path="vlog" />
          </div>
        </div>

        <div class="mt-[40px] h-[206px] w-[233px] m-auto">
          <JPicture src="/images/thank/home.png" class="picture-cover" />
        </div>
      </div>
    </section>
    <SocialMeta :title="SocialMeta.title" :description="SocialMeta.description" />
  </main>
</template>
<style lang="scss" scoped>
.banner-title {
  text-shadow: 0px 4px 43px rgba(181, 218, 252, 0.82);
}
.line {
  background: linear-gradient(
    89.98deg,
    rgba(7, 189, 137, 0) 0%,
    #07bd89 50.1%,
    rgba(7, 189, 137, 0) 100%
  );
  height: 6px;
}
</style>
<script>
export default {
  data() {
    return {
      SocialMeta: {
        title: 'Gửi liên hệ thành công!',
        description:
          'Cảm ơn Quý khách đã liên hệ, RalliSmart sẽ phản hồi trong thời gian sớm nhất.',
      },
    }
  },
}
</script>
