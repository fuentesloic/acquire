<template>
  <h2 :class="{ product }">
    <slot>Subtitle</slot>
  </h2>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BaseSubtitle extends Vue {
  /// Prop: Add product class to extend IFF product container
  @Prop({ default: '' })
  private readonly product!: string

  /// Prop: Add cart class to extend IFF cart container
  @Prop({ default: '' })
  private readonly cart!: string
}
</script>

<style lang="scss" scoped>
h2 {
  color: $black;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.4rem;
  margin-bottom: 0.8rem;

  &.product,
  &.cart {
    color: $purple;
    font-size: 1.4rem;
    line-height: 2rem;
  }

  &.cart.product {
    color: $gray-dark;
    font-size: 1.2rem;
    line-height: 1.7rem;
  }
}
</style>
