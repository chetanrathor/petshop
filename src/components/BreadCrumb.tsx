import React from 'react'


interface breadcrumb {
    name:string
}
interface PropType {
    breadCrumbItems:breadcrumb[]
}

const BreadCrumb = ({ breadCrumbItems }: PropType) => {
    return (
        <div>
            <div className="breadcrumb_container">
                <div className="d-flex align-items-center h-100 breadcrumb_wrapper">
                    {
                        breadCrumbItems.map((item:any) => {
                            return (<>
                                <div className="d-flex flex-row align-items-center">

                                    <div className="ms-2 breadcrumb_item">
                                        {item.name}
                                        </div>
                                        <img className='ms-2' src={process.env.PUBLIC_URL + "/activedot.png"} height='8px' width='8px' alt="" />
                                    </div>
                                </>)
                            })
                        }

                </div>
            </div>
        </div>
    )
}

export default BreadCrumb
