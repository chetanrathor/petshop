import React from 'react'
import './FeatureProductItem.css'
import StarRatings from 'react-star-ratings';
const FeatureProductItem = () => {
  return (
    <div>
      <div className="d-flex flex-column feature_product_item_container">
        <div className="p-3 image_container">
          <div className="discount_tag d-flex justify-content-center align-items-center"><span className='discount'>20%</span></div>
          <div className="px-5 image__container">
            <img src={process.env.PUBLIC_URL + "/royalcanin.png"} height='227px' width='167px' alt="" />
          </div>
        </div>
        <div className="px-4 mt-3 price_container">
          <span className=' product_name'>
            Pink Spiked Collar
          </span>
          <StarRatings starHoverColor='#FFDA47'
         changeRating={(rating)=>{console.log(rating)}}
          rating={2} 
          starRatedColor="#FFDA47"
          numberOfStars={3}

          name='rating'
          ></StarRatings>

          <div className='mt-3 product_price'>
          $7.23
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureProductItem
