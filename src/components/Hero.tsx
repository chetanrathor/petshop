import React from 'react'
const Hero = ({heading,subheading}:{heading:string,subheading:string}) => {
    return (
        <div>
            <div className="p-3 hero__container">
                <div className="h-100 m-auto hero__wrapper">
                    <div className="d-flex flex-row h-100 align-items-center">
                        <div className="col-12 col-md-5">
                            <h1 className='hero__heading'>{heading}</h1>
                            <h3 className='hero__subheading'>{subheading}</h3>
                            <button className='mt-4 btn btn-primary   py-2 px-4 p-md-4 hero__button'><span className='hero__btn__text'> Book a consult</span> </button>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Hero
