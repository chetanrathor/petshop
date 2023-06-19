import React from 'react'
import './TopRatedProducts.css'
import TopRatedProductItem from '../../../../Shared/Components/TopRatedProductItem/TopRatedProductItem'
import MediumHeading from '../../../../Shared/Components/MediumHeading/MediumHeading'
import { topRatedProducts } from '.'
const TopRatedProducts = () => {
  return (
    <div>
      <div className="p-3 mt-5 top-rated_product_container">
        <div className="m-auto top_rated_prduct_wrapper">
          <MediumHeading heading='Top Rated Products'></MediumHeading>
          <div className="d-flex flex-row flex-wrap gap-4 justify-content-between mt-5">


            {
              topRatedProducts.map((item) => {
                return (<>

                  <TopRatedProductItem imgSource={item.imgSource} name={item.name} price={item.price} rating={item.rating} ></TopRatedProductItem>
                </>)
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopRatedProducts
