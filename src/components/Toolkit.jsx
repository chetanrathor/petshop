import React from 'react'
import { socialIcons, contactItems } from './Toolkit'
import { Link } from 'react-router-dom'
const Toolkit = () => {

   const socialIcons = [
    {
      name: 'facebook',
      width: '13px',
      height: '15px',
      imageSource: '/facebook.png',

    },
    {
      name: 'instagram',
      width: '15px',
      height: '15px',
      imageSource: '/instagram.png',

    },
    {
      name: 'twitter',
      width: '15px',
      height: '16px',
      imageSource: '/twitter.png',

    },
    {
      name: 'linkedin',
      width: '15px',
      height: '12px',
      imageSource: '/linkedin.png',

    }
  ]

  const contactItems = [
    {
      name: 'phone',
      icon: '/phone.png',
      height: '15px',
      width: '15px',
      text: '0000 - 123456789',
      link: `tel://0000 - 123456789`
    },
    {
      name: 'email',
      icon: '/mail.png',
      height: '14px',
      width: '15px',
      text: 'info@example.com',
      link: 'mailto://info@example.com'
    }
  ]
  return (
    <div>
      <div className="toolkit_container">
        <div className="d-flex flex-row justify-content-center align-items-center m-auto toolit_wrapper p-3 p-md-0">
          <div className="d-none  d-md-flex flex-row align-items-center justify-content-between social_container">
            {
              socialIcons.map((item) => {
                return (
                  <img src={process.env.PUBLIC_URL + item.imageSource} height={item.height} width={item.width} alt={item.name} ></img>
                )
              })
            }
          </div>
          <div className="d-flex flex-row flex-grow-1 justify-content-between justify-content-md-end align-items-center contact_container">
            <div className="d-flex flex-row align-items-center w-100 justify-content-between justify-content-md-end contact_wrapper">
              {
                contactItems.map((item) => {
                  return (
                    <div>
                      <img className='m-0 ms-md-5 me-1' src={process.env.PUBLIC_URL + item.icon} height={item.height} width={item.width} alt={item.name}>
                      </img>
                      <Link to={item.link}><span className='contact_text'>{item.text}</span></Link>
                    </div>

                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toolkit
