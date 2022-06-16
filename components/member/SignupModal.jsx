import { useRouter } from 'next/router'
import React, { useState, useContext } from 'react'
import Link from 'next/link'
import Select from 'react-select'
import axios from 'axios'
import { UserContext } from '@/utils/SubscriptionContext'
import { Input } from '../reusable/Input'
import { countries, regions } from '@/data/countries'
import Modal from '../modal/Modal'
import { GreenButton } from '../reusable/Button'
import CheckValidInput from './CheckValidInput'
import SignUpModalImage from './SignUpModalImage'
import {
  checkNumber,
  checkValidEmail,
  checkValidPassword,
  checkValidPasswordTwo,
  checkValidPasswordThree,
  checkRegionOrCountry
} from '@/data/validation'

export default function SignupModal({ showModal, setShowModal }) {
  const router = useRouter()

  const [name, setName] = useState('SeGl')
  const [email, setEmail] = useState('info@greencss.dev123')
  const [password, setPassword] = useState('123456@aAbc')
  const [selectedCountry, setselectedCountry] = useState()
  const [selectedRegion, setselectedRegion] = useState()
  const [checkRegion, setcheckRegion] = useState(false)
  const [checkMemberState, setCheckMemberState] = useState(false)
  const [checkError, setcheckError] = useState()
  // context
  const [state, setState] = useContext(UserContext)

  const onchangeSelect = (item) => {
    setselectedCountry(item) || setselectedRegion(item)
  }

  const handleClick = async (e) => {
    try {
      e.preventDefault()
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/${checkMemberState ? 'register' : 'login'}`,
        checkMemberState
          ? {
              name,
              email,
              password,
              requestedCountry: selectedCountry.label || selectedRegion.label
            }
          : {
              email,
              password
            }
      )
      if (data.error) {
        setcheckError(data.error)
      } else {
        checkMemberState && setName('')
        setEmail('')
        setPassword('')
        checkMemberState && setselectedCountry()
        checkMemberState && setselectedRegion()
        setcheckError()
        setState(data)
        localStorage.setItem('auth', JSON.stringify(data))
        router.push('/member/account')
      }
    } catch (err) {
      // console.log(err)
    }
  }

  const signUpItems = [
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
    },
    {
      htmlFor: 'password',
      label: 'Password',
      maxLength: 64,
      type: 'password',
      value: password,
      onChange: setPassword,
      checkFirst: checkValidPassword(password),
      checkFirstDescription: 'At least one numeric digit',
      checkIsSecondValid: checkValidPasswordTwo(password),
      secondText: 'At least a special character',
      checkIsThirdValid: checkValidPasswordThree(password),
      thirdText: 'At least one lowercase and one uppercase character',
      checkIsFourthValid: checkNumber(password, 7, 64),
      fourthText: 'Between 7 to 64 characters'
    }
  ]

  const loginItems = [
    {
      htmlFor: 'email',
      label: 'E-mail',
      maxLength: 32,
      type: 'email',
      value: email,
      onChange: setEmail
    },
    {
      htmlFor: 'password',
      label: 'Password',
      maxLength: 64,
      type: 'password',
      value: password,
      onChange: setPassword
    }
  ]

  let checkIsDisabled =
    checkNumber(name, 3, 30) &&
    checkValidEmail(email) &&
    checkValidPassword(password) &&
    checkValidPasswordTwo(password) &&
    checkValidPasswordThree(password) &&
    checkNumber(password, 7, 64) &&
    checkRegionOrCountry(selectedCountry, selectedRegion)

  let checkLoginIsDisabled =
    checkValidEmail &&
    checkValidPassword &&
    checkValidPasswordTwo &&
    checkValidPasswordThree &&
    checkNumber(password, 7, 64)

  return (
    <Modal
      onClose={() => setShowModal(false)}
      show={showModal}
      showSearch={false}
      modalSize='w-90vw min-h-95vh max-h-50rem rounded-50px'
      modalStyle=''>
      <div className='m-auto grid grid-col-12 sm:grid-col-1 md:grid-col-1 overflow-hidden'>
        <div className='col-span-8 flex sm:mb-10rem md:mb-10rem mx-25px'>
          <div className='my-auto pt-25px sm:m-unset sm:max-w-30rem'>
            <h1 className='mb-0px capitalize'>{checkMemberState ? `Let's Get Started` : `Let's log in`}</h1>
            <p className='text-black-10'>
              {checkMemberState
                ? 'Sign up for free. And choose where you want your donations to go.'
                : 'Check your current green state. Decide independently where your donations go.'}
            </p>

            {(checkMemberState ? signUpItems : loginItems).sort().map((item, index) => {
              return (
                <div className='flex sm:block md:block lg:block' key={index}>
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
                  {checkMemberState && (
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
                  )}
                </div>
              )
            })}

            {checkMemberState && (
              <>
                <p className='text-black text-15px font-600 mb-0px ml-10px' style={{ marginTop: '-22px' }}>
                  {checkRegion ? 'Region' : 'Country'}
                </p>
                <div className='flex sm:block md:block lg:block'>
                  <div className='block'>
                    <Select
                      placeholder={`${checkRegion ? 'select your preferred region' : 'select your preferred country'}`}
                      value={checkRegion ? selectedRegion : selectedCountry}
                      onChange={onchangeSelect}
                      options={checkRegion ? regions : countries}
                      getOptionValue={(option) => option.value}
                      getOptionLabel={(option) => option.label}
                    />
                  </div>
                  <CheckValidInput
                    checkIsValid={checkRegionOrCountry(selectedCountry, selectedRegion)}
                    text='Select a region or country'
                  />
                </div>

                <input
                  className='accent-greencss'
                  type='checkbox'
                  value={checkRegion}
                  name='Do you not want to donate in your home country? Choose a region instead.'
                  onClick={() => setcheckRegion((checkRegion) => !checkRegion)}
                />
                <span className='text-black-10'>
                  Do not want to donate in your home country? Choose a region instead.
                </span>
              </>
            )}
            {checkMemberState ? (
              <GreenButton
                isdisabled={!checkIsDisabled}
                id='login-button'
                className={`text-white text-15px font-400 ml-0px mt-25px greencss-button-reverse ${
                  !checkIsDisabled ? 'bg-gray-5 border-none cursor-not-allowed' : 'bg-black'
                }`}
                isOutline={true}
                isDefault={false}
                onClick={handleClick}>
                Register
              </GreenButton>
            ) : (
              <GreenButton
                isdisabled={!checkLoginIsDisabled}
                id='login-button'
                className={`text-white text-15px font-400 ml-0px mt-25px greencss-button-reverse ${
                  !checkLoginIsDisabled ? 'bg-gray-5 border-none cursor-not-allowed' : 'bg-black'
                }`}
                isOutline={true}
                isDefault={false}
                onClick={handleClick}>
                Log In
              </GreenButton>
            )}
            {!checkMemberState && (
              <div className='my-25px'>
                <Link href='/auth/password/forgot-password' passHref>
                  <a className='text-black-10 hover:text-black transition-all transition-duration-300ms text-15px cursor-pointer no-decoration'>
                    Forgot your password?
                  </a>
                </Link>
              </div>
            )}
            <p className='text-red-5 text-15px mt-25px'>{checkError}</p>
          </div>
        </div>

        <SignUpModalImage checkMemberState={checkMemberState} setCheckMemberState={setCheckMemberState} />
      </div>
    </Modal>
  )
}
