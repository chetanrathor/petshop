import { Form } from 'react-router-dom'
import { getKey } from '../../../utils'
const Otp = () => {
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
  return (
    <div className=''>
      <div className="wrapper  p-4">
        <div className=" d-flex flex-row justify-content-end close_container">
          <img src={process.env.PUBLIC_URL + "/cross.png"} height='20px' width='20px' alt="" />
          {/* <span className='text-end'>close</span> */}
        </div>
        <h3 className=' mb-5  heading_signup '> OTP verification</h3>
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
          <text>Want to go back? <span className='color-primary text-decoration-underline'>Forget password </span></text>
        </div>
      </div>
    </div>
  )
}

export default Otp