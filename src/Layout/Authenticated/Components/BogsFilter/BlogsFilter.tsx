import React from 'react'
import MediumHeading from '../../../../Shared/Components/MediumHeading/MediumHeading'
import './BlogsFilter.css'
const BlogsFilter = () => {
    return (
        <div>
            <div className="m-auto mt-5 blogs_filter_container">
                <div className="blogs_filter_wrapper">
                    <div className="d-flex flex-row justify-content-between">
                        <div className="col-4">
                            <MediumHeading heading='Filter By' extraClass='text-start' ></MediumHeading>
                        </div>
                        <div className="col-8">
                            <div className="d-flex flex-row justify-content-end gap-4 ">
                                <div className="col-5">
                                    <select name="" className='form-select p-3' id="">
                                        <option selected className='select_pet'>Select Pet</option>
                                    </select>
                                </div>
                                <div className="col-5">
                                    <select name="" className='form-select p-3' id="">
                                        <option selected className='select_pet'>Select Categpry</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogsFilter
