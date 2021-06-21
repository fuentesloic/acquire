<template>
  <div class="grid">
    <HeaderHero
      background="hero"
      subtitle="Dress like your idole with this super bundle and be the star you always wanted to be !"
      title="Jenny’s outfit"
    />

    <main>
      <CardProduct v-for="product in products" :key="product.id" :product="product" />
    </main>

    <aside>
      <BaseTitle>Product</BaseTitle>
      <BaseSubtitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vel ea ipsa harum, aut debitis quasi
        nesciunt modi quidem dolor! Ad aliquam numquam expedita odit quas vitae ex illum facere.
      </BaseSubtitle>
    </aside>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import BaseSubtitle from '@/components/base/BaseSubtitle.vue'
import BaseTitle from '@/components/base/BaseTitle.vue'
import CardProduct from '@/components/card/CardProduct.vue'
import HeaderHero from '@/components/header/HeaderHero.vue'
import { Product } from '@/model/product'

@Component({
  components: {
    BaseSubtitle,
    BaseTitle,
    CardProduct,
    HeaderHero
  },
  computed: {
    products(): Product[] {
      return this.$store.state.products
    }
  },
  mounted() {
    this.$store.dispatch('getProducts')
  }
})
export default class Shop extends Vue {}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 13rem 2fr 2rem 1fr 13rem;
  grid-template-rows: 32.2rem 11.8rem auto;

  & > header {
    grid-area: 1 / 1 / 3 / 6;
  }

  & > main {
    grid-area: 2 / 2 / 5 / 3;
  }

  & > aside {
    grid-area: 2 / 4 / 3 / 5;
    background: white;
  }
}
</style>
