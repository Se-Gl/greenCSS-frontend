import dynamic from 'next/dynamic'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import { handleShowToast, Toast } from 'codn'
import SEO from '@/components/reusable/SEO'
import { DonationProvider } from '@/utils/DonationContext'
import { UserContext } from '@/utils/SubscriptionContext'
import SponsorCard from '@/components/LandingPage/Sponsor/SponsorCard'
import ModernGrid from '@/components/grid/ModernGrid'
import SignupModal from '@/components/member/SignupModal'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })
const MemberSponsor = dynamic(() => import('@/components/LandingPage/Sponsor/MemberSponsor'), { ssr: false })

export default function index({ stripeData }) {
  const [hover, setHover] = useState(false)
  const [showModal, setShowModal] = useState(false)
  // context
  const [state, setState] = useContext(UserContext)
  // toast
  const [toastList, setToastList] = useState([])

  const handleClick = async (e, id) => {
    e.preventDefault()

    if (state && state.token) {
      handleShowToast('info', 'Information', '🙏 You will be forwarded shortly.', setToastList)
      const { data } = await axios.post('/create-subscription', {
        priceId: id
      })
      window.open(data)
    } else {
      setShowModal(!showModal)
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
          <div className='relative' style={{ zIndex: 99999999 }}>
            <Toast toastList={toastList} setToastList={setToastList} duration={10000} position='top-right' />
          </div>
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
                      subheader='The simplest way to protect the environment with a monthly contribution allowing you to compensate CO&#x2082; on a regular basis. We thank you in advance for your donations.'
                      price={`$` + d.unit_amount / 100 + '/month'}
                      hover={hover}
                      onMouseLeave={() => setHover(-1)}
                      onMouseEnter={() => {
                        setHover(i)
                      }}
                    />
                  ))}
              </div>
            </div>
          </>
          <div className='relative' style={{ zIndex: 99999998 }}>
            <SignupModal toggleModal={showModal} setToggleModal={setShowModal} />
          </div>
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
