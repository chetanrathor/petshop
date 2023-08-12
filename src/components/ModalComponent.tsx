import { Modal, ModalHeader } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { resetModalState } from '../State/ModalSlice'
import { MODAL_TYPES } from '../constant/modal-types'
import ForgetPassword from '../features/authentication/components/ForgetPassword'
import Login from '../features/authentication/components/Login'
import Signup from '../features/authentication/components/Signup'
import BookConsult from '../features/consultation/components/BookConsult'
import JoinAsVet from '../features/consultation/components/JoinAsVet'
import Thankyou from '../features/consultation/components/Thankyou'

interface PropType {
  show: boolean,
  handleClose: string,
  child: MODAL_TYPES

}





const ModalComponent = ({ show, child }: PropType) => {

  const dispatch = useDispatch()

  const getChildComponent = (child: MODAL_TYPES) => {

    switch (child) {
      case MODAL_TYPES.LOGIN:
        return { element: (<Login></Login>), size: undefined }
      case MODAL_TYPES.SIGNUP:
        return { element: (<Signup></Signup>), size: undefined }
      case MODAL_TYPES.JOIN_AS_VET:
        return { element: (<JoinAsVet></JoinAsVet>), size: "xl" as unknown as any}
      case MODAL_TYPES.FORGET_PASSWORD:
        return { element: (<ForgetPassword></ForgetPassword>), size: undefined }
      case MODAL_TYPES.BOOK_CONSULT:
        return { element: (<BookConsult></BookConsult>), size: "xl" as unknown as any }
      case MODAL_TYPES.THANK_YOU:
        return { element: (<Thankyou></Thankyou>), size: undefined }
      default:
        return { element: (<BookConsult></BookConsult>), size: "xl" as unknown as any }


    }
  }

  const handelModalClose = () => {
    dispatch(resetModalState())
  }

  return (
    <Modal centered={true} backdrop={true} show={show} size={getChildComponent(child).size}>
      <ModalHeader className='border-0 justify-content-end   '>
        <div className=" d-flex flex-row justify-content-end close_container">
          <img onClick={() => { handelModalClose() }} src={process.env.PUBLIC_URL + "/cross.png"} height='20px' width='20px' alt="" />
        </div>
      </ModalHeader>
      <Modal.Body className='p-0'>{getChildComponent(child).element}</Modal.Body>
    </Modal>
  )
}

export default ModalComponent
