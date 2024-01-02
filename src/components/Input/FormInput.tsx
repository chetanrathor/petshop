import { useField } from 'formik';
import React, { ChangeEvent, ReactNode } from 'react'
interface Label {
  className?: string,
  child: ReactNode
}
interface Input {
  name: string,
  type: string,
  className?: string,
  placeHolder?: string,
  value?: string

}

interface Properties {


  // onInputChange: (event: ChangeEvent<HTMLInputElement>) => void

  label: string,
  name: string,
  id?: string,
  type: string,
  labelClass?: string
  className?: string,
  maxlength?:string


}

const FormInput = ({ label, labelClass, className, ...props }: Properties) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="form-group">
        <label htmlFor={props.id || props.name} className={labelClass} ><span style={{ color: 'red' }}>*</span> {label}</label>
        <input {...field}  {...props} className={`${className} ${meta.touched && meta.error ? 'is-invalid' : ''}`} />
        {/* {meta.touched && meta.error ? (
          <div className="error " style={{ color: 'red' }}>{meta.error}</div>
        ) : null} */}
      </div>
    </>
  )
}

export default FormInput