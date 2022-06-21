import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import Select from 'react-select'
import axios from 'axios'
import { UserContext } from '@/utils/SubscriptionContext'
import SEO from '@/components/reusable/SEO'
import CheckServerAuth from '@/components/auth/CheckServerAuth'
import { checkNumber, checkRegionOrCountry, checkValidEmail } from '@/data/validation'
import { countries, regions } from '@/data/countries'
import CheckValidInput from '@/components/member/CheckValidInput'
import { Input } from '@/components/reusable/Input'
import { GreenButton } from '@/components/reusable/Button'
import ModernGrid from '@/components/grid/ModernGrid'
import { useToast } from '@/components/toast/hooks/useToast'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function UserUpdate() {
  const router = useRouter()
  const toast = useToast()
  // context
  const [state, setState] = useContext(UserContext)
  // states
  const [isAuth, setIsAuth] = useState(null)
  const [checkRegion, setcheckRegion] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [selectedCountry, setselectedCountry] = useState()
  const [selectedRegion, setselectedRegion] = useState()
  const [userprofileUrl, setuserprofileUrl] = useState('')
  const [earlierCountry, setearlierCountry] = useState()

  const onchangeSelect = (item) => {
    setselectedCountry(item) || setselectedRegion(item)
  }

  useEffect(() => {
    const userProfileLink = async () => {
      const auth = JSON.parse(localStorage.getItem('auth'))
      setName(auth.user.name)
      setEmail(auth.user.email)
      setselectedCountry()
      setselectedRegion()
      setuserprofileUrl(auth.user._id)
      setearlierCountry(auth.user.requestedCountry)
    }
    userProfileLink()
  }, [isAuth])

  const updateItems = [
    {
      htmlFor: 'name',
      label: 'Full name',
      maxLength: 32,
      type: 'text',
      value: name,
      onChange: setName,
      checkFirst: checkNumber(name, 3, 32),
      checkFirstDescription: 'Your name'
    },
    {
      htmlFor: 'email',
      label: 'E-mail',
      maxLength: 32,
      type: 'email',
      value: email,
      onChange: setEmail,
      checkFirst: checkValidEmail(email),
      checkFirstDescription: 'Your E-Mail'
    }
  ]

  let checkIsDisabled =
    checkNumber(name, 3, 30) && checkValidEmail(email) && checkRegionOrCountry(selectedCountry, selectedRegion)

  const handleClick = async (e) => {
    try {
      e.preventDefault()
      // console.log(setState(data))
      const { data } = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_API}/user/${userprofileUrl}`, {
        name,
        email,
        requestedCountry: selectedCountry.label || selectedRegion.label
      })
      if (data.error) {
        setcheckError(data.error)
      } else {
        setName('')
        setEmail('')
        setselectedCountry()
        setselectedRegion()

        // set states
        state.user.name = name
        state.user.email = email
        // set individual localstorage values
        let updatedUser = JSON.parse(localStorage.getItem('auth'))
        updatedUser.user.name = name
        updatedUser.user.email = email
        updatedUser.user.requestedCountry = selectedCountry.label || selectedRegion.label
        localStorage.setItem('auth', JSON.stringify(updatedUser))

        toast('success', '🚀 Your credentials have successfully been modified.')
        router.push('/member/account')
      }
    } catch (err) {
      toast('error', `⚡ Oops! Something went wrong: ${err}`)
    }
  }

  return (
    <CheckServerAuth isAuth={isAuth} setIsAuth={setIsAuth}>
      <SEO
        title='Update Your Profile'
        description='Update your name, email, password or favorite country.'
        url={`member/${userprofileUrl}`}
        keywords='member, donation, green software, sustainable software'>
        <Layout className='container sm:px-10px md:px-25px lg:px-50px min-h-100vh'>
          {isAuth && (
            <ModernGrid
              id='contact-index'
              header='Update Your Profile'
              subheader='Update your name, email, password or favorite country. Make sure you fill out all fields.'
              imageBg='blue'
              imageUrl='/images/blog/pen-greencss.webp'
              imageAlt='update profile data'>
              <div className='mb-50px'>
                <GreenButton
                  id='password-reset-button'
                  className='font-500 text-15px'
                  isLinkedOutline={true}
                  isDefault={false}
                  href='/member/forgot-password'>
                  Change your password
                </GreenButton>
              </div>
              <p className='text-black text-15px font-600 mb-0px ml-10px'>{checkRegion ? 'Region' : 'Country'}</p>
              <div className='flex sm:block md:block lg:block'>
                <div className='block'>
                  <Select
                    placeholder={`${checkRegion ? 'select your preferred region' : 'select your preferred country'}`}
                    value={selectedCountry}
                    onChange={onchangeSelect}
                    options={checkRegion ? regions : countries}
                    getOptionValue={(option) => option.value}
                    getOptionLabel={(option) => option.label}
                  />
                  <p
                    className='text-10px mb-10px text-black-10 cursor-pointer max-w-40rem mt-10px'
                    onClick={() => setcheckRegion((checkRegion) => !checkRegion)}>
                    Do not want to donate in your home country? Choose a region instead.
                  </p>
                </div>
                <CheckValidInput
                  checkIsValid={checkRegionOrCountry(selectedCountry, selectedRegion)}
                  text={`Choose a country or region where you want your future donations to go. Your last choice was ${earlierCountry}.`}
                />
              </div>

              {updateItems.sort().map((item, index) => {
                return (
                  <div
                    className={`flex sm:block md:block lg:block ${
                      item.htmlFor.includes('repeatpassword') ? 'mt-neg-30px' : ''
                    }`}
                    key={index}>
                    <Input
                      maxLength={item.maxLength}
                      id={item.htmlFor}
                      label={item.label}
                      type={item.type}
                      value={item.value}
                      setValue={item.onChange}
                      htmlFor={item.htmlFor}
                      isTextArea={item.isTextArea}
                    />

                    <CheckValidInput
                      checkIsValid={item.checkFirst}
                      text={item.checkFirstDescription}
                      checkIsValidTwo={item.checkIsSecondValid}
                      secondText={item.secondText}
                      checkIsValidThree={item.checkIsThirdValid}
                      thirdText={item.thirdText}
                      checkIsValidFour={item.checkIsFourthValid}
                      fourthText={item.fourthText}
                    />
                  </div>
                )
              })}
              <div className='flex my-50px'>
                <GreenButton
                  id='back-button'
                  className='font-500 text-15px'
                  isLinkedOutline={true}
                  isDefault={false}
                  href='/member/account'>
                  Go Back
                </GreenButton>
                <GreenButton
                  isdisabled={!checkIsDisabled}
                  id='update-profile-button'
                  className={`${
                    !checkIsDisabled
                      ? 'bg-gray-5 hover:bg-gray-5 focus:bg-gray-5 border-none cursor-not-allowed font-400'
                      : 'font-500'
                  }`}
                  onClick={handleClick}>
                  Update Profile Data
                </GreenButton>
              </div>
            </ModernGrid>
          )}
        </Layout>
      </SEO>
    </CheckServerAuth>
  )
}
