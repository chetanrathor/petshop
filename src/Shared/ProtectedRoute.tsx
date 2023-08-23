import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, store } from '../stores/Store'
import { useNavigate } from 'react-router-dom'
import { setChild, setShow } from '../State/ModalSlice'
import { MODAL_TYPES } from '../constant/modal-types'

const ProtectedRoute = ({ children }: any) => {
    const isAuthenticated = useSelector((state: RootState) => state.authReducer.isAuthenticated)
    const navigate = useNavigate()
    const dispatch = useDispatch<typeof store.dispatch>()

    useEffect(() => {
        if (isAuthenticated === false) {
            navigate('/')
            // dispatch(setShow(true))
            // dispatch(setChild(MODAL_TYPES.LOGIN))

        }

    }, [navigate])

    return (<>
        {
            isAuthenticated ? children : null
        }
    </>)
}

export default ProtectedRoute