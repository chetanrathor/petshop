import React from 'react'
import { ComponentUtility } from '../Types/Common.interface'

interface Properties extends ComponentUtility {
    isPublicImage: boolean,
    path: string,
    alt: string,
    height: string,
    width: string
}

const Image = ({ isPublicImage, path, alt, height, width, className }: Properties) => {
    const getSource = () => {
        if (isPublicImage) {
            return `${process.env.PUBLIC_URL}/${path}`
        }

        return path
    }
    return (
        <img src={getSource()} alt={alt} height={height} width={width} className={className} />
    )
}

export default Image