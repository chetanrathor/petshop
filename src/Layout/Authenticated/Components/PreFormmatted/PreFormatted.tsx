import React from 'react'
import './PreFormatted.css'
interface propType{
    data:string
}

const PreFormatted = ({data}:propType) => {
  return (
    <div>
      <p className='rich_text_detail'>{data}</p>
    </div>
  )
}

export default PreFormatted
