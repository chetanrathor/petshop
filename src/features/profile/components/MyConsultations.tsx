import React from 'react'
import Consultation from './Consultation'
import { MakeCallStatus } from '../../../constant/Consultation'

const MyConsultations = () => {
    return (
        <Consultation consulation={{ userName: 'Frank Nicolas', date: 'May 1, 2022', time: '11AM - 12PM', total: '$300.00', id: 'ewe', makeCallStatus: MakeCallStatus.JoinCall }}></Consultation>

    )
}

export default MyConsultations