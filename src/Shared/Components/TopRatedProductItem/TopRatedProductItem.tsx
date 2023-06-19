import React from 'react'
import './TopRatedProductItem.css'
import StarRatings from 'react-star-ratings'
interface PropType {
  name: string,
  rating: number,
  price: string,
  imgSource:string
}
const TopRatedProductItem = ({imgSource,name,price,rating}:PropType) => {
  return (
    <div>
      <div className="TopRatedProductItem_container">
        <div className="d-flex flex-row justify-content-between py-1">
          <div className="col-4">
            <div className="top_rated_product_image_container">
              <img src={imgSource} height='90%' width='100%' alt="" />
            </div>
          </div>
          <div className="col-6 ">
            <h5 className='product_heading'>{name} </h5>
            <StarRatings starHoverColor='#FFDA47'
              changeRating={(rating) => { console.log(rating) }}
              rating={rating}
              starRatedColor="#FFDA47"
              numberOfStars={2}
              starDimension='25px'

              name='rating'
            ></StarRatings>
            <div className="price_container">
              {price}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopRatedProductItem
