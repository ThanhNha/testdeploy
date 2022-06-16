<template>
  <main class="sm:mt-[64px] lg:mt-0">
    <div class="container">
      <div class="xl:pt-[47px] md:pt-[33px] pt-[24px] xl:pb-[56px] md:pb-[39px] pb-[28px]">
        <section class="grid grid-cols-12 xl:gap-[32px] md:gap-[22px] gap-[16px]">
          <div class="lg:col-span-6 col-span-full">
            <div class="lg:sticky lg:top-[10px] xl:static xl:top-0">
              <AnimateAppear>
                <div class="overflow-hidden inline-block mb-[10px] xl:mb-[20px]">
                  <div class="font-bold uppercase h2 text-linear-2">đăng kí tư vấn</div>
                  <div class="line h-[8px] mt-[8px]"></div>
                </div>
              </AnimateAppear>

              <div class="flex flex-col xl:space-y-[32px] md:space-y-[22px] space-y-[16px]">
                <AnimateAppear>
                  <div class="font-medium xl:max-w-[95%]">
                    Vui lòng điền các thông tin dưới đây để đặt lịch tư vấn 1-1 miễn phí cùng chuyên
                    gia ánh sáng của chúng tôi.
                  </div>
                </AnimateAppear>

                <AnimateAppear>
                  <div
                    class="flex md:flex-row flex-col md:space-y-0 space-y-[10px] xl:space-x-[20px] md:space-x-[10px]"
                  >
                    <div class="flex items-center space-x-[12px]">
                      <JIcon name="paperplanetilt" />
                      <div class="caption text-gray-600 md:hidden">Liên hệ với chúng tôi qua</div>
                    </div>
                    <div class="flex flex-col space-y-[4px]">
                      <div class="caption text-gray-600 md:block hidden">
                        Liên hệ với chúng tôi qua
                      </div>
                      <a
                        class="p2 font-semibold text-blue-300 hover:text-green-500 duration-400"
                        href="mailto:chamsockhachhang@rangdong.com.vn"
                        >chamsockhachhang@rangdong.com.vn</a
                      >
                    </div>
                  </div></AnimateAppear
                >
                <AnimateAppear>
                  <div
                    class="flex md:flex-row flex-col md:space-y-0 space-y-[10px] xl:space-x-[20px] md:space-x-[10px] md:pb-[0px] pb-[16px]"
                  >
                    <div class="flex items-center space-x-[12px]">
                      <JIcon name="phoneCall" />
                      <div class="caption text-gray-600 md:hidden">Gọi cho chúng tôi qua</div>
                    </div>
                    <div class="flex flex-col space-y-[4px]">
                      <div class="caption text-gray-600 md:block hidden">Gọi cho chúng tôi qua</div>
                      <a
                        class="p2 font-semibold text-blue-300 hover:text-green-500 duration-400"
                        href="tel:19002098"
                        >19002098</a
                      >
                    </div>
                  </div></AnimateAppear
                >
              </div>
            </div>
          </div>

          <div class="lg:col-span-6 col-span-full">
            <AnimateAppear>
              <div
                class="grid grid-cols-12 gap-y-[22px] xl:gap-y-[24px] md:gap-x-[20px] xl:gap-x-[20px]"
              >
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
                      isSubmit: isSubmit,
                    }"
                    @setIsSubmit="setIsSubmit"
                    :isSubmit="isSubmit"
                  />
                </div>

                <div class="col-span-full xl:col-span-6">
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
                      isSubmit: isSubmit,
                    }"
                    @setIsSubmit="setIsSubmit"
                    :isSubmit="isSubmit"
                  />
                </div>

                <div class="col-span-full xl:col-span-6">
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
                      isSubmit: isSubmit,
                    }"
                    @setIsSubmit="setIsSubmit"
                    :isSubmit="isSubmit"
                  />
                </div>

                <div class="col-span-full">
                  <JFieldSet
                    v-model="form['Lời nhắn']"
                    :field="{
                      rules: rules,
                      errors: errors,
                      type: 'textarea',
                      placeholder: 'Nhập Lời nhắn',
                      name: 'Lời nhắn',
                      fieldName: 'Lời nhắn',
                      label: 'Lời nhắn',
                    }"
                  />
                </div>

                <div class="col-span-full">
                  <JButton
                    title="GỬI"
                    :icon="isLoading ? '' : 'DoubleRight'"
                    :loading="isLoading ? true : false"
                    @click.native="submit"
                  />
                </div>
              </div>
            </AnimateAppear>
          </div>
        </section>
      </div>
    </div>

    
    <section class="xl:py-[70px] md:py-[49px] py-[35px] bg-gray-100">
      <div class="container">
        <div class="text-center xl:mb-[48px] md:mb-[33px] mb-[24px]">
          <h1 class="uppercase md:w-full w-[80%] m-auto h2 banner-title font-bold text-linear-2">
            SHOWROOM TRẢI NGHIỆM
          </h1>
          <div class="line-2 mt-2 max-w-[366px] m-auto"></div>
        </div>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-[14px]">
          <AnimateAppear
            class="relative group"
            v-for="(item, index) in data"
            :key="index"
            :delay="index * 600"
          >
            <div class="flex flex-col h-full rounded-[20px] card group">
              <a
                href="https://g.page/independencepalace?share"
                target="_blank"
                class="aspect-w-3 aspect-h-2 overflow-hidden rounded-[8px] block"
              >
                <JPicture :src="item.image" class="picture-cover image" />
              </a>
              <div class="flex flex-col h-full xl:space-y-4 space-y-2 xl:p-[20px] p-[10px]">
                <div class="flex">
                  <div>
                    <div class="h4 uppercase inline">{{ item.title }}</div>
                    <div class="line h-[2px]"></div>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <a
                    href="https://g.page/independencepalace?share"
                    target="_blank"
                    class="flex space-x-1"
                  >
                    <div class="flex-shrink-0 xl:min-w-[32px] min-w-[22px] h-[32px] flex">
                      <JIcon name="mapPin" />
                    </div>
                    <div class="line-clamp-2 lg:max-w-[366px] showroom__title">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                  </a>
                  <div class="flex items-center">
                    <JButton
                      title="DẪN ĐƯỜNG"
                      href="https://g.page/independencepalace?share"
                      size="sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimateAppear>
        </div>
      </div>
    </section>


    <SocialMeta :title="SocialMeta.title" :description="SocialMeta.description" />
  </main>
