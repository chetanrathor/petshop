import React from 'react'
import './UserDetailComponent.css'
import ButtonComponent from '../../../../Shared/Components/ButtonComponent/ButtonComponent'
const UserDetailComponent = () => {
    return (
        <div>
            <div className="d-flex flex-row p-5  m-auto userdetail_container">
                <div className="col-8 d-flex flex-row ">
                    <div className="col-3">
                        <img src={`${process.env.PUBLIC_URL}/userprofile.png`} height={'160px'} width={'160px'} alt="" />
                    </div>
                    <div className="col-9">
                        <div className='user_name'>Darren</div>
                        <div className="col-10 d-flex contact mt-5 justify-content-between">
                            <div className="d-flex flex-row ">
                                <img src={process.env.PUBLIC_URL + '/call.svg'} alt="" />
                                <div className='ms-3 user_phone'>(887) 123 - 19801</div>
                            </div>
                            <div className="d-flex flex-row ">
                                <img src={process.env.PUBLIC_URL + '/emailicon.svg'} alt="" />
                                <div className='ms-3 user_phone'>dareeneler@mail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-end  ">
                    <div className="col-2">

                    <ButtonComponent bgColor='background-primary'  canActivateLoader={false} content='Edit' isSubmitButton={false} shouldDisabel={false} extraClass='border-0 p-3' handelClick={()=>{}}></ButtonComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetailComponent
