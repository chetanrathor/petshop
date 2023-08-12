import { Outlet, useNavigate } from 'react-router-dom'

const AuthenticatedLayout = () => {
  const navigate = useNavigate()


  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}

export default AuthenticatedLayout
