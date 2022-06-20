import { useRouter } from 'next/router'
import { useState, useContext } from 'react'
import { UserContext } from '@/utils/SubscriptionContext'
import { GreenButton } from '../reusable/Button'
import UserModal from '../member/UserModal'

export default function ToggleMember() {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
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
        <div className='ml-auto flex'>
          <GreenButton
            href='/member/account'
            className='mr-25px bg-gray-9 border-none hover:border-solid'
            id='member-button'
            isLinkedOutline={true}
            isDefault={false}>
            Profile
          </GreenButton>
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
