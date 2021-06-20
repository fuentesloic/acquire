<template>
  <header :style="getBackgroundImage(background)">
    <HeaderNav />

    <BaseTitle>{{ title }}</BaseTitle>
    <BaseSubtitle>{{ subtitle }}</BaseSubtitle>
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
    getBackgroundImage(background: string): Record<'background-image', string> {
      // eslint-disable-next-line
      const image = require(`@/assets/image/${background}.png`)

      return {
        'background-image': `url(${image})`
      }
    }
  }
})
export default class HeaderHero extends Vue {
  /// background image name, limit to png
  @Prop({ required: true }) private readonly background!: string

  /// title related to the view
  @Prop({ required: true }) private readonly title!: string

  /// subtitle related to the view
  @Prop({ required: true }) private readonly subtitle!: string
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
  padding: 2.75rem 13rem;

  h1,
  h2 {
    max-width: 41rem;
  }
}
</style>
