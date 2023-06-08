import React from 'react'
import Toolkit from '../../../../Shared/Components/Toolkit/Toolkit'
import Navbar from '../../../../Shared/Components/Navbar/Navbar'
import BreadCrumb from '../../../../Shared/Components/BreadCrumb/BreadCrumb'
import ShopFilter from '../../../../Shared/Components/ShopFilter/ShopFilter'
import { shopFilter } from '.'
import './Shop.css'
import ShopItem from '../../../../Shared/Components/ShopItem/ShopItem'
import Footer from '../../../../Shared/Components/Footer/Footer'
const Shop = () => {

  const breadCrumb = [
    {
      name:'Home'
    },{
      name:'Shop'
    }
  ]

  const ShopItemArray = [1,2,3,4,5,6,7,8,9]

  return (
    <div>
      <Toolkit></Toolkit>
      <Navbar></Navbar>
      <BreadCrumb breadCrumbItems={breadCrumb}></BreadCrumb>
      <div className="m-auto shop_container">
      <div className="d-flex flex-row">
        <div className="col-3">
          <ShopFilter  filterItems={shopFilter} heading='Pet species'></ShopFilter>
          <ShopFilter  filterItems={shopFilter} heading='Pet species'></ShopFilter>
        </div>
        <div className=" col-9 d-flex flex-row justify-content-end gap-4 flex-wrap">
          {ShopItemArray.map((item)=>{
            return (<>
            <ShopItem></ShopItem>
            
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
