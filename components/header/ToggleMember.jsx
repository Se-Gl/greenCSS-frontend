import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '@/utils/SubscriptionContext'
import { GreenButton } from '../reusable/Button'
import UserModal from '../member/UserModal'

export default function ToggleMember() {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [userUrl, setUserUrl] = useState('')
  // context
  const [state, setState] = useContext(UserContext)

  const logout = () => {
    setState({ user: {}, token: '' })
    localStorage.removeItem('auth')
    router.push('/member')
  }
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('auth'))
    setUserUrl(auth.user._id)
  }, [])

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
              className='mr-25px bg-gray-9 border-none hover:border-solid'
              id='member-button'
              isLinkedOutline={true}
              isDefault={false}>
              Profile
            </GreenButton>
            {toggle && (
              <>
                <div className='min-w-30rem min-h-100px submenu block p-20px z-99 bg-white absolute ml-50px mt-10px translate-x-neg-50per rounded-10px transition-all transition-duration-500ms shadow-small-black-10 clip-circle-in animation-duration-700ms animation-forwards'>
                  <Link href={`/member/${userUrl}`}>
                    <h4 className='mb-5px text-15px cursor-pointer'>Update Your Profile</h4>
                  </Link>
                  <p className='text-15px text-black-10 mb-10px'>Adjust your settings within seconds.</p>
                  <Link href={`/member/${userUrl}`}>
                    <a className='capitalize my-0px no-decoration flex text-15px font-500 items-center hover:text-greencss active:text-black-7 transition-all transition-duration-500ms'>
                      Update
                    </a>
                  </Link>
                </div>
              </>
            )}
          </div>
          <GreenButton id='logout-button' onClick={logout} className='' isOutline={true} isDefault={false}>
            Logout
          </GreenButton>
        </div>
      ) : (
        <UserModal buttonText='Login' showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  )
}
