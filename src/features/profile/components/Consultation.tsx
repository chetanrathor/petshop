import React from 'react'
import { ConsultationType } from '../../../Types/Consultation.types'
import { Link } from 'react-router-dom'
import { getKey } from '../../../utils'

interface propType {
    consulation: ConsultationType
}

const Consultation = (props: propType) => {
    const { consulation } = props
    const keys = Object.keys(consulation)
    const headings = [
        {
            key: 'userName',
            value: 'USER NAME'
        },
        {
            key: 'date',
            value: 'DATE'
        },
        {
            key: 'time',
            value: 'TIME'
        },
        {
            key: 'total',
            value: 'TOTAL'
        },
        {
            key: 'makeCall',
            value: 'MAKE A CALL'
        }
    ]
    return (
        <div>

            <div className=" d-flex flex-row  p-5 border-bottom">
                {headings.map((item) => {
                    return (<div key={getKey()} className='col-2 d-flex flex-column  consultation-text color-gre'>
                        {item.value}
                    </div>)
                })}
            </div>


            <div className="d-flex flex-row p-5">

                {/* <div className="col-2 d-flex flex-column justify-content-center consultation-text">
                </div>
                <div className="col-2 d-flex flex-column justify-content-center consultation-text">
                May 1, 2022
                </div>
                <div className="col-2 d-flex flex-column justify-content-center consultation-text">
                11AM - 12PM
                </div>
                <div className="col-2 d-flex flex-column justify-content-center consultation-text">
                $300.00
                </div>
                <div className="col-2 d-flex flex-column justify-content-center consultation-text">
                Join Call
                </div> */}
                {
                    keys.map((item) => {
                        if (item !== 'id') {
                            return (<>
                                <div key={getKey()} className="col-2 d-flex flex-column  consultation-text">
                                    {(item === 'makeCallStatus' ? <Link to={consulation['id']}>{consulation[item]}</Link> : consulation[item])}
                                    {(item === 'total' ? <div className='consultation_status'>Connecting with vet Soon</div> : null)}
                                </div>








                            </>)
                        }
                        else {
                            return null
                        }
                    })
                }

            </div>
        </div>
    )
}

export default Consultation
