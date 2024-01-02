import { ApiFilters } from "../../../Types/types";
export interface Blog {
    id: string
    createdAt: string
    updatedAt: string
    deletedAt: any
    status: string
    isUpdated: boolean
    title: string
    description: string
    subTitle: string
    heroImage: string
}

export interface InitialState{
    blogs:Blog[],
    latestBlogs:Blog[],
    blog:Blog
}



  


export interface GetBlogs extends Omit<ApiFilters, 'search'> {
    category?: string,
    specy?: string

}