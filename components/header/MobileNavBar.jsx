import Link from 'next/link'
import { useState, useContext } from 'react'
import LogoDark from '../icon/Brand/LogoDark'
import SignupModal from '../member/SignupModal'
import SearchBar from '../modal/SearchBar'
import MobileGrid from './MobileGrid'
import ToggleMember from './ToggleMember'
import { mobileBrandMenu, mobileContactMenu, mobileDocsMenu } from '@/data/nav'
import ModalContext from '@/utils/ModalContext'

export default function MobileNavBar() {
  const { handleSearchBar } = useContext(ModalContext)
  const [isOpen, setIsOpen] = useState(false)
  const [showMemberModal, setShowMemberModal] = useState(false)

  return (
    <nav className='z-100 pt-100px display-none sm:block md:block' aria-label='header navigation mobile'>
      <div
        className={`fixed top-0per right-0per z-99 m-30px hamburger w-50px h-50px rounded-20px bg-gray-8 ${
          isOpen && 'is-active'
        }`}
        id='hamburger-sm'
        onClick={() => setIsOpen(!isOpen)}>
        <div className='mt-15px'>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
      </div>
      {isOpen && (
        <div className='overflow-hidden'>
          <div
            className={`${
              isOpen
                ? 'p-30px fixed top-0per left-0per bg-white z-98 w-100per h-100per display-block clip-circle-in-topright animate animation-forwards overflow-auto'
                : 'display-none'
            }`}>
            <div className='mb-25px'>
              <Link href='/'>
                <a onClick={() => setIsOpen(false)} className='fade-in animate animation-forwards'>
                  <LogoDark width='50px' height='50px' />
                </a>
              </Link>
            </div>
            <ToggleMember />
            <SignupModal showModal={showMemberModal} setShowModal={setShowMemberModal} />

            {/* TODO add blog */}
            <MobileGrid mapping={mobileBrandMenu} header='brand' headerLink='/brand' />
            <MobileGrid mapping={mobileDocsMenu} header='documentation' headerLink='/docs' />
            <MobileGrid mapping={mobileContactMenu} header='contact' headerLink='/contact' />
            <div className='bg-white md:mt-50px'>
              <SearchBar setShowModal={handleSearchBar} className='mb-25px bg-white shadow-green-10' />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
