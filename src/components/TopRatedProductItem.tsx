import React from 'react'
import { useNavigate } from 'react-router-dom'
import StarRatings from 'react-star-ratings'
interface PropType {
    name: string,
    rating: number,
    price: string,
    imgSource: string,
    id: string
}
// http://localhost:3000/shop/1
const TopRatedProductItem = ({ imgSource, name, price, rating, id }: PropType) => {
    const navigate = useNavigate()
    const handelClick = () => {
        navigate(`/shop/${id}`)
        window.scrollTo({top:0,left:0})
    }
    return (
        <div onClick={handelClick}>
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
                            numberOfStars={5}
                            starDimension='16px'
                            starSpacing='6px'
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