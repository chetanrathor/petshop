import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetModalState, setChild, setShow } from '../../../State/ModalSlice'
import ButtonComponent from '../../../components/button/ButtonComponent'
import ButtonText from '../../../components/button/ButtonText'
import { MODAL_TYPES } from '../../../constant/modal-types'
import { SignupUserType } from '../../../constant/signup-types'
import { RootState, store } from '../../../stores/Store'
import { getKey } from '../../../utils'
import { signInUser } from '../stores/AuthSlice'
import GoogleLoginButton from './GoogleLogin'
import FormInput from '../../../components/Input/FormInput'
import { ErrorMessage, Form, Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import { signIn } from '../api/auth'
const Login = () => {

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const dispatch = useDispatch<typeof store.dispatch>()

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

  const handelClickSubmit = async () => {

    const result = await dispatch(signInUser({
      email: 'chetan1@tempmail.com',
      password: '12345678'
    }))

    if (result.meta.requestStatus == 'fulfilled') {
      dispatch(resetModalState())
    }
    // dispatch(setCanActivateLoader({ setCanActivateLoader: !canActivateLoader }))
    // dispatch(setShouldButtonDisable({ setShouldButtonDisable: !shouldButtonDisable }))



  }

  // const handelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log('e', e.target.value)
  //   const key = e.target.name
  //   const value = e.target.value
  //   // setLoginDataState({ ...loginDataState, [key]: value })
  //   // console.log('loginDataSatate', loginDataState)
  // }

  // const handel



  return (
    <div className=''>
      <div className="wrapper  p-4">

        <h3 className=' mb-5  heading_signup '> Sign in</h3>
        <Formik
          initialValues={{ email: '', password: '', }}
          validationSchema={Yup.object({
            password: Yup.string()
              .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            const result = await dispatch(signInUser(values))
            if (result.meta.requestStatus === 'fulfilled') {
              dispatch(setShow(false))
              dispatch(resetModalState)
            }

            if (result.meta.requestStatus === 'rejected') {
              console.log('first', result.meta.requestStatus)
              window.alert(result.payload.message)
            }


          }}
        >
          <Form >

            <div className="mb-3" >

              <FormInput id='email' className='form-control p-2-5' label="Email" name="email"
                type="email"
              ></FormInput>
              <FormInput id='password' className='form-control p-2-5' label="Password" name="password"
                type="password"
              ></FormInput>

            </div>


            <div className="d-flex flex-row">
              <input type="checkbox" className='form-check-input mt-0 checkbox_height_width' />
              <div className='ms-4 d-flex flex-grow-1 justify-content-between terms_and_condition_para '>
                <span className='w-100'>Remember me <span className=' float-end  ' onClick={() => { handelComponentChange(MODAL_TYPES.FORGET_PASSWORD) }}>Forgot password &nbsp;</span></span>
              </div>
            </div>
            <ButtonComponent backgroundColor='primary' disabled={false} className='w-100 py-2 mt-2' isSubmitButton={true} >
              <ButtonText fontSize='medium'> Sign In</ButtonText>
            </ButtonComponent>
          </Form  >
        </Formik>
        <div className="d-flex flex-row  mt-5 mx-4 ">
          <div className="col-5" onClick={(e) => { e.preventDefault(); changeActiveUserSignupType(SignupUserType.User) }}>
            <img src={getActiveUserImage(SignupUserType.User)} height='12.53px' width='12.53px' alt="" />
            <span className='select_user_button cursor-pointer'>Signin as user</span>
          </div>
          <div className="col-2">
            <img src="Line.png" className='partition_line' height='1px' width='32px' alt="" />
          </div>
          <div className="col-5" onClick={(e) => { e.preventDefault(); changeActiveUserSignupType(SignupUserType.Vet) }}>
            <img src={getActiveUserImage(SignupUserType.Vet)} height='12.53px' width='12.53px' alt="" />
            <span className='select_user_button cursor-pointer'>Signin as vet</span>
          </div>
        </div>
        <div className='terms_and_condition_para mt-5'>
          <text>Don’t have an account? <span className='color-primary text-decoration-underline cursor-pointer_2' onClick={() => { handelComponentChange(MODAL_TYPES.SIGNUP) }} >Sign up </span></text>
        </div>
        <GoogleLoginButton></GoogleLoginButton>
      </div >
    </div >
  )
}
export default Login
