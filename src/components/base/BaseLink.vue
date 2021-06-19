<template>
  <a :class="{ external: target === '_blank' }" :target="target" :rel="rel">
    <slot>Link</slot>
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class BaseLink extends Vue {
  /// Set the target attribute
  /// https://developer.mozilla.org/fr/docs/Web/HTML/Element/a#attr-target
  @Prop({ default: '_self' }) private readonly target!: string

  /// Set the rel attribute
  /// https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel
  @Prop({ default: '' }) private readonly rel!: string
}
</script>

<style lang="scss" scoped>
a {
  padding: 1.6rem 1.4rem;

  &.external {
    &:after {
      content: '→';
      width: 1rem;
      margin-left: 0.8rem;
      color: inherit;
    }
  }

  &:hover,
  &:active {
    background-color: rgba($white, 0.2);
    backdrop-filter: blur(0.5rem);
  }
}
</style>
