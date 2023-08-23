import axios from 'axios'
import AreYouVetBanner from '../../../components/AreYouVetBanner'
import Footer from '../../../components/Footer'
import Hero from '../../../components/Hero'
import Navbar from '../../../components/Navbar'
import Toolkit from '../../../components/Toolkit'
import FeatureProduct from '../Components/FeatureProduct'
import HomeProducts from '../Components/HomeProducts'
import LatestNews from '../Components/LatestNews'
import ServicesOffered from '../Components/ServicesOffered'
import TopRatedProducts from '../Components/TopRatedProducts'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

const Home = () => {


  let heading = 'Now consult a vet from home '
  let subheading = 'Over 60% of pet problems can be diagnosed and solved by vets on a video call.'

  // useEffect(() => {
  //   const result = axios.get('http://localhost:3333/api/hello').then((r) => r).catch((e) => e)
  //   console.log('click', result)

  // }, [])

  return (
    <div>

      <Toolkit></Toolkit>
      <Navbar></Navbar>
      <Hero heading={heading} subheading={subheading} ></Hero>
      <FeatureProduct></FeatureProduct>
      <HomeProducts></HomeProducts>
      <AreYouVetBanner></AreYouVetBanner>
      <ServicesOffered></ServicesOffered>
      <TopRatedProducts></TopRatedProducts>
      <LatestNews></LatestNews>
      <Footer></Footer>
    </div>
  )
}

export default Home
