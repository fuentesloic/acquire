import { IVariant } from '@/model/product'

export interface ICart {
  products: IProductCart[]
}

export interface IProductCart {
  id: string
  image: string
  name: string
  quantity: number
  variant: IVariant
}

export class ProductCart {
  public id: string
  public image: string
  public name: string
  public quantity: number
  public variant: IVariant

  constructor(product: IProductCart) {
    this.id = product.id
    this.image = product.image
    this.name = product.name
    this.quantity = product.quantity
    this.variant = product.variant
  }
}
