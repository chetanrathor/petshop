import React from 'react'
import DateComponent from '../../../../Shared/Components/DateComponent/DateComponent'
import './BlogImage.css'
const BlogImage = () => {
    return (
        <div>
            <div className="blog_detail_image_container">
                <div className="blog_detail_image_wrapper">
                    <img src={process.env.PUBLIC_URL + "/blogImage.png"} height='436px' width='796px' alt="" />
                </div>
                <div className="mt-5 date_heading_container">
                    <DateComponent
                     date='May 29, 2022'></DateComponent>
                  <div className="pe-4 mt-4 col-9">
                  <h1 className='blog_detail_image_heading'>
                        Your Dog Desperately Needs
                        From You
                    </h1>
                  </div>
                   
                </div>
            </div>
        </div>
    )
}

export default BlogImage
