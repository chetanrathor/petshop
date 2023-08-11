import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'react-router-dom'
import { setCanActivateLoader, setShouldButtonDisable } from '../../../State/ButtonSlice'
import { setChild, setShow } from '../../../State/ModalSlice'
import { RootState } from '../../../stores/Store'
import { MODAL_TYPES } from '../../../constant/modal-types'
import { SignupUserType } from '../../../constant/signup-types'
import { getKey } from '../../../utils'
import ButtonComponent from '../../../components/button/ButtonComponent'

const Login = () => {
  const inputElements = [

    {
      name: 'email',
      type: 'email',
      className: 'form-control p-2-5',
      placeholder: '',
      id: 'email',
      label: 'Email',
      labelClass: 'form-label label_style'
    },
    {
      name: 'password',
      type: 'password',
      className: 'form-control p-2-5',
      placeholder: '',
      id: 'password',
      label: 'Password',
      labelClass: 'form-label label_style'
    }
  ]
  const { canActivateLoader, shouldButtonDisable } = useSelector((state: RootState) => state.buttonReducer)

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


    dispatch(setCanActivateLoader({ setCanActivateLoader: !canActivateLoader }))
    dispatch(setShouldButtonDisable({ setShouldButtonDisable: !shouldButtonDisable }))

  }

  return (
    <div className=''>
      <div className="wrapper  p-4">

        <h3 className=' mb-5  heading_signup '> Sign in</h3>
        <Form onSubmit={(e) => { e.preventDefault(); handelClickSubmit() }}>
          {
            inputElements.map((item) => {
              return (
                <div className="mb-3" key={getKey()}>
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
          {/* <ButtonComponent canActivateLoader={canActivateLoader} shouldDisabel={shouldButtonDisable} bgColor='background-primary' content='Sign in' extraClass='w-100 py-2 mt-2' isSubmitButton={true} ></ButtonComponent> */}
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
