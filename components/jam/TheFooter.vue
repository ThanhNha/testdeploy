<template>
  <footer>
    <div
      class="bg-linear-2 xl:pt-[64px] md:pt-[39px] pt-[28px] xl:pb-[46px] md:pb-[37px] pb-[27px]"
      :class="isShowCircle && 'hidden'"
    >
      <div class="container">
        <div class="grid grid-cols-12 md:gap-x-[32px] gap-y-[20px]">
          <div class="flex items-center justify-center col-span-full md:col-span-9 xl:col-span-7">
            <div class="xl:mr-[48px]">
              <div class="font-bold text-center text-white h2 stroke-blue text-shadow md:text-left">
                RALLISMART <br class="md:hidden" />
                SẴN SÀNG HỖ TRỢ
              </div>
              <div class="w-full h-1 background-line my-[16px] md:block hidden"></div>
              <div class="w-full h-1 bg-line-white my-[16px] md:hidden block"></div>
              <div class="font-medium text-center text-white md:text-left">
                Chúng tôi sẽ giải đáp mọi thắc mắc về công nghệ, sản phẩm, ứng dụng, lắp đặt, hướng
                dẫn sử dụng của bạn.
              </div>
            </div>
          </div>
          <div class="col-span-full md:col-span-2 md:col-start-11">
            <CircleTextAnimated />
          </div>
        </div>
      </div>
    </div>
    <div
      class="background-footer xl:pt-[89px] md:pt-[62px] pt-[45px] xl:pb-[21px] md:pb-[15px] pb-[11px]"
    >
      <div class="container">
        <div class="grid grid-cols-12 lg:gap-x-[32px] gap-y-[28px]">
          <div
            class="col-span-full lg:col-span-6 xl:col-span-5 flex flex-col xl:space-y-[36px] lg:space-y-[25px] space-y-[18px]"
          >
            <NuxtLink to="/">
              <div class="md:w-[86px] md:h-[98px] lg:block hidden">
                <JPicture src="/images/logo.jpg" class="" />
              </div>
              <div class="lg:hidden"><JPicture src="/images/logo_footer_mobile.jpg" /></div>
            </NuxtLink>
            <div class="text-white">
              <div class="mb-[18px]">
                <div class="p1 uppercase mb-[10px]">Giới thiệu</div>
                <div class="w-[140px] h-[3px] background-line"></div>
              </div>
              <div class="">
                <div
                  class="grid grid-cols-2 md:grid-cols-3 gap-x-[28px] xl:gap-x-[34px] gap-y-[8px] md:gap-y-[18px]"
                >
                  <a
                    href="https://rangdong.com.vn/category/Overview"
                    target="_blank"
                    class="font-medium text-[#DBDFF4] hover:text-green-50 duration-200"
                    >Về Rạng Đông</a
                  >
                  <NuxtLink
                    :to="{ name: 'blog' }"
                    class="font-medium text-[#DBDFF4] hover:text-green-50 duration-200"
                    >Blog</NuxtLink
                  >
                  <NuxtLink
                    :to="{ name: 'welcome' }"
                    class="font-medium text-[#DBDFF4] hover:text-green-50 duration-200"
                    >Light facts</NuxtLink
                  >
                  <NuxtLink
                    :to="{ name: 'vlog' }"
                    class="font-medium text-[#DBDFF4] hover:text-green-50 duration-200"
                    >Vlog</NuxtLink
                  >
                  <NuxtLink
                    :to="{ name: 'contact' }"
                    class="font-medium text-[#DBDFF4] hover:text-green-50 duration-200"
                    >Liên hệ</NuxtLink
                  >
                </div>
              </div>
            </div>
            <div class="text-white">
              <div class="mb-[18px]">
                <div class="p1 uppercase mb-[10px]">Giải pháp thông minh</div>
                <div class="w-[297px] h-[3px] background-line"></div>
              </div>
              <div class="max-w-full">
                <div
                  class="grid grid-cols-2 md:grid-cols-3 gap-x-[28px] xl:gap-x-[34px] gap-y-[8px] md:gap-y-[18px]"
                >
                  <NuxtLink
                    :to="{ name: 'smart-home' }"
                    class="font-medium text-[#DBDFF4] hover:text-green-50 duration-200"
                    >Smart Home</NuxtLink
                  >
                  <NuxtLink
                    :to="{ name: 'smart-kit' }"
                    class="font-medium text-[#DBDFF4] hover:text-green-50 duration-200"
                    >Smart Kit</NuxtLink
                  >
                  <NuxtLink
                    :to="{ name: 'suggest' }"
                    class="font-medium text-[#DBDFF4] hover:text-green-50 duration-200"
                    >Gợi ý thiết kế</NuxtLink
                  >
                  <NuxtLink
                    :to="{ name: 'smart-office' }"
                    class="font-medium text-[#DBDFF4] hover:text-green-50 duration-200"
                    >Smart Office</NuxtLink
                  >
                  <NuxtLink
                    :to="{ name: 'smart-local' }"
                    class="font-medium text-[#DBDFF4] hover:text-green-50 duration-200"
                    >Smart Local</NuxtLink
                  >
                </div>
              </div>
            </div>
            <div class="max-w-[132px] max-h-[50px] md:block hidden">
              <!-- TODO -->
              <a href="/" target="_blank" rel="noopener noreferrer">
                <JPicture src="/images/da-thong-bao.png"
              /></a>
            </div>
          </div>

          <div class="col-span-full lg:col-span-6 lg:col-start-7">
            <div class="font-semibold text-white">
              Đội ngũ tư vấn của RalliSmart bao gồm các chuyên gia trong lĩnh vực chiếu sáng luôn
              sẵn sàng hỗ trợ thiết kế giải pháp dành riêng cho ngôi nhà của bạn.
            </div>

            <div class="xl:mt-[24px] md:mt-[17px] mt-[12px]">
              <div class="grid grid-cols-12 md:gap-[24px] gap-[20px]">
                <div class="col-span-full">
                  <JFieldSet
                    v-model="form['Họ và tên']"
                    :field="{
                      rules: rules,
                      errors: errors,
                      type: 'text',
                      placeholder: 'Nhập họ và tên',
                      name: 'Họ và tên',
                      fieldName: 'Họ và tên',
                      label: 'Họ và tên',
                      validate: !errors.includes('Họ và tên'),
                    }"
                    @setIsSubmit="setIsSubmit"
                    :isSubmit="isSubmitSuccess"
                    :footer="true"
                  />
                </div>

                <!-- Email -->

                <div class="col-span-full sm:col-span-6 lg:col-span-full xl:col-span-6">
                  <JFieldSet
                    v-model="form['Email']"
                    :field="{
                      rules: rules,
                      errors: errors,
                      type: 'email',
                      placeholder: 'Nhập email',
                      name: 'Email',
                      fieldName: 'Email',
                      label: 'Email',
                      validate: !errors.includes('Email'),
                    }"
                    @setIsSubmit="setIsSubmit"
                    :isSubmit="isSubmitSuccess"
                    :footer="true"
                  />
                </div>

                <!-- Phone -->

                <div class="col-span-full sm:col-span-6 lg:col-span-full xl:col-span-6">
                  <JFieldSet
                    v-model="form['Số điện thoại']"
                    :field="{
                      rules: rules,
                      errors: errors,
                      type: 'number',
                      placeholder: 'Nhập số điện thoại',
                      name: 'Số điện thoại',
                      fieldName: 'Số điện thoại',
                      label: 'Số điện thoại',
                      validate: !errors.includes('Số điện thoại'),
                    }"
                    @setIsSubmit="setIsSubmit"
                    :isSubmit="isSubmitSuccess"
                    :footer="true"
                  />
                </div>

                <div class="col-span-full">
                  <JFieldSet
                    v-model="form['Tin nhắn']"
                    :field="{
                      rules: rules,
                      errors: errors,
                      type: 'textarea',
                      placeholder: 'Nhập tin nhắn',
                      name: 'Tin nhắn',
                      fieldName: 'Tin nhắn',
                      label: 'Tin nhắn',
                    }"
                    :footer="true"
                  />
                </div>

                <div class="col-span-full">
                  <div v-if="textSuccess" class="mt-[8px] text-green-50">
                    Cảm ơn Quý Khách hàng đã để lại liên hệ. Rạng Đông sẽ liên hệ Quý Khách trong
                    thời gian sớm nhất
                  </div>
                  <div v-else>
                    <div class="hidden md:block">
                      <JButton
                        title="Trò chuyện cùng RalliSmart"
                        :icon="isLoading ? '' : 'DoubleRight'"
                        :loading="isLoading ? true : false"
                        @click.native="submit"
                      />
                    </div>
                    <div class="block md:hidden">
                      <JButton
                        title="Trò chuyện cùng RalliSmart"
                        :icon="isLoading ? '' : 'DoubleRight'"
                        :loading="isLoading ? true : false"
                        @click.native="submit"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="max-w-[171px] max-h-[65px] md:hidden block mt-[16px]">
              <!-- TODO -->
              <a href="/" target="_blank" rel="noopener noreferrer">
                <JPicture src="/images/da-thong-bao.png"
              /></a>
            </div>
          </div>
        </div>
        <div class="w-full h-[1px] bg-white bg-opacity-25 mt-[24px] mb-[8px]"></div>
        <div
          class="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-between"
        >
          <div class="text-white tracking-[1px]">Copyright 2022 by RalliSmart ®</div>
          <div class="font-medium text-gray-200 caption">All Rights Reserved</div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { validateForm } from '@/lib/validator'
