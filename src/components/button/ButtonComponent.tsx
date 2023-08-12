import { ReactChild } from 'react'
import { Button } from 'react-bootstrap'
type ButtonBackgroundColor = "primary" | "secondary" | "warning"
interface ButtonComponentProps {
  handelClick?: () => void,
  isSubmitButton: boolean,
  backgroundColor: ButtonBackgroundColor,
  children: ReactChild,
  className?: string,
  disabled: boolean,
  

}



const ButtonComponent = (properties: ButtonComponentProps) => {
  const { disabled, backgroundColor, children, className, isSubmitButton, handelClick } = properties


  const getButtonType = () => {
    if (isSubmitButton) {
      return 'submit'
    }
    return 'button'
  }

  const getBackgroundColor = (backgroundColor: ButtonBackgroundColor | undefined) => {
    switch (backgroundColor) {
      case 'primary':
        return 'background-primary'
      case 'secondary':
        return 'background-secondary'
      case 'warning':
        return 'background-warning'

      default:
        return 'background-secondary'
    }
  }

  return (
    <>
      <Button variant='primary' disabled={disabled} type={getButtonType()} onClick={handelClick} className={` hover border-0  ${getBackgroundColor(backgroundColor)} ${className}`} >
        {children}
      </Button>
    </>
  )
}

export default ButtonComponent
