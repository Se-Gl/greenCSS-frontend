import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { sortAlphabetically } from '@/utils/SortBy'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function Auth() {
  const router = useRouter()
  const [users, setUsers] = useState([])
  const [auth, setAuth] = useState(false)
  let allUsers = users.sort(sortAlphabetically)

  useEffect(() => {
    const getUsers = async () => {
      const auth = JSON.parse(localStorage.getItem('auth'))

      if (auth == null || auth.user.role != 1) {
        router.push('/member/account')
      } else {
        const config = {
          headers: { Authorization: `Bearer ${auth.token}` }
        }
        const { data } = await axios.get('/users', config)
        setUsers(data)
        setAuth(true)
      }
    }

    getUsers()
  }, [])

  return (
    <Layout className='sm:px-10px md:px-25px lg:px-50px min-h-100vh'>
      <div className='my-50px grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
        {auth &&
          allUsers.map((user, index) => (
            <div key={index} className='bg-white px-25px py-50px rounded-20px shadow-small-gray'>
              <h3 className='mb-0px'>{user.name}</h3>
              <p className='mb-10px text-black-10'>{user.email}</p>
              <ul>
                <li>
                  <span className='font-500'>UID: </span>
                  {user._id}
                </li>
                <li>
                  <span className='font-500'>Region: </span>
                  {user.requestedCountry}
                </li>

                <a
                  rel='noreferrer'
                  className='no-decoration text-10px'
                  href={`https://dashboard.stripe.com/${
                    process.env.NODE_ENV == 'development' ? 'test' : ''
                  }/customers/${user.stripe_customer_id}`}
                  target='_blank'>
                  <span className='font-500 no-decoration text-10px'>Stripe Customer: </span>
                  {user.stripe_customer_id}
                </a>
                <br />
                <div className='overflow-y-scroll max-h-20vh'>
                  {user.subscriptions.map((sub, index) => (
                    <div className='my-10px bg-gray-9 p-20px rounded-10px' key={index}>
                      <a
                        rel='noreferrer'
                        className='no-decoration text-10px'
                        href={`https://dashboard.stripe.com/${
                          process.env.NODE_ENV == 'development' ? 'test' : ''
                        }/subscriptions/${sub.id}`}
                        target='_blank'>
                        <span className='font-500 no-decoration text-10px'>Subscription id: </span>
                        {sub.id}
                      </a>
                      <br />
                      <span className='font-500'>Subscription: </span>
                      <span>
                        {sub.plan.nickname && sub.plan.nickname}
                        {!sub.plan.nickname && 'N/A'}
                      </span>{' '}
                      <br />
                      <span className='font-500'>Started: </span>
                      {new Date(sub.current_period_start * 1000).toDateString('en-GB')} -{' '}
                      {new Date(sub.current_period_start * 1000).toLocaleTimeString('en-GB', {
                        hour12: false
                      })}
                      LT
                      <br />
                      <span className='font-500'>Quantity: </span>
                      {sub.quantity}
                      <br />
                      <span className='font-500'>Amount p/M: </span>
                      {`${((sub.plan.amount / 100) * sub.quantity).toLocaleString('en-US', {
                        style: 'currency',
                        currency: sub.plan.currency
                      })}/month`}
                      {sub.pause_collection != null && (
                        <>
                          <br />
                          <span className='font-500'>Start pause: </span>
                          {new Date(sub.pause_collection.resumes_at * 1000).toDateString('en-GB')}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </ul>
            </div>
          ))}
      </div>
    </Layout>
  )
}
