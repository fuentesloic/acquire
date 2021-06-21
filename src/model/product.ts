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
    this.defaultVariantId = product.defaultVariantId ?? '1'
    this.description = product.description ?? 'Description not available'
    this.id = product.id ?? 'unknown_id'
    this.image = product.image ?? ''
    this.name = product.name ?? 'Name not available'
    this.variants = product.variants ?? []
  }
}
