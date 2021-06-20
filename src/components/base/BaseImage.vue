<template>
  <img :alt="alt" :src="getSource(src)" :class="{ cart, logo, product }" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  methods: {
    getSource(src: string): string {
      return src.includes('@/assets/image') ? require(src) : src
    }
  }
})
export default class BaseImage extends Vue {
  /// Provides fallback text to display when the image not loaded
  @Prop({ required: true }) private readonly alt!: string

  /// Provides image source
  @Prop({ required: true }) private readonly src!: string

  /// Add product class to extend IFF product container
  @Prop({ default: '' }) private readonly product!: string

  /// Add cart class to extend IFF cart container
  @Prop({ default: '' }) private readonly cart!: string

  /// Add logo class to extend IFF logo
  @Prop({ default: '' }) private readonly logo!: string
}
</script>

<style lang="scss" scoped>
img {
  &.card {
    font-size: 1.8rem;
    line-height: 2.4rem;
  }

  &.logo {
    height: 3.3rem;
    width: 10.2rem;
  }
}
</style>
