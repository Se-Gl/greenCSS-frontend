import dynamic from 'next/dynamic'
import SEO from '@/components/reusable/SEO'
import Terms from '@/components/privacy/Terms'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function terms() {
  return (
    <SEO
      title='Terms of services'
      keywords='tos, Terms of services, terms'
      description='Terms of Services - and you know what to expect from greenCSS'
      url='/privacy/terms'>
      <Layout className='container min-h-100vh relative z-2 my-50px'>
        <Terms />
      </Layout>
    </SEO>
  )
}
