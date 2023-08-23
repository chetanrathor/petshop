import { useSelector } from 'react-redux'
import TabsComponent from '../../../Layout/Authenticated/Components/TabsComponent'
import BreadCrumb from '../../../components/BreadCrumb'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import { RootState } from '../../../stores/Store'
import { ActiveTab } from '../types/profile.state.type'
import MyConsultations from './MyConsultations'
import MyOrders from './MyOrders'
import Shipping from './Shipping'
import UserDetailComponent from './UserDetailComponent'
import Toolkit from '../../../components/Toolkit'

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
      <Toolkit></Toolkit>
      <Navbar></Navbar>
      <BreadCrumb breadCrumbItems={[{ name: 'HOME', path: '/' }, { name: 'My Profile', path: '/myprofile/:id' }]}></BreadCrumb>

      <div className="border rounded-4  m-auto  my-5 mw-1264  ">
        <TabsComponent></TabsComponent>
        {getActiveTab()}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default MyProfile
