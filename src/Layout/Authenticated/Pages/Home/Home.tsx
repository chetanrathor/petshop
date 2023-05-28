import React from 'react'
import Toolkit from '../../../../Shared/Components/Toolkit/Toolkit'
import Navbar from '../../../../Shared/Components/Navbar/Navbar'
import Hero from '../../../../Shared/Components/Hero/Hero'
import FeatureProduct from '../../Components/FeaturedProduct/FeatureProduct'
import HomeProducts from '../../Components/HomeProducts/HomeProducts'

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
