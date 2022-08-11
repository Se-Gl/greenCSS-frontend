import { useContext, useState } from 'react'
import { handleShowToast, Input, Toast } from 'codn'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import { GreenButton } from '@/components/reusable/Button'
import DonationContext from '@/utils/DonationContext'
import ModernCard from '@/components/reusable/ModernCard'
import Section from '@/components/reusable/Section'

const MemberSponsor = () => {
  const { amount, setAmount, finalPrize } = useContext(DonationContext)

  const [individualAmount, setIndividualAmount] = useState(10)

  let ceiledPrice = Math.ceil(finalPrize)
  //   console.log(ceiledPrice)
  // toast
  const [toastList, setToastList] = useState([])

  // TODO refactor both stripe functions into one reusable
  // stripe default
  const createCheckOutSession = async () => {
    handleShowToast('info', 'Information', '🙏 You will be forwarded shortly.', setToastList)
    if (amount <= 1 && amount > 1000000) {
      handleShowToast('error', 'Error', '⚡ Please provide a valid donation.', setToastList)
    } else {
      const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)
      const stripe = await stripePromise
      const checkoutSession = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/prepare-stripe-payment`, {
        amount: amount
      })

      const result = await stripe?.redirectToCheckout({
        sessionId: checkoutSession.data.id
      })

      // setLoading(false)
      if (result?.error) {
        handleShowToast('error', 'Error', `⚡ ${error.message}`, setToastList)
      }
      if (result.status === 500) {
        handleShowToast('error', 'Error', `⚡ ${error.message}`, setToastList)
      }
    }
  }

  // individual stripe
  const createIndividualCheckOutSession = async () => {
    handleShowToast('info', 'Information', '🙏 You will be forwarded shortly.', setToastList)
    if (individualAmount <= 1 && individualAmount > 1000000) {
      handleShowToast('error', 'Error', '⚡ Please provide a valid donation.', setToastList)
    } else {
      const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)
      const stripe = await stripePromise
      const checkoutSession = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/prepare-stripe-payment`, {
        amount: individualAmount
      })

      const result = await stripe?.redirectToCheckout({
        sessionId: checkoutSession.data.id
      })

      // setLoading(false)
      if (result?.error) {
        handleShowToast('error', 'Error', `⚡ ${error.message}`, setToastList)
      }
      if (result.status === 500) {
        handleShowToast('error', 'Error', `⚡ ${error.message}`, setToastList)
      }
    }
  }

  const checkPrediction = finalPrize >= 0.1

  return (
    <>
      <Toast toastList={toastList} setToastList={setToastList} duration={10000} position='top-right' />
      <Section id='member-prediction' header='Individual or self-determined - you decide'>
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
            <div className='w-100per max-w-45rem'>
              <Input
                shadow={false}
                label='Custom Amount'
                type='number'
                id='donate-amount'
                placeholder='Your own donation'
                htmlFor='donate-amount'
                value={individualAmount}
                setValue={setIndividualAmount}
                min='1'
                max='999999'
                onChange={(e) => setIndividualAmount(parseInt(e.target.value))}
              />
            </div>

            <GreenButton
              id='donate-button'
              onClick={createIndividualCheckOutSession}
              isdisabled={individualAmount <= 0 || individualAmount >= 1000000 ? true : false}
              isOutline={true}
              type='submit'
              className={`text-15px font-400 ml-0px mt-25px ${
                individualAmount <= 0 || individualAmount >= 1000000 ? 'bg-gray-5 border-none cursor-not-allowed' : ''
              }`}
              isDefault={false}>
              {individualAmount <= 0 || individualAmount >= 1000000
                ? 'Enter a valid amount'
                : `donate ${individualAmount}$`}
            </GreenButton>
          </div>
        </ModernCard>
      </Section>
    </>
  )
}

export default MemberSponsor
