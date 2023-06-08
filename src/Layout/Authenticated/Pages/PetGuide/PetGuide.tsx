import React, { useEffect } from 'react'
import Toolkit from '../../../../Shared/Components/Toolkit/Toolkit'
import Navbar from '../../../../Shared/Components/Navbar/Navbar'
import BreadCrumb from '../../../../Shared/Components/BreadCrumb/BreadCrumb'
import { breadCrumb } from '.'
import Blogs from '../../Components/Blogs/Blogs'
import BlogsFilter from '../../Components/BogsFilter/BlogsFilter'
import Pagination from '../../../../Shared/Components/Pagination/Pagination'
import { Outlet, useNavigate } from 'react-router-dom'
import PetGuideList from '../../Components/PetGuideList/PetGuideList'
import Footer from '../../../../Shared/Components/Footer/Footer'

const PetGuide = () => {
  
  return (
    <div>
      <Toolkit></Toolkit>
      <Navbar></Navbar>
      <BreadCrumb  breadCrumbItems={breadCrumb}></BreadCrumb>
      <BlogsFilter></BlogsFilter>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  )
}

export default PetGuide
