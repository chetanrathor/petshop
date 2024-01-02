import React, { useState } from 'react'
import { AddressType } from '../../address/types'
import { RootState, useAppDispatch } from '../../../stores/Store'
import { fetchAddress, updateAddressInfo } from '../../address/state/address.slice'
import { useSelector } from 'react-redux'
interface Properties {
    addressElement: AddressType
}
const Address = ({ addressElement }: Properties) => {

    const dispatch = useAppDispatch()
    const { user } = useSelector((state: RootState) => state.authReducer)
    const [defaultAddress, setDefaultAddress] = useState(addressElement.isDefault || false)
    return (
        <div>
            <div className="d-flex flex-row border rounded-3 p-3">
                <div className="col-2 ">
                    <img src={process.env.PUBLIC_URL + '/locationMarker.png'} alt="" />
                </div>
                <div className="col-8 d-flex flex-column ">
                    <div className='address-type'>
                        {addressElement.title}
                    </div>
                    <div className='full-address'>
                        {`${addressElement.street_address}, ${addressElement.city}, ${addressElement.state}, ${addressElement.zip}`}
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-end col-2 ">
                    <div className="d-flex flex-column  justify-content-center align-item-center col-4">

                        <input onChange={async (e) => {
                            console.log('e', e.target.checked)

                            if (e.target.checked) {
                                const updateResponse = await dispatch(updateAddressInfo({
                                    id: addressElement.id,
                                    isDefault: true
                                }))
                                if(updateResponse.meta.requestStatus === 'fulfilled'){
                                    dispatch(fetchAddress(user.id))
                                    
                                }
                            }

        


                        }} type="checkbox" checked={addressElement.isDefault} disabled={addressElement.isDefault}  className='form-check-input mt-0 checkbox_height_width' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Address
