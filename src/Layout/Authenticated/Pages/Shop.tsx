import BreadCrumb from '../../../components/BreadCrumb'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import ShopFilter from '../../../components/ShopFilter'
import ShopItem from '../../../components/ShopItem'
import Toolkit from '../../../components/Toolkit'
import { getKey } from '../../../utils'
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
  const breadCrumb = [
    {
      name: 'Home',
      path:'/'
    }, {
      name: 'Shop',
      path:'/shop'
    }
  ]

  const ShopItemArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div>
      <Toolkit></Toolkit>
      <Navbar></Navbar>
      <BreadCrumb breadCrumbItems={breadCrumb}></BreadCrumb>
      <div className="m-auto shop_container">
        <div className="d-flex flex-row">
          <div className="col-3">
            <ShopFilter filterItems={shopFilter} heading='Pet species'></ShopFilter>
            <ShopFilter filterItems={shopFilter} heading='Pet species'></ShopFilter>
          </div>
          <div className=" col-9 d-flex flex-row justify-content-end gap-4 flex-wrap">
            {ShopItemArray.map((item) => {
              return (<>
                <ShopItem key={getKey()}></ShopItem>

              </>)
            })}

          </div>


        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Shop
