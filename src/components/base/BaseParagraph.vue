<template>
  <p :class="{ label, cta }">
    <slot>Paragraph</slot>
  </p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BaseParagraph extends Vue {
  /// Prop: Add cta class to extend IFF cta container
  @Prop({ default: '' })
  private readonly cta!: string

  /// Prop: Add label class to extend IFF product container
  @Prop({ default: '' })
  private readonly label!: string
}
</script>

<style lang="scss" scoped>
p {
  color: $gray-dark;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  margin-bottom: 0.8rem;

  &.cta {
    color: $black;
    font-weight: 700;
    line-height: 1.7rem;
  }

  &.label {
    font-size: 1.2rem;
    line-height: 1.7rem;
  }
}
</style>
