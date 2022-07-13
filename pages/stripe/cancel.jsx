import dynamic from 'next/dynamic'
import SEO from '@/components/reusable/SEO'
import ModernGrid from '@/components/grid/ModernGrid'
import { GreenButton } from '@/components/reusable/Button'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function stripeCancel() {
  return (
    <SEO
      title='Membership - something went wrong'
      keywords='membership, green software, pricing'
      description='greenCSS membership Payment - error.'
      url='/stripe/cancel'>
      <Layout className='min-h-100vh relative z-2 bg-red-7'>
        <ModernGrid
          header='Oops! - Please forgive me!'
          subheader='Something has gone wrong. Please try again later or log in again.'
          imageBg='blue'
          imageUrl='/images/404/404-greencss.webp'
          imageAlt='greencss 404 not found'
        />
        <div className='w-100per mb-50px'>
          <GreenButton href='/member/account' hasLink={true} isDefault={false}>
            Member area
          </GreenButton>
        </div>
      </Layout>
    </SEO>
  )
}
