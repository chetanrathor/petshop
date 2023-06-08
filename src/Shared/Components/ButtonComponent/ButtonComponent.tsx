import React from 'react'
import { Button } from 'react-bootstrap'
import './ButtonComponent.css'
const ButtonComponent = ({ isPrimary, text,handelClick }: any) => {
  return (
    <>
      <Button variant='primary'  onClick={()=>{handelClick()}} className={`border-0 button_padding ${isPrimary ? 'button_primary_bg' : 'button_secondary_bg'}`} >
        <span className='button_text'>{text}</span></Button>
    </>
  )
}

export default ButtonComponent
