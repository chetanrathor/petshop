import React from 'react'
import './BlogItem.css'
import { Link } from 'react-router-dom'

interface PropType {

  id: string
  date: string
  heading: string
  subHeading: string,
  handelClick:(id:string)=>void

}
const   BlogItem = ({ date, heading, id, subHeading,handelClick }: PropType) => {
  return (
    <div>
      <div className="mt-5 blog_item_container">
        <div className="blog_image_container">
          <img height='300px' width='388px' src="blog1.png" alt="" />
        </div>
        <div className="p-3 mini_detail_container">
          <div className="d-flex flex-row align-items-center">

            <img src="calender.png" height='16px' width='16px   ' alt="" />
            <span className="ms-2 date">{date}</span>
          </div>
          <h3 className='mt-2 blog_heading'>{heading}</h3>
          <p className="mt-2 blog_short_description">
            {subHeading}
          </p>
          <img src="horizontalLine.png" className='m-auto' width='352px' alt="" />
        </div>
        <div  className="p-3 read_post_navigation">

          <Link to={`/petguide/${id}`}  className='read_post'>Read Post</Link>
          <img className='ms-2' src="arrow-right.png" height='14px' width='13px' alt="" />
        </div>
      </div>
    </div>
  )
}

export default BlogItem