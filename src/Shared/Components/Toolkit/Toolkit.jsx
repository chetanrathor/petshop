import React from 'react'
import './Toolkit.css'
import { socialIcons,contactItems } from '.'
import { Link } from 'react-router-dom'
const Toolkit = () => {
  return (
    <div>
    <div className="toolkit_container">
     <div className="d-flex flex-row justify-content-center align-items-center m-auto toolit_wrapper">
      <div className="d-flex flex-row align-items-center justify-content-between social_container">
        {
          socialIcons.map((item)=>{
            return(
              <img src={process.env.PUBLIC_URL + item.imageSource} height={item.height} width={item.width} alt={item.name} ></img>
            )
          })
        }
      </div>
      <div className="d-flex flex-row flex-grow-1 justify-content-end align-items-center contact_container">
        <div className="d-flex flex-row align-items-center contact_wrapper">
          {
            contactItems.map((item)=>{
              return(
                <>
                <img className='ms-5 me-2' src={process.env.PUBLIC_URL + item.icon} height={item.height} width={item.width} alt={item.name}>
                </img>
              <Link to={item.link}><span className='contact_text'>{item.text}</span></Link> 
                </>

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
