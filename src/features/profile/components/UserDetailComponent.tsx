import { useDispatch, useSelector } from "react-redux"
import ButtonComponent from "../../../components/button/ButtonComponent"
import ButtonText from "../../../components/button/ButtonText"
import { RootState, store } from "../../../stores/Store"
import { setIsAuthenticatedFalse } from "../../authentication/stores/AuthSlice"
import { useNavigate } from "react-router-dom"

const UserDetailComponent = () => {
    const dispatch = useDispatch<typeof store.dispatch>()
    const navigate = useNavigate()
    const { user } = useSelector((state: RootState) => state.authReducer)
    const handelLogout = () => {

        localStorage.removeItem('petshop')
        dispatch(setIsAuthenticatedFalse())
        navigate('/')
    }
    return (
        <div>
            <div className="d-flex flex-row p-5  m-auto userdetail_container">
                <div className="col-8 d-flex flex-row ">
                    <div className="col-3">
                        <img src={`${process.env.PUBLIC_URL}/userprofile.png`} height={'160px'} width={'160px'} alt="" />
                    </div>
                    <div className="col-9">
                        <div className='user_name'>{user.fullName ?? 'NA'}</div>
                        <div className="col-10 d-flex contact mt-5 justify-content-between">
                            <div className="d-flex flex-row ">
                                <img src={process.env.PUBLIC_URL + '/call.svg'} alt="" />
                                <div className='ms-3 user_phone'>{user.mobileNumber ?? 'NA'}</div>
                            </div>
                            <div className="d-flex flex-row ">
                                <img src={process.env.PUBLIC_URL + '/emailicon.svg'} alt="" />
                                <div className='ms-3 user_phone'>{user.email ?? 'NA'}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 d-flex  justify-content-end  ">
                    <div className="col-3 d-flex flex-column gap-3">

                        <ButtonComponent backgroundColor="primary" disabled={false} isSubmitButton={false} className="" >
                            <ButtonText fontSize="medium" >Edit </ButtonText>
                        </ButtonComponent>
                        <ButtonComponent handelClick={() => { handelLogout() }} backgroundColor="primary" disabled={false} isSubmitButton={false} className="" >
                            <ButtonText fontSize="medium" >Logout </ButtonText>
                        </ButtonComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetailComponent
