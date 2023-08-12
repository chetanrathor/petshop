import AreYouVetBanner from '../../../../Shared/Components/AreYouVetBanner/AreYouVetBanner'
import Hero from '../../../../Shared/Components/Hero/Hero'
import Navbar from '../../../../Shared/Components/Navbar/Navbar'
import Toolkit from '../../../../Shared/Components/Toolkit/Toolkit'
import FeatureProduct from '../../Components/FeaturedProduct/FeatureProduct'
import HomeProducts from '../../Components/HomeProducts/HomeProducts'
import LatestNews from '../../Components/LatestNews/LatestNews'
import ProductImage from '../../Components/ProductImage/ProductImage'
import ServicesOffered from '../../Components/ServicesOffered/ServicesOffered'
import TopRatedProducts from '../../Components/TopRatedProducts/TopRatedProducts'

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
      <AreYouVetBanner></AreYouVetBanner>
      <ServicesOffered></ServicesOffered>
      <TopRatedProducts></TopRatedProducts>
      <LatestNews></LatestNews>
      {/* <Footer></Footer>   */}
      <ProductImage height='100' width='100 ' image='productImage.png' ></ProductImage>
    </div>
  )
}

export default Home
