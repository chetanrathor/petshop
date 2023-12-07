import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getStaticImages } from '../assets/Images'
import { RootState, useAppDispatch, useAppSelector } from '../stores/Store'
import { addItemIntoCart, removeItemFromCart } from '../features/cart/state/cart.slice'
import { addToCart } from '../features/cart/api'
import { fetchProducts } from '../features/product/state/product.slice'
import { useSelector } from 'react-redux'
interface Properties {
    item: {
        discountRate: number,
        image: string,
        name: string,
        mrp: number,
        rating: number,
        id: string,
        isAvailableInCart: boolean

    }

}
const ShopItem = ({ item }: Properties) => {
    const { discountRate, image, mrp, name, rating, id } = item
    const { cart_available, cart_unavailable } = getStaticImages()
    const [loading, setLoading] = useState(false);
    const user = useSelector((state: RootState) => state.authReducer.user)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const handelClick = () => {
        navigate(`/shop/${id}`)
        window.scrollTo({ top: 0, left: 0 })
    }

    function handelCartClick() {
        if (loading) {
            return; // Prevent further actions if a process is ongoing
        }
        setLoading(true);

        if (item.isAvailableInCart) {
            dispatch(removeItemFromCart(id)).then((r) => {
                if (r.meta.requestStatus === 'fulfilled') {
                    dispatch(fetchProducts({ limit: 10, offset: 0, order: 'DESC', userId: user.id ?? '' }))
                }
                setLoading(false);
            })
        } else {
            dispatch(addItemIntoCart({ product: id, quantity: 1, user: user.id })).then((r) => {
                if (r.meta.requestStatus === 'fulfilled') {
                    dispatch(fetchProducts({ limit: 10, offset: 0, order: 'DESC', userId: user.id ?? '' }))


                }
                setLoading(false);
            })

        }
    }
    return (

        <div className="shop_item_container">
            <div className="p-3 d shop_item_image_container" onClick={handelClick}>
                <div className="px-3 py-1 discount_tag">
                    <span className='discount_rate'>{discountRate}%</span>
                </div>

                <div className="px-4 d-flex justify-content-center py-2 item_image">
                    <img width='172px' height='239px' src={process.env.PUBLIC_URL + '/shop_item_image.png'} alt="" />
                </div>

            </div>
            <div className="p-4 shop_item_detail_container">
                <span className='item_category'>Food</span>
                <p className='shop_item_description'>
                    {name}
                </p>
                <img height='14px' width='92px' src={process.env.PUBLIC_URL + '/start.png'} alt="" />
                <div className="d-flex flex-row justify-content-between">
                    <h5 className='mt-2 item_price'>${mrp}</h5>

                    <img height='39px' width='40px' onClick={handelCartClick} src={item.isAvailableInCart ? cart_available : cart_unavailable} alt="" style={{ cursor: 'pointer' }} />

                </div>
            </div>
        </div>

    )
}

export default ShopItem
