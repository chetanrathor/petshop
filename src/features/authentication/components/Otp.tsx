import { getKey } from '../../../utils'
import { useDispatch, useSelector } from 'react-redux'
import { verifyOtp } from '../stores/AuthSlice'
import { RootState, store } from '../../../stores/Store'
import { resetModalState, setChild } from '../../../State/ModalSlice'
import { Form, Formik } from 'formik'
import FormInput from '../../../components/Input/FormInput'
import * as Yup from "yup";
const Otp = () => {
  const dispatch = useDispatch<typeof store.dispatch>()
  const user = useSelector((state: RootState) => state.authReducer.user)
  const inputElements = [

    {
      name: 'otp',
      type: 'password',
      className: 'form-control p-2-5',
      placeholder: 'Enter OTP',
      id: 'otp',
      label: 'Enter OTP',
      labelClass: 'form-label label_style'
    },

  ]

  const handelFormSubmitClick = async () => {
    const result = await dispatch(verifyOtp({ email: 'chetan4@tempmail.com', otp: 313006 }))
    if (result.meta.requestStatus === 'fulfilled') {
      dispatch(resetModalState())
    }
  }
  return (
    <div className=''>
      <div className="wrapper  p-4">
        {/* <div className=" d-flex flex-row justify-content-end close_container">
          <img src={process.env.PUBLIC_URL + "/cross.png"} height='20px' width='20px' alt="" />
          {/* <span className='text-end'>close</span> */}
        {/* </div>  */}

        <h3 className=' mb-5  heading_signup '> OTP verification</h3>
        <Formik initialValues={{
          otp: '',

        }}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            // console.log('values', values)
            const result = await dispatch(verifyOtp({ otp: Number(values.otp), email: user.email }))
            resetForm()
            if (result.meta.requestStatus === 'fulfilled') {
              // localStorage.setItem('user')
              dispatch(resetModalState())
            }
            else {
              window.alert(result.payload.message)
              // dispatch(resetModalState())
            }
          }}

          validationSchema={Yup.object({
            otp: Yup.string().min(6).max(6).required()
          })}
        >
          <Form >
            {
              inputElements.map((item) => {
                return (
                  <div className="mb-3">
                    <FormInput maxlength='6' id='otp' className='form-control p-2-5' label="OTP" name="otp"
                      type="password"
                    ></FormInput>
                  </div>
                )
              })
            }

            <button type="submit" className="btn btn-primary background-primary border-0 p-3 mt-2 w-100 btn-text"  > <span className='signup-btn-text'>Submit</span> </button>
          </Form>
        </Formik>

        <div className='terms_and_condition_para mt-5'>
          <text>Want to go back? <span className='color-primary text-decoration-underline'>Forget password </span></text>
        </div>
      </div>
    </div>
  )
}

export default Otp
