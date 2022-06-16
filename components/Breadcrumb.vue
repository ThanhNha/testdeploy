<template>
  <div class="py-4">
    <div class="space-x-[4px] breadcrumb">
      <div class="flex items-center space-x-3">
        <NuxtLink
          :to="{ name: '' }"
          class="
            breadcrumb-item
            text-gray-500
            hover:text-green-100
            transition
            duration-200
            ease-in-out
            font-medium
          "
          >Trang chủ</NuxtLink
        >
        <JIcon name="breadcrumb" />
        <span class="font-semibold text-gray-700">Blog</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
}
</script>
