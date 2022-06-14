import React, { useState, useEffect, useContext } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import axios from 'axios'
import SEO from '@/components/reusable/SEO'
import { UserContext } from '@/utils/SubscriptionContext'
import CheckServerAuth from '@/components/auth/CheckServerAuth'
import { GreenButton } from '@/components/reusable/Button'
import SignupModal from '@/components/member/SignupModal'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function account() {
  const router = useRouter()
  const [state] = useContext(UserContext)
  const [subscriptions, setSubscriptions] = useState([])
  const [isAuth, setIsAuth] = useState(null)
  const [showModal, setShowModal] = useState(false)

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

  const CardContent = ({ description, fetchedValue }) => {
    return (
      <p className='mb-0px font-500'>
        {description} <span className='text-black-10 font-400'>{fetchedValue}</span>
      </p>
    )
  }

  return (
    <CheckServerAuth isAuth={isAuth} setIsAuth={setIsAuth}>
      {isAuth ? (
        <SEO
          title='greenCSS member area'
          description='Check your current green state. Decide independently where your donations go.'
          url='member'
          keywords='member, donation, green software, sustainable software'>
          <Layout className='container sm:px-10px md:px-25px lg:px-50px min-h-100vh'>
            {subscriptions.length == 0 && (
              <div className='max-w-50rem p-50px bg-white shadow-small-black-10 mt-50px rounded-20px'>
                <h1>In the future you will see all your subscriptions here</h1>
                <p className='text-black-10'>You will be able to update or delete your donations.</p>
                <GreenButton hasLink={true} isDefault={false} href='/member#member-plans'>
                  Donate
                </GreenButton>
              </div>
            )}
            <div className='grid grid-col-2 gap-30px sm:grid-col-1 md:grid-col-1 my-50px'>
              {subscriptions &&
                subscriptions.map((sub) => (
                  <article className='col-span-1 bg-white rounded-20px p-20px shadow-small-black-10' key={sub.id}>
                    <h4 className='fw-bold'>{sub.plan.nickname}</h4>
                    <CardContent
                      description={null}
                      fetchedValue={(sub.plan.amount / 100).toLocaleString('en-US', {
                        style: 'currency',
                        currency: sub.plan.currency
                      })}
                    />
                    <CardContent description='Status: ' fetchedValue={sub.status} />
                    <CardContent
                      description='Card last 4 digit: '
                      fetchedValue={sub.default_payment_method.card.last4}
                    />
                    <CardContent
                      description='Current period end: '
                      fetchedValue={
                        <>
                          {new Date(sub.current_period_end * 1000).toDateString('en-GB')} -{' '}
                          {new Date(sub.current_period_end * 1000).toLocaleTimeString('en-GB', { hour12: false })}
                        </>
                      }
                    />
                    <div className='flex sm:block md:block mt-25px'>
                      <GreenButton
                        className='sm:m-0px md:m-0px text-15px'
                        isDefault={false}
                        isOutline={true}
                        onClick={() => router.push(`/${sub.plan.nickname.toLowerCase().replace(' ', '-')}`)}>
                        Access
                      </GreenButton>
                      <GreenButton className='sm:m-0px md:m-0px sm:mt-25px md:mt-25px' onClick={manageSubscriptions}>
                        Manage Subscription
                      </GreenButton>
                    </div>
                  </article>
                ))}
            </div>
          </Layout>
        </SEO>
      ) : (
        <SignupModal showModal={true} setShowModal={setShowModal} />
      )}
    </CheckServerAuth>
  )
}
