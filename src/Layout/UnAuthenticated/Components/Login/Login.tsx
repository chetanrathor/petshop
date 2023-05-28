import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import './Login.css'
import { inputElements } from '.'
import { SignupUserType } from '../../../../constant/signup-types'
const Login = () => {
  const [signupAs, setSignup] = useState(SignupUserType.User)
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
        <div className=" d-flex flex-row justify-content-end close_container">
          <img src="cross.png" height='20px' width='20px' alt="" />
          {/* <span className='text-end'>close</span> */}
        </div>
        <h3 className=' mb-5  heading_signup '> Sign in</h3>
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
            <div className='ms-4 d-flex flex-grow-1 justify-content-between terms_and_condition_para '>
              <span className='w-100'>Remember me <span className=' float-end  '>Forgot password &nbsp;</span></span>
            </div>
          </div>
          <button type="submit" className="btn btn-primary background-primary border-0 p-3 mt-2 w-100 btn-text"  > <span className='signup-btn-text'>Sign in</span> </button>
        </Form>
        <div className="d-flex flex-row  mt-5 mx-4 ">
          <div className="col-5" onClick={(e) => { e.preventDefault(); changeActiveUserSignupType(SignupUserType.User) }}>
            <img src={getActiveUserImage(SignupUserType.User)} height='12.53px' width='12.53px' alt="" />
            <span className='select_user_button'>Signin as user</span>
          </div>
          <div className="col-2">
            <img src="Line.png" className='partition_line' height='1px' width='32px' alt="" />
          </div>
          <div className="col-5" onClick={(e) => { e.preventDefault(); changeActiveUserSignupType(SignupUserType.Vet) }}>
            <img src={getActiveUserImage(SignupUserType.Vet)} height='12.53px' width='12.53px' alt="" />
            <span  className='select_user_button'>Signin as vet</span>
          </div>
        </div>
        <div className='terms_and_condition_para mt-5'>
          <text>Don’t have an account? <span className='color-primary text-decoration-underline'>Sign up </span></text>
        </div>
      </div>
    </div>
  )
}
export default Login
