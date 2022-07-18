import Link from 'next/link'
import { useRouter } from 'next/router'
import { useGlobalContext } from '@/utils/NavContext'
import LogoDark from '../icon/Brand/LogoDark'
import { navmenu } from '@/data/nav'

import ToggleMember from './ToggleMember'

const Navbar = () => {
  const router = useRouter()

  const { openSubmenu, closeSubmenu } = useGlobalContext()
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('map-link')) {
      closeSubmenu()
    }
  }

  const displaySubmenu = (e) => {
    const text = e.target.textContent
    const { left, right, bottom } = e.target.getBoundingClientRect()
    const leftPosition = (left + right) / 2
    const bottomPosition = bottom - 3
    const position = { leftPosition, bottomPosition }
    openSubmenu(text, position)
  }

  return (
    <nav
      aria-label='header navigation'
      className='sm:display-none md:display-none z-99 relative flex h-75px justify-between sm:px-10px md:px-25px lg:px-50px text-black'
      style={{ maxWidth: '110rem' }}
      onMouseOver={handleSubmenu}>
      <div className='w-100per grid grid-col-3'>
        <div className='my-auto'>
          <Link href='/'>
            <a>
              <LogoDark width='50px' height='50px' />
            </a>
          </Link>
        </div>
        <ul className='grid grid-col-3 text-15px'>
          {navmenu.map((item, index) => {
            return (
              <li key={index} onMouseOver={displaySubmenu} className='h-100per flex h-50 items-center justify-center'>
                <Link href={item.path}>
                  <a
                    className={`map-link text-15px font-600 no-decoration cursor-pointer capitalize px-50px pb-15px mt-15px mb-0px ${
                      router.asPath.includes(item.path) ? 'text-greencss font-600' : 'text-black'
                    }`}>
                    {item.title}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className='ml-auto flex justify-center'>
          <ToggleMember />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
