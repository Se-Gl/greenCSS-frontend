import dynamic from 'next/dynamic'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import SEO from '@/components/reusable/SEO'
import { DonationProvider } from '@/utils/DonationContext'
import { tierDescription } from '@/data/member'
import { UserContext } from '@/utils/SubscriptionContext'
import SponsorCard from '@/components/LandingPage/Sponsor/SponsorCard'
import Checkmark from '@/components/icon/Member/Checkmark'
import ModernGrid from '@/components/grid/ModernGrid'
import { handleShowToast, Toast } from 'codn'
// import MemberSponsor from '@/components/LandingPage/Sponsor/MemberSponsor'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })
const MemberSponsor = dynamic(() => import('@/components/LandingPage/Sponsor/MemberSponsor'), { ssr: false })

export default function index({ stripeData }) {
  const [hover, setHover] = useState(false)
  // context
  const [state, setState] = useContext(UserContext)
  // toast
  const [toastList, setToastList] = useState([])

  const handleClick = async (e, id) => {
    e.preventDefault()

    if (state && state.token) {
      const { data } = await axios.post('/create-subscription', {
        priceId: id
      })
      window.open(data)
    } else {
      handleShowToast(
        'warning',
        'User profile missing',
        '⚠️ Please log in or create a profile to proceed.',
        setToastList
      )
    }
  }

  return (
    <SEO
      title='greenCSS member area'
      description='Check your current green state. Decide independently where your donations go.'
      url='member'
      keywords='member, donation, green software, sustainable software'>
      <Layout className='sm:px-10px md:px-25px lg:px-50px min-h-100vh bg-blue-7'>
        <DonationProvider>
          <Toast toastList={toastList} setToastList={setToastList} duration={10000} position='top-right' />
          <>
            <ModernGrid
              header='Support your world'
              subheader='100% not greenwashing! You decide where you donate. Compare plans, then choose the one just right for you. With a monthly
            subscription you help us to continuously support and restore nature.'
              imageBg='blue'
              imageUrl='/images/member/member-hero.png'
              imageAlt='memmber 3d wolf hero'
            />
            <MemberSponsor />
            <div className='relative min-h-100vh' id='member-plans'>
              <div className='grid grid-col-3 gap-30px sm:grid-col-1 md:grid-col-1 z-2'>
                {stripeData &&
                  stripeData.map((d, i) => (
                    <SponsorCard
                      key={i}
                      index={i}
                      onClick={(e) => handleClick(e, d.id)}
                      header={d.nickname}
                      subheader='The simplest way to protect the environment with a monthly contribution allowing you to compensate CO2 on a regular basis. We thank you in advance for your donations.'
                      price={`$` + d.unit_amount / 100 + '/month'}
                      hover={hover}
                      onMouseLeave={() => setHover(-1)}
                      onMouseEnter={() => {
                        setHover(i)
                      }}
                    />
                  ))}
              </div>
              <div className='absolute md:relative md:my-50px sm:relative sm:my-50px bg-blue-5 rounded-20px flex h-75vh top-33per left-0per right-0per bottom-0per z-neg-1 shadow-small-blue-5'>
                <ul className='m-auto pt-100px md:pt-0px sm:pt-0px'>
                  {tierDescription.map((tier, i) => (
                    <li key={i} className='my-15px flex'>
                      {tier.name}
                      <span className='ml-auto pl-50px'>
                        <Checkmark fillColor='fill-blue' />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        </DonationProvider>
      </Layout>
    </SEO>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/prices`)
  const stripeData = await res.json()

  return { props: { stripeData } }
}
