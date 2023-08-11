import React from 'react'
import TabsComponent from '../../../Layout/Authenticated/Components/TabsComponent'
import UserDetailComponent from './UserDetailComponent'
import Address from './Address'
import Order from './Order'
import Consultation from './Consultation'
import { MakeCallStatus } from '../../../constant/Consultation'
import BreadCrumb from '../../../components/BreadCrumb'
import Footer from '../../../components/Footer'
import { useSelector } from 'react-redux'
import { RootState } from '../../../stores/Store'
import Shipping from './Shipping'
import MyOrders from './MyOrders'
import { ActiveTab } from '../types/profile.state.type'
import MyConsultations from './MyConsultations'
import Navbar from '../../../components/Navbar'

const MyProfile = () => {
  const profileTabState: ActiveTab = useSelector((state: RootState) => state.profileTabReducer.activeTab)

  const getActiveTab = () => {
    switch (profileTabState) {
      case "myprofile":
        return (<UserDetailComponent />)

      case "order":
        return (<MyOrders />)

      case "consultation":
        return (<MyConsultations />)

      case "shipping":
        return (<Shipping />)

    }
  }

  return (
    <div className=''>
    <Navbar></Navbar>
      <BreadCrumb breadCrumbItems={[{ name: 'HOME' }, { name: 'My Profile' }]}></BreadCrumb>

      <div className="border rounded-4  m-auto  my-5 mw-1264  ">
        <TabsComponent></TabsComponent>
        {getActiveTab()}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default MyProfile
