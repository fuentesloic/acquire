<template>
  <article>
    <header>
      <BaseTitle class="cart">Welcome back Sarah !</BaseTitle>
      <BaseParagraph class="cart">Nice to see you again!</BaseParagraph>
      <BaseButton class="cart" :click="() => `Congrats! you own me ${totalPrice}`">
        pay ${{ totalPrice }}
      </BaseButton>
    </header>

    <section v-if="products().length">
      <BaseDivider />
      <BaseTitle class="cart">Your cart</BaseTitle>

      <ul>
        <li v-for="product in products()" :key="product.id">
          <figure>
            <BaseImage class="cart" :alt="product.name" :src="product.image" />
          </figure>

          <figcaption>
            <BaseTitle class="cart product">{{ product.name }}</BaseTitle>
            <BaseSubtitle class="cart product">{{ product.variant.name }}</BaseSubtitle>

            <div class="ctas">
              <BaseParagraph class="cta">
                <BaseButton class="cart selector" :click="() => 'remove 1 qtt'">-</BaseButton>
                <span>{{ product.quantity }}</span>
                <BaseButton class="cart selector" :click="() => 'add 1 qtt'">+</BaseButton>
              </BaseParagraph>

              <BaseParagraph class="cta">$ {{ product.variant.price }}</BaseParagraph>
            </div>
          </figcaption>
        </li>
      </ul>
    </section>

    <footer>Powered by Acquire</footer>
  </article>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { Component, Vue } from 'vue-property-decorator'

import BaseButton from '@/components/base/BaseButton.vue'
import BaseDivider from '@/components/base/BaseDivider.vue'
import BaseImage from '@/components/base/BaseImage.vue'
import BaseParagraph from '@/components/base/BaseParagraph.vue'
import BaseTitle from '@/components/base/BaseTitle.vue'
import BaseSubtitle from '@/components/base/BaseSubtitle.vue'
import { ProductCart } from '@/model/cart'

@Component({
  components: {
    BaseButton,
    BaseDivider,
    BaseImage,
    BaseParagraph,
    BaseTitle,
    BaseSubtitle
  },
  computed: {
    ...mapGetters('cart', { totalPrice: 'totalPrice' })
  }
})
export default class CardProduct extends Vue {
  /// Computed: provide sync product list
  products(): ProductCart[] {
    return this.$store.state.cart.products
  }
}
</script>

<style lang="scss" scoped>
article {
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: $white;
  border-radius: 0.8rem;
  margin-bottom: 2rem;
  padding: 2rem;
  position: relative;

  section {
    text-align: left;

    li {
      display: flex;

      + li {
        margin-top: 1rem;
      }

      figure {
        background-color: $gray-light;
      }

      figcaption {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin-left: 1rem;

        .ctas {
          align-items: center;
          display: flex;
          justify-content: space-between;

          span {
            margin: 0 1rem;
          }

          .cta {
            align-items: center;
            display: flex;
          }
        }
      }
    }
  }

  footer {
    bottom: -4rem;
    text-align: center;
    left: 0;
    position: absolute;
    right: 0;
  }
}
</style>
