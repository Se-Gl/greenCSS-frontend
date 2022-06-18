import dynamic from 'next/dynamic'
import SEO from '@/components/reusable/SEO'
import ModernGrid from '@/components/grid/ModernGrid'
import { GreenButton } from '@/components/reusable/Button'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function PaymentSuccessful() {
  return (
    <SEO
      title='Thank you very much!'
      keywords='donation, green software, sustainable software, fairness'
      description='Every donation counts. Support greenCSS to make your agency, your project and yourself climate neutral.'
      url='/payment-successful'>
      <Layout className='container min-h-100vh relative z-2'>
        <ModernGrid
          header='Thank you very much!'
          subheader='Without you we would not be on this place, where we are right now. To demonstrate our gratitude to you, we demonstrate how much you have accomplished. Thank you!'
          imageBg='red'
          imageUrl='/images/landingpage/donation/tier-3.webp'
          imageAlt='greencss thank you, handshake'
        />
        <div className='w-100per mb-50px'>
          <GreenButton href='/' hasLink={true} isDefault={false}>
            Go back
          </GreenButton>
        </div>
      </Layout>
    </SEO>
  )
}
