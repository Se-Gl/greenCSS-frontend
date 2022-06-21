import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import SEO from '@/components/reusable/SEO'
import CheckServerAuth from '@/components/auth/CheckServerAuth'
import SignupModal from '@/components/member/SignupModal'
import MemberProfileCard from '@/components/member/profile/MemberProfileCard'
import MemberProfileHero from '@/components/member/profile/MemberProfileHero'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function account() {
  const [isAuth, setIsAuth] = useState(null)
  const [showModal, setShowModal] = useState(false)

  return (
    <CheckServerAuth isAuth={isAuth} setIsAuth={setIsAuth}>
      {isAuth ? (
        <SEO
          title='greenCSS member area'
          description='Check your current green state. Decide independently where your donations go.'
          url='member'
          keywords='member, donation, green software, sustainable software'>
          <Layout className='container sm:px-10px md:px-25px lg:px-50px min-h-100vh'>
            <MemberProfileHero />
            <MemberProfileCard />
          </Layout>
        </SEO>
      ) : (
        <SignupModal showModal={true} setShowModal={setShowModal} />
      )}
    </CheckServerAuth>
  )
}
