import React, { useEffect } from 'react'
import Home from './Pages/Home/Home'
import { Outlet, Route, Routes, useNavigate, useRoutes } from 'react-router-dom'
import PetGuide from './Pages/PetGuide/PetGuide'

const AuthenticatedLayout = () => {
  const router = useNavigate()
  const navigate  =  useNavigate()
  useEffect(()=>{
    navigate('/home')
  },[])

  return (
    <div>
     <Outlet></Outlet>
    </div>
  )
}

export default AuthenticatedLayout
