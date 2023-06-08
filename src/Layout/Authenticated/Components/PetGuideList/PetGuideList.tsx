import React from 'react'
import { Pagination } from 'react-bootstrap'
import BreadCrumb from '../../../../Shared/Components/BreadCrumb/BreadCrumb'
import { breadCrumb } from '../../Pages/PetGuide'
import Blogs from '../Blogs/Blogs'
import BlogsFilter from '../BogsFilter/BlogsFilter'

const PetGuideList = () => {
  return (
    <div>

      <img src={process.env.PUBLIC_URL + "/cart.png"} height={'250px'}  alt="" />
{/* 
      <BreadCrumb  breadCrumbItems={breadCrumb}></BreadCrumb>
      <BlogsFilter></BlogsFilter>
      <Blogs></Blogs>
      <Pagination></Pagination> */}
    </div>
  )
}

export default PetGuideList
