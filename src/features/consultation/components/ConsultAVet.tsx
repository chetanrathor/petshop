import React from 'react'
import FeatureProduct from '../../../Layout/Authenticated/Components/FeatureProduct'
import HomeProducts from '../../../Layout/Authenticated/Components/HomeProducts'
import LatestNews from '../../../Layout/Authenticated/Components/LatestNews'
import ServicesOffered from '../../../Layout/Authenticated/Components/ServicesOffered'
import TopRatedProducts from '../../../Layout/Authenticated/Components/TopRatedProducts'
import AreYouVetBanner from '../../../components/AreYouVetBanner'
import Footer from '../../../components/Footer'
import Hero from '../../../components/Hero'
import Toolkit from '../../../components/Toolkit'
import Navbar from '../../../components/Navbar'
import HowWeWork from './HowWeWork'

const ConsultAVet = () => {
    const heading = 'Did you know?'
    const subHeading = 'Over 60% of pet problems can be diagnosed and solved by vets on a video call.'
    return (
        <>
            <Toolkit></Toolkit>
            <Navbar></Navbar>
            <Hero heading={heading} subheading={subHeading} ></Hero>
            <AreYouVetBanner></AreYouVetBanner>
            <HowWeWork></HowWeWork>
            <LatestNews></LatestNews>
            <Footer></Footer>
        </>
    )
}

export default ConsultAVet