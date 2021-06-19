<template>
  <header :style="backgroundImage(background)">
    <HeaderNav />

    <div class="content">
      <BaseTitle>{{ title }}</BaseTitle>
      <BaseSubtitle>{{ subtitle }}</BaseSubtitle>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import BaseSubtitle from '@/components/base/BaseSubtitle.vue'
import BaseTitle from '@/components/base/BaseTitle.vue'
import HeaderNav from '@/components/header/HeaderNav.vue'

@Component({
  components: {
    BaseSubtitle,
    BaseTitle,
    HeaderNav
  },
  methods: {
    backgroundImage(background: string) {
      // eslint-disable-next-line
      const image = require(`@/assets/image/${background}.png`)

      return {
        'background-image': `url(${image})`
      }
    }
  }
})
export default class HeaderHero extends Vue {
  @Prop() private background!: string
  @Prop() private title!: string
  @Prop() private subtitle!: string
}
</script>

<style lang="scss" scoped>
header {
  background-attachment: fixed;
  background-position: 0 10%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 44rem;
  padding: 2.75rem 13rem;

  nav {
    align-items: center;
    display: flex;
    justify-content: space-between;

    img {
      width: 10rem;
      height: 3rem;
      margin: 1.6rem 1.4rem;
    }
  }

  h1,
  h2 {
    max-width: 41rem;
  }
}
</style>
