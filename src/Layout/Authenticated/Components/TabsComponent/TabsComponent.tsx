import React, { useEffect } from 'react'
import './TabsComponent.css'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../../../../State/TabsSlice'
import { RootState } from '../../../../Store/Store'

const TabsComponent = () => {

    const tabs = [
        {
            id: 'my_profile',
            name: 'My Profile'
        },
        {
            id: 'shipping',
            name: 'Shipping'
        },
        {
            id: 'orders',
            name: 'Orders'
        },
        {
            id: 'consulation',
            name: 'Consultation'
        },

    ]

    const dispatch = useDispatch()
    const selctActiveTab = useSelector((state: RootState) => state.tabsReducer.activeTab)

    useEffect(() => {
        dispatch(setActiveTab({ setActiveTabToBe: tabs[0].id }))
    }, [])

    const handelTabClick = (id:string)=>{
        dispatch(setActiveTab({ setActiveTabToBe: id }))
    }


    return (
        <div>
            <div className="tabs_container m-auto ">
                <div className="tabs_wrapper">
                    <div className="d-flex flex-row justify-content-start border-bottom  ">
                        <div className="col-8 d-flex flex-row justify-content-around  h-100">
                            {
                                tabs.map((item) => {
                                    return (<>
                                        <div onClick={(e)=>{e.preventDefault();handelTabClick(item.id)}} className={`${(selctActiveTab === item.id ? 'tab_item-active' : 'tab_item-inactive' )} py-2-rem d-flex cursor-pointer`}>{item.name}</div>
                                    </>)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabsComponent
