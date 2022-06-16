<template>
  <div class="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
    <JCard class="col-span-1" v-for="(item, index) of items" :item="item" :key="index" />
  </div>
</template>

<script>
export default {
  props: ['items'],
}
</script>
