import { Link } from 'react-router-dom'
import { getKey } from '../utils'
import Image from './Image'
import { getStaticImages } from '../assets/Images'

const Toolkit = () => {

  const socialIcons = [
    {
      id: 1,
      name: 'facebook',
      width: '13px',
      height: '15px',
      imageSource: 'facebook.png',
      to: 'https://www.facebook.com'

    },
    {
      id: 2,
      name: 'instagram',
      width: '15px',
      height: '15px',
      imageSource: 'instagram.png',
      to: 'https://www.instagram.com'


    },
    {
      id: 3,
      name: 'twitter',
      width: '15px',
      height: '16px',
      imageSource: 'twitter.png',
      to: 'https://www.twitter.com'


    },
    {
      id: 4,
      name: 'linkedin',
      width: '15px',
      height: '12px',
      imageSource: 'linkedin.png',
      to: 'https://www.linkedin.com'


    }
  ]

  const contactItems = [
    {
      id: 1,
      name: 'phone',
      icon: '/phone.png',
      height: '15px',
      width: '15px',
      text: '0000 - 123456789',
      link: `tel://0000 - 123456789`
    },
    {
      id: 2,
      name: 'email',
      icon: '/mail.png',
      height: '14px',
      width: '15px',
      text: 'info@example.com',
      link: 'mailto://info@example.com'
    }
  ]
  const { icon_email, icon_fb, icon_insta, icon_linkedin, icon_phone, icon_twitter } = getStaticImages()
  return (
    <div>
      <div className="toolkit_container">
        <div className="d-flex flex-row justify-content-center align-items-center m-auto toolit_wrapper p-3 p-md-0">
          <div className="d-none  d-md-flex flex-row align-items-center justify-content-between social_container">
            {/* {
              socialIcons.map((item) => {
                return (
                  // <img  ></img>
                  <Link to={item.to} target='_blank'>
                    <Image key={item.id} path={item.imageSource} height={item.height} width={item.width} alt={item.name}></Image>
                  </Link>
                )
              })
            } */}

            <img src={icon_fb} alt="" />
            <img src={icon_insta} alt="" />
            <img src={icon_twitter} alt="" />
            <img src={icon_linkedin} alt="" />
          </div>
          <div className="d-flex flex-row flex-grow-1 justify-content-between justify-content-md-end align-items-center contact_container">
            <div className="d-flex flex-row align-items-center w-100 justify-content-between justify-content-md-end contact_wrapper">

              <div>
                <img className='m-0 ms-md-5 me-1' src={icon_phone} alt={'item.name'}>
                </img>
                <Link to={'item.link'}><span className='contact_text'>{'0000 - 123456789'}</span></Link>
              </div>

              <div >
                <img className='m-0 ms-md-5 me-1' src={icon_email} alt={'info@example.com'}>
                </img>
                <Link to={''}><span className='contact_text'>{'info@example.com'}</span></Link>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toolkit
