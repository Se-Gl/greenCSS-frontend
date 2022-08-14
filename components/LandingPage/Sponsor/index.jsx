import { useContext } from 'react'
import { GreenButton } from '@/components/reusable/Button'
import DonationContext from '@/utils/DonationContext'
import ModernGrid from '@/components/grid/ModernGrid'
import Section from '@/components/reusable/Section'

const Sponsor = () => {
  const { amount, finalPrize } = useContext(DonationContext)

  let ceiledPrice = Math.ceil(finalPrize)

  const checkPrediction = finalPrize >= 0.1

  return (
    <>
      <Section id='donation'>
        <ModernGrid
          header={`${
            checkPrediction
              ? `Minimize your personal emissions by donating USD ${checkPrediction ? ceiledPrice : amount}$.`
              : 'Change the world. Even a small donation does a lot.'
          }`}
          subheader='In cooperation with greenCSS partners, global projects are supported in order to minimize the CO&#x2082; emissions. Every cent goes directly to a green project. You want to learn more? Subscribe to the newsletter and receive in real time which projects are currently supported.'
          imageBg='orange'
          imageUrl='/images/member/member-hand.webp'
          imageAlt='greencss donation'>
          <GreenButton
            isDefault={false}
            isLinkedOutline={true}
            href={`${checkPrediction ? '/member#member-prediction' : '/member#member-plans'}`}>
            {`${checkPrediction ? 'Go Zero' : 'Or Become A Member'}`}
          </GreenButton>
        </ModernGrid>
      </Section>
    </>
  )
}

export default Sponsor
