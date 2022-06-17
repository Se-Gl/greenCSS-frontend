import dynamic from 'next/dynamic'
import { useState } from 'react'
import { forgotPassword } from '@/utils/Auth'
import SEO from '@/components/reusable/SEO'
import ModernGrid from '@/components/grid/ModernGrid'
import { Input } from '@/components/reusable/Input'
import CheckValidInput from '@/components/member/CheckValidInput'
import { GreenButton } from '@/components/reusable/Button'
import { useToast } from '@/components/toast/hooks/useToast'
import { checkValidEmail } from '@/data/validation'
const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function forgotPasswordPage() {
  const toast = useToast()
  const [email, setEmail] = useState()

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
      title='greenCSS forgot your member password?'
      description='Did you forgot your passowrd? Reset your passsword here.'
      url='member/forgot-password'
      keywords='member, forgot password, reset password'>
      <Layout className='container sm:px-10px md:px-25px lg:px-50px min-h-100vh'>
        <ModernGrid
          id='forgot-password'
          header='Forgot your password? No problem!'
          subheader='Create a new password within seconds. No problem, together we solve your puzzle - promised'
          imageBg='bg-blue'
          imageUrl='/images/member/puzzle-password.webp'
          imageAlt='member forgot password'>
          <>
            <form onSubmit={handleSubmit}>
              <div className='flex sm:block md:block lg:block'>
                <Input
                  maxLength={32}
                  id='email'
                  label='email'
                  type='email'
                  value={email}
                  setValue={setEmail}
                  htmlFor='email'
                  isTextArea={false}
                />
                <CheckValidInput checkIsValid={checkValidEmail(email)} text='Your E-Mail' />
              </div>

              <GreenButton
                isdisabled={!checkIsDisabled}
                id='login-button'
                className={`text-white text-15px font-400 ml-0px mt-25px greencss-button-reverse ${
                  !checkIsDisabled ? 'bg-gray-5 border-none cursor-not-allowed' : 'bg-black'
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
