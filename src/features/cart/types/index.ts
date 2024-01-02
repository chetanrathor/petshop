import { Product } from "../../product/types";

export interface AddToCart {
    product: string,
    user: string,
    quantity: number,

}



export interface UpdateCart {
    id: string,
    quantity: number,

}

interface Cart {
    id: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: any;
    status: string;
    quantity: number;
    product: Product;
}

export interface CartState {
    cartItems: Cart[];
    subTotalBeforDelivery:number
}
