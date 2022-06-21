import React, { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { UserContext } from '@/utils/SubscriptionContext'

export default function CheckServerAuth({ isAuth = null, setIsAuth, children }) {
  const [state] = useContext(UserContext)
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get('/verify-token')
      let result = JSON.stringify(data).replace('{"token":"Bearer ', '').replace('"}', '')

      if (state.token == result) {
        setIsAuth(true)
      } else {
        setIsAuth(false)
        router.push('/member')
      }
    }

    if (state && state.token) getUser()
  }, [state && state.token])

  return <>{children}</>
}
