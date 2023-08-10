import React from 'react'
import Toolkit from '../../../../Shared/Components/Toolkit/Toolkit'
import Navbar from '../../../../Shared/Components/Navbar/Navbar'
import BreadCrumb from '../../../../Shared/Components/BreadCrumb/BreadCrumb'
import './ProductCart.css'
import QuantityCounter from '../../../../Shared/Components/QuantityCounter/QuantityCounter'
import ButtonComponent from '../../../../Shared/Components/ButtonComponent/ButtonComponent'
import ServicesOffered from '../../Components/ServicesOffered/ServicesOffered'
import Footer from '../../../../Shared/Components/Footer/Footer'


const ProductCart = () => {
    const heading = [{
        name: 'PRODUCTS',
        extraclass: 'col-4'
    }, {
        name: 'PRICE'
    }, {
        name: 'QTY'
    }, {
        name: 'TOTAL',
        extraclass: 'col-3'
    }]
    return (
        <div>
            <Toolkit></Toolkit>
            <Navbar></Navbar>
            <BreadCrumb breadCrumbItems={[{ name: 'HOME' }, { name: 'SHOP' }, { name: 'PRODUCT PAGE' }, { name: 'CART' }]}></BreadCrumb>
            <div className="mw-1264  m-auto mt-3">

                <div className='continue_shopping'>Continue Shopping</div>
                <div className="mt-5 px-4 py-5 border-bottom d-flex flex-row justify-content-between">

                    {
                        heading.map((item) => {
                            return (<>
                                <div className={`col-2 d-flex flex-column px-5  heading-text color-gre ${item.extraclass}`} >{item.name}</div>

                            </>)
                        })
                    }

                </div>

                <div className="d-flex flex-row px-4 py-5 border-bottom justify-content-between ">
                    <div className="col-4  d-flex flex-row align-items-center">
                        <button className='delete-product-btn border-0 me-4'> <span className='cross'>X</span>  </button>
                        <img src={process.env.PUBLIC_URL + '/productPage.png'} height={110} width={110} alt="" />
                        <div className="ms-3 product_page-text">
                            Tug of War Dog Toy
                        </div>
                    </div>
                    <div className="col-2 px-4">
                        <div className="ms-3 product_page-text">
                            $12.12
                        </div>
                    </div>
                    <div className="col-2 px-5">
                        <QuantityCounter></QuantityCounter>
                    </div>
                    <div className="col-3 px-4">
                        <div className="ms-3 product_page-text">
                            $12.12
                        </div>
                    </div>
                </div>

                <div className="mt-5 d-flex flex-row justify-content-between">
                    <div className="col-4 d-flex flex-column">
                        <div className="order_note">
                            Add a note to your order
                        </div>
                        <div className="">
                            <textarea className='w-100 mt-2   product-order-note-textarea'> </textarea>
                        </div>
                    </div>
                    <div className="col-4 d-flex flex-column ">
                        <div className="sub-total-text">
                            Subtotal before delivery
                        </div>
                        <div className="mt-3 sub-total-price">$32.39</div>
                        <div className="d-flex mt-3 flex-row justify-content-end">

                            <ButtonComponent bgColor='background-primary' canActivateLoader={false} content='Checkout' isSubmitButton={false} shouldDisabel={false} extraClass='py-3 px-4 border-0 '  ></ButtonComponent>
                        </div>
                    </div>

                </div>
                <ServicesOffered></ServicesOffered>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ProductCart
