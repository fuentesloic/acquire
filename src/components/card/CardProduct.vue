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
        <li v-for="attributeName in getVariantAttributeNames" :key="product.id + attributeName">
          <BaseParagraph class="label">{{ attributeName }}</BaseParagraph>

          <div>
            <BaseButton
              v-for="attributeValue in getVariantAttributeValues(product, attributeName)"
              :class="[
                'selector',
                variantAttributesSelected.find(attribute => attribute.name === attributeName).value ===
                  attributeValue && 'active'
              ]"
              :click="() => setVariantSelected(attributeName, attributeValue)"
              :key="attributeName + attributeValue"
            >
              {{ attributeValue }}
            </BaseButton>
          </div>
        </li>
      </ul>
    </section>

    <footer>
      <BaseButton :click="() => null">button submit</BaseButton>
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

@Component({
  components: {
    BaseButton,
    BaseImage,
    BaseParagraph,
    BaseSubtitle,
    BaseTitle
  },
  created() {
    const product: Product = this.$props.product
    const { defaultVariantId } = product

    this.$data.variantAvailable = product.variants
    this.$data.variantSelected = product.variants.find(variant => variant.id === defaultVariantId)
  },
  methods: {
    getVariantAttributeValues: (product: Product, variantName: string) => {
      const variantAttributeValues: string[] = []

      product.variants.forEach(variant => {
        const variantAttribute = variant.attributes.filter(attribute => attribute.name === variantName)
        variantAttributeValues.push(variantAttribute[0].value)
      })

      return new Set(variantAttributeValues)
    }
  }
})
export default class CardProduct extends Vue {
  /// Represent the list of product variant
  private variantAvailable!: IVariant[]

  /// Represent the current variant selected
  private variantSelected!: IVariant

  /// Retrieve the price of product according variant selected
  private get variantSelectedPrice(): string {
    return `$ ${this.$data.variantSelected.price}`
  }

  /// Retrieve the attribute's set according variant selected
  private get variantAttributesSelected(): IAttribute {
    return this.$data.variantSelected.attributes
  }

  /// Retrieve the attribute's set according variant selected
  private get getVariantAttributeNames(): Set<string> {
    const variantAttributesNames: string[] = []
    const variants: IVariant[] = this.$data.variantAvailable

    variants.forEach(variant => variant.attributes.forEach(attr => variantAttributesNames.push(attr.name)))

    return new Set(variantAttributesNames)
  }

  public setVariantSelected(attributeName: string, attributeValue: string): void {
    const attributesSelected: IAttribute[] = this.$data.variantSelected.attributes

    let currentSize = attributesSelected.find(attribute => attribute.name === 'Size')?.value
    let currentFabric = attributesSelected.find(attribute => attribute.name === 'Fabric')?.value

    if (attributeName === 'Fabric') {
      currentFabric = attributeValue
    } else if (attributeName === 'Size') {
      currentSize = attributeValue
    } else {
      console.error('Attribute name not supported')
    }

    const variantAvailable: IVariant[] = this.$data.variantAvailable
    const nextVariant = variantAvailable.find(
      variant => variant.attributes[0].value === currentSize && variant.attributes[1].value === currentFabric
    )

    this.$data.variantSelected = nextVariant
  }

  /// Add product class to extend IFF product container
  @Prop({ required: true }) private readonly product!: Product
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
