import dynamic from 'next/dynamic'
import Policy from '@/components/privacy/Policy'
import SEO from '@/components/reusable/SEO'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function privacyPolicy() {
  return (
    <SEO
      title='Privacy Policy Guideline'
      keywords='privacy, cookies, tracker, fairness, guideline'
      description='Privacy Policies should any information about our best practices. We inform how your data is processed.'
      url='/privacy/privacy-policy'>
      <Layout className='min-h-100vh relative z-2 bg-magenta-7'>
        <Policy />
      </Layout>
    </SEO>
  )
}
