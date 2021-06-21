<template>
  <img :alt="alt" :src="getSource()" :class="{ cart, logo, product }" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BaseImage extends Vue {
  /// Prop: Provides fallback text to display when the image not loaded
  @Prop({ required: true })
  private readonly alt!: string

  /// Prop: Add cart class to extend IFF cart container
  @Prop({ default: '' })
  private readonly cart!: string

  /// Prop: Add logo class to extend IFF logo
  @Prop({ default: '' })
  private readonly logo!: string

  /// Prop: Add product class to extend IFF product container
  @Prop({ default: '' })
  private readonly product!: string

  /// Prop: Provides image source
  @Prop({ required: true })
  private readonly src!: string

  /// Method: Retrieve the image source according base url
  public getSource(): string {
    return this.src.includes('@/assets/image') ? require(this.src) : this.src
  }
}
</script>

<style lang="scss" scoped>
img {
  &.card {
    height: 30rem;
    width: 32rem;
  }

  &.cart {
    height: 7rem;
    width: 7rem;
  }

  &.logo {
    height: 3.3rem;
    width: 10.2rem;
  }
}
</style>
