import React from 'react'
import './Address.css'
const Address = () => {

   

    return (
        <div>
            <div className="d-flex flex-row border rounded-3 p-3">
                <div className="col-2 ">
                    <img src={process.env.PUBLIC_URL + '/locationMarker.png'} alt="" />
                </div>
                <div className="col-8 d-flex flex-column ">
                    <div className='address-type'>
                        My Home Address
                    </div>
                    <div className='full-address'>
                        2118 Thornridge Cir. Syracuse, Connecticut 35624
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-end col-2 ">
                    <div className="d-flex flex-column  justify-content-center align-item-center col-4">

                    <input type="checkbox" className='form-check-input mt-0 checkbox_height_width' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Address