</template>
<script>
import { validateForm } from '@/lib/validator.js'
const SUBMISSION_ENDPOINT = 'https://app.jamstackvietnam.com/api/forms/vqxWveMM4Z/submission'
const emptyForm = {
  'Họ và tên': '',
  'Số điện thoại': '',
  Email: '',
  'Lời nhắn': '',
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
        'Lời nhắn': '',
      },
      isSubmit: false,
      isLoading: false,
      processing: false,
      submitButton: true,
      data: [
        { image: '/images/signup/sign-up-1.jpg', title: 'sHOWROOM 1' },
        { image: '/images/signup/sign-up-1.jpg', title: 'sHOWROOM 2' },
      ],
      SocialMeta: {
        title: 'RalliSmart - Liên hệ',
        description:
          'Vui lòng để lại thông tin dưới đây để đặt lịch tư vấn 1-1 miễn phí cùng chuyên gia ánh sáng của RalliSmart.',
      },
    }
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
      formData['type'] = 'ADVISE_FORM'
      const res = await this.$api.form.contact(formData)

      if (res.success) {
        this.form = { ...emptyForm }
        this.isSubmitSuccess = true
        this.$router.push('cam-on')
      }

      this.isLoading = false
    },
  },
}
</script>

<style lang="scss" scoped>
.line {
  background: linear-gradient(
    89.98deg,
    rgba(7, 189, 137, 0) 0%,
    #07bd89 0.01%,
    rgba(7, 189, 137, 0) 100%
  );
}
.line-2 {
  background: linear-gradient(
    89.98deg,
    rgba(7, 189, 137, 0) 0%,
    #07bd89 50.1%,
    rgba(7, 189, 137, 0) 100%
  );
  height: 6px;
}
.card {
  @apply duration-200 bg-white;

  .image {
    @apply scale-100 duration-200;
  }
  .title {
    @apply duration-200;
  }

  .showroom__title {
    word-break: break-word;
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
