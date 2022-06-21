import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import { UserContext } from '@/utils/SubscriptionContext'

const AuthChecker = ({ ...rest }) => {
  const router = useRouter()
  const [state, setState] = useContext(UserContext)

  if (!state) {
    router.push('/member')
  }

  return state && state.token ? <div {...rest} /> : ''
}

export default AuthChecker
