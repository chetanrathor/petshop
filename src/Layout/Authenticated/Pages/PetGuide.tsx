
import { useEffect } from 'react'
import BreadCrumb from '../../../components/BreadCrumb'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import Toolkit from '../../../components/Toolkit'
import { useAppDispatch } from '../../../stores/Store'
import Blogs from '../Components/Blogs'
import BlogsFilter from '../Components/BlogsFilter'
import { fetchBlogs } from '../../../features/pet-guide/state/pet-guide.slice'

const PetGuide = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBlogs({ limit: 10, offset: 0, order: 'ASC' }))
  }, [])
  const breadCrumb = [
    {
      name: 'Home'
    }, {
      name: 'PET GUIDE'
    }
  ]


  return (
    <div>
      <Toolkit></Toolkit>
      <Navbar></Navbar>
      <BreadCrumb breadCrumbItems={breadCrumb}></BreadCrumb>
      <BlogsFilter></BlogsFilter>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  )
}

export default PetGuide
