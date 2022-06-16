<template>
  <header class="top-0 z-[100] bg-green-gradient sticky">
    <div class="flex flex-row flex-wrap mx-auto xl:container">
      <div class="flex items-center flex-grow max-xl:px-[16px] bg-green-gradient-mobile">
        <NuxtLink
          to="/"
          class="flex items-center font-medium text-gray-900 md:mb-0 h-[var(--header-height-sm)] md:h-[var(--header-height-md)] lg:h-[var(--header-height-lg)]"
        >
          <JLogo class="max-md:h-[44px]" />
        </NuxtLink>
        <JHamburger />
      </div>
      <ul
        class="flex-col flex-wrap hidden w-full xl:flex lg:flex-row lg:items-center lg:ml-auto menu-items lg:w-auto"
      >
        <li
          v-for="(item, index) in menu"
          :key="index"
          class="max-sm:w-full lg:h-full group relative duration-150 text-white font-bold text-[0.875rem] lg:text-[1rem] font-display leading-[150%]"
        >
          <div
            class="flex flex-col items-center md:h-full space-x-[4px] xl:pt-[24px] xl:pb-[16px] md:p-[12px] p-[8px] item-menu"
            v-if="item.link"
          >
            <NuxtLink :to="{ name: item.link }" class="menu-link" exact v-html="item.title">
            </NuxtLink>
            <div class="w-full h-[3px] line"></div>
          </div>
          <div
            v-else
            class="flex flex-col items-center md:h-full xl:pt-[24px] xl:pb-[16px] md:p-[12px] p-[8px] item-menu"
          >
            <div class="flex items-center justify-center space-x-[4px]">
              <div>
                <div class="menu-link" v-html="item.title"></div>
                <div class="w-full h-[3px] line"></div>
              </div>
              <JIcon v-if="item.sub" name="arrow-down" class="pt-[3px]" />
            </div>
          </div>
          <div
            class="bg-transparent bg-opacity-90 pt-[7px] group-hover:block hidden duration-150 absolute top-full w-full min-w-[210px] mega-menu"
            v-if="item.sub && item.sub.length > 0"
            :class="index === menu.length - 1 ? 'right-0' : ''"
          >
            <div class="bg-white rounded-lg shadow-md">
              <NuxtLink
                v-for="(chil, idx) in item.sub"
                :to="{ name: chil.link.name }"
                class="text-gray-600 hover:text-green-50 xl:p-[16px] md:p-[12px] p-[8px] font-semibold block menu-chil"
                :key="idx"
                v-html="chil.title"
              ></NuxtLink>
            </div>
          </div>
        </li>
      </ul>
      <JAccordion :items="menu" />
    </div>
  </header>
</template>

<script>
export default {
  created() {
    this.$router.options.routes.forEach((route) => {
      if (!route.name.includes('slug') && route.name.includes('___' + this.$i18n.locale)) {
        this.items.push({
          name: route.name.replace('___' + this.$i18n.locale, ''),
        })
      }
    })
  },
  data() {
    return {
      items: [],
      menu: [
        {
          title: 'Lộ trình thông minh',
          sub: [
            {
              title: 'Smart Kit',
              link: { name: 'smart-kit' },
            },
            {
              title: 'Smart Local',
              link: { name: 'smart-local' },
            },
          ],
        },
        {
          title: 'Smart Home',
          link: 'smart-home',
        },
        {
          title: 'Smart Office',
          link: 'smart-office',
        },
        {
          title: 'Gợi ý thiết kế',
          link: 'suggest',
        },
        {
          title: 'Wiki RalliSmart',
          sub: [
            {
              title: 'App RalliSmart',
              link: { name: 'wiki' },
            },
            {
              title: 'Câu hỏi thường gặp',
              link: { name: 'faq' },
            },
          ],
        },
        {
          title: 'Khám phá',
          sub: [
            {
              title: 'Blog',
              link: { name: 'blog' },
            },
            {
              title: 'Vlog',
              link: { name: 'vlog' },
            },
          ],
        },
        {
          title: 'Đăng ký tư vấn',
          link: 'contact',
        },
      ],
    }
  },
}
</script>
<style>
body {
  --header-height-sm: 56px;
  --header-height-md: 70px;
  --header-height-lg: 80px;
}
</style>
<style lang="scss">
@screen max-sm {
  main {
    @apply md:pt-[var(--header-height-sm)];
  }
}
</style>

<style lang="scss" scoped>
.menu-link {
  @apply block transition duration-150 ease-in-out;
}

@screen max-xl {
  .menu-items {
    @apply overflow-hidden transition-all max-h-0 py-0 opacity-0;
    height: calc(100vh - var(--header-height-sm));

    .menu-is-opened & {
      @apply opacity-100;
      max-height: calc(100vh - var(--header-height-sm));
    }
  }
  .menu-link {
    @apply py-4 px-6;
    &.nuxt-link-active {
      @apply text-white;
    }
  }
}
.bg-green-gradient {
  @apply bg-white;
  @screen xl {
    background: linear-gradient(89.92deg, #07bd89 2.93%, #006e8c 89.38%);
    backdrop-filter: blur(15px);
  }
}

.bg-green-gradient-mobile {
  @screen max-xl {
    background: linear-gradient(89.92deg, #07bd89 2.93%, #006e8c 89.38%);
    backdrop-filter: blur(15px);
  }
}

.menu-chil.nuxt-link-exact-active {
  background: linear-gradient(89.94deg, #07bd89 2.92%, #006e8c 79.81%, #014251 103.13%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.menu-link.nuxt-link-exact-active ~ .line {
  background: linear-gradient(
    89.98deg,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 50.1%,
    rgba(255, 255, 255, 0) 100%
  );
}

.item-menu {
  .line {
    @apply bg-transparent pt-[4px];
  }
  &:hover {
    .line {
      background: linear-gradient(
        89.98deg,
        rgba(255, 255, 255, 0) 0%,
        #ffffff 50.1%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
}
</style>
