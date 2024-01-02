export interface ApiResponse<type> {
    statusCode: number
    message: string
    response: type
}

export interface ApiFilters{
    limit:number,
    offset:number,
    search:string,
    order: 'ASC' | 'DESC'
}