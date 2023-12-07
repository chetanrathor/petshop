import React, { useEffect } from 'react'
import Order from './Order'
import { useAppDispatch } from './../../../stores/Store';
import { fetchUserOrders } from '../state/profile-tab.state';
import { useParams } from 'react-router-dom';

const MyOrders = () => {
    const dispatch = useAppDispatch()
    const { id } = useParams()
    console.log('id', id)
    useEffect(() => {
        dispatch(fetchUserOrders(id ?? ''))
    }, [])
    return (
        <Order></Order>
    )
}

export default MyOrders