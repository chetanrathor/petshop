import { useDispatch } from "react-redux"
import ButtonComponent from "./button/ButtonComponent"
import ButtonText from "./button/ButtonText"
import { setChild, setShow } from "../State/ModalSlice"
import { MODAL_TYPES } from "../constant/modal-types"

const AreYouVetBanner = () => {
    const dispatch = useDispatch()
    const handelJoinAsVetClick = () => {
        dispatch(setShow(true))
        dispatch(setChild(MODAL_TYPES.JOIN_AS_VET))
    }
    const dots = [
        {
            path: 'AYVDot1.png',
            height: '13px',
            width: '13px',
            class: 'dot1'

        },
        {
            path: 'AYVDot2.png',
            height: '8px',
            width: '8px',
            class: 'dot2'

        },
        {
            path: 'AYVDot2.png',
            height: '8px',
            width: '8px',
            class: 'dot3'

        },
        {
            path: 'AYVDot1.png',
            height: '13px',
            width: '13px',
            class: 'dot4'

        }
    ]
    return (
        <div>
            <div className=" mt-5 banner__container">
                <div className="p-3 d-flex flex-column justify-content-center align-items-center banner__wrapper">
                    <div className=" dot_container">

                        {
                            dots.map((item) => {
                                return (
                                    <>
                                        <img src={item.path} className={item.class} height={item.height} width={item.width} alt="" />

                                    </>
                                )
                            })
                        }

                    </div>
                    <h1 className='AYV_heading'>Are you a vet?</h1>
                    <p className='mt-2 sub_headings'>
                        We would love to work with you. Send us a message and we’ll be in touch with you <br /> right away to onboard you to our platform.
                    </p>
                    <ButtonComponent handelClick={() => { handelJoinAsVetClick() }} backgroundColor="primary" disabled={false} isSubmitButton={false} className="py-3 px-5" >
                        <ButtonText fontSize="large"> Join As Vet</ButtonText>
                    </ButtonComponent>
                </div>
            </div>
        </div>
    )
}

export default AreYouVetBanner
