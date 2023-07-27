import React from 'react'
import Toolkit from '../../../../Shared/Components/Toolkit/Toolkit'
import Navbar from '../../../../Shared/Components/Navbar/Navbar'
import BreadCrumb from '../../../../Shared/Components/BreadCrumb/BreadCrumb'
import ProductImage from '../../Components/ProductImage/ProductImage'
import './ProductPage.css'
import StarRatings from 'react-star-ratings'
import QuantityCounter from '../../../../Shared/Components/QuantityCounter/QuantityCounter'
import ButtonComponent from '../../../../Shared/Components/ButtonComponent/ButtonComponent'
import FeatureProductItem from '../../../../Shared/Components/FeatureProductItem/FeatureProductItem'
import Footer from '../../../../Shared/Components/Footer/Footer'
const ProductPage = () => {

    const similarProducts = [1, 2, 3, 4]

    return (
        <div>
            <Toolkit></Toolkit>
            <Navbar></Navbar>
            <BreadCrumb breadCrumbItems={[{ name: 'Home' }, { name: 'Shop' }, { name: 'Product Page' }]}></BreadCrumb>
            <div className="d-flex flex-row mw-1264 m-auto justify-content-between row-gap-3 mt-4 mb-5 ">
                <div className="d-flex flex-row gap-3 col-6">
                    <div className="d-flex flex-column gap-3 col-3">
                        <ProductImage height='100' width='100' image='productImage.png'></ProductImage>
                        <ProductImage height='100' width='100' image='productImage.png'></ProductImage>
                        <ProductImage height='100' width='100' image='productImage.png'></ProductImage>
                    </div>
                    <div className="col-9">
                        <ProductImage height='415' width='415' image='productImage.png'></ProductImage>

                    </div>
                </div>
                <div className="col-5">
                    <div className="d-flex flex-row justify-content-between">
                        <div className='product-page-text-0-875'>SKU: 74141 </div>
                        <div className="product-page-text-0-875">
                            Categories: Toys, Other
                        </div>
                    </div>
                    <div className='mt-3 product_page_product_name'>
                        Pedigree Adult Dry Dog Food, Meat & Rice, 10kg Pack
                    </div>
                    <div className="mt-3 product_page-description">
                        Complete & balanced dog food, a perfect food for adult dogs
                        Contains 20% crude Protein, 10% crude Fat, and 5% crude Fibre
                        Provides strong muscles, bones & teeth and healthier & shinier coat
                    </div>
                    <div className="mt-3 d-flex flex-row gap-3">
                        <StarRatings numberOfStars={5} starDimension='20'></StarRatings>
                        <div className="product_page_reviews">2 Reviews</div>
                    </div>
                    <div className="mt-3 product_page_price">
                        $32.39
                    </div>
                    <div className="mt-3 d-flex flex-row">
                        <div className="product_page_qty d-inline-flex justify-content-center align-items-center me-3">Qty:</div>
                        <QuantityCounter></QuantityCounter>
                        <ButtonComponent extraClass='border-0 px-5 ms-4' bgColor='background-primary' isSubmitButton={false} shouldDisabel={false} canActivateLoader={false} content='Add to cart' ></ButtonComponent>
                    </div>

                </div>
            </div>

            <div className="mt-5 similar_product">
                We found other products you might like!

            </div>
            <div className="d-flex flex-row m-auto gap-4 mt-5 mw-1264">

                {
                    similarProducts.map((item) => (<>
                        <FeatureProductItem></FeatureProductItem>
                    </>))
                }
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ProductPage
