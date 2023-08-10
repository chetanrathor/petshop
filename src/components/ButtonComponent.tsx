import React from 'react'
import { Button } from 'react-bootstrap'
import Loader from './Loader'
import { ButtonComponentProps } from '../Types/ButtonComponent.types'



const ButtonComponent = ({ bgColor, content, isSubmitButton, handelClick, extraClass, shouldDisabel, canActivateLoader }: ButtonComponentProps) => {
  return (
    <>
      <Button variant='primary' disabled={shouldDisabel} type={(isSubmitButton ? 'submit' : 'button')} onClick={handelClick} className={` hover  ${bgColor} ${extraClass}`} >
        <div className='d-flex justify-content-center button_text'>{(canActivateLoader ? <Loader></Loader> : content)}</div></Button>
    </>
  )
}

export default ButtonComponent
