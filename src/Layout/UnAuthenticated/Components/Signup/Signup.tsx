import React, { useState } from 'react'
import { inputElements } from '.'
import { Form } from 'react-router-dom'
import { SignupUserType } from '../../../../constant/signup-types'
import { useDispatch } from 'react-redux'
import { setChild, setShow } from '../../../../State/ModalSlice'
import { MODAL_TYPES } from '../../../../constant/modal-types'
const  Signup = () => {

  const dispatch = useDispatch()

  const [signupAs, setSignup] = useState(SignupUserType.User)

  const handelSigninClick = ()=>{
    dispatch(setShow(true))
    dispatch(setChild(MODAL_TYPES.LOGIN))
  }

  const getActiveUserImage = (user: SignupUserType) => {
    if (signupAs === user) {
      return 'Activated_user.png'
    }
    return 'InActivated_user.png'
  }

  const changeActiveUserSignupType = (user: SignupUserType) => {
    setSignup(user)
  }

  return (
    <div className=''>
    <div className="wrapper  p-4">
      {/* <div className=" d-flex flex-row justify-content-end close_container">
        <img src={process.env.PUBLIC_URL + "cross.png"}  height='20px' width='20px' alt="" />
      </div> */}
      <h3 className=' mb-5  heading_signup '>Sign up</h3>
      <Form>
        {
          inputElements.map((item) => {
            return (
              <div className="mb-3">
                <label htmlFor={item.id} className={item.labelClass} >{item.label}</label>
                <input type={item.type} className={item.className} id={item.id} />
              </div>
            )
          })
        }
        <div className="d-flex flex-row">
          <input type="checkbox" className='form-check-input mt-0 checkbox_height_width' />
          <div className='ms-4 terms_and_condition_para '>
            <text>I agree to accept <span className='color-primary text-decoration-underline'>Terms of Service &nbsp;</span>and  &nbsp;&nbsp;</text>
            <text className='color-primary text-decoration-underline'> Privacy Policy</text>
          </div>
        </div>
        <button type="submit" className="btn btn-primary background-primary border-0 p-3 mt-2 w-100 btn-text"  > <span className='signup-btn-text'>Sign up</span> </button>
      </Form>
      <div className="d-flex flex-row  mt-5 mx-4 ">
        <div className="col-5" onClick={(e) => { e.preventDefault(); changeActiveUserSignupType(SignupUserType.User) }}>
          <img src={getActiveUserImage(SignupUserType.User)} height='12.53px' width='12.53px' alt="" />
          <span className='select_user_button'>Signup as user</span>
        </div> 
        <div className="col-2">
          <img src={process.env.PUBLIC_URL + "/Line.png"} className='partition_line' height='1px' width='32px' alt="" />
        </div>
        <div className="col-5   ">
          <img src={getActiveUserImage(SignupUserType.Vet)} height='12.53px' width='12.53px' alt="" />
          <span onClick={(e) => { e.preventDefault(); changeActiveUserSignupType(SignupUserType.Vet) }} className='select_user_button'>Signup as vet</span>
        </div>
      </div>
      <div className='terms_and_condition_para mt-5'>
        <text>Already have an account? <span className='color-primary text-decoration-underline' onClick={()=>{handelSigninClick()}}>Sign in </span></text>
      </div>
    </div>
  </div>
  )
}

export default Signup

function dispatch(arg0: any) {
  throw new Error('Function not implemented.')
}

