<template>
  <main>
    <HeaderHero
      background="hero"
      title="Jenny’s outfit"
      subtitle="Dress like your idole with this super bundle and be the star you always wanted to be !"
    />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import HeaderHero from '@/components/header/HeaderHero.vue'

@Component({
  components: {
    HeaderHero
  }
})
export default class Shop extends Vue {}
</script>

<style lang="scss" scoped>
// implement grid layout
</style>
