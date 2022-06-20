import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
import SEO from '@/components/reusable/SEO'
import CheckServerAuth from '@/components/auth/CheckServerAuth'
const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function UserUpdate() {
  const [isAuth, setIsAuth] = useState(null)
  return (
    <CheckServerAuth isAuth={isAuth} setIsAuth={setIsAuth}>
      <SEO
        title='greenCSS member area'
        description='Check your current green state. Decide independently where your donations go.'
        url='member'
        keywords='member, donation, green software, sustainable software'>
        <Layout className='container sm:px-10px md:px-25px lg:px-50px min-h-100vh'>
          {isAuth ? <>auth!</> : <>return</>}
        </Layout>
      </SEO>
    </CheckServerAuth>
  )
}
