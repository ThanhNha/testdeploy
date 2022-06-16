<template>
  <main>
    <section class="xl:mb-[48px] md:mb-[34px] mb-[24px]">
      <div class="container">
        <div
          class="breadcrumb caption text-gray-500 md:pt-[16px] pt-[12px] xl:pb-[32px] md:pb-[22px] pb-[16px]"
        >
          <ul
            class="flex items-center xl:space-x-[12px] md:space-x-[8px] space-x-[6px] font-medium"
          >
            <li class="duration-200 hover:text-green-50">
              <NuxtLink to="/"> Trang chủ </NuxtLink>
            </li>
            <li>
              <JIcon name="chervon-breadcrumb" />
            </li>
            <li class="font-semibold text-gray-700">Gợi ý thiết kế</li>
          </ul>
        </div>
        <div>
          <div class="grid grid-cols-12 xl:gap-x-[32px] md:gap-x-[22px] gap-y-[16px]">
            <div class="col-span-full md:col-span-6 xl:col-span-5">
              <div>
                <div class="text-blue-100 uppercase h3">Gợi ý thiết kế ánh sáng</div>
                <div class="h2 font-bold text-linear-2 mt-[8px] mb-[5px] uppercase">
                  Tối ưu cho <br />
                  ngôi nhà của bạn
                </div>
                <div class="w-full h-[6px] bg-line-green"></div>
                <div class="text-black font-medium mt-[20px]">
                  Vui lòng cung cấp thông tin về ngôi nhà của bạn, <br class="hidden xl:block" />
                  chúng tôi sẽ đưa ra gợi ý phù hợp nhất!
                </div>
              </div>
              <div class="xl:mt-[40px] md:mt-[28px] mt-[20px]">
                <div
                  class="md:w-[335px] lg:h-[399px] flex items-center md:items-start justify-center md:justify-start"
                >
                  <JPicture src="images/suggest/smartphone.png" />
                </div>
              </div>
            </div>
            <div class="col-span-full md:col-span-6 md:col-start-7">
              <div
                v-for="(item, index) in listRoom"
                :key="index"
                class="xl:mb-[26px] md:mb-[17px] mb-[12px] last:mb-0"
              >
                <div class="flex items-center justify-between">
                  <div class="h4 font-bold text-blue-300 mb-[20px]">Phòng {{ index + 1 }}</div>
                  <div
                    v-if="index > 1"
                    class="font-bold cursor-pointer text-linear-2 caption"
                    @click="remove(index)"
                  >
                    Xóa phòng
                  </div>
                </div>
                <div class="flex flex-col xl:space-y-[32px] space-y-[17px]">
                  <JFieldSet
                    v-model="listRoom[index]['Loại phòng']"
                    :field="{
                      rules: rules,
                      errors: errors[index],
                      options: roomTyle,
                      type: 'select_single',
                      placeholder: 'Chọn loại phòng',
                      name: 'Loại phòng',
                      fieldName: 'Loại phòng',
                      label: 'Loại phòng',
                      isSubmit: isSubmit,
                    }"
                    :isSubmit="isSubmit"
                  />
                  <div class="flex items-center xl:space-x-[20px] md:space-x-[14px] space-x-[10px]">
                    <div class="flex flex-col">
                      <label class="mb-[4px] line-h text-gray-800 font-semibold"> Diện tích </label>
                      <div
                        class="flex items-center xl:space-x-[12px] md:space-x-[8px] space-x-[6px]"
                      >
                        <div class="relative">
                          <input
                            type="number"
                            :id="`${'long' + index}`"
                            class="input-form"
                            @input="
                              {
                                getLong(parseFloat($event.target.value), index)
                                check(index, 'long')
                              }
                            "
                            autocomplete="off"
                            placeholder="Chiều dài"
                          />
                          <span
                            class="font-medium absolute top-1/2 -translate-y-1/2 right-[0.75rem] text-gray-500"
                          >
                            m
                          </span>
                          <small
                            v-if="errors[index].hasOwnProperty('long')"
                            class="absolute lg:bottom-[-44%] bottom-[-50%] flex items-center h-5 btn-sm text-red-500"
                          >
                            {{ `Nhập chiều dài` }}
                          </small>
                        </div>

                        <JIcon name="multiply" />

                        <div class="relative">
                          <input
                            type="number"
                            :id="`${'width' + index}`"
                            class="input-form"
                            @input="
                              {
                                getWidth(parseFloat($event.target.value), index)
                                check(index, 'width')
                              }
                            "
                            autocomplete="off"
                            placeholder="Chiều rộng"
                          />
                          <span
                            class="font-medium absolute top-1/2 -translate-y-1/2 right-[0.75rem] text-gray-500"
                          >
                            m
                          </span>
                          <small
                            v-if="errors[index].hasOwnProperty('width')"
                            class="absolute lg:bottom-[-44%] bottom-[-50%] flex items-center h-5 btn-sm text-red-500"
                          >
                            {{ `Nhập chiều rộng` }}
                          </small>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center justify-between w-[30%] md:w-[20%] mt-[32px]">
                      <div>=</div>
                      <div class="text-right text-gray-500 caption">
                        <span class="text-gray-400">{{ item.result || 0 }}</span> m²
                      </div>
                    </div>
                  </div>
                  <div
                    class="w-full h-[1px] bg-line-green"
                    :class="index + 1 < listRoom.length ? 'block' : 'hidden'"
                  ></div>
                </div>
              </div>
              <div
                class="w-max flex items-center xl:space-x-[12px] md:space-x-[8px] space-x-[6px] cursor-pointer group my-[28px] md:my-0"
                @click="add()"
              >
                <JIcon name="plus" />
                <div
                  class="font-bold text-blue-300 uppercase duration-200 caption group-hover:text-green-50"
                >
                  Thêm phòng
                </div>
              </div>
              <div class="xl:mt-[24px] md:mt-[17px] mt-[12px]">
                <JButton title="Xem gợi ý" icon="DoubleRight" @action="submitRoom" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      v-if="roomSuggestions && roomSuggestions.length > 0"
      class="bg-gray-100 xl:py-[40px] md:py-[28px] py-[20px] xl:mb-[12px] md:mb-[8px] mb-[6px]"
    >
      <div class="container">
        <div class="h4 font-bold text-linear-2 uppercase xl:mb-[32px] md:mb-[22px] mb-[16px]">
          Gợi ý cho bạn
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 xl:gap-[32px] md:gap-[22px] gap-[16px]">
          <NuxtLink
            :to="{ name: 'suggest-slug', params: { slug: room.slug } }"
            class="relative overflow-hidden rounded-[16px] group"
            v-for="(room, index) in roomSuggestions"
            :key="index"
          >
            <div class="aspect-w-3 aspect-h-2">
              <JPicture
                :src="room.image_url || '/images/cover-row.jpg'"
                class="duration-200 scale-100 picture-cover group-hover:scale-105"
              />
            </div>
            <div class="absolute bottom-0 w-full h-[50%] bg-card p-[20px]">
              <div class="flex items-end justify-start h-full font-bold text-white h4">
                {{ room.title }}
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="bg-gray-100 xl:py-[82px] md:py-[60px] py-[43px]">
      <div class="container">
        <div class="grid grid-cols-12 xl:xl:gap-x-[32px] md:gap-x-[22px] gap-x-[16px]">
          <div class="col-span-full">
            <div class="flex flex-col items-start justify-center text-center">
              <div class="text-blue-100 uppercase h3">
                Chưa sẵn sàng trang bị cho toàn bộ ngôi nhà?
              </div>
              <div class="h2 font-bold uppercase text-linear-2 my-[8px]">
                Trải nghiệm Chiếu sáng thông minh siêu tiết kiệm
              </div>
              <div class="w-[381px] h-[6px] bg-line-green"></div>
            </div>
          </div>
        </div>
        <div
          class="xl:mt-[42px] md:mt-[22px] mt-[16px] grid md:grid-cols-2 xl:xl:gap-x-[32px] md:gap-x-[22px] gap-y-[16px]"
        >
          <CardCategory
            v-for="(category, indexC) in categories"
            :key="indexC"
            :category="category"
          />
        </div>
      </div>
    </section>
    <SocialMeta
      title="Thiết kế ánh sáng tối ưu cho không gian của bạn"
      description="RalliSmart hỗ trợ bạn tìm kiếm giải pháp thiết kế ánh sáng tối ưu cho không gian của bạn."
    />
  </main>
</template>

<script>
import { validateForm } from '@/lib/validator.js'
const SUBMISSION_ENDPOINT = 'https://app.jamstackvietnam.com/api/forms/vqxWveMM4Z/submission'
const emptyForm = {
  'Loại phòng': '',
  'Số điện thoại': '',
  Email: '',
  'Tin nhắn': '',
}
export default {
  data() {
    return {
      form: { ...emptyForm },
      processing: false,
      errors: [{}],
      rules: {
        'Họ và tên': 'required',
        'Loại phòng': 'required',
        'Số điện thoại': 'required|phone',
        Email: 'required|email',
        'Tin nhắn': '',
      },
      isSubmit: false,
      isLoading: false,
      isPending: false,
      submitButton: true,
      listRoom: [
        {
          long: 0,
          width: 0,
          result: 0,
        },
      ],
      categories: [
        {
          title: 'Smart Kit',
          description: 'Nhóm sản phẩm trải nghiệm giải pháp chiếu sáng thông minh cơ bản',
          image: 'images/suggest/smart-kit.jpg',
          path: 'smart-kit',
        },
        {
          title: 'Smart Local',
          description: 'Nhóm sản phẩm trải nghiệm chiếu sáng tích hợp smartphone',
          image: 'images/suggest/smart-local.jpg',
          path: 'smart-local',
        },
      ],

      roomTyle: [
        { id: 'DINING_ROOM', label: 'Phòng khách' },
        { id: 'LIVING_ROOM', label: 'Phòng ngủ' },
        { id: 'BEDROOM', label: 'Phòng ăn' },
        { id: 'WORK_ROOM', label: 'Phòng làm việc' },
      ],

      roomSuggestions: [],
    }
  },

  methods: {
    add() {
      this.listRoom.push({
        long: 0,
        width: 0,
        result: 0,
      })

      this.errors.push({})
    },
    remove(index) {
      this.$delete(this.listRoom, index)
      this.$delete(this.errors, index)
    },
    getLong(value, number) {
      this.listRoom = this.listRoom.map((item, index) => {
        if (index === number) {
          return {
            ...item,
            long: value ? value : 0,
            result: Math.ceil(value * item.width),
          }
        } else {
          return item
        }
      })
    },
    getWidth(value, number) {
      this.listRoom = this.listRoom.map((item, index) => {
        if (index === number) {
          return {
            ...item,
            width: value ? value : 0,
            result: Math.ceil(item.long * value),
          }
        } else {
          return item
        }
      })
    },

    async submitRoom() {
      this.validate()

      const listRoomProvisional = this.listRoom
      this.listRoom = []
      this.listRoom = listRoomProvisional

      if (this.isPending || this.isLoading) {
        return
      }

      this.isLoading = true

      const { data } = await this.$api.room.suggestions(this.listRoom)
      this.roomSuggestions = data

      this.isLoading = false
    },

    validate() {
      this.listRoom.forEach((room, index) => {
        this.isPending = false
        this.errors[index] = {}
        if (!room['Loại phòng']) {
          this.errors[index]['Loại phòng'] = true
          this.isPending = true
        }

        if (room.long === 0) {
          this.errors[index]['long'] = true
          this.isPending = true
        }

        if (room.width === 0) {
          this.errors[index]['width'] = true
          this.isPending = true
        }
      })
    },

    check(index, key) {
      const room = this.listRoom[index]
      if (key === 'width') {
        room.width === 0 ? (this.errors[index]['width'] = true) : delete this.errors[index]['width']
      }
      if (key === 'long') {
        room.long === 0 ? (this.errors[index]['long'] = true) : delete this.errors[index]['long']
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.input-form {
  @apply mt-0 block w-full lg:py-[10px]	md:py-[6px] py-[6px] lg:px-[16px]	md:px-[8px]	px-[8px] text-[#737686] bg-white focus:text-black border border-gray-200 focus:duration-200 rounded-[12px] focus:ring-0 ring-0 outline-none focus:outline-none shadow-none focus:shadow-none ring-offset-0 focus:ring-offset-0;
}
::placeholder {
  @apply text-[#737686] text-justify text-[0.875rem]  lg:text-[1rem] font-display;
}

.bg-card {
  background: linear-gradient(360deg, #01566b 4.48%, rgba(61, 198, 124, 0) 100%);
}
</style>
