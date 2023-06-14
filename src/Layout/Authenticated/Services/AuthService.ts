export const isTokenAvailable = ()=>{
    
    const token = localStorage.getItem('petshop')
    if(token) return true
    else return false

}