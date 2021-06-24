<template>
  <article>
    <aside>
      <BaseImage class="product" :alt="product.name" :src="product.image" />
    </aside>

    <header>
      <BaseTitle class="product">{{ product.name }}</BaseTitle>
      <BaseSubtitle class="product">{{ variantSelectedPrice }}</BaseSubtitle>
    </header>

    <BaseParagraph class="product">{{ product.description }}</BaseParagraph>

    <section>
      <ul>
        <li v-for="attributeName in variantAttributeNames" :key="`product_${product.id}_${attributeName}`">
          <BaseParagraph class="label">{{ attributeName }}</BaseParagraph>

          <div>
            <BaseButton
              v-for="attributeValue in getVariantAttributeValues(product, attributeName)"
              :class="['selector', getSelectedAttribute(attributeName, attributeValue)]"
              :click="() => setVariantSelected(attributeName, attributeValue)"
              :key="`product_${product.id}_${attributeName}_${attributeValue}`"
            >
              {{ attributeValue }}
            </BaseButton>
          </div>
        </li>
      </ul>
    </section>

    <footer>
      <BaseButton :click="() => addProductToCart()">Submit to cart</BaseButton>
    </footer>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import BaseButton from '@/components/base/BaseButton.vue'
import BaseImage from '@/components/base/BaseImage.vue'
import BaseParagraph from '@/components/base/BaseParagraph.vue'
import BaseTitle from '@/components/base/BaseTitle.vue'
import BaseSubtitle from '@/components/base/BaseSubtitle.vue'
import { IAttribute, IVariant, Product } from '@/model/product'
import { IMutationCart } from '@/model/store'

@Component({
  components: {
    BaseButton,
    BaseImage,
    BaseParagraph,
    BaseSubtitle,
    BaseTitle
  }
})
export default class CardProduct extends Vue {
  /// Prop: Add product class to extend IFF product container
  @Prop({ required: true })
  private readonly product!: Product

  /// Data: Represent the list of product variant
  readonly variantAvailable: IVariant[] = this.product.variants

  /// Data: Represent the current variant selected
  variantSelected: IVariant | undefined = this.product.variants.find(
    variant => variant.id === this.product.defaultVariantId
  )

  /// Computed: Retrieve the price of product according variant selected
  private get variantSelectedPrice(): string {
    const { variantSelected } = this

    return variantSelected ? `$ ${variantSelected.price}` : 'Contact support'
  }

  /// Computed: Retrieve the attributes set according variant selected
  private get variantAttributesSelected(): IAttribute[] {
    const { variantSelected } = this

    return variantSelected ? variantSelected.attributes : []
  }

  /// Computed: Retrieve the attribute's set according variant selected
  private get variantAttributeNames(): Set<string> {
    const variantAttributesNames: string[] = []

    this.variantAvailable.forEach(variant =>
      variant.attributes.forEach(attr => variantAttributesNames.push(attr.name))
    )

    return new Set(variantAttributesNames)
  }

  /// Method: Update the current variant selected
  public setVariantSelected(attributeName: string, attributeValue: string): void {
    const _variantSelected = this.variantSelected

    // Generate desired set of attributes selected
    if (_variantSelected) {
      const existingNextAttributes = _variantSelected.attributes
        .filter(attribute => attribute.name !== attributeName)
        .map(attribute => {
          return {
            name: attribute.name,
            value: attribute.value
          }
        })

      const nextVariantAttributes = [
        ...existingNextAttributes,
        {
          name: attributeName,
          value: attributeValue
        }
      ].sort((a, b) => {
        const _a = a.name.toUpperCase()
        const _b = b.name.toUpperCase()

        if (_a > _b) return -1
        if (_a < _b) return 1

        return 0
      })

      // Serialize array for lazy comparaison
      const _variantAttributesDesired = JSON.stringify(nextVariantAttributes)
      const _variantAttributesAvailable = this.variantAvailable.map(variant =>
        JSON.stringify(variant.attributes)
      )

      // Find variant id from set of attribute desired
      const nextVariantIndex = _variantAttributesAvailable.findIndex(
        attributes => attributes === _variantAttributesDesired
      )

      this.variantSelected = this.variantAvailable[nextVariantIndex]
    } else {
      /// Handle notification
      console.error('No default variant, contact support')
    }
  }

  /// Method: Retrieve list of attribute for a specific product variant
  public getVariantAttributeValues(product: Product, variantName: string): Set<string> {
    const variantAttributeValues: string[] = []

    product.variants.forEach(variant => {
      const variantAttribute = variant.attributes.filter(attribute => attribute.name === variantName)
      variantAttributeValues.push(variantAttribute[0].value)
    })

    return new Set(variantAttributeValues)
  }

  /// Method: Retrieve list of attribute for a specific product variant
  public getSelectedAttribute(attributeName: string, attributeValue: string): string {
    const attribute = this.variantAttributesSelected.find(attribute => attribute.name === attributeName)

    return attribute && attribute.value === attributeValue ? 'active' : ''
  }

  /// Method: Update cart store with product
  public addProductToCart(): void {
    if (this.variantSelected) {
      const payload: IMutationCart['addProduct'] = {
        product: this.product,
        variantSelected: this.variantSelected
      }
      this.$store.commit('cart/addProduct', payload)
    } else {
      /// Handle notification
      console.error('No variant selected')
    }
  }
}
</script>

<style lang="scss" scoped>
article {
  display: grid;
  background-color: $white;
  border-radius: 0.8rem;
  gap: 2rem 1rem;
  grid-template-columns: 30rem 1fr;
  grid-template-rows: 2rem auto auto 4rem;
  margin-bottom: 2rem;
  padding: 2rem;

  & > aside {
    background-color: $gray-light;
    grid-area: 1 / 2 / 5 / 1;

    img {
      height: 100%;
      width: 100%;
    }
  }

  & > header {
    display: flex;
    grid-area: 1 / 3 / 1 / 3;
    justify-content: space-between;
  }

  & > p {
    grid-area: 2 / 3 / 2 / 3;
  }

  & > section {
    grid-area: 3 / 4 / 3 / 3;

    ul {
      li {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;

        div {
          display: flex;
        }
      }
    }
  }

  & > footer {
    align-items: center;
    display: flex;
    grid-area: 4 / 4 / 4 / 3;
    justify-content: flex-end;
  }
}
</style>
