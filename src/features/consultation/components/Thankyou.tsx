import React from 'react'
import ButtonComponent from '../../../components/button/ButtonComponent'
import ButtonText from '../../../components/button/ButtonText'
import { useDispatch } from 'react-redux'
import { resetModalState, setShow } from '../../../State/ModalSlice'

const Thankyou = () => {

    const dispatch = useDispatch()

    const handelGotoHomeClick = () => {
        dispatch(setShow(false))
        dispatch(resetModalState())
    }

    return (
        <div className="d-flex flex-column gap-3 p-5">
            <span className='fs-1 text-center fw-bolder font-secondary nunito'>Thank you</span>
            <span className='text-center fw-semibold fs-6 font-color-warning   nunito '>We have received your request. You will get updates about your vet on message and email within 20 minutes.</span>
            <div className='m-auto'>
                <ButtonComponent handelClick={() => { handelGotoHomeClick() }} backgroundColor='primary' disabled={false} isSubmitButton={false} className='py-2 px-5'>
                    <ButtonText fontSize='medium' >Go to home</ButtonText>
                </ButtonComponent>
            </div>
        </div>
    )
}

export default Thankyou