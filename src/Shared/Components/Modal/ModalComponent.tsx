import React from 'react'
import './Modal.css'
import { Button, Modal } from 'react-bootstrap'
const ModalComponent = ({show,handleClose,child}:any) => {
  return (
    <Modal centered={true} backdrop={true} show={show} onHide={handleClose}>
        <Modal.Body className='p-0'>{child}</Modal.Body>
    </Modal>
  )
}

export default ModalComponent
