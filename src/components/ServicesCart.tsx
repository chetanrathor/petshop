import React from 'react'

interface PropType {
    bgClass: string,
    iconSource: string,
    heading: string,
    subheading: string
    iconWidth: string,
    iconHeight: string,
}
const ServicesCart = ({ bgClass, iconSource, heading, subheading,iconWidth,iconHeight }: PropType) => {
    return (
        <div>
            <div className={`d-flex flex-column justify-content-center p-3 servicescart_container w-100 ${bgClass}`}>
                <div className="d-flex flex-row">
                    <div className="col-4">
                        <img src={process.env.PUBLIC_URL +'/'+iconSource} width={iconWidth} height={iconHeight} alt="" />
                    </div>
                    <div className="col-8">
                        <div className="cart_heading">
                            {heading}
                        </div>
                        <div className="cart_subheading">
                            {subheading}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ServicesCart
