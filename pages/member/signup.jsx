import dynamic from 'next/dynamic'
import SignupModal from '@/components/member/SignupModal'
import SEO from '@/components/reusable/SEO'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function signup() {
  return (
    <SEO
      title='Sign up to greenCSS'
      keywords='signup, greenCSS, member'
      description='A better way to handle your environement - become a member'
      url='/member/signup'>
      <Layout className='container relative z-2'>
        <SignupModal />
      </Layout>
    </SEO>
  )
}
