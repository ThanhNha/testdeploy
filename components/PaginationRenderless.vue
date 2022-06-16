<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
    },
    isApiResource: {
      type: Boolean,
      default: true,
    },
    limit: {
      type: Number,
      default: 2,
    },
  },
  computed: {
    currentPage() {
      return this.data.current_page
    },

    from() {
      return this.data.from
    },
    lastPage() {
      return this.data.last_page
    },

    perPage() {
      return this.data.per_page
    },

    to() {
      return this.data.to
    },
    total() {
      return this.data.total
    },
    pageRange() {
      if (this.limit === -1) {
        return 0
      }
      if (this.limit === 0) {
        return this.lastPage
      }
      var current = this.currentPage
      var last = this.lastPage
      var delta = this.limit // 2
      var left = current - delta
      var right = current + delta + 1

      var range = []
      var pages = []
      var l
      for (var i = 1; i <= last; i++) {
        if (i === 1 || i === last || (i >= left && i < right)) {
          range.push(i)
        }
      }
      for (let i of range) {
        if (l) {
          if (i - l === 2) {
            pages.push(l + 1)
          } else if (i - l !== 1) {
            pages.push('...')
          }
        }
        pages.push(i)
        l = i
      }

      return pages
    },
  },

  methods: {
    previousPage() {
      this.selectPage(this.currentPage - 1)
    },
    nextPage() {
      this.selectPage(this.currentPage + 1)
    },
    selectPage(page) {
      if (page === '...') {
        return
      }
      this.$router.push({
        path: this.$route.path,
        query: { ...this.$route.query, page },
      })

      this.$emit('pagination-change-page', page)
    },
  },
  render() {
    return this.$scopedSlots.default({
      data: this.data,
      limit: this.limit,
      computed: {
        isApiResource: this.isApiResource,
        currentPage: this.currentPage,
        from: this.from,
        lastPage: this.lastPage,
        perPage: this.perPage,
        to: this.to,
        total: this.total,
        pageRange: this.pageRange,
      },

      prevButtonEvents: () => ({
        click: (e) => {
          e.preventDefault()
          this.previousPage()
        },
      }),
      nextButtonEvents: () => ({
        click: (e) => {
          e.preventDefault()
          this.nextPage()
        },
      }),
      pageButtonEvents: (page) => ({
        click: (e) => {
          e.preventDefault()
          this.selectPage(page)

          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        },
      }),
    })
  },
}
</script>
