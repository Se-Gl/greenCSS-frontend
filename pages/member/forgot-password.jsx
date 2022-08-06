import dynamic from 'next/dynamic'
import { useState, useContext } from 'react'
import { Input } from 'codn'
import { forgotPassword } from '@/utils/Auth'
import SEO from '@/components/reusable/SEO'
import ModernGrid from '@/components/grid/ModernGrid'
import CheckValidInput from '@/components/member/CheckValidInput'
import { GreenButton } from '@/components/reusable/Button'
import { useToast } from '@/components/toast/hooks/useToast'
import { checkValidEmail } from '@/data/validation'
import { UserContext } from '@/utils/SubscriptionContext'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function forgotPasswordPage() {
  // context
  const [state] = useContext(UserContext)
  const toast = useToast()
  const [email, setEmail] = useState(state != null ? state.user.email : '')

  const handleSubmit = (e) => {
    e.preventDefault()
    forgotPassword({ email }).then((data) => {
      if (data.error) {
        toast('error', `⚡ Oops! ${data.error}`)
      } else {
        setEmail('')
        toast('success', `🚀 ${data.message}`)
      }
    })
  }

  // validation
  let checkIsDisabled = checkValidEmail(email)

  return (
    <SEO
      title='greenCSS change your member password?'
      description='Did you forgot your passowrd? Reset your password here.'
      url='member/forgot-password'
      keywords='member, forgot password, reset password'>
      <Layout className='sm:px-10px md:px-25px lg:px-50px min-h-100vh bg-purple-7'>
        <ModernGrid
          id='forgot-password'
          header='Let`s change your password - No problem!'
          subheader='Create a new password within seconds. Together we solve your puzzle - promised.'
          imageBg='blue'
          imageUrl='/images/member/puzzle-password.webp'
          imageAlt='member forgot password'>
          <>
            <form onSubmit={handleSubmit}>
              <div className='flex sm:block md:block lg:block'>
                <div className='w-100per min-w-30rem max-w-40rem my-20px'>
                  <Input
                    maxLength={32}
                    id='email'
                    label='email'
                    type='email'
                    value={email}
                    setValue={setEmail}
                    htmlFor='email'
                  />
                </div>
                <CheckValidInput checkIsValid={checkValidEmail(email)} text='Your E-Mail' />
              </div>

              <GreenButton
                isdisabled={!checkIsDisabled}
                id='login-button'
                className={`text-15px font-400 ml-0px mt-25px greencss-button-reverse ${
                  !checkIsDisabled ? 'bg-gray-5 border-none cursor-not-allowed' : ''
                }`}
                isOutline={true}
                isDefault={false}
                onClick={handleSubmit}>
                Get New Password
              </GreenButton>
            </form>
          </>
        </ModernGrid>
      </Layout>
    </SEO>
  )
}
