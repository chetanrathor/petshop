import React from 'react'
import { getKey } from '../utils'
import { Link } from 'react-router-dom'


interface breadcrumb {
    name: string,
    path?: string
}
interface PropType {
    breadCrumbItems: breadcrumb[]
}

const BreadCrumb = ({ breadCrumbItems }: PropType) => {
    return (
        <div>
            <div className="breadcrumb_container">
                <div className="d-flex align-items-center h-100 breadcrumb_wrapper">
                    {
                        breadCrumbItems.map((item) => {
                            return (<>
                                <div key={getKey()} className="d-flex flex-row align-items-center">

                                    <Link to={(item.path ?? '')} className="ms-2 breadcrumb_item">
                                        {item.name}
                                    </Link>
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
