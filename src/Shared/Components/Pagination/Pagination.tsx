import React, { useState } from 'react'
import './Pagination.css'
import ReactPaginate from 'react-paginate'
const Pagination = () => {
    const [paginationState, setPaginationState] = useState({
        totalNumberItem: 50,
        itemPerPage: 10,
        currentPage: 0,

    })

    const length = paginationState.totalNumberItem / paginationState.itemPerPage   


    return (
        <div>
            <div className="mt-5 m-auto pagination-container">
            <ReactPaginate pageCount={length} previousLabel={`<img src='pagination_controller.png'> </img`} ></ReactPaginate>
            </div>
        </div>  
    )
}

export default Pagination
