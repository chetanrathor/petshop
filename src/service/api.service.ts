import axios, { Axios } from "axios";
const url = process.env.REACT_APP_API_URL
console.log('url', url)
export const post = (endpoint: string, params: any) => axios.post(`${url}${endpoint}`, params)
export const get = (endpoint: string, params: any) => axios.get(`${url}${endpoint}`, { params })
export const deleteAPI = (endpoint: string, params: any) => axios.delete(`${url}${endpoint}`, { params })
export const put = (endpoint: string, params: any) => axios.put(`${url}${endpoint}`, { params })
export const patch = (endpoint: string, params: any) => axios.patch(`${url}${endpoint}`,  params )