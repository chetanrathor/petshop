import { breadCrumb } from '.'
import BreadCrumb from '../../../../Shared/Components/BreadCrumb/BreadCrumb'
import Footer from '../../../../Shared/Components/Footer/Footer'
import Navbar from '../../../../Shared/Components/Navbar/Navbar'
import Toolkit from '../../../../Shared/Components/Toolkit/Toolkit'
import Blogs from '../../Components/Blogs/Blogs'
import BlogsFilter from '../../Components/BogsFilter/BlogsFilter'

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
