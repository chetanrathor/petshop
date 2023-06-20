import React, { ReactNode } from 'react'
import './Modal.css'
import { Button, Modal, ModalHeader } from 'react-bootstrap'
import { MODAL_TYPES } from '../../../constant/modal-types'
import Login from '../../../Layout/UnAuthenticated/Components/Login/Login'
import Signup from '../../../Layout/UnAuthenticated/Components/Signup/Signup'
import ForgetPassword from '../../../Layout/UnAuthenticated/Components/ForgetPassword/ForgetPassword'
import { useDispatch } from 'react-redux'
import { resetModalState } from '../../../State/ModalSlice'

interface PropType {
  show: boolean,
  handleClose: string,
  child: MODAL_TYPES

}





const ModalComponent = ({ show, handleClose, child }: PropType) => {

  const dispatch = useDispatch()

  const getChildComponent = (child: MODAL_TYPES): ReactNode => {

    switch (child) {
      case MODAL_TYPES.LOGIN:
        return (<Login></Login>)
      case MODAL_TYPES.SIGNUP:
        return (<Signup></Signup>)
      case MODAL_TYPES.FORGET_PASSWORD:
        return (<ForgetPassword></ForgetPassword>)
  
  
    }
  }
  
  const handelModalClose = ()=>{
    dispatch(resetModalState())
  }

  return (
    <Modal centered={true} backdrop={true} show={show} >
      <ModalHeader className='border-0 justify-content-end   '>
        <div className=" d-flex flex-row justify-content-end close_container">
          <img onClick={()=>{handelModalClose()}} src={process.env.PUBLIC_URL + "/cross.png"} height='20px' width='20px' alt="" />
        </div>
      </ModalHeader>
      <Modal.Body className='p-0'>{getChildComponent(child)}</Modal.Body>
    </Modal>
  )
}

export default ModalComponent
