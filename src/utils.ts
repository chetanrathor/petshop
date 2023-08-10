import { Key } from "react"

export const getKey = () => {
    return Math.random() * 1000 as Key
}