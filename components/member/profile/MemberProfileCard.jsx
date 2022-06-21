import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { GreenButton } from '@/components/reusable/Button'
import MemberChart from 'pages/member/MemberChart'
import { UserContext } from '@/utils/SubscriptionContext'
import ModernCard from '@/components/reusable/ModernCard'
import { calculateMonths } from '@/utils/calculateMonths'

const CardContent = ({ description, fetchedValue }) => {
  return (
    <p className='mb-0px font-500 text-black text-15px'>
      {description} <span className='text-black-10 font-400'>{fetchedValue}</span>
    </p>
  )
}

export default function MemberProfileCard() {
  const [subscriptions, setSubscriptions] = useState([])
  const [userprofileUrl, setuserprofileUrl] = useState('')

  const [state] = useContext(UserContext)

  useEffect(() => {
    const getSubscriptions = async () => {
      const { data } = await axios.get('/subscriptions')
      // console.log('subs => ', data)
      setSubscriptions(data.data)
    }

    if (state && state.token) getSubscriptions()
  }, [state && state.token])

  useEffect(() => {
    const userProfileLink = async () => {
      const auth = JSON.parse(localStorage.getItem('auth'))
      setuserprofileUrl(auth.user._id)
    }
    userProfileLink()
  }, [])

  const manageSubscriptions = async () => {
    const { data } = await axios.get('/customer-portal')
    window.open(data)
  }

  const getTotalAmount = (sub) =>
    calculateMonths(
      sub.current_period_start,
      sub.cancel_at ? sub.cancel_at : sub.current_period_end,
      ((sub.plan.amount / 100) * sub.quantity).toLocaleString('en-US', {
        currency: sub.plan.currency
      })
    )

  return (
    <div className='my-100px'>
      <div className='my-100px'>
        <h2 className='w-50per sm:w-100per md:w-100per sm:text-40px'>Update your profile</h2>
        <>
          <ModernCard
            isRevert={true}
            header={`Hey ${state.user.name}, do you want to change your user details?`}
            subheader='You are not happy with your username or want to change your email and location. Just update your settings with only a few clicks. '
            imageBg='yellow'
            imageUrl='/images/member/update-user-profile.webp'
            imageAlt='update user profile'>
            <GreenButton isLinkedOutline={true} isDefault={false} href={`/member/${userprofileUrl}`}>
              Update
            </GreenButton>
          </ModernCard>
        </>
      </div>
      <h2 className='w-50per sm:w-100per md:w-100per sm:text-40px'>An overview of your subscriptions</h2>
      {subscriptions.length == 0 && (
        <>
          <ModernCard
            isRevert={false}
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
              <div className='relative p-25px bg-gray-9'>
                <h4>{sub.plan.nickname}</h4>
                <CardContent description='Region: ' fetchedValue={state.user.requestedCountry} />
                <CardContent
                  description='Monthly: '
                  fetchedValue={`${((sub.plan.amount / 100) * sub.quantity).toLocaleString('en-US', {
                    style: 'currency',
                    currency: sub.plan.currency
                  })}`}
                />
                <CardContent description='Total: ' fetchedValue={`$${getTotalAmount(sub)}`} />

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
              <MemberChart chartData={getTotalAmount(sub)} />
            </article>
          ))}
      </div>
    </div>
  )
}
