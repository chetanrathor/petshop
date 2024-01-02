import React from 'react'
import { useNavigate } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

interface Property {
  name: string,
  rating: number,
  price: number
}
const FeatureProductItem = ({ name, price, rating }: Property) => {

  const navigate = useNavigate()

  const handelClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    navigate('/shop/1')
  }

  return (
    <div onClick={() => { handelClick() }}>
      <div className="d-flex flex-column feature_product_item_container">
        <div className="p-3 image_container">
          <div className="discount_tag d-flex justify-content-center align-items-center"><span className='discount'>20%</span></div>
          <div className="px-5 image__container">
            <img src={process.env.PUBLIC_URL + "/royalcanin.png"} height='227px' width='167px' alt="" />
          </div>
        </div>
        <div className="px-4 mt-3 d-flex flex-column align-items-center price_container ">
          <span className=' product_name'>
            {name}
          </span>
          <StarRatings starHoverColor='#FFDA47'
            changeRating={(rating) => { console.log(rating) }}
            rating={rating}
            starRatedColor="#FFDA47"
            numberOfStars={5}
            starDimension='16'
            starSpacing='4px'

            name='rating'
          ></StarRatings>

          <div className='mt-3 product_price'>
            ${price}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureProductItem
