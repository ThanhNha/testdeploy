<template>
  <section>
    <div v-if="field.type === 'text' || field.type === 'password' || field.type === 'email'">
      <label
        :for="field.placeholder"
        class="leading-[150%] block"
        :class="
          footer
            ? 'text-[16px] text-white mb-[4px] font-normal'
            : 'text-gray-800 mb-[4px] text-[18px] lg:mb-[8px] font-semibold'
        "
      >
        {{ field.name }}<span :class="field.rules[field.fieldName] ? '' : 'hidden'">*</span>
      </label>
      <input
        :id="field.placeholder"
        :type="field.type"
        @input="handleInput"
        :value="value"
        :placeholder="field.placeholder"
        :disabled="field.disabled ? true : false"
        autocomplete="off"
        :class="footer ? 'input-footer' : 'input-form'"
      />
    </div>

    <div v-if="field.type === 'number'">
      <label
        :for="field.placeholder"
        class="leading-[150%] block"
        :class="
          footer
            ? 'text-[16px] text-white mb-[4px] font-normal'
            : 'text-gray-800 mb-[4px] text-[18px] lg:mb-[8px] font-semibold'
        "
      >
        {{ field.name }}<span :class="field.rules[field.fieldName] ? '' : 'hidden'">*</span>
      </label>

      <input
        :id="field.placeholder"
        :type="field.type"
        @input="handleInput"
        :value="value"
        :placeholder="field.placeholder"
        :disabled="field.disabled ? true : false"
        autocomplete="off"
        inputmode="numeric"
        onkeypress="return event.charCode >= 48 && event.charCode =< 57"
        onkeydown="return event.keyCode !== 69 && event.keyCode !== 190"
        :class="footer ? 'input-footer' : 'input-form'"
      />
    </div>

    <div v-if="field.type === 'metre'" class="relative">
      <label
        :for="field.placeholder"
        class="mb-[4px] line-h"
        :class="footer ? 'text-white' : 'text-gray-800 font-semibold'"
      >
        {{ field.name }}
      </label>
      <div class="flex items-center space-x-[12px] w-full">
        <div class="relative">
          <input
            :id="field.placeholderLong"
            type="number"
            @input="handleInput"
            :value="value"
            :placeholder="field.placeholderLong"
            :disabled="field.disabled ? true : false"
            autocomplete="off"
            class="caption"
            inputmode="numeric"
            onkeypress="return event.charCode >= 48 && event.charCode =< 57 && event.charCode =< 188"
            onkeydown="return event.keyCode !== 69 && event.keyCode !== 190 && event.charCode !== 188"
            :class="footer ? 'input-footer' : 'input-form'"
          />
          <span class="font-medium absolute top-1/2 -translate-y-1/2 right-[0.75rem] text-gray-500">
            m
          </span>
        </div>
        <JIcon name="multiply" />
        <div class="relative">
          <input
            :id="field.placeholderWidth"
            type="number"
            @input="handleInput"
            :value="value"
            :placeholder="field.placeholderWidth"
            :disabled="field.disabled ? true : false"
            autocomplete="off"
            class="caption"
            inputmode="numeric"
            onkeypress="return event.charCode >= 48 && event.charCode =< 57 && event.charCode =< 188"
            onkeydown="return event.keyCode !== 69 && event.keyCode !== 190 && event.charCode !== 188"
            :class="footer ? 'input-footer' : 'input-form'"
          />
          <span class="font-medium absolute top-1/2 -translate-y-1/2 right-[0.75rem] text-gray-500">
            m
          </span>
        </div>
      </div>
    </div>

    <div v-if="field.type === 'textarea'">
      <label
        :for="field.placeholder"
        class="leading-[150%] block"
        :class="
          footer
            ? 'text-[16px] text-white mb-[4px] font-normal'
            : 'text-gray-800 mb-[4px] text-[18px] lg:mb-[8px] font-semibold'
        "
      >
        {{ field.name }} <span :class="field.rules[field.fieldName] ? '' : 'hidden'">*</span>
      </label>
      <textarea
        :id="field.placeholder"
        :type="field.type"
        @input="handleInput"
        :value="value"
        :placeholder="field.placeholder"
        autocomplete="off"
        :rows="4"
        :class="footer ? 'input-footer' : 'input-form'"
      />
    </div>

    <div v-if="field.type === 'select_single'">
      <label
        :for="field.placeholder"
        class="mb-[4px] line-h"
        :class="footer ? 'text-white' : 'text-gray-800 font-semibold'"
      >
        {{ field.name }}
      </label>
      <select
        class="border-gray-200 body-text select-style focus:border-gray-500"
        @input="handleInput"
      >
        <option v-if="field.placeholder" value="" selected disabled>
          {{ field.placeholder }}
        </option>
        <option v-for="(item, id) in field.options" :key="id" :value="item.id">
          {{ item.label }}
        </option>
      </select>
    </div>

    <div v-if="field.type === 'select_administrative'">
      <select
        class="list block w-full px-0 pt-0 pb-[10px] text-gray-200 bg-transparent border-0 border-b border-gray-500 focus:ring-0 focus:border-gray-500"
        v-model="select"
      >
        <option class="hidden" value="" disabled selected>{{ field.placeholder }}</option>
        <option v-for="(item, index) in field.options" :key="index" :value="item.key">
          {{ item.value }}
        </option>
      </select>
    </div>

    <template v-if="field.type === 'radio'">
      <label class="text-gray-700 body-text"> {{ field.name }}<span>*</span> </label>
      <div
        v-if="field.options && field.options.length > 0"
        class="relative flex space-y-3 flex-col mt-[16px]"
      >
        <template v-for="(item, index) in field.options">
          <div
            :key="index"
            class="radio"
            :class="
              modelValue === item.id
                ? 'text-red-500 border-red-500'
                : 'text-gray-700 border-gray-200'
            "
          >
            <input
              class="border border-gray-500 radio-item"
              type="radio"
              :id="`${fieldId}${index}`"
              :name="`${fieldId}`"
              :value="item.id"
              v-model="modelValue"
              @input="handleInput"
            />
            <label
              class="block h-full body-text radio-label w-max"
              :for="`${fieldId}${index}`"
              v-html="item.label"
            />
            <span class="checkmark"></span>
          </div>
        </template>
      </div>
      <div v-else class="flex items-center space-x-[8px]">
        <input
          class="w-[18px] h-[18px]"
          type="radio"
          :value="field.value"
          :name="field.name"
          :id="fieldId"
          v-model="modelValue"
        />
        <label
          v-if="field.label"
          :for="fieldId"
          class="relative self-center font-normal text-gray-900 body-text"
        >
          <span v-html="field.label"></span>
        </label>
      </div>
    </template>

    <div class="relative input-date" v-if="field.type === 'date'">
      <input
        type="text"
        onfocus="(this.type='date')"
        @input="handleInput"
        :value="value"
        :name="fieldId"
        max="9999-12-31"
        :placeholder="field.placeholder"
        :disabled="field.disabled ? true : false"
        :id="fieldId"
        class="w-full text-gray-600 font-display"
      />
      <JIcon
        name="calendar"
        class="absolute top-0 right-0 date-icon"
        v-if="field.type === 'date'"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: ['field', 'value', 'validate', 'footer'],
  data() {
    return {
      model: this.value,
      select: this.value,
      fieldId: '',
      modelValue: 1,
      modelValue2: '',
    }
  },
  computed: {
    isOrderPage() {
      return this.$route.name.startsWith('order')
    },
  },
  created() {
    this.fieldId = Math.random().toString(36).substr(2, 9)
  },
  watch: {
    select: {
      handler() {
        this.$emit('input', this.select)
      },
    },
    value(value) {
      this.select = value
      this.model = value
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
    handleInputCheckbox(e) {
      this.$emit('input', e.target.checked)
    },
    inputChange(value) {
      this.$emit('input', value)
    },
    handleSelect(e) {
      this.$emit('select', e.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.input-footer {
  @apply text-[14px] leading-[150%] mt-0 block w-full p-[10px]  md:py-[10px] md:px-[16px]	text-[#737686] bg-white focus:text-black border-none focus:duration-200 rounded focus:ring-0 ring-0 outline-none focus:outline-none shadow-none focus:shadow-none ring-offset-0 focus:ring-offset-0;
}
.input-form {
  @apply mt-0 block w-full p-[10px] md:p-3 text-gray-500 bg-white focus:text-black border border-gray-400 focus:duration-200 rounded-[12px] focus:ring-0 ring-0 outline-none focus:outline-none shadow-none focus:shadow-none ring-offset-0  focus:border-green-500 focus:ring-offset-0;
}

.input-form {
  @apply mt-0 block w-full lg:py-[10px]	md:py-[6px] py-[6px] lg:px-[16px]	md:px-[8px]	px-[8px] text-[#737686] bg-white focus:text-black border border-gray-200 focus:duration-200 rounded-[12px] focus:ring-0 ring-0 outline-none focus:outline-none shadow-none focus:shadow-none ring-offset-0 focus:ring-offset-0;
}
.line-h {
  @apply leading-[24px];
}
select {
  @apply text-gray-500;
}
::placeholder {
  @apply text-[#737686] text-justify text-[0.875rem]  lg:text-[1rem] font-display;
}
.input-form:focus::placeholder {
  @apply duration-300;
}
textarea:focus::placeholder {
  @apply duration-300;
}
::v-deep {
  .flatpickr-input {
    padding: 0;
    border: none;
    background: transparent;
    max-width: 125px;
  }
}
input[type='text']:disabled {
  background: #ececed;
}
input[type='number']:disabled {
  background: #ececed;
}
input[type='password']:disabled {
  background: #ececed;
}
input[type='email']:disabled {
  background: #ececed;
}
.select-style {
  @apply mt-0 block w-full lg:py-[10px]	md:py-[6px]	py-[6px] lg:px-[12px]	md:px-[8px]	px-[8px]  bg-transparent focus:text-black border focus:ring-0  outline-none focus:outline-none rounded-lg;
}
</style>
