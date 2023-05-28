import React from 'react'
import './Hero.css'
const Hero = ({heading,subheading}:{heading:string,subheading:string}) => {
    return (
        <div>
            <div className="hero__container">
                <div className="h-100 m-auto hero__wrapper">
                    <div className="d-flex flex-row h-100 align-items-center">
                        <div className="col-5">
                            <h1 className='hero__heading'>{heading}</h1>
                            <h3 className='hero__subheading'>{subheading}</h3>
                            <button className='mt-4 btn btn-primary p-4 hero__button'><span className='hero__btn__text'> Book a consult</span> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
