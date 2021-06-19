<template>
  <h2 :class="{ card }">
    <slot>Subtitle</slot>
  </h2>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class BaseSubtitle extends Vue {
  /// Add card class to extend IFF card container
  @Prop({ default: '' }) private readonly card!: string
}
</script>

<style lang="scss" scoped>
p {
  color: $black;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.4rem;
  margin: 1.6rem 0;

  &.card {
    color: $gray-dark;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 2.4rem;
  }
}
</style>
