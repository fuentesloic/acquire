<template>
  <h2 :class="{ card: card }">
    <slot>Subtitle</slot>
  </h2>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class Subtitle extends Vue {
  @Prop({ default: '' }) private card!: string | undefined
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
