import { useEffect } from "react"
import { useSelector } from "react-redux"
import MediumHeading from "../../../components/MediumHeading"
import TopRatedProductItem from "../../../components/TopRatedProductItem"
import { fetchProducts } from "../../../features/product/state/product.slice"
import { useAppDispatch, RootState } from "../../../stores/Store"
import { getKey } from "../../../utils"

const TopRatedProducts = () => {
  const topRatedProducts = [
    {
      name: 'Dog Chew Toys for Chewers',
      rating: 4,
      price: '$450',
      imgSource: 'topratedproduct.png'
    },
    {
      name: 'Dog Chew Toys for Chewers',
      rating: 4,
      price: '$450',
      imgSource: 'topratedproduct.png'
    },
    {
      name: 'Dog Chew Toys for Chewers',
      rating: 4,
      price: '$450',
      imgSource: 'topratedproduct.png'
    },
    {
      name: 'Dog Chew Toys for Chewers',
      rating: 4,
      price: '$450',
      imgSource: 'topratedproduct.png'
    },
    {
      name: 'Dog Chew Toys for Chewers',
      rating: 4,
      price: '$450',
      imgSource: 'topratedproduct.png'
    },
    {
      name: 'Dog Chew Toys for Chewers',
      rating: 4,
      price: '$450',
      imgSource: 'topratedproduct.png'
    },
    {
      name: 'Dog Chew Toys for Chewers',
      rating: 4,
      price: '$450',
      imgSource: 'topratedproduct.png'
    },
    {
      name: 'Dog Chew Toys for Chewers',
      rating: 4,
      price: '$450',
      imgSource: 'topratedproduct.png'
    },
    {
      name: 'Dog Chew Toys for Chewers',
      rating: 4,
      price: '$450',
      imgSource: 'topratedproduct.png'
    },

  ]
  const dispatch = useAppDispatch()
    const { products } = useSelector((state: RootState) => state.productReducer)
    console.log('products', products)
    useEffect(() => {
        dispatch(fetchProducts({ limit: 10, offset: 0, order: 'DESC' }))
    }, [])
  return (
    <div>
      <div className="p-3 mt-5 top-rated_product_container">
        <div className="m-auto top_rated_prduct_wrapper">
          <MediumHeading heading='Top Rated Products'></MediumHeading>
          <div className="d-flex flex-row flex-wrap gap-4 justify-content-between mt-5">


            {
              products.map((item:any) => {
                return (<>

                  <TopRatedProductItem id={item.id} key={getKey()} imgSource={'topratedproduct.png'} name={item.name} price={item.mrp} rating={item.rating} ></TopRatedProductItem>
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
