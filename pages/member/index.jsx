import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import axios from 'axios'
import SEO from '@/components/reusable/SEO'
import { UserContext } from '@/utils/SubscriptionContext'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })
const MemberTierCard = dynamic(() => import('@/components/member/MemberTierCard'))

export default function index({ stripeData }) {
  const router = useRouter()
  // context
  const [state, setState] = useContext(UserContext)

  const handleClick = async (e, id) => {
    e.preventDefault()

    if (state && state.token) {
      const { data } = await axios.post('/create-subscription', {
        priceId: id
      })
      window.open(data)
    } else {
      router.push('/register')
    }
  }

  return (
    <SEO
      title='greenCSS member area'
      description='Check your current green state. Decide independently where your donations go.'
      url='member'
      keywords='member, donation, green software, sustainable software'>
      <Layout className='sm:px-10px md:px-25px lg:px-50px min-h-100vh bg-blue-7'>
        <div className='relative h-100vh'>
          <Image
            layout='fill'
            objectFit='contain'
            className='object-cover pointer-events-none'
            src='/images/member/member-hero.webp'
            alt='greenCSS Memberhero'
            placeholder='blur'
            blurDataURL='/_next/image?url=/images/member/member-hero.webp&w=16&q=1'
          />
          <div className='text-center absolute right-0per left-0per top-0per bottom-0per m-auto'>
            <div className='relative top-50per translate-y-neg-50per'>
              <h1 className='sm:rel-text-6vw md:rel-text-6vw lg:rel-text-6vw text-75px'>Support your world</h1>
              <p className='max-w-60rem sm:max-w-30rem md:max-w-30rem mx-auto'>
                You decide where you donate. Compare plans, then choose the one just right for you.
              </p>
            </div>
          </div>
        </div>

        <div className='my-100px' id='member-plans'>
          <div className='mx-auto text-center'>
            <h2>Compare your benefits</h2>
            <p className='text-black-10'>
              With a monthly subscription you help us to continuously support and restore nature.
            </p>
          </div>
          <div className='grid grid-col-12 gap-30px sm:grid-col-1 md:grid-col-1'>
            <MemberTierCard title='' price='' isDescription={true} handleSubscription={() => console.log('clicked')} />

            {stripeData &&
              stripeData.map((d, i) => (
                <MemberTierCard
                  key={i}
                  title={d.nickname}
                  price={d.unit_amount / 100}
                  id={d.id}
                  handleSubscription={handleClick}
                />
              ))}
          </div>
        </div>
      </Layout>
    </SEO>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/prices`)
  const stripeData = await res.json()

  return { props: { stripeData } }
}
