import React, { useEffect } from 'react'
import Address from './Address'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../../../stores/Store'
import { fetchUserOrders, fetchUserShippings } from '../state/profile-tab.state'

const Shipping = () => {
    const dispatch = useAppDispatch()
    const { id } = useParams()
    console.log('id', id)
    useEffect(() => {
        dispatch(fetchUserShippings(id ?? ''))
    }, [])
    return (
        <div className="d-flex flex-column gap-3 my-3 px-5">
            <Address></Address>
            <Address></Address>
            <Address></Address>

        </div>
    )
}

export default Shipping