export interface IProduct {
  defaultVariantId: string
  description: string
  id: string
  image: string
  name: string
  variants: IVariant[]
}

export interface IVariant {
  attributes: IAttribute[]
  id: string
  name: string
  price: number
}

export interface IAttribute {
  name: string
  value: string
}

export class Product {
  public defaultVariantId: string
  public description: string
  public id: string
  public image: string
  public name: string
  public variants: IVariant[]

  constructor(product: IProduct) {
    this.defaultVariantId = product.defaultVariantId
    this.description = product.description
    this.id = product.id
    this.image = product.image
    this.name = product.name
    this.variants = product.variants
  }
}
