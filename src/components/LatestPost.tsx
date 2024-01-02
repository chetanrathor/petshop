import React from 'react'
interface Properties {
  title: string,
  date: string,

}

const LatestPost = ({date,title }: Properties) => {
  return (
    <div>
      <div className=" pt-4 latest_post_container">
        <div className="d-flex flex-row">
          <div className="col-3">
            <img src={process.env.PUBLIC_URL + "/post1.png"} height='80px' width='80px' alt="" />
          </div>
          <div className="col-9">
            <h5 className='post_heading'>{title}</h5>
            <img src={process.env.PUBLIC_URL + "/calender.png"} height='16px' width='16px' alt="" />
            <span className='ms-3 date_post'>{date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestPost
