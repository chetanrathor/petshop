import React from 'react'
import BlogItem from '../../../../Shared/Components/BlogItem/BlogItem'
import './LatestNews.css'
import MediumHeading from '../../../../Shared/Components/MediumHeading/MediumHeading'
import { petGuids } from '.'
import { useNavigate } from 'react-router-dom'

const LatestNews = () => {

  const navigate = useNavigate()
  return (
    <div>
      <div className="p-3 mt-5 mb-5 latest_news_container">
        <div className="lates_news_wrapper">
          <MediumHeading heading='Our Pet Guide'></MediumHeading>
          <div className="d-flex flex-row justify-content-between flex-wrap">

            {
              petGuids.map((item) => {
                return (<>
                  <BlogItem handelClick={()=>{
                     navigate('/petguide/:id')
                  }} date={item.date} heading={item.heading} subHeading={item.subHeading} id={item.id}></BlogItem>

                </>)
              })
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestNews
