import { deleteAPI, get, patch, post } from "../../../service/api.service";
import { CreateAddress, UpdateAddress } from "../types";

export const createAddress = (data: CreateAddress) => post('adress', data);
export const getAddress = (userId: string) => get(`adress/${userId}`, {});
export const deleteAddress = (id: string) => deleteAPI(`address/${id}`, {});
export const updateAddress = (id: string, data: Omit<UpdateAddress, 'id'>) => patch(`adress/${id}`, data);
