import React, { useEffect } from 'react'
import FeatureProductItem from '../../../components/FeatureProductItem'
import { getKey } from '../../../utils'
import { RootState, useAppDispatch, useAppSelector } from './../../../stores/Store';
import { fetchProducts } from '../../../features/product/state/product.slice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const HomeProducts = () => {
    const navigate = useNavigate()
    let dummyData = [1, 2, 3, 4, 5, 6, 7, 8]
    const dispatch = useAppDispatch()
    const { products } = useSelector((state: RootState) => state.productReducer)
    console.log('products', products)
    useEffect(() => {
        dispatch(fetchProducts({ limit: 10, offset: 0, order: 'DESC'}))
    }, [])
    return (
        <div>
            <div className="p-3 mt-5 home_products_container">
                <div className="m-auto d-flex flex-row justify-content-center flex-wrap gap-4 home_products_wrapper ">
                    {
                        products.map((item:any) => {
                            return (
                                <FeatureProductItem name={item.name}  price={item.sellingPrice.length}  rating={2} key={getKey()}></FeatureProductItem>

                            )
                        })
                    }

                </div>
                <div className="mt-5 d-flex justify-content-center button_container">

                    <button onClick={()=>{
                        navigate('/shop')
                        window.scrollTo({top:0,left:0})
                    }} className='px-5 py-3  btn btn-primary border-0 background-primary '> <span className='view_all_btn_txt'>Veiw All  Products </span> </button>
                </div>
            </div>
        </div>
    )
}

export default HomeProducts
