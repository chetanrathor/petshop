import React from 'react'
import './MediumHeading.css'
interface PropType {
    heading:string,
    extraClass?:string
}
const MediumHeading = ({heading,extraClass}:PropType) => {
    return (
        <div>
            <h1 className={`feature__heading ${extraClass}`}>{heading}</h1>

        </div>
    )
}

export default MediumHeading
