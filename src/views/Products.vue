<template>
  <div class="Products">
    <img alt="Vue logo" src="../assets/logo.png" />
    <BaseTitle msg="Acquire" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseTitle from '@/components/BaseTitle.vue'

@Component({
  components: {
    BaseTitle
  }
})
export default class Products extends Vue {}
</script>

<style lang="scss" scoped>
// implement grid layout
</style>
