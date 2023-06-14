import axios from "axios"

const API_BASE_URL = 'http://localhost:3333/api/'


export const Get = (endpoint:string,params?:any)=>{
    const url = `${API_BASE_URL}${endpoint}`
    const response =   axios.get(url,{params}).then(({data})=>data).catch((err)=>err.response.data)
    return response

}


export const Post = (payload:{endpoint:string,body?:any,params?:any})=>{
    const {endpoint,body,params} = payload
    const url = `${API_BASE_URL}${endpoint}`
    console.log('url :>> ', API_BASE_URL);
    const response =   axios.post(url,body,{params}).then(({data})=>data).catch((err)=>err.response.data)
    return response
}