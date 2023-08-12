import { useDispatch } from 'react-redux'
import { Form } from 'react-router-dom'
import { setChild, setShow } from '../../../State/ModalSlice'
import { MODAL_TYPES } from '../../../constant/modal-types'
import { getKey } from '../../../utils'
const ForgetPassword = () => {

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

  ]
  const dispatch = useDispatch()

  const handelSigninClick = () => {
    dispatch(setShow(true))
    dispatch(setChild(MODAL_TYPES.SIGNUP))
  }

  return (
    <div className=''>
      <div className="wrapper  p-4">
        <h3 className='   heading_signup '> Forget password</h3>
        <p>Type your email address and we’ll send a reset link <br />
          right away.
        </p>
        <Form>
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

          <button type="submit" className="btn btn-primary background-primary border-0 p-3 mt-2 w-100 btn-text"  > <span className='signup-btn-text'>Submit</span> </button>
        </Form>

        <div className='terms_and_condition_para mt-5'>
          <text>Don’t have an account? <span className='color-primary text-decoration-underline' onClick={() => { handelSigninClick() }} >Sign up </span></text>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword
