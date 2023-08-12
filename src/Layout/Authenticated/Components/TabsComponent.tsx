import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../stores/Store'
import { setProfileTab } from '../../../features/profile/state/profile-tab.state'
import { getKey } from '../../../utils'

const TabsComponent = () => {

    const tabs = [
        {
            id: 'myprofile',
            name: 'My Profile'
        },
        {
            id: 'shipping',
            name: 'Shipping'
        },
        {
            id: 'order',
            name: 'Orders'
        },
        {
            id: 'consultation',
            name: 'Consultation'
        },

    ]

    const dispatch = useDispatch()
    const selctActiveTab = useSelector((state: RootState) => state.profileTabReducer.activeTab)



    const handelTabClick = (id: string) => {
        dispatch(setProfileTab({ activeTab: id }))
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
                                        <div key={getKey()} onClick={(e) => { e.preventDefault(); handelTabClick(item.id) }} className={`${(selctActiveTab === item.id ? 'tab_item-active' : 'tab_item-inactive')} py-2-rem d-flex cursor-pointer`}>{item.name}</div>
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
