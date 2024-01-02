export default {}
export interface Product {
    id: string
    createdAt: string
    updatedAt: string
    deletedAt: any
    status: string
    name: string
    discount: string
    mrp: string
    sellingPrice: string
    breedType: string
    description: string
    isOnSale: boolean
    inStock: string,
    sku:number,
    category:{
      name:string
    },
    rating:{
      average:number
    },
    productImages:string[]
  }
export interface GetAllProducts {
  limit: number;
  offset: number;
  order: string;
  userId?: string;
}
export interface ProductState {
  products: Product[];
  product: Product;
  featureProductCategory: string;
  productFilters: Product;
  filters: Filters;
}

interface Filters {
  specy: string;
  category: string;
  offer: string;
  breedType: string;
  brand: string;
}

