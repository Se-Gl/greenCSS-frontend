import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect, useContext } from 'react'
import axios from 'axios'
import SEO from '@/components/reusable/SEO'
import AuthChecker from '@/components/auth/AuthChecker'
import Loader from '@/components/logo/Loader'
import { UserContext } from '@/utils/SubscriptionContext'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function stripeSuccess() {
  const router = useRouter()
  const [state, setState] = useContext(UserContext)

  useEffect(() => {
    const getSubscriptionStatus = async () => {
      const auth = JSON.parse(localStorage.getItem('auth'))
      const config = {
        headers: { Authorization: `Bearer ${auth.token}` }
      }
      //   console.log(config)
      const { data } = await axios.get('/subscription-status', config)
      //   console.log('SUBSCRIPTION STATUS => ', data)
      if (data && data.length === 0) {
        router.push('/')
      } else {
        // update user in local storage
        const auth = JSON.parse(localStorage.getItem('auth'))
        auth.user = data
        localStorage.setItem('auth', JSON.stringify(auth))
        // update user in context
        setState(auth)
        setTimeout(() => {
          router.push('/member/account')
        }, 1000)
      }
    }

    getSubscriptionStatus()
  }, [])
  return (
    <AuthChecker>
      <SEO
        title='Membership - your contribution for the planet'
        keywords='membership, green software, pricing'
        description='greenCSS membership Payment - success.'
        url='/stripe/success'>
        <Layout className='container min-h-100vh relative z-2'>
          <div className='flex h-100vh w-100per overflow-hidden bg-white'>
            <div className='m-auto'>
              <Loader />
            </div>
          </div>
        </Layout>
      </SEO>
    </AuthChecker>
  )
}
