import React, { useState, useContext } from 'react'
import { UserContext } from '@/utils/SubscriptionContext'
import { smallScreenTier, tierDescription, tierList } from '@/data/member'
import useWindowDimensions from '@/utils/WindowDimensions'
import { GreenButton } from '../reusable/Button'
import UserModal from './UserModal'

export default function MemberTierCard({ title, price, id, handleSubscription, isDescription = false }) {
  const { width } = useWindowDimensions()
  const [showModal, setShowModal] = useState(false)
  // context
  const [state] = useContext(UserContext)

  return (
    <div className='col-span-3 sm:col-span-12 md:col-span-12'>
      <div className={`${isDescription ? 'sm:display-none md:display-none mt-15rem' : null}`}>
        {!isDescription && (
          <div className='flex h-100px w-100per bg-white rounded-10px shadow-small-gray'>
            <div className='m-auto text-center'>
              <h3 className='mb-0px text-25px'>{title}</h3>
              <p className='text-15px mb-0px'>${price}USD/month</p>
            </div>
          </div>
        )}
        <div className='mt-50px mb-25px bg-white rounded-10px shadow-small-gray'>
          <ul className={`${isDescription ? 'font-600' : ''} p-20px`}>
            {width >= 768
              ? isDescription
                ? tierDescription.map((tier, index) => (
                    <li key={index} className='my-20px'>
                      {tier.name}
                    </li>
                  ))
                : tierList.map((tier, index) => (
                    <li key={index} className='my-16px flex justify-center'>
                      {tier.name}
                    </li>
                  ))
              : smallScreenTier.map((tier, index) => (
                  <div key={index} className='text-left my-20px flex'>
                    {tier.name}
                  </div>
                ))}
          </ul>
        </div>
        {state && state.token ? (
          isDescription ? null : (
            <GreenButton
              id='login-button'
              className='text-white bg-black greencss-button-reverse sm:m-50px md:m-50px'
              isOutline={true}
              isDefault={false}
              onClick={(e) => handleSubscription(e, id)}>
              {`Get ${title}`}
            </GreenButton>
          )
        ) : isDescription ? null : (
          <UserModal
            buttonText='Register'
            buttonStyle='text-white bg-black greencss-button-reverse sm:ml-0px sm:mb-50px md:ml-0px md:mb-50px'
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}
      </div>
    </div>
  )
}
