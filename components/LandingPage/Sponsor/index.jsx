import { useContext, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import { useToast } from '@/components/toast/hooks/useToast'
import { GreenButton } from '@/components/reusable/Button'
import DonationContext from '@/utils/DonationContext'
import ModernGrid from '@/components/grid/ModernGrid'
import ModernCard from '@/components/reusable/ModernCard'
import { Input } from '@/components/reusable/Input'
import Section from '@/components/reusable/Section'
import SponsorCard from './SponsorCard'

const Sponsor = () => {
  const { amount, setAmount, finalPrize } = useContext(DonationContext)
  const [individualAmount, setIndividualAmount] = useState(10)
  const [loading, setLoading] = useState(false)
  const [hover, setHover] = useState(false)

  let ceiledPrice = Math.ceil(finalPrize)
  const toast = useToast()

  // TODO refactor both stripe functions into one reusable
  // stripe default
  const createCheckOutSession = async () => {
    setLoading(true)
    if (amount <= 1 && amount > 1000000) {
      toast('error', `⚡ Please provide a valid donation.`)
    } else {
      const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)
      const stripe = await stripePromise
      const checkoutSession = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/prepare-stripe-payment`, {
        amount: amount
      })

      const result = await stripe?.redirectToCheckout({
        sessionId: checkoutSession.data.id
      })
      setLoading(false)
      if (result?.error) {
        toast('error', `⚡ ${error.message}`)
      }
      if (result.status === 500) {
        toast('error', `⚡ ${error.message}`)
      }
    }
  }

  // individual stripe
  const createIndividualCheckOutSession = async () => {
    setLoading(true)
    if (individualAmount <= 1 && individualAmount > 1000000) {
      toast('error', `⚡ Please provide a valid donation.`)
    } else {
      const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)
      const stripe = await stripePromise
      const checkoutSession = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/prepare-stripe-payment`, {
        amount: individualAmount
      })

      const result = await stripe?.redirectToCheckout({
        sessionId: checkoutSession.data.id
      })
      setLoading(false)
      if (result?.error) {
        toast('error', `⚡ ${error.message}`)
      }
      if (result.status === 500) {
        toast('error', `⚡ ${error.message}`)
      }
    }
  }

  loading && toast('warning', '🙏 You will be forwarded shortly.')

  const individualAmounts = [
    {
      animation: `${ceiledPrice ? 'fade-in-right' : 'fade-in-left'} animation-duration-500ms animation-forwards`,
      isRevert: ceiledPrice ? true : false,
      header: 'Plus+',
      subheader:
        'If you want to be conscientious, the best solution is a one-time plus+ amount. With your contribution, around 250 kilograms of CO2 can be compensated. We thank you in advance for a donation of $10USD. Alternatively, you can register as a member and comfortably arrange an automatic monthly subscription.',
      price: '$10/once',
      amount: 10,
      imageBg: 'turquoise',
      imageUrl: '/images/landingpage/donation/tier-1.webp',
      imageAlt: 'greencss tree card tier 1'
    },
    {
      animation: `${ceiledPrice ? 'fade-in-left' : 'fade-in-right'} animation-duration-500ms animation-forwards`,
      isRevert: ceiledPrice ? false : true,
      header: 'Premium',
      subheader:
        'You are a passionate visionary - besides your emissions, you want to do more for the environment. With your contribution, around 600 kilograms of CO2 can be compensated. We thank you in advance for a donation of $25USD. Alternatively, you can register as a member and comfortably arrange an automatic monthly subscription.',
      price: '$25/once',
      amount: 25,
      imageBg: 'orange',
      imageUrl: '/images/landingpage/donation/tier-2.webp',
      imageAlt: 'greencss tree card tier 2'
    },
    {
      animation: `${ceiledPrice ? 'fade-in-right' : 'fade-in-left'} animation-duration-500ms animation-forwards`,
      isRevert: ceiledPrice ? true : false,
      header: 'Community',
      subheader:
        'You are an all-rounder - in addition to your emission, you want to return more than just a piece. With your contribution, almost 2 tonnes of CO2 can be compensated. We thank you in advance for a donation of $100USD. Alternatively, you can register as a member and comfortably arrange an automatic monthly subscription.',
      price: '$100/once',
      amount: 100,
      imageBg: 'magenta',
      imageUrl: '/images/landingpage/donation/tier-3.webp',
      imageAlt: 'greencss tree card tier 3'
    }
  ]

  const checkPrediction = finalPrize >= 0.1

  return (
    <Section id='donation'>
      <ModernGrid
        header={`${
          checkPrediction
            ? `Minimize your personal emissions by donating USD ${checkPrediction ? ceiledPrice : amount}$.`
            : 'Change the world. Even a small donation does a lot.'
        }`}
        subheader='In cooperation with greenCSS partners, global projects are supported in order to minimize the CO2 emissions. Every cent goes directly to a green project. You want to learn more? Subscribe to the newsletter and receive in real time which projects are currently supported.'
        imageBg='orange'
        imageUrl='/images/member/member-hand.webp'
        imageAlt='greencss donation'
      />

      {checkPrediction && (
        <ModernCard
          isRevert={true}
          isFull={true}
          animation=' fade-in-left animation-duration-500ms animation-forwards'
          header={`Individual - USD ${ceiledPrice}$`}
          headerclass='text-white'
          subheader={`According to your statements about your consumption, we have calculated the following amount for you. Thereby you lower your emission to zero. Tailored for you - USD ${ceiledPrice}$.`}
          descriptionStyle='text-white'
          imageBg='black'
          imageUrl='/images/landingpage/donation/individual-greencss.webp'
          imageAlt='greencss tree card'>
          <GreenButton
            onMouseEnter={() => setAmount(ceiledPrice)}
            onClick={createCheckOutSession}
            isDefault={false}
            isReverse={true}
            id='donate-button'
            className='text-10px border-solid border-white border-1px'>
            {`Donate USD ${ceiledPrice}$`}
          </GreenButton>
        </ModernCard>
      )}
      <ModernCard
        isFull={true}
        isRevert={ceiledPrice ? false : true}
        animation={` ${ceiledPrice ? 'fade-in-right' : 'fade-in-left'} animation-duration-500ms animation-forwards`}
        header='Select your own amount'
        headerclass='text-white'
        descriptionStyle='text-white'
        subheader='Choose your own amount to contribute. greenCSS supports worldwide projects. This is only possible with your help.'
        imageBg={ceiledPrice ? 'blue' : 'greencss'}
        imageUrl='/images/landingpage/donation/custom-amount-greencss.webp'
        imageAlt='greencss tree card'>
        <div className='mb-50px'>
          <Input
            label='Custom Amount'
            type='number'
            id='donate-amount'
            placeholder='Your own donation'
            htmlFor='donate-amount'
            value={individualAmount}
            setValue={setIndividualAmount}
            min='1'
            max='999999'
            onChange={(e) => setIndividualAmount(parseInt(e.target.value))}></Input>

          <GreenButton
            id='donate-button'
            onClick={createIndividualCheckOutSession}
            isdisabled={individualAmount <= 0 || individualAmount >= 1000000 ? true : false}
            isOutline={true}
            type='submit'
            className={`text-white text-15px font-400 ml-0px mt-25px greencss-button-reverse ${
              individualAmount <= 0 || individualAmount >= 1000000
                ? 'bg-gray-5 border-none cursor-not-allowed'
                : 'bg-black'
            }`}
            isDefault={false}>
            {individualAmount <= 0 || individualAmount >= 1000000
              ? 'Enter a valid amount'
              : `donate ${individualAmount}$`}
          </GreenButton>
        </div>
      </ModernCard>

      <div className='m-auto grid grid-col-3 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
        {individualAmounts.map((cart, index) => (
          <SponsorCard
            key={index}
            onClick={createCheckOutSession}
            onMouseEnter={() => {
              setAmount(cart.amount)
              setHover(index)
            }}
            onMouseLeave={() => setHover(-1)}
            onKeyDown={() => setAmount(cart.amount)}
            cart={cart}
            index={index}
            hover={hover}
          />
        ))}
      </div>
    </Section>
  )
}

export default Sponsor
