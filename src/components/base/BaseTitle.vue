<template>
  <h1 :class="{ card: card }">
    <slot>Title</slot>
  </h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class Title extends Vue {
  @Prop({ default: '' }) private card!: string | undefined
}
</script>

<style lang="scss" scoped>
h1 {
  color: $black;
  font-style: normal;
  font-weight: 700;
  font-size: 6.4rem;
  line-height: 7.5rem;
  margin: 1.6rem 0;

  &.card {
    font-size: 1.8rem;
    line-height: 2.4rem;
  }
}
</style>
