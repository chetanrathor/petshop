import React from 'react'
import './Order.css'

const Order = () => {
  return (
    <div>
      <div className="d-flex flex-row p-3">
        <div className="col-6 d-flex flex-row">
            <img src={process.env.PUBLIC_URL +'/order1.svg'} alt="" />
            <div className='d-flex flex-column justify-content-end ms-3'>
                <div className='ordered_product-name'>Tug of War Dog Toy</div>
                <div className='ordered_product-color'>Color:red</div>
            </div>
        </div>
        <div className="col-2 d-flex flex-column justify-content-center ordered-quantity">
            1
        </div>
        <div className="col-2 d-flex flex-column justify-content-center ordered-quantity">
        May 1, 2022
        </div>
        <div className="col-2 d-flex flex-column justify-content-center ordered-quantity">
        $12.12
        <div className='order-status'>
        Processing
        </div>
        </div>
    
      </div>
    </div>
  )
}

export default Order
