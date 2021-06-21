import { ProductCart } from '@/model/cart'
import { IProduct, IVariant } from '@/model/product'

export interface IStateProduct {
  products: IProduct[]
}

export interface IStateCart {
  products: ProductCart[]
}

export interface IMutationCart {
  addProduct: {
    product: IProduct
    variantSelected: IVariant
  }
  addProductQtt: {
    product: ProductCart
  }
  removeProductQtt: {
    product: ProductCart
  }
}
