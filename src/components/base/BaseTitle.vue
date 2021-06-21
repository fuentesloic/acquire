<template>
  <h1 :class="{ product }">
    <slot>Title</slot>
  </h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BaseTitle extends Vue {
  /// Prop: Add product class to extend IFF product container
  @Prop({ default: '' })
  private readonly product!: string

  /// Prop: Add cart class to extend IFF product container
  @Prop({ default: '' })
  private readonly cart!: string
}
</script>

<style lang="scss" scoped>
h1 {
  color: $black;
  font-style: normal;
  font-weight: 700;
  font-size: 6.4rem;
  line-height: 7.5rem;
  margin-bottom: 0.8rem;

  &.product,
  &.cart {
    font-size: 1.8rem;
    line-height: 2.4rem;
  }

  &.cart.product {
    font-size: 1.4rem;
    line-height: 1.65rem;
    margin-bottom: 0.3rem;
  }
}
</style>
