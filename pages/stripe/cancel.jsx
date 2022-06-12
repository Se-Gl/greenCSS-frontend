import dynamic from 'next/dynamic'
import SEO from '@/components/reusable/SEO'
import SubSectionHero from '@/components/grid/SubSectionHero'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function stripeCancel() {
  return (
    <SEO
      title='Membership - something went wrong'
      keywords='membership, green software, pricing'
      description='greenCSS membership Payment - error.'
      url='/stripe/cancel'>
      <Layout className='container min-h-100vh relative z-2'>
        <SubSectionHero header='Oops!' subheader='Something has gone wrong. Please try again later or log in again.' />
      </Layout>
    </SEO>
  )
}
