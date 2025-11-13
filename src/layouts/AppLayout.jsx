import { Outlet } from 'react-router-dom'

import AppHeader from '../components/AppHeader'
import AppNavbar from '../components/AppNavbar'
import AppFooter from '../components/AppFooter'

const AppLayout = ({products, carts, setToken}) => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <AppHeader />
      <AppNavbar products={products} carts={carts} setToken={setToken} />
      <div className='flex-fill px-3' style={{ paddingInline: '25px' }}>
        <Outlet />
      </div>
      <AppFooter />
    </div>
  )
}

export default AppLayout