import MediumHeading from "../../../components/MediumHeading"
import { getKey } from "../../../utils"

const FeatureProduct = () => {
    const featureProducts = [
        {
            id: 1,
            name: 'Food',
            imageSource: 'food.png'
        },
        {
            id: 2,
            name: 'Treats & chews',
            imageSource: 'treat.png'
        },
        {
            id: 3,
            name: 'Toys and accessories',
            imageSource: 'toy.png'
        },
        {
            id: 4,
            name: 'Clothes',
            imageSource: 'cloths.png'
        },
        {
            id: 5,
            name: 'Grooming',
            imageSource: 'grooming.png'
        },
    ];
        
    return (
        <div>
            <div className="p-3 mt-5 feature__container">
                <div className="m-auto feature__wrapper">
                    {/* <h1 className='text-center feature__heading'>Feature Product</h1> */}
                    <MediumHeading heading='Feature Product'></MediumHeading>
                    <div className="mt-5 d-flex  flex-row flex-wrap  justify-content-between">
                        {
                            featureProducts.map((item) => {
                                return (

                                    <>
                                        <div key={getKey()} className="d-flex flex-column align-items-center justify-content-center feature_product_item">
                                            <div className="d-flex flex-row justify-content-center align-items-center category__item">
                                                <img src={process.env.PUBLIC_URL + item.imageSource} className='feature_product_img' alt="" />
                                            </div>
                                            <div className="d-none d-md-block mt-3 text-center item__title">{item.name}</div>
                                        </div>

                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureProduct
