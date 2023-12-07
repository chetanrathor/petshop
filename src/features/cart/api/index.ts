import { deleteAPI, get, patch, post, put } from "../../../service/api.service";
import { AddToCart, UpdateCart } from "../types";

export const addToCart = (data: AddToCart) => post('cart', data)
export const getCartItems = (userId: string) => get(`cart/user/${userId}`, {})
export const removeCart = (id: string) => deleteAPI(`cart/${id}`, {})
export const updateCart = (id: string, data: { quantity: number }) => patch(`cart/${id}`, data)