const emptyForm = {
  'Họ và tên': null,
  'Số điện thoại': null,
  Email: null,
  'Tin nhắn': null,
}
export default {
  data() {
    return {
      form: { ...emptyForm },
      errors: [],
      rules: {
        'Họ và tên': 'required',
        'Số điện thoại': 'required|phone',
        Email: 'required|email',
        'Tin nhắn': '',
      },
      isSubmitSuccess: false,
      isLoading: false,
      processing: false,
      submitButton: true,
      textSuccess: false,
    }
  },
  computed: {
    isShowCircle() {
      const { name } = this.$route
      if (name.includes('faq')) {
        return true
      }

      return false
    },
  },
  methods: {
    setIsSubmit(val) {
      this.isSubmitSuccess = val
    },
    async submit(e) {
      e.preventDefault()
      this.errors = validateForm(this.form, this.rules)
      if (Object.keys(this.errors).length > 0 || this.isLoading) {
        return false
      }

      this.isLoading = true

      let formData = {}
      formData['data'] = this.form
      formData['type'] = 'SUPPORT_FORM'
      const res = await this.$api.form.contact(formData)
      if (res.success) {
        this.form = { ...emptyForm }
        this.isSubmitSuccess = true
        this.textSuccess = true
        e.preventDefault()
      }

      this.isLoading = false
    },
  },
}
</script>
<style lang="scss" scoped>
.text-shadow {
  text-shadow: 0px 4px 43px rgba(181, 218, 252, 0.82);
}
.background-line {
  background: linear-gradient(
    89.99deg,
    #ffffff 0.01%,
    #ffffff 43.74%,
    rgba(198, 244, 255, 0) 82.65%
  );
}
.background-footer {
  background: url('../../static/images/footer-mobile.jpg') no-repeat;
  background-size: cover;
  @screen lg {
    background: url('../../static/images/footer.jpg') no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
}
</style>
