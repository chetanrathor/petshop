import React from 'react'
import Toolkit from '../../../Shared/Toolkit/Toolkit'
import Navbar from '../../../Shared/Navbar/Navbar'
import Hero from '../../../Shared/Hero/Hero'
import FeatureProduct from '../FeaturedProduct/FeatureProduct'
import HomeProducts from '../HomeProducts/HomeProducts'

const Home = () => {
  let heading = 'Now consult a vet from home '
 let subheading = 'Over 60% of pet problems can be diagnosed and solved by vets on a video call.'
  return (
    <div>
      <Toolkit></Toolkit>
      <Navbar></Navbar>
      <Hero heading={heading} subheading={subheading} ></Hero>
      <FeatureProduct></FeatureProduct>
      <HomeProducts></HomeProducts>
    </div>
  )
}

export default Home
