import { get } from "../../../service/api.service";
import { GetAllProducts } from "../types";
import Order from './../../profile/components/Order';

export const getProducts = (data: GetAllProducts) => get('product', data)
export const getProduct = (productId: string) => get(`product/${productId}`, {})
export const getFilters = () => get(`product/filters`, {})