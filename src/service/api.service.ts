import axios, { Axios } from "axios";
const url = process.env.REACT_APP_API_URL
console.log('url', url)
export const post = (endpoint: string, params: any) => axios.post(`${url}${endpoint}`, params)