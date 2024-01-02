import { ApiFilters } from "../../../Types/types";
import { get } from "../../../service/api.service";
import { GetBlogs } from "../types";

export const getBlogs = (filter: GetBlogs) => get('blog', filter)
export const getBlog = (id: string) => get(`blog/${id}`, {})
