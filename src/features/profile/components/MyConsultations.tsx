import React, { useEffect } from 'react'
import Consultation from './Consultation'
import { MakeCallStatus } from '../../../constant/Consultation'
import { useAppDispatch } from '../../../stores/Store'
import { useParams } from 'react-router-dom'
import { fetchUserConsultation, fetchUserOrders } from '../state/profile-tab.state'

const MyConsultations = () => {
    const dispatch = useAppDispatch()
    const { id } = useParams()
    console.log('id', id)
    useEffect(() => {
        dispatch(fetchUserConsultation(id ?? ''))
    }, [])
    return (
        <Consultation consulation={{ userName: 'Frank Nicolas', date: 'May 1, 2022', time: '11AM - 12PM', total: '$300.00', id: 'ewe', makeCallStatus: MakeCallStatus.JoinCall }}></Consultation>

    )
}

export default MyConsultations