import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { GreenButton } from '@/components/reusable/Button'
import MemberChart from 'pages/member/MemberChart'
import { UserContext } from '@/utils/SubscriptionContext'
import ModernCard from '@/components/reusable/ModernCard'

const CardContent = ({ description, fetchedValue }) => {
  return (
    <p className='mb-0px font-500 text-black text-15px'>
      {description} <span className='text-white font-400'>{fetchedValue}</span>
    </p>
  )
}

export default function MemberProfileCard() {
  const [subscriptions, setSubscriptions] = useState([])

  const [state] = useContext(UserContext)

  useEffect(() => {
    const getSubscriptions = async () => {
      const { data } = await axios.get('/subscriptions')
      // console.log('subs => ', data)
    }

    if (state && state.token) getSubscriptions()
  }, [state && state.token])

  const manageSubscriptions = async () => {
    const { data } = await axios.get('/customer-portal')
    window.open(data)
  }

  return (
    <div className='my-100px'>
      <h2 className='w-50per sm:w-100per md:w-100per sm:text-40px'>An overview of your subscriptions</h2>
      {subscriptions.length == 0 && (
        <>
          <ModernCard
            isRevert={true}
            header='In the future you will see all your subscriptions here'
            subheader='You will be able to update or delete your donations.'
            imageBg='purple'
            imageUrl='/images/member/member-hand.webp'
            imageAlt='member subscription coin with hand'>
            <GreenButton hasLink={true} isDefault={false} href='/member#member-plans'>
              Donate
            </GreenButton>
          </ModernCard>
        </>
      )}
      <div className='grid grid-col-2 gap-30px sm:grid-col-1 md:grid-col-1 my-50px'>
        {subscriptions &&
          subscriptions.map((sub) => (
            <article className='col-span-1 bg-white rounded-20px p-50px shadow-small-black-10' key={sub.id}>
              <div className='relative p-25px bg-gray'>
                <h4 className='fw-bold'>{sub.plan.nickname}</h4>
                <CardContent description='Region: ' fetchedValue={state.user.requestedCountry} />
                <CardContent
                  description={null}
                  fetchedValue={`${((sub.plan.amount / 100) * sub.quantity).toLocaleString('en-US', {
                    style: 'currency',
                    currency: sub.plan.currency
                  })}/month`}
                />
                <CardContent description='Card last 4 digit: ' fetchedValue={sub.default_payment_method.card.last4} />
                <CardContent
                  description='Current period end: '
                  fetchedValue={
                    <>
                      {new Date(sub.current_period_end * 1000).toDateString('en-GB')} -{' '}
                      {new Date(sub.current_period_end * 1000).toLocaleTimeString('en-GB', { hour12: false })}
                    </>
                  }
                />
                {sub.pause_collection != null ? (
                  <CardContent
                    description='Start pause: '
                    fetchedValue={new Date(sub.pause_collection.resumes_at * 1000).toDateString('en-GB')}
                  />
                ) : (
                  <CardContent description='Status: ' fetchedValue={sub.status} />
                )}

                <GreenButton
                  className='mt-25px sm:ml-0px md:ml-0px text-10px font-500'
                  isDefault={false}
                  isOutline={true}
                  onClick={manageSubscriptions}>
                  Manage Subscription
                </GreenButton>
              </div>
              <MemberChart
                chartData={Math.round(
                  (new Date(sub.current_period_end * 1000).getMonth() -
                    new Date(sub.current_period_start * 1000).getMonth()) *
                    ((sub.plan.amount / 100) * sub.quantity)
                )}
              />
            </article>
          ))}
      </div>
    </div>
  )
}
