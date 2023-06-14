import React from 'react'
import Toolkit from '../../../../Shared/Components/Toolkit/Toolkit'
import Navbar from '../../../../Shared/Components/Navbar/Navbar'
import Hero from '../../../../Shared/Components/Hero/Hero'
import FeatureProduct from '../../Components/FeaturedProduct/FeatureProduct'
import HomeProducts from '../../Components/HomeProducts/HomeProducts'
import AreYouVetBanner from '../../../../Shared/Components/AreYouVetBanner/AreYouVetBanner'
import LatestNews from '../../Components/LatestNews/LatestNews'
import ServicesOffered from '../../Components/ServicesOffered/ServicesOffered'
import TopRatedProducts from '../../Components/TopRatedProducts/TopRatedProducts'
import BreadCrumb from '../../../../Shared/Components/BreadCrumb/BreadCrumb'
import Footer from '../../../../Shared/Components/Footer/Footer'
import LatestPost from '../../../../Shared/Components/LatestPost/LatestPost'
import BlogImage from '../../Components/BlogImage/BlogImage'
import { useSelector } from 'react-redux'

const Home = () => {

  const count = useSelector((state: any) => state.authReducer.isAuthenticated)
 
  let heading = 'Now consult a vet from home '
  let subheading = 'Over 60% of pet problems can be diagnosed and solved by vets on a video call.'
  return (
    <div>
      <Toolkit></Toolkit>
       <Navbar></Navbar>
      {/* <Hero heading={heading} subheading={subheading} ></Hero>
      <FeatureProduct></FeatureProduct>
      <HomeProducts></HomeProducts>
      <AreYouVetBanner></AreYouVetBanner>
      <ServicesOffered></ServicesOffered>
      <TopRatedProducts></TopRatedProducts>
      <LatestNews></LatestNews>
      <Footer></Footer>  */}
    </div>
  )
}

export default Home
