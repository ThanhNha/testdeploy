<template>
  <div class="flex items-center justify-center">
    <PaginationRenderless
      :data="data"
      :limit="limit"
      :totalPage="totalPage"
      v-on:pagination-change-page="onPaginationChangePage"
    >
      <!--   -->
      <div
        v-if="computed.total > computed.perPage"
        slot-scope="{ computed, prevButtonEvents, nextButtonEvents, pageButtonEvents }"
      >
        <ul class="pagination">
          <li class="page-item previous">
            <a
              class="flex items-center justify-center h-full w-full page-link"
              href="javascript:;"
              aria-label="Previous"
              :tabindex="!computed.prevPageUrl && -1"
              :class="{ 'pointer-events-none': computed.currentPage === 1 }"
              v-on="prevButtonEvents()"
            >
              <JIcon
                name="pagination"
                class="paginate-btn select-none bg-white rounded w-[40px] h-[40px] cursor-pointer items-center flex justify-center"
              />
            </a>
          </li>

          <template v-for="(page, key) in computed.pageRange">
            <li
              :key="key"
              class="page-item page-number"
              :class="{ active: page == computed.currentPage }"
            >
              <a
                class="page-link flex justify-center items-center w-full caption font-medium"
                href="javascript:;"
                v-on="pageButtonEvents(page)"
              >
                {{ page }}
                <span class="sr-only" v-if="page == computed.currentPage">(current)</span>
              </a>
            </li>
          </template>

          <li class="page-item next">
            <a
              class="flex items-center justify-center h-full w-full page-link"
              href="javascript:;"
              aria-label="Next"
              :class="{ 'pointer-events-none': computed.currentPage === computed.lastPage }"
              :tabindex="!computed.nextPageUrl && -1"
              v-on="nextButtonEvents()"
            >
              <JIcon
                name="pagination"
                class="paginate-btn select-none text-gray-700 hover:text-blue-500 bg-white rounded duration-150 w-[40px] h-[40px] cursor-pointer items-center flex justify-center rotate-180"
              />
            </a>
          </li>
        </ul>
      </div>
    </PaginationRenderless>
  </div>
</template>
<style lang="scss" scoped>
/*  */
.pagination {
  @apply flex lg:space-x-[12px] space-x-[8px] justify-start;
}
.page-number {
  @apply bg-white duration-150 max-h-[40px] w-[40px] py-[8px] justify-center flex items-center cursor-pointer rounded-full;
  &:hover {
    @apply bg-green-50 text-white;
  }
}
.page-link {
  @apply font-semibold;
}
.disabled {
  pointer-events: none;
  @apply text-gray-400;
}
.page-number.active {
  @apply bg-green-50 text-white;
}
.paginate-btn.active {
  @apply text-gray-700;
}
</style>
<script>
import PaginationRenderless from './PaginationRenderless.vue'
export default {
  components: { PaginationRenderless },
  data() {
    return {
      totalPage: 0,
    }
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
    },
    limit: {
      type: Number,
      default: 2,
    },
  },
  methods: {
    onPaginationChangePage(page) {
      this.$emit('pagination-change-page', page)
    },
  },

  created() {
    this.totalPage = Math.ceil(this.data.total / this.limit)
    return this.totalPage
  },
}
</script>
