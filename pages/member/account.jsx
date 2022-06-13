import React, { useState, useEffect, useContext } from 'react'
import dynamic from 'next/dynamic'
import axios from 'axios'
import SEO from '@/components/reusable/SEO'
import { UserContext } from '@/utils/SubscriptionContext'
import CheckServerAuth from '@/components/auth/CheckServerAuth'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function account() {
  const [state, setState] = useContext(UserContext)
  const [subscriptions, setSubscriptions] = useState([])
  const [isAuth, setIsAuth] = useState(null)

  useEffect(() => {
    const getSubscriptions = async () => {
      const { data } = await axios.get('/subscriptions')
      console.log('subs => ', data)
      setSubscriptions(data.data)
    }

    if (state && state.token) getSubscriptions()
  }, [state && state.token])

  const manageSubscriptions = async () => {
    const { data } = await axios.get('/customer-portal')
    window.open(data)
  }
  return (
    <CheckServerAuth isAuth={isAuth} setIsAuth={setIsAuth}>
      {isAuth && (
        <SEO
          title='greenCSS member area'
          description='Check your current green state. Decide independently where your donations go.'
          url='member'
          keywords='member, donation, green software, sustainable software'>
          <Layout className='container sm:px-10px md:px-25px lg:px-50px min-h-100vh'>
            {isAuth ? 'is auth' : 'loading'}
          </Layout>
        </SEO>
      )}
    </CheckServerAuth>
  )
}
