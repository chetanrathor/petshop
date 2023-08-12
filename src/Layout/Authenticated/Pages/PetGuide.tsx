
import BreadCrumb from '../../../components/BreadCrumb'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import Toolkit from '../../../components/Toolkit'
import Blogs from '../Components/Blogs'
import BlogsFilter from '../Components/BlogsFilter'

const PetGuide = () => {
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
