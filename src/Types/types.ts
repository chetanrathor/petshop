export interface ApiResponse<type> {
    statusCode: number
    message: string
    response: type
}