import { IAttribute, IVariant, Product } from '@/model/product'
import { ProductCart } from '@/model/cart'

const fakeAttributeOne: IAttribute = {
  name: 'attribute_name_one',
  value: 'attribute_value_one'
}

const fakeAttributeTwo: IAttribute = {
  name: 'attribute_name_two',
  value: 'attribute_value_two'
}

const fakeVariantOne: IVariant = {
  attributes: [fakeAttributeOne, fakeAttributeTwo],
  id: 'variant_id_one',
  name: 'variant_name_one',
  price: 42
}

const fakeVariantTwo: IVariant = {
  attributes: [fakeAttributeOne, fakeAttributeTwo],
  id: 'variant_id_two',
  name: 'variant_name_two',
  price: 42
}

export const fakeProductOne = new Product({
  defaultVariantId: 'variant_id_one',
  description: 'product_description_one',
  id: 'product_id_one',
  image: 'product_image_one',
  name: 'product_name_one',
  variants: [fakeVariantOne, fakeVariantTwo]
})

export const fakeProductTwo = new Product({
  defaultVariantId: 'variant_id_two',
  description: 'product_description_two',
  id: 'product_id_two',
  image: 'product_image_two',
  name: 'product_name_two',
  variants: [fakeVariantOne, fakeVariantTwo]
})

export const fakeProductCartOne = new ProductCart({
  id: 'product_id_one',
  image: 'product_image_one',
  name: 'product_name_one',
  quantity: 4,
  variant: fakeVariantOne
})

export const fakeProductCartTwo = new ProductCart({
  id: 'product_id_two',
  image: 'product_image_two',
  name: 'product_name_two',
  quantity: 2,
  variant: fakeVariantTwo
})
