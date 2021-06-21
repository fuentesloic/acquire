<template>
  <hr />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class BaseDivider extends Vue {}
</script>

<style lang="scss" scoped>
hr {
  border: 0.1rem solid $gray-light;
  border-radius: 0.5rem;
  margin: 1rem 0 3rem;
}
</style>
