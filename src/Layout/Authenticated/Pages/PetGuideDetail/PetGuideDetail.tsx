import { breadCrumb } from '.'
import BreadCrumb from '../../../../Shared/Components/BreadCrumb/BreadCrumb'
import Footer from '../../../../Shared/Components/Footer/Footer'
import LatestPost from '../../../../Shared/Components/LatestPost/LatestPost'
import Navbar from '../../../../Shared/Components/Navbar/Navbar'
import Toolkit from '../../../../Shared/Components/Toolkit/Toolkit'
import BlogImage from '../../Components/BlogImage/BlogImage'
import PreFormatted from '../../Components/PreFormmatted/PreFormatted'
import './PetGuideDetail.css'
const PetGuideDetail = () => {

  const text = 'Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Massa ultricies mi quis hendrerit. Purus sit amet volutpat consequat mauris nunc congue nisi. Aenean vel elit scelerisque mauris pellentesque. Netus et malesuada fames ac turpis egestas integer eget. Nunc non blandit massa enim nec dui nunc.'

  return (
    <div>

      <Toolkit></Toolkit>
      <Navbar></Navbar>
      <BreadCrumb breadCrumbItems={breadCrumb}></BreadCrumb>

      <div className="m-auto my-5 petguide_detail_container">
        <div className="d-flex flex-row">
          <div className="col-8">
            <BlogImage></BlogImage>
            <PreFormatted data={text} ></PreFormatted>
          </div>
          <div className="col-4">

            <div className="latest_post_feed p-3 ">
              <h4 className='latest_post_heading' >Latest Posts </h4>
              <LatestPost></LatestPost>
              <LatestPost></LatestPost>
              <LatestPost></LatestPost>

            </div>
          </div>
        </div>

      </div>
        <Footer></Footer>

    </div>
  )
}

export default PetGuideDetail
