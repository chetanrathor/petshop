import React from 'react'
import Navbar from '../../../../Shared/Components/Navbar/Navbar'
import BreadCrumb from '../../../../Shared/Components/BreadCrumb/BreadCrumb'
import TabsComponent from '../../Components/TabsComponent/TabsComponent'
import UserDetailComponent from '../../Components/UserDetailComponent/UserDetailComponent'
import Footer from '../../../../Shared/Components/Footer/Footer'
import Address from '../../Components/Address/Address'
import Order from '../../Components/Order/Order'
import Consultation from '../../Components/Consultation/Consultation'
import { MakeCallStatus } from '../../../../constant/Consultation'

const MyProfile = () => {
  return (
    <div className=''>
      <Navbar></Navbar>
      <BreadCrumb breadCrumbItems={[{ name: 'HOME' }, { name: 'My Profile' }]}></BreadCrumb>

      <div className="border rounded-4  m-auto  my-5 mw-1264  ">
        <TabsComponent></TabsComponent>
        {/* <UserDetailComponent></UserDetailComponent> */}
        {/* <div className="d-flex flex-column gap-3 my-3 px-5">
        <Address></Address>
        <Address></Address>
        <Address></Address>

        </div> */}
        {/* <Order></Order>
        <Order></Order>
        <Order></Order>
        <Order></Order>
        <Order></Order>
        <Order></Order> */}
        <Consultation consulation={{userName:'Frank Nicolas' ,date:'May 1, 2022', time:'11AM - 12PM',total:'$300.00', id:'ewe',makeCallStatus:MakeCallStatus.JoinCall}}></Consultation>
      </div>
        <Footer></Footer>
    </div>
  )
}

export default MyProfile
