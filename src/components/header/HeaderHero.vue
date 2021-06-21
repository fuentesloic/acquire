<template>
  <header :style="getBackgroundImage()">
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
  }
})
export default class HeaderHero extends Vue {
  /// Prop: background image name, limit to png
  @Prop({ required: true })
  private readonly background!: string

  /// Prop: title related to the view
  @Prop({ required: true })
  private readonly title!: string

  /// Prop: subtitle related to the view
  @Prop({ required: true })
  private readonly subtitle!: string

  /// Method: retrieve the image background according image name
  public getBackgroundImage(): Record<'background-image', string> {
    // eslint-disable-next-line
    const image = require(`@/assets/image/${this.background}.png`)

    return {
      'background-image': `url(${image})`
    }
  }
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
