import { IProduct } from '@/model/product'

// Should extend Axios type
export interface IResponseProduct {
  products: IProduct[]
}
