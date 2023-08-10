import React from 'react'
const ShopItem = () => {
    return (
        <div>
            <div className="shop_item_container">
                <div className="p-3 d shop_item_image_container">
                    <div className="px-3 py-1 discount_tag">
                        <span className='discount_rate'>25%</span>
                    </div>

                    <div className="px-4 d-flex justify-content-center py-2 item_image">
                        <img width='172px' height='239px' src={process.env.PUBLIC_URL + '/shop_item_image.png'} alt="" />
                    </div>

                </div>
                <div className="p-4 shop_item_detail_container">
                    <span className='item_category'>Food</span>
                    <p className='shop_item_description'>
                        Royal Canin Maxi Adult Pellet Dog Food, Chicken
                    </p>
                    <img height='14px' width='92px' src={process.env.PUBLIC_URL + '/start.png'} alt="" />
                    <div className="d-flex flex-row justify-content-between">
                        <h5 className='mt-2 item_price'>$300.00</h5>
                        <img height='39px' width='40px' src={process.env.PUBLIC_URL + '/shop_item_cart.png'} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopItem
