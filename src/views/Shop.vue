<template>
  <div class="grid">
    <HeaderHero
      background="hero"
      subtitle="Dress like your idole with this super bundle and be the star you always wanted to be !"
      title="Jenny’s outfit"
    />

    <main>
      <CardContainer />
      <CardContainer />
      <CardContainer />
      <CardContainer />
    </main>

    <aside>
      <CardContainer />
    </aside>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import CardContainer from '@/components/card/CardContainer.vue'
import HeaderHero from '@/components/header/HeaderHero.vue'

@Component({
  components: {
    CardContainer,
    HeaderHero
  }
})
export default class Shop extends Vue {}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 13rem 2fr 2rem 1fr 13rem;
  grid-template-rows: 2.75rem 32rem 12rem auto;

  & > header {
    grid-area: 1 / 1 / 4 / 6;
  }

  & > main {
    grid-area: 3 / 2 / 5 / 3;
  }

  & > aside {
    grid-area: 3 / 4 / 3 / 5;
  }
}
</style>
