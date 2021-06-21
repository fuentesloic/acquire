<template>
  <button :class="{ active, cart, selector }" @click="click">
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BaseImage extends Vue {
  /// Prop: Add active class IFF selector component is active
  @Prop({ default: '' })
  private readonly active!: string

  /// Prop: Add cart class IFF cart component
  @Prop({ default: '' })
  private readonly cart!: string

  /// Prop: Action trigger on click
  @Prop({ required: true })
  private readonly click!: void

  /// Prop: Add selector class IFF selector component
  @Prop({ default: '' })
  private readonly selector!: string
}
</script>

<style lang="scss" scoped>
button {
  background: $purple;
  border: 0.1rem solid $purple;
  border-radius: 0.4rem;
  color: $white;
  cursor: pointer;
  display: inline-block;
  justify-content: center;
  font-size: 1.2rem;
  line-height: 1.4rem;
  padding: 1.2rem;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.25s;

  > * {
    color: inherit;
  }

  &:hover {
    background: $white;
    color: $purple;
  }

  &.cart {
    margin: 1rem 0;
    width: 100%;
  }

  &.selector {
    background: $gray-light;
    border-color: $gray-light;
    border-radius: 0.2rem;
    margin-left: 0.5rem;
    color: $black;
    padding: 0.8rem 1rem;
    text-transform: none;

    &:hover,
    &:focus {
      background: $black;
      border-color: $black;
      color: $white;
    }

    &.active {
      background: $black;
      border-color: $black;
      color: $white;
    }

    & > * {
      color: $white;
    }
  }

  &.cart.selector {
    background: $white;
    border: none;
    margin: 0;
    padding: 0.7rem 0.8rem;

    &:hover,
    &:focus {
      background: $gray-light;
      color: $black;
    }
  }
}
</style>
