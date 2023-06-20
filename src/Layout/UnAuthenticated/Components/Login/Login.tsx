import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import './Login.css'
import { inputElements } from '.'
import { SignupUserType } from '../../../../constant/signup-types'
import { useDispatch, useSelector } from 'react-redux'
import { setChild, setShow } from '../../../../State/ModalSlice'
import { MODAL_TYPES } from '../../../../constant/modal-types'
import { loginAction } from '../../../../State/AuthSlice'
import { RootState, store } from '../../../../Store/Store'
import Loader from '../../../../Shared/Components/Loader/Loader'
import { Button } from 'react-bootstrap'
import ButtonComponent from '../../../../Shared/Components/ButtonComponent/ButtonComponent'
import { setProgressBarVisiblity } from '../../../../State/ProgressBarSlice'
import { setCanActivateLoader, setShouldButtonDisable } from '../../../../State/ButtonSlice'
const Login = () => {
  const {canActivateLoader,shouldButtonDisable} = useSelector((state:RootState)=>state.buttonReducer)

  const dispatch = useDispatch()
  const [signupAs, setSignup] = useState(SignupUserType.User)
  const getActiveUserImage = (user: SignupUserType) => {
    if (signupAs === user) {
      return process.env.PUBLIC_URL + 'Activated_user.png'
    }
    return process.env.PUBLIC_URL + 'InActivated_user.png'
  }
  const changeActiveUserSignupType = (user: SignupUserType) => {
    setSignup(user)
  }

  const handelComponentChange = (child: MODAL_TYPES) => {
    dispatch(setShow(true))
    dispatch(setChild(child))
  }

  const handelClickSubmit = () => {
    // dispatch(setProgressBarVisiblity({ shouldProgressBarVisible: true }))
    // store.dispatch(loginAction({
    //   fullName: "jane smith",
    //   email: "janesmith123@mail.com",
    //   password: "dsgfhw234cd@$#$",
    //   role: "User"
    // }))
    // dispatch(setProgressBarVisiblity({ shouldProgressBarVisible: false }))

    dispatch(setCanActivateLoader({setCanActivateLoader:!canActivateLoader}))
    dispatch(setShouldButtonDisable({setShouldButtonDisable:!shouldButtonDisable}))

  }

  return (
    <div className=''>
      <div className="wrapper  p-4">
        {/* <div className=" d-flex flex-row justify-content-end close_container">
          <img src={process.env.PUBLIC_URL + "/cross.png"} height='20px' width='20px' alt="" />
        </div> */}
        <h3 className=' mb-5  heading_signup '> Sign in</h3>
        <Form onSubmit={(e) => { e.preventDefault(); handelClickSubmit() }}>
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
              <span className='w-100'>Remember me <span className=' float-end  ' onClick={() => { handelComponentChange(MODAL_TYPES.FORGET_PASSWORD) }}>Forgot password &nbsp;</span></span>
            </div>
          </div>
          {/* <button type="submit" className="btn btn-primary background-primary border-0 p-3 mt-2 w-100 btn-text button-submit"  > <Loader></Loader>  <span className='signup-btn-text'>Sign in</span> </button> */}
          <ButtonComponent canActivateLoader={canActivateLoader} shouldDisabel={shouldButtonDisable} bgColor='background-primary' content='Sign in' extraClass='w-100 py-2 mt-2' isSubmitButton={true} ></ButtonComponent>
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
            <span className='select_user_button'>Signin as vet</span>
          </div>
        </div>
        <div className='terms_and_condition_para mt-5'>
          <text>Don’t have an account? <span className='color-primary text-decoration-underline' onClick={() => { handelComponentChange(MODAL_TYPES.SIGNUP) }} >Sign up </span></text>
        </div>
      </div>
    </div>
  )
}
export default Login
