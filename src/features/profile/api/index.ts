import { get } from "../../../service/api.service";

export const getUserOrders = (userId: string) => get(`users/${userId}/orders`, {limit:10,offset:0,order:'ASC'})
export const getUserShippings = (userId: string) => get(`users/${userId}/shippings`, {})
export const getUserConsultation = (userId: string) => get(`users/${userId}/consultation`, {})