import React from 'react'
import { Link } from 'react-router-dom'
import Image from './Image'

interface PropType {

  id: string
  date: string
  heading: string
  subHeading: string,
  handelClick: (id: string) => void

}
const BlogItem = ({ date, heading, id, subHeading, handelClick }: PropType) => {
  return (
    <div>
      <div className="mt-5 blog_item_container">
        <div className="blog_item_container">
          <Image isPublicImage height='300px' width='100%' path="blog1.png" alt=""></Image>
        </div>
        <div className="p-3 mini_detail_container">
          <div className="d-flex flex-row align-items-center">
            <Image isPublicImage path="calender.png" height='16px' width='16px   ' alt=""></Image>

            <span className="ms-2 date">{date}</span>
          </div>
          <h3 className='mt-2 blog_heading'>{heading}</h3>
          <p className="mt-2 blog_short_description">
            {subHeading}
          </p>
          <img src="horizontalLine.png" className='m-auto' width='352px' alt="" />
        </div>
        <div className="p-3 read_post_navigation">

          <Link to={`/petguide/${id}`} className='read_post'>Read Post</Link>
          <Image isPublicImage className='ms-2' path="arrow-right.png" height='14px' width='13px' alt=""></Image>
          <img  />
        </div>
      </div>
    </div>
  )
}

export default BlogItem
