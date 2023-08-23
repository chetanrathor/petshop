import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setChild, setShow } from '../State/ModalSlice'
import { MODAL_TYPES } from '../constant/modal-types'
import ButtonComponent from './button/ButtonComponent'
import ButtonText from './button/ButtonText'
import { RootState } from '../stores/Store'
const Hero = ({ heading, subheading }: { heading: string, subheading: string }) => {

    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state: RootState) => state.authReducer.isAuthenticated)

    const handelBookConsultClick = () => {
        dispatch(setShow(true))
        let child = MODAL_TYPES.LOGIN
        if (isAuthenticated) {
            child = MODAL_TYPES.BOOK_CONSULT
        }
        dispatch(setChild(child))

    }

    return (
        <div>
            <div className="p-3 hero__container">
                <div className="h-100 m-auto hero__wrapper">
                    <div className="d-flex flex-row h-100 align-items-center">
                        <div className="col-12 col-md-5">
                            <h1 className='hero__heading'>{heading}</h1>
                            <h3 className='hero__subheading'>{subheading}</h3>
                            <ButtonComponent handelClick={() => { handelBookConsultClick() }} className='mt-4 btn btn-primary py-2 px-4 p-md-4 hero__button' isSubmitButton={false} backgroundColor={'primary'} disabled={false}>
                                <ButtonText fontSize={'small'} >Book a consult</ButtonText>
                            </ButtonComponent>
                            {/* <button ><span className='hero__btn__text'> Book a consult</span> </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
