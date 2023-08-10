import React from 'react'
import FeatureProductItem from '../../../components/FeatureProductItem'
const HomeProducts = () => {

    let dummyData = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div>
            <div className="p-3 mt-5 home_products_container">
                <div className="m-auto d-flex flex-row justify-content-center flex-wrap gap-4 home_products_wrapper ">
                    {
                        dummyData.map((item) => {
                            return (<>
                                <FeatureProductItem></FeatureProductItem>

                            </>)
                        })
                    }

                </div>
                <div className="mt-5 d-flex justify-content-center button_container">

                    <button className='px-5 py-3  btn btn-primary border-0 background-primary '> <span className='view_all_btn_txt'>Veiw All  Products </span> </button>
                </div>
            </div>
        </div>
    )
}

export default HomeProducts
