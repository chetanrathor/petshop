import React from 'react'
import ForgetPassword from './ForgetPassword/ForgetPassword'
import Login from './Login/Login'
import ModalComponent from '../../Shared/Modal/ModalComponent'
import Otp from './Otp/Otp'

const UnAuthenticatedLayout = () => {
  return (
    <div>
      {/* <Login></Login> */}
      <ModalComponent  show={true} child={<Otp></Otp>} ></ModalComponent>
    </div>
  )
}

export default UnAuthenticatedLayout
