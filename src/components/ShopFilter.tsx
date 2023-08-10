import React, { useState } from 'react'
interface FilterItemType {
    name: string,
    id: string,
    count: number
}

interface PropType {
    heading: string,
    filterItems: FilterItemType[]

}

const ShopFilter = ({ heading, filterItems }: PropType) => {

    const [activeFilter,setActiveFilte] = useState('')
    const [collapsed,setCollapsed] = useState(false)

    return (
        <div>
            <div className={`p-3 shop_filter_container ${(collapsed?'collapsed_height':'')}`}>
                <div className="d-flex flex-row">
                    <div className="col-10">
                        <div className="filter_shop_heading" contentEditable>
                        {heading}
                        </div>

                    </div>
                    <div className="col-2">
                        <div className="collapse_filter">
                            <img onClick={()=>{setCollapsed(!collapsed)}} src={process.env.PUBLIC_URL + '/angle-down.png'} height='12px' width='15px' alt="" />
                        </div>
                    </div>
                </div>
                <div className="mt-4 d-flex flex-column filter_item">

                    {
                        filterItems.map((item) => {
                            return (<>
                                <div className="d-flex flex-row">
                                    <div className="col-2 ">
                                        <div className="form-check">
                                            <input onChange={()=>{setActiveFilte(item.id)}} checked={activeFilter===item.id} className="form-check-input" type="radio" name={item.name} id={item.id} />

                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <label className="form-check-label shop_filter_label" htmlFor={item.id}>
                                           {item.name}
                                        </label>
                                    </div>
                                    <div className="col-2">
                                        <label className="form-check-label shop_filter_label" htmlFor={item.id}>
                                            {item.count}
                                        </label>
                                    </div>
                                </div>
                            </>)
                        })
                    }


                </div>

            </div>
        </div>
    )
}

export default ShopFilter
