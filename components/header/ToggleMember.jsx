import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useContext } from 'react'
import { UserContext } from '@/utils/SubscriptionContext'
import { GreenButton } from '../reusable/Button'
import SignupModal from '../member/SignupModal'

export default function ToggleMember() {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const [toggle, setToggle] = useState(false)

  // context
  const [state, setState] = useContext(UserContext)

  const logout = () => {
    setState({ user: {}, token: '' })
    localStorage.removeItem('auth')
    router.push('/member')
  }

  return (
    <>
      {state && state.token ? (
        <div className='ml-auto flex h-75px items-center'>
          <div
            className='relative pb-20px mt-20px'
            onMouseEnter={() => setToggle((toggle) => !toggle)}
            onMouseLeave={() => setToggle((toggle) => !toggle)}>
            <GreenButton
              href='/member/account'
              className='bg-gray-9'
              id='member-button'
              isLinkedOutline={true}
              isDefault={false}>
              Profile
            </GreenButton>
            {toggle && (
              <>
                <div className='min-w-30rem min-h-100px submenu block p-20px z-99 bg-white absolute ml-50px mt-10px translate-x-neg-50per rounded-10px transition-all transition-duration-500ms shadow-small-black-10 clip-circle-in animation-duration-700ms animation-forwards'>
                  <Link href={`/member/${state.user._id}`}>
                    <h4 className='mb-5px text-15px cursor-pointer'>Update Your Profile</h4>
                  </Link>
                  <p className='text-15px text-black-10 mb-10px'>Adjust your settings within seconds.</p>
                  <div className='flex'>
                    <Link href={`/member/${state.user._id}`}>
                      <a className='capitalize my-0px no-decoration flex text-15px font-500 items-center hover:text-greencss active:text-black-7 transition-all transition-duration-500ms'>
                        Update
                      </a>
                    </Link>
                    <Link href='/member/account'>
                      <a className='mx-auto capitalize my-0px no-decoration flex text-15px font-500 items-center hover:text-greencss active:text-black-7 transition-all transition-duration-500ms'>
                        Dashboard
                      </a>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
          <GreenButton
            id='logout-button'
            onClick={logout}
            isOutline={true}
            isDefault={false}
            className='bg-white ml-25px '>
            Logout
          </GreenButton>
        </div>
      ) : (
        <>
          <GreenButton
            id='member-button'
            className='bg-gray-9'
            isOutline={true}
            isDefault={false}
            onClick={() => setShowModal((prev) => !prev)}>
            Login
          </GreenButton>
          <SignupModal toggleModal={showModal} setToggleModal={setShowModal} />
        </>
      )}
    </>
  )
}
