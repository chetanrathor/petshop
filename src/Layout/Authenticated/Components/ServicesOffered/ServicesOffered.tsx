import React from 'react'
import './ServicesOffered.css'
import ServicesCart from '../../../../Shared/Components/ServicesCart/ServicesCart'
import { servicesCarts } from '.'
const ServicesOffered = () => {
    return (
        <div>
            <div className="p-3 mt-5 servicesOffered__container">
                <div className="d-flex flex-column flex-md-row gap-3  m-auto justify-content-between servicesOffered__wrapper">
                    {
                        servicesCarts.map((item) => {
                            return (
                                <>
                                    <ServicesCart iconHeight={item.iconHeight} iconWidth={item.iconWidth} bgClass={item.bgClass} heading={item.heading} iconSource={item.iconSource} subheading={item.subheading}></ServicesCart>

                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ServicesOffered
