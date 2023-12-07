import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import BreadCrumb from '../../../components/BreadCrumb'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import ShopFilter from '../../../components/ShopFilter'
import ShopItem from '../../../components/ShopItem'
import Toolkit from '../../../components/Toolkit'
import { fetchFilters, fetchProducts, resetProductFilters } from '../../../features/product/state/product.slice'
import { useAppDispatch, RootState, useAppSelector } from '../../../stores/Store'
import { getKey } from '../../../utils'
export enum Offers {
  ZeroToTwenty = '0-20%',
  TwentyToFifty = '20-50%',
  OverFifty = 'Over50%'
}
const Shop = () => {

  const shopFilter = [
    {
      id: 'dog',
      name: 'Dog',
      count: 12
    },
    {
      id: 'cow',
      name: 'Cow',
      count: 12
    },
    {
      id: 'rabbit',
      name: 'rabbit',
      count: 12
    },
    {
      id: 'mouse',
      name: 'mouse',
      count: 12
    },
    {
      id: 'cat',
      name: 'Cat',
      count: 12
    }
  ]

  const offers = [
    {
      name: '0-20%',
      id: Offers.ZeroToTwenty,
      product: 0,
    },
    {
      name: '20-50%',
      id: Offers.TwentyToFifty,
      product: 0,
    },
    {
      name: 'Over 50%',
      id: Offers.OverFifty,
      product: 0,
    }
  ]
  const breadCrumb = [
    {
      name: 'Home',
      path: '/'
    }, {
      name: 'Shop',
      path: '/shop'
    }
  ]

  const ShopItemArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const dispatch = useAppDispatch()
  const { productReducer, authReducer }: any = useAppSelector((state) => state)
  const { products, productFilters } = productReducer
  const { user, isAuthenticated } = authReducer
  console.log('products', products)
  // useEffect(() => {
  //   console.log('user', user , isAuthenticated)
  //   dispatch(fetchProducts({ limit: 10, offset: 0, order: 'DESC', userId: user.id }))
  //   dispatch(fetchFilters())
  // }, [])

  useEffect(() => {
    if (user.id) {
      dispatch(fetchProducts({ limit: 10, offset: 0, order: 'DESC', userId: user.id }))
    }else {
      dispatch(fetchProducts({ limit: 10, offset: 0, order: 'DESC'}))

    }
    dispatch(fetchFilters())


  }, [])
  return (
    <div>
      <Toolkit></Toolkit>
      <Navbar></Navbar>
      <BreadCrumb breadCrumbItems={breadCrumb}></BreadCrumb>
      <div className="m-auto shop_container mt-5">
        <div className="d-flex flex-row my-3">
          <div className="col-md-3 reset_filter-text" onClick={() => dispatch(resetProductFilters())}>
            ResetFilters

          </div>
        </div>
        <div className="d-flex flex-row">
          <div className="col-3 d-flex flex-column d-none d-md-flex">
            <ShopFilter filterKey={'specy'} filterItems={productFilters?.petSpecies} heading='Pet species'></ShopFilter>
            <ShopFilter filterKey={'category'} filterItems={productFilters?.categories} heading='Categories'></ShopFilter>
            <ShopFilter filterKey={'offer'} filterItems={offers} heading='Offers'></ShopFilter>
            {/* {/* <ShopFilter filterItems={shopFilter} heading='Offers'></ShopFilter> */}
            <ShopFilter filterKey={'breedType'} filterItems={productFilters.breedTypes} heading='Breed type'></ShopFilter>
            <ShopFilter filterKey={'brand'} filterItems={productFilters?.brands} heading='Brand'></ShopFilter>
          </div>
          <div className=" col-12 col-md-9 d-flex flex-row justify-content-center justify-content-md-end gap-4 flex-wrap">
            {products.map((item: any) => {
              return (
                <ShopItem item={item} key={getKey()}></ShopItem>

              )
            })}

          </div>


        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Shop
