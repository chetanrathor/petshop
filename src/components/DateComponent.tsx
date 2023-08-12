import React from 'react'

interface PropType  {
date:string
}

const DateComponent = ({date}:PropType) => {
  return (
    <div>
       <img src={process.env.PUBLIC_URL + "/calender.png"} height='16px' width='16px' alt="" />
        <span className='ms-3 date_post'>{date}</span>
    </div>
  )
}

export default DateComponent
