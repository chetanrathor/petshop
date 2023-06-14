import React from 'react'
import { Button } from 'react-bootstrap'
import './ButtonComponent.css'
import Loader from '../Loader/Loader'


interface PropType {
  bgColor: string,
  content: string,
  handelClick?: () => void,
  isSubmitButton: boolean,
  extraClass?: string,
  shouldDisabel:boolean,
  canActivateLoader:boolean

}

const ButtonComponent = ({ bgColor, content, isSubmitButton, handelClick, extraClass,shouldDisabel,canActivateLoader }: PropType) => {
  return (
    <>
      <Button variant='primary' disabled={shouldDisabel} type={(isSubmitButton ? 'submit' : 'button')} onClick={handelClick} className={`border-0 hover  ${bgColor} ${extraClass}`} >
        <span className='button_text'>{ (canActivateLoader?<Loader ></Loader>:null)} {(shouldDisabel ? null : content)}</span></Button>
    </>
  )
}

export default ButtonComponent
