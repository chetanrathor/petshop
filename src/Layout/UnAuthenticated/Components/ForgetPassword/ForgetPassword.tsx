import React from 'react'
import { inputElements } from '.'
import { Form } from 'react-router-dom'
import { SignupUserType } from '../../../../constant/signup-types'
const ForgetPassword = () => {
  return (
    <div className=''>
    <div className="wrapper  p-4">
      <div className=" d-flex flex-row justify-content-end close_container">
        <img src={process.env.PUBLIC_URL + "/cross.png"} height='20px' width='20px' alt="" />
        {/* <span className='text-end'>close</span> */}
      </div>
      <h3 className='   heading_signup '> Forget password</h3>
      <p>Type your email address and we’ll send a reset link <br />
          right away.   
      </p>
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
      
        <button type="submit" className="btn btn-primary background-primary border-0 p-3 mt-2 w-100 btn-text"  > <span className='signup-btn-text'>Submit</span> </button>
      </Form>
     
      <div className='terms_and_condition_para mt-5'>
        <text>Don’t have an account? <span className='color-primary text-decoration-underline'>Sign up </span></text>
      </div>
    </div>
  </div>
  )
}

export default ForgetPassword
