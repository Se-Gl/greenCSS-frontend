import dynamic from 'next/dynamic'
import { withRouter, useRouter } from 'next/router'
import { useState } from 'react'
import { resetPassword } from '@/utils/Auth'
import SEO from '@/components/reusable/SEO'
import ModernGrid from '@/components/grid/ModernGrid'
import { Input } from '@/components/reusable/Input'
import CheckValidInput from '@/components/member/CheckValidInput'
import { GreenButton } from '@/components/reusable/Button'
import { useToast } from '@/components/toast/hooks/useToast'
import {
  checkNumber,
  checkValidPassword,
  checkValidPasswordTwo,
  checkValidPasswordThree,
  compareKey
} from '@/data/validation'
const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

function ResetPassword({ router }) {
  const redirectrouter = useRouter()
  const toast = useToast()
  const [newPassword, setnewPassword] = useState('')
  const [repeatPassword, setrepeatPassword] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    resetPassword({
      newPassword,
      resetPasswordLink: router.query.id
    }).then((data) => {
      if (data.error) {
        toast('error', `⚡ Oops! ${data.error}`)
      } else {
        setnewPassword('')
        toast('success', `🚀 ${data.message}`)
        redirectrouter.push('/member/account')
      }
    })
  }

  // validation
  let checkIsDisabled =
    checkValidPassword(newPassword) &&
    checkValidPasswordTwo(newPassword) &&
    checkValidPasswordThree(newPassword) &&
    checkNumber(newPassword, 7, 64) &&
    compareKey(newPassword, repeatPassword)

  return (
    <SEO
      title='greenCSS reset member password'
      description='Check your current green state. Decide independently where your donations go.'
      url={`member/reset/${router.query.id}`}
      keywords='member, forgot password, reset password'>
      <Layout className='container sm:px-10px md:px-25px lg:px-50px min-h-100vh'>
        <ModernGrid
          id='reset-password'
          header='Change your password? Reset it right away.'
          subheader='Create a new password within seconds. Choose your new and strong password. It should be between 7-64 characters long, have an upper and lower case letter and contain special characters.'
          imageBg='black'
          imageUrl='/images/member/puzzle-password.webp'
          imageAlt='member forgot password'>
          <>
            <form onSubmit={handleSubmit}>
              <div className='flex sm:block md:block lg:block'>
                <Input
                  maxLength={64}
                  id='newPassword'
                  label='Password'
                  type='password'
                  value={newPassword}
                  setValue={setnewPassword}
                  htmlFor='newPassword'
                  isTextArea={false}
                />
                <CheckValidInput
                  maxLength={64}
                  text='At least one numeric digit'
                  checkIsValid={checkValidPassword(newPassword)}
                  secondText='At least a special character'
                  checkIsValidTwo={checkValidPasswordTwo(newPassword)}
                  thirdText='At least one lowercase and one uppercase character'
                  checkIsValidThree={checkValidPasswordThree(newPassword)}
                  fourthText='Between 7 to 64 characters'
                  checkIsValidFour={checkNumber(newPassword, 7, 64)}
                />
              </div>
              <div className='flex sm:block md:block lg:block'>
                <Input
                  maxLength={64}
                  id='repeatPassword'
                  label='Repeat'
                  type='password'
                  value={repeatPassword}
                  setValue={setrepeatPassword}
                  htmlFor='repeatPassword'
                  isTextArea={false}
                />
                <CheckValidInput
                  maxLength={64}
                  text='The same password'
                  checkIsValid={compareKey(newPassword, repeatPassword)}
                />
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
export default withRouter(ResetPassword)
