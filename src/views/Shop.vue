<template>
  <div class="grid">
    <HeaderHero
      background="hero"
      subtitle="Dress like your idole with this super bundle and be the star you always wanted to be !"
      title="Jenny’s outfit"
    />

    <main>
      <CardProduct v-for="product in products()" :key="product.id" :product="product" />
    </main>

    <aside>
      <CardCart />
    </aside>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import BaseSubtitle from '@/components/base/BaseSubtitle.vue'
import BaseTitle from '@/components/base/BaseTitle.vue'
import CardCart from '@/components/card/CardCart.vue'
import CardProduct from '@/components/card/CardProduct.vue'
import HeaderHero from '@/components/header/HeaderHero.vue'
import { Product } from '@/model/product'

@Component({
  components: {
    BaseSubtitle,
    BaseTitle,
    CardCart,
    CardProduct,
    HeaderHero
  },
  beforeCreate() {
    this.$store.dispatch('product/getProducts')
  }
})
export default class Shop extends Vue {
  /// Computed: provide sync product list
  products(): Product[] {
    return this.$store.state.product.products
  }
}
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
