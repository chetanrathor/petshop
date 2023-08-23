import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetModalState, setChild, setShow } from '../../../State/ModalSlice'
import { MODAL_TYPES } from '../../../constant/modal-types'
import { SignupUserType } from '../../../constant/signup-types'
import { getKey } from '../../../utils'
import { setUser, signupUser } from '../stores/AuthSlice'
import { AnyAction } from '@reduxjs/toolkit'
import { post } from '../../../service/api.service'
import axios from 'axios'
import { SignUpType } from '../../../constant/signup-type'
import { RoleType } from '../../../constant/role-type'
import { ToastContainer, toast } from 'react-toastify'
import { RootState, store } from '../../../stores/Store'
import { Form, Formik } from 'formik'
import FormInput from '../../../components/Input/FormInput'
import * as Yup from 'yup'
const Signup = () => {
  const rooState = useSelector((state: RootState) => state)
  const notify = () => toast('hello', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  })

  const inputElements = [
    {
      name: 'fullname',
      type: 'text',
      className: 'form-control p-2-5',
      placeholder: '',
      id: 'fullname',
      label: 'Full Name',
      labelClass: 'form-label label_style'
    },
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
  const dispatch = useDispatch<typeof store.dispatch>()

  const [signupAs, setSignup] = useState(RoleType.USER)

  const handelSigninClick = () => {

    dispatch(setShow(true))
    dispatch(setChild(MODAL_TYPES.LOGIN))
  }

  const [userData, setUserData] = useState({
    email: 'chetan4@tempmail.com',
    fullName: 'chetan',
    password: '12345678',
    role: RoleType.USER,
    signUpType: SignUpType.EMAIL,
  })
  const getActiveUserImage = (user: RoleType) => {
    if (signupAs === user) {
      return 'Activated_user.png'
    }
    return 'InActivated_user.png'
  }


  const changeActiveUserSignupType = (user: RoleType) => {
    setSignup(user)
  }


  const handelFormSubmit = async () => {

    const res = await dispatch(signupUser(userData) as any)
    console.log('res', res.meta.requestStatus)
    if (res.meta.requestStatus === 'fulfilled') {
      dispatch(setShow(true))
      dispatch(setChild(MODAL_TYPES.OTP_VERIFICATION))
    }
    // const result = await post('auth/signup/send-otp', userData)

    // dispatch(signupUser(s))
  }
  const [email, setEmail] = useState('')
  useEffect(() => { console.log('email', email) }, [email])
  return (
    <div className=''>
      <div className="wrapper  p-4">

        {/* <div className=" d-flex flex-row justify-content-end close_container">
        <img src={process.env.PUBLIC_URL + "cross.png"}  height='20px' width='20px' alt="" />
      </div> */}
        <h3 className=' mb-5  heading_signup '>Sign up</h3>
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            password: ''
          }}
          onSubmit={async (values, { }) => {
            console.log('values', values)
            const result = await dispatch(signupUser({ ...values, role: signupAs, signUpType: SignUpType.EMAIL }))
            if (result.meta.requestStatus === 'fulfilled') {
              dispatch(setChild(MODAL_TYPES.OTP_VERIFICATION))
              dispatch(setUser({
                email: values.email,
                id: '',
                fullName: ''

              }))
            }
            if (result.meta.requestStatus === 'rejected') {
              dispatch(resetModalState())
              window.alert(result.payload.message)
            }
          }}
          validationSchema={
            Yup.object({
              fullName: Yup.string().required().min(3),
              email: Yup.string().email().required(),
              password: Yup.string().required().min(6)
            })

          }
        >
          <Form >
            <FormInput id='fullName' className='form-control p-2-5' label="Full Name" name="fullName"
              type="text"
            ></FormInput>
            <FormInput id='email' className='form-control p-2-5' label="Email" name="email"
              type="email"
            ></FormInput>
            <FormInput id='password' className='form-control p-2-5' label="password" name="password"
              type="password"
            ></FormInput>
            <div className="d-flex flex-row">
              <input type="checkbox" className='form-check-input mt-0 checkbox_height_width' />
              <div className='ms-4 terms_and_condition_para '>
                <text>I agree to accept <span className='color-primary text-decoration-underline'>Terms of Service &nbsp;</span>and  &nbsp;&nbsp;</text>
                <text className='color-primary text-decoration-underline'> Privacy Policy</text>
              </div>
            </div>
            <button type="submit" className="btn btn-primary background-primary border-0 p-3 mt-2 w-100 btn-text"  > <span className='signup-btn-text'>Sign up</span> </button>
          </Form>
        </Formik>
        <div className="d-flex flex-row  mt-5 mx-4 ">
          <div className="col-5" onClick={(e) => { e.preventDefault(); changeActiveUserSignupType(RoleType.USER) }}>
            <img src={getActiveUserImage(RoleType.USER)} height='12.53px' width='12.53px' alt="" />
            <span className='select_user_button'>Signup as user</span>
          </div>
          <div className="col-2">
            <img src={process.env.PUBLIC_URL + "/Line.png"} className='partition_line' height='1px' width='32px' alt="" />
          </div>
          <div className="col-5   ">
            <img src={getActiveUserImage(RoleType.VET)} height='12.53px' width='12.53px' alt="" />
            <span onClick={(e) => { e.preventDefault(); changeActiveUserSignupType(RoleType.VET) }} className='select_user_button'>Signup as vet</span>
          </div>
        </div>
        <div className='terms_and_condition_para mt-5'>
          <text>Already have an account? <span className='color-primary text-decoration-underline' onClick={() => { handelSigninClick() }}>Sign in </span></text>
        </div>
      </div>

    </div>
  )
}

export default Signup



