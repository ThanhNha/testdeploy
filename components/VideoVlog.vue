<template>
  <transition name="fade">
    <div v-if="open" class="lightbox" @click.stop="close" @wheel.prevent @touchmove.prevent>
      <div class="lightbox__content" :class="{ 'lightbox__content--no-thumbs': noThumbs }">
        <div class="lightbox__blank z-10" @click="close"></div>
        <div class="lightbox__content__image z-20">
          <iframe width="100%" height="100%" :src="linkFormat"> </iframe>
        </div>
        <div
          class="lightbox__content__control lightbox__content__control--close z-20"
          @click.stop="close"
        />
      </div>
    </div>
  </transition>
</template>

<script>
/**
 * The lightbox component
 *
 * @event change - the index has been changed. The current index is sent as payload
 */
export default {
  name: 'lightbox',
  model: {
    prop: 'index',
    event: 'change',
  },
  props: {
    /**
     * List of images to display in the lightbox
     *
     * Any array item can be either a string containing the image URL or an object.
     * The object fields are the following:
     * - `src` - image URL
     * - `thumbnail` - thumbnail URL. If omitted, the image URL will be used
     * - `caption` - caption text to be overlayed on the image
     * - `alt` - alt text. If omitted, the caption will be used
     */
    images: {
      type: Array,
      default: () => [],
    },

    link: {
      type: String,
      default: '',
    },

    /**
     * The index of the image to be opened in the lightbox
     */
    index: {
      type: Number,
      default: null,
    },

    /**
     * Indicates whether the images carousel should loop around itself
     */
    loop: {
      type: Boolean,
      default: false,
    },

    /**
     * When enabled, the thumbnails are hidden
     */
    noThumbs: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      slide: 'next',
      swipeDone: false,
      swipeX: null,
    }
  },
  computed: {
    open() {
      return this.index != null
    },
    linkFormat() {
      let video_id = ''
      if (this.link) {
        if (this.link.includes('?v=')) {
          video_id = this.link.split('?v=').pop()
          let ampersandPosition = video_id.indexOf('&')
          if (ampersandPosition != -1) {
            video_id = video_id.substring(0, ampersandPosition)
          }
        }
        if (this.link.includes('embed')) {
          video_id = this.link.split('/').pop()
        }
      }
      return 'https://www.youtube.com/embed/' + video_id
    },
  },
  watch: {
    open(value) {
      if (value) {
        window.addEventListener('keyup', this.keyup)
      } else {
        window.removeEventListener('keyup', this.keyup)
      }
    },
  },
  methods: {
    close() {
      this.$emit('close')
      document.body.classList.remove('overflow-hidden')
    },
    keyup(e) {
      if (
        e.code === 'ArrowRight' ||
        e.key === 'ArrowRight' ||
        e.key === 'Right' ||
        e.keyCode === 39
      ) {
        this.next()
      } else if (
        e.code === 'ArrowLeft' ||
        e.key === 'ArrowLeft' ||
        e.key === 'Left' ||
        e.keyCode === 37
      ) {
        this.prev()
      } else if (e.code === 'Escape' || e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
        this.close()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.lightbox__blank {
  height: 80%;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lightbox {
  background-color: rgba(0, 0, 0, 0.9);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
  z-index: 100;
}

.lightbox__content {
  height: 100%;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox__content--no-thumbs {
  height: 100%;
}

.lightbox__content__image {
  background-color: #222;
  cursor: pointer;
  display: inline-block;
  position: absolute;
  width: 80%;
  height: 80%;
}

.lightbox__content__image__caption {
  position: absolute;
  bottom: 0;
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  color: white;
  background-color: rgba(0, 0, 0, 0.9);
  opacity: 0.75;
  font-family: sans-serif;
  font-weight: lighter;
  font-size: 1.2rem;
}

.lightbox__content__control {
  background: no-repeat center/24px;

  cursor: pointer;
  opacity: 0.5;
  position: absolute;
  top: 0;
  transition: opacity 300ms ease;
  width: 4em;
}

.lightbox__content__control:hover {
  opacity: 1;
}

.lightbox__content__control--prev {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='2 -2 28 36' width='40' height='60' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3'%3E%3Cpath d='M20 30 L8 16 20 2' /%3E%3C/svg%3E");
  bottom: 0;
  left: 0;
}

.lightbox__content__control--next {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='2 -2 28 36' width='40' height='60' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3'%3E%3Cpath d='M12 30 L24 16 12 2' /%3E%3C/svg%3E");
  bottom: 0;
  right: 0;
}

.lightbox__content__control--close {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-5 -5 46 46' width='40' height='40' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'%3E%3Cpath d='M2 30 L30 2 M30 30 L2 2' /%3E%3C/svg%3E");
  height: 2.6em;
  right: 0;
}

.lightbox__thumbs {
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  bottom: 0;
  height: 20%;
  left: 0;
  line-height: 0;
  padding: 0 10px;
  position: absolute;
  right: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  scroll-behavior: smooth;
  white-space: nowrap;
}

.lightbox__thumbs__item {
  cursor: pointer;
  display: inline-block;
  height: 10vh;
  margin: 2.5vh 5px;
  object-fit: cover;
  overflow: hidden;
  width: 15vh;
  opacity: 0.3;
}

.lightbox__thumbs__item--active {
  opacity: 1;
}

/*******************/
/*   TRANSITIONS   */
/*******************/

.fade-enter,
.next-enter,
.prev-enter,
.fade-leave-active,
.prev-leave-active,
.next-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active,
.prev-leave-active,
.next-leave-active {
  transition: opacity 300ms ease;
}

.prev-enter {
  transform: translateX(-40px);
}

.next-enter {
  transform: translateX(40px);
}

.next-enter-active,
.prev-enter-active {
  transition: opacity 300ms ease, transform 300ms ease;
}
</style>
