import React from 'react'
import Image from '../../../components/Image'
import { getKey } from '../../../utils'
import ButtonComponent from '../../../components/button/ButtonComponent'
import ButtonText from '../../../components/button/ButtonText'
import { useDispatch } from 'react-redux'
import { setChild, setShow } from '../../../State/ModalSlice'
import { MODAL_TYPES } from '../../../constant/modal-types'

const BookConsult = () => {

    const dispatch = useDispatch()

    const inputElements = [
        {
            name: 'fullname',
            type: 'text',
            className: 'form-control p-2-5',
            placeholder: '',
            id: 'fullname',
            label: 'Full Name',
            labelClass: 'form-label label_style'
        },
        {
            name: 'email',
            type: 'email',
            className: 'form-control p-2-5',
            placeholder: '',
            id: 'email',
            label: 'Email',
            labelClass: 'form-label label_style'
        },
        {
            name: 'phone',
            type: 'number',
            className: 'form-control p-2-5',
            placeholder: '',
            id: 'phone',
            label: 'Phone',
            labelClass: 'form-label label_style'
        },
        {
            name: 'city',
            type: 'text',
            className: 'form-control p-2-5',
            placeholder: '',
            id: 'text',
            label: 'City',
            labelClass: 'form-label label_style'
        },
    ]

    const handelBookConsultClick = () => {
        dispatch(setShow(true))
        dispatch(setChild(MODAL_TYPES.THANK_YOU))
    }

    return (
        <div className="d-flex flex-row">
            <div className="col-5 d-flex flex-row justify-content-center">
                <Image alt='consult_hero' isPublicImage height='592px' width='448px' path='consult_hero.png'></Image>
            </div>
            <div className="col-7 p-3">
                <h3 className=' px-5 heading_signup  m-0'> Book Consult</h3>

                <div className="d-flex flex-row flex-wrap gap-4 justify-content-center">
                    {
                        inputElements.map((item) => {
                            return (
                                <div key={getKey()} className=" my-3 " style={{ minWidth: '250px' }}>
                                    <label htmlFor={item.id} className={'form-label label_style'} >{item.label}</label>
                                    <input type={'text'} className={'form-control p-2-5'} id={item.id} />
                                </div>
                            )
                        })
                    }

                </div>
                <div className="px-5 mt-5" >
                    <textarea className="form-control" id="exampleTextarea" rows={5} style={{ maxWidth: '100%' }}></textarea>
                </div>
                <div className="px-5 mt-2">

                    <ButtonComponent handelClick={() => { handelBookConsultClick() }} backgroundColor='primary' disabled={false} isSubmitButton={false} className='w-100 py-3'>
                        <ButtonText fontSize='medium'>Book a Consult</ButtonText>
                    </ButtonComponent>
                </div>
            </div>
        </div>
    )
}

export default BookConsult