import { useSelector } from "react-redux";
import MediumHeading from "../../../components/MediumHeading"
import { getKey } from "../../../utils"
import { RootState, useAppDispatch } from "../../../stores/Store";
import { setFeatureProductCategory } from "../../../features/product/state/product.slice";

const FeatureProduct = () => {
    function createFeatureProduct(id: string, name: string, imageSource: string) {
        return {
            id: id,
            name: name,
            imageSource: imageSource
        };
    }
    const featureProducts = [
        createFeatureProduct('1', 'Food', 'food.png'),
        createFeatureProduct('2', 'Treats & chews', 'treat.png'),
        createFeatureProduct('3', 'Toys and accessories', 'toy.png'),
        createFeatureProduct('4', 'Clothes', 'cloths.png'),
        createFeatureProduct('5', 'Grooming', 'grooming.png')
    ];
    const { featureProductCategory } = useSelector((state: RootState) => state.productReducer)
    const dispatch = useAppDispatch()
    const handelCategoryClick = (id:string) => {
        dispatch(setFeatureProductCategory(id))
    }
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


                                    <div onClick={() => handelCategoryClick(item.id)} key={getKey()} className="d-flex flex-column align-items-center justify-content-center feature_product_item">
                                        <div className={`d-flex flex-row justify-content-center align-items-center category__item ${featureProductCategory === item.id ? 'active-category' : ''}`}>
                                            <img src={process.env.PUBLIC_URL + item.imageSource} className='feature_product_img' alt="" />
                                        </div>
                                        <div className="d-none d-md-block mt-3 text-center item__title">{item.name}</div>
                                    </div>


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
