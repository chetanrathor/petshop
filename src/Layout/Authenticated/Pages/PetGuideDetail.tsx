import { useEffect } from 'react'
import BreadCrumb from '../../../components/BreadCrumb'
import Footer from '../../../components/Footer'
import LatestPost from '../../../components/LatestPost'
import Navbar from '../../../components/Navbar'
import Toolkit from '../../../components/Toolkit'
import BlogImage from '../Components/BlogImage'
import PreFormatted from '../Components/PreFormatted'
import { useDispatch } from 'react-redux'
import { fetchBlog, fetchLatestBlogs } from '../../../features/pet-guide/state/pet-guide.slice'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../stores/Store'
import { Blog } from '../../../features/pet-guide/types'
const PetGuideDetail = () => {
  const breadCrumb = [
    {
      name: 'Home',

    }, {
      name: 'Pet Guide'
    }, {
      name: 'Detail Guide'
    }
  ]
  const text = 'Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Massa ultricies mi quis hendrerit. Purus sit amet volutpat consequat mauris nunc congue nisi. Aenean vel elit scelerisque mauris pellentesque. Netus et malesuada fames ac turpis egestas integer eget. Nunc non blandit massa enim nec dui nunc.'
  const dispatch = useAppDispatch()
  const { blog, latestBlogs }: any = useAppSelector((state) => state.petGuideReducer)
  const { id } = useParams()
  useEffect(() => {
    dispatch(fetchBlog(id ?? ''))
    dispatch(fetchLatestBlogs())
  }, [])
  return (
    <div>

      <Toolkit></Toolkit>
      <Navbar></Navbar>
      <BreadCrumb breadCrumbItems={breadCrumb}></BreadCrumb>

      <div className="m-auto my-5 petguide_detail_container">
        <div className="d-flex flex-row">
          <div className="col-8">
            <BlogImage date={blog.createdAt} heading={blog.title}></BlogImage>
            <PreFormatted data={blog.description} ></PreFormatted>
          </div>
          <div className="col-4">

            <div className="latest_post_feed p-3 ">
              <h4 className='latest_post_heading' >Latest Posts </h4>
              {
                latestBlogs?.map((item: any) => {
                  return <LatestPost date={item.createdAt} title={item.title} key={item.id}></LatestPost>
                })
              }


            </div>
          </div>
        </div>

      </div>
      <Footer></Footer>

    </div>
  )
}

export default PetGuideDetail
