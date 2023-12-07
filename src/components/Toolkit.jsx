import { Link } from 'react-router-dom'
import { getKey } from '../utils'
import Image from './Image'
import { getStaticImages } from '../assets/Images'

const Toolkit = () => {
  function createSocialIcon(id, imageSource, to) {
    return {
      id,
      imageSource,
      to
    };
  }
  function createContactInfo(id, icon, alt, link, text) {
    return {
      id: id,
      icon: icon,
      alt: alt,
      link: link,
      text: text
    };
  }

  const { icon_email, icon_fb, icon_insta, icon_linkedin, icon_phone, icon_twitter } = getStaticImages()
  const socialIcons = [
    createSocialIcon(1, icon_fb, 'https://www.facebook.com'),
    createSocialIcon(2, icon_insta, 'https://www.instagram.com'),
    createSocialIcon(3, icon_twitter, 'https://www.twitter.com'),
    createSocialIcon(4, icon_linkedin, 'https://www.linkedin.com')
  ];
  const contactInfo = [
    createContactInfo(1, icon_phone, 'Phone Icon', 'tel:0000-123456789', '0000 - 123456789'),
    createContactInfo(2, icon_email, 'Email Icon', 'mailto:info@example.com', 'info@example.com')
  ];
  return (
    <div>
      <div className="toolkit_container">
        <div className="d-flex flex-row justify-content-center align-items-center m-auto toolit_wrapper p-3 p-md-0">
          <div className="d-none  d-md-flex flex-row align-items-center justify-content-between social_container">
            {
              socialIcons.map((item) => {
                return (
                  <Link to={item.to} key={item.id} target='_blank'>
                    <img src={item.imageSource} alt="" />
                  </Link>

                )
              })
            }
          </div>
          <div className="d-flex flex-row flex-grow-1 justify-content-between justify-content-md-end align-items-center contact_container">
            <div className="d-flex flex-row align-items-center w-100 justify-content-between justify-content-md-end contact_wrapper">

              {/* <div>
                <img className='m-0 ms-md-5 me-1' src={icon_phone} alt={'item.name'}>
                </img>
                <Link to={'item.link'}><span className='contact_text'>{'0000 - 123456789'}</span></Link>
              </div>

              <div >
                <img className='m-0 ms-md-5 me-1' src={icon_email} alt={'info@example.com'}>
                </img>
                <Link to={''}><span className='contact_text'>{'info@example.com'}</span></Link>
              </div> */}

              
                {contactInfo.map(item => (
                  <div key={item.id}>
                    <img className='m-0 ms-md-5 me-1' src={item.icon} alt={item.alt} />
                    <Link to={item.link}><span className='contact_text'>{item.text}</span></Link>
                  </div>
                ))}
              

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toolkit
