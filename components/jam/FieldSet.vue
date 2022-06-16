<template>
  <fieldset>
    <div v-if="field.type === 'media_upload'">
      <JField
        :value="value"
        @changeImages="changeImage"
        @input="(val) => (model = val)"
        :field="field"
        :footer="footer"
      />
      <small
        v-if="validate !== true && validate !== undefined"
        :class="field.type === 'media_upload' || field.type === 'textarea' ? '' : 'mt-[6px]'"
        class="absolute btn-sm text-maroon-600"
      >
        {{ validate === false ? `Quý khách vui lòng nhập ${label}` : validate }}
      </small>
    </div>
    <div
      v-if="
        field.type === 'text' ||
        field.type === 'email' ||
        field.type === 'password' ||
        field.type === 'textarea' ||
        field.type === 'number' ||
        field.type === 'select_administrative'
      "
      class="grid grid-cols-12 gap-x-[16px] gap-y-[2px]"
    >
      <div :class="field.row ? 'md:col-span-7 col-span-full' : 'col-span-full'" class="relative">
        <JField
          @action="$emit('action')"
          :value="value"
          @input="(val) => (model = val)"
          :field="field"
          :validate="validate"
          :isContact="contactForm"
          :footer="footer"
        />
        <small
          v-if="!validate"
          class="absolute flex items-center h-5 text-red-500 btn-sm"
          :class="[
            field.type === 'media_upload' || field.type === 'textarea' ? '' : '',
            footer ? 'lg:bottom-[-36%] bottom-[-32%]' : 'lg:bottom-[-26%] bottom-[-29%]',
          ]"
        >
          <!-- {{ Array.isArray(error) ? error[0] : `Quý khách vui lòng nhập ${label}` }} -->
          {{ `Quý khách vui lòng nhập ${label}` }}
        </small>
      </div>
    </div>
    <div v-if="field.type === 'select_single'" class="relative">
      <JField
        @action="$emit('action')"
        :value="value"
        @input="(val) => (model = val)"
        :field="field"
        :validate="validate"
        :isContact="contactForm"
        :footer="footer"
      />
      <small
        v-if="!validate"
        class="absolute lg:bottom-[-30%] md:bottom-[-32%] bottom-[-32%] flex items-center h-5 btn-sm text-red-500"
      >
        {{ `Quý khách vui lòng chọn ${label}` }}
      </small>
    </div>

    <div v-if="field.type === 'metre'">
      <div class="relative">
        <JField
          @action="$emit('action')"
          :value="value"
          @input="(val) => (model = val)"
          :field="field"
          :validate="validate"
          :footer="footer"
        />
        <small
          v-if="!validate"
          class="absolute lg:bottom-[-30%] md:bottom-[-32%] bottom-[-32%] flex items-center h-5 btn-sm text-red-500"
          :class="[field.type === 'media_upload' || field.type === 'textarea' ? '' : '']"
        >
          <!-- {{ Array.isArray(error) ? error[0] : `Quý khách vui lòng nhập ${label}` }} -->
          {{ `Quý khách vui lòng nhập ${label}` }}
        </small>
      </div>
    </div>

    <div v-if="field.type === 'radio'">
      <JField v-model="model" :field="field" :footer="footer" />
    </div>
    <div v-if="field.type === 'radio_control'">
      <JField v-model="model" :field="field" :footer="footer" />
    </div>
    <div v-if="field.type === 'date'">
      <JField v-model="model" :field="field" :footer="footer" />
    </div>
  </fieldset>
</template>

<script>
import { validateField } from '@/lib/validator.js'
export default {
  props: ['field', 'value', 'classGrid', 'classCol', 'contactForm', 'isSubmit', 'footer'],

  data() {
    return {
      model: this.value,
      validate: this.field.validate === false ? this.field.validate : true,
      label: this.field.label ? this.field.label.replace('<br />', '') : '',
    }
  },

  computed: {
    error() {
      return this.field.fieldName ? this.field.errors[this.field.fieldName] : ''
    },
  },

  created() {
    this.checkValidate()
  },

  watch: {
    model(value) {
      if (this.isSubmit) {
        if (!value) return
        else this.$emit('setIsSubmit', false)
      }
      this.validate = validateField(value, this.field.rules[this.field.fieldName])
      this.$emit('input', value)
    },

    error() {
      this.checkValidate()
    },

    value(value) {
      this.model = value
    },

    'field.validate'() {
      this.validate = this.field.validate
    },
  },

  methods: {
    changeImage(value) {
      this.$emit('changeImages', value)
    },

    checkValidate() {
      this.validate = !this.field.errors.hasOwnProperty(this.field.fieldName)
    },
  },
}
</script>
