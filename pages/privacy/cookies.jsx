import Cookies from '@/components/privacy/Cookies'
import Layout from '@/components/reusable/Layout'

export default function cookies() {
  return (
    <Layout
      className='container min-h-100vh relative z-2'
      title='Privacy first - how to delete browser cookies'
      keywords='privacy, cookies, tracker, fairness, delete cookie'
      description="Privacy Policies should include information regarding a website's use of cookies. We inform how your data can be deleted."
      url='/privacy/cookies'>
      <Cookies />
    </Layout>
  )
}