import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const AuthenticatedLayout = () => {
  const navigate = useNavigate()
  // useEffect(() => {
  //   navigate('/home')
  // }, [])

  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}

export default AuthenticatedLayout
