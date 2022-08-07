import MobileNavBar from './MobileNavBar'
import Navbar from './NavBar'
import SubMenu from './SubMenu'

export default function Header() {
  return (
    <div className='w-100vw bg-transparent'>
      <div className='container'>
        <Navbar />
        <SubMenu />
        {/* Mobile Menu */}
        <MobileNavBar />
      </div>
    </div>
  )
}
