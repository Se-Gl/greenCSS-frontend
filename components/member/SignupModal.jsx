import { useRouter } from 'next/router'
import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import Select from 'react-select'
import axios from 'axios'
import { Input, Modal } from 'codn'
import { UserContext } from '@/utils/SubscriptionContext'
import { countries, regions } from '@/data/countries'
import { GreenButton } from '../reusable/Button'
import CheckValidInput from './CheckValidInput'
import SignUpModalImage from './SignUpModalImage'
import {
  checkNumber,
  checkValidEmail,
  checkValidPassword,
  checkValidPasswordTwo,
  checkValidPasswordThree,
  checkRegionOrCountry,
  compareKey
} from '@/data/validation'

export default function SignupModal({ toggleModal, setToggleModal }) {
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setrepeatPassword] = useState(null)
  const [selectedCountry, setselectedCountry] = useState()
  const [selectedRegion, setselectedRegion] = useState()
  const [checkRegion, setcheckRegion] = useState(false)
  const [checkMemberState, setCheckMemberState] = useState(false)
  const [checkError, setcheckError] = useState()
  // // modal
  // const [toggleModal, setToggleModal] = useState(false)

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
    },
    {
      htmlFor: 'repeatpassword',
      label: 'Repeat',
      maxLength: 64,
      type: 'password',
      value: repeatPassword,
      onChange: setrepeatPassword,
      checkFirst: compareKey(password, repeatPassword),
      checkFirstDescription: 'The same passwords'
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
    compareKey(password, repeatPassword) &&
    checkRegionOrCountry(selectedCountry, selectedRegion)

  let checkLoginIsDisabled =
    checkValidEmail &&
    checkValidPassword &&
    checkValidPasswordTwo &&
    checkValidPasswordThree &&
    checkNumber(password, 7, 64)

  //   ESC key to close the modal
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setToggleModal()
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <Modal
      toggle={toggleModal}
      setToggle={setToggleModal}
      className='w-90vw h-90vh container'
      iconColor='fill-white'
      useKeyInput={false}
      modalPadding={false}>
      <div className='m-auto grid grid-col-12 sm:grid-col-1 md:grid-col-1 overflow-hidden'>
        <div className='col-span-8 flex sm:mb-10rem md:mb-10rem mx-25px'>
          <div className='my-auto pt-25px sm:m-unset sm:max-w-30rem'>
            <h1 className='mb-0px capitalize'>{checkMemberState ? `Let's Get Started` : `Let's log in`}</h1>
            <p className='text-black-10'>
              {checkMemberState
                ? 'Sign up for free. And choose where you want your donations to go.'
                : 'Check your current green state. Decide independently where your donations go.'}
            </p>
            <form onSubmit={handleClick}>
              {checkMemberState && (
                <>
                  <p className='text-black text-15px font-600 mb-0px ml-10px'>{checkRegion ? 'Region' : 'Country'}</p>
                  <div className='flex sm:block md:block lg:block'>
                    <div className='block'>
                      <Select
                        placeholder={`${
                          checkRegion ? 'select your preferred region' : 'select your preferred country'
                        }`}
                        value={checkRegion ? selectedRegion : selectedCountry}
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
                      text='Choose a country or region where you want your future donations to go.'
                    />
                  </div>
                </>
              )}

              {(checkMemberState ? signUpItems : loginItems).sort().map((item, index) => {
                return (
                  <div
                    className={`flex sm:block md:block lg:block ${
                      item.htmlFor.includes('repeatpassword') ? 'mt-neg-30px' : ''
                    }`}
                    key={index}>
                    <div className='w-100per min-w-30rem max-w-40rem my-20px'>
                      <Input
                        maxLength={item.maxLength}
                        id={item.htmlFor}
                        label={item.label}
                        type={item.type}
                        value={item.value}
                        setValue={item.onChange}
                        htmlFor={item.htmlFor}
                      />
                    </div>
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
                <div className='flex sm:block md:block lg:block'>
                  <div className='my-auto w-40rem sm:w-100per md:w-100per'>
                    <input
                      checked
                      className='accent-greencss'
                      type='checkbox'
                      value={true}
                      name='Do you not want to donate in your home country? Choose a region instead.'
                      onClick={null}
                      onChange={null}
                    />
                    <span className='text-black-10 text-10px ml-10px mb-0px my-auto'>
                      Accept our{' '}
                      <Link href='/privacy/terms'>
                        <a className='text-black-10 text-10px my-0px' target='_blank'>
                          terms of services
                        </a>
                      </Link>
                      . This option is automatically selected. If you do not agree, you will not be allowed to create an
                      account.
                    </span>
                  </div>

                  <CheckValidInput checkIsValid={true} text='You accept our Terms of Services' />
                </div>
              )}

              {checkMemberState ? (
                <GreenButton
                  type='submit'
                  isdisabled={!checkIsDisabled}
                  id='login-button'
                  className={`text-15px font-400 ml-0px mt-25px greencss-button-reverse ${
                    !checkIsDisabled ? 'bg-gray-5 border-none cursor-not-allowed' : ''
                  }`}
                  isOutline={true}
                  isDefault={false}>
                  Register
                </GreenButton>
              ) : (
                <GreenButton
                  type='submit'
                  isdisabled={!checkLoginIsDisabled}
                  id='login-button'
                  className={`text-15px font-400 ml-0px mt-25px greencss-button-reverse ${
                    !checkLoginIsDisabled ? 'bg-gray-5 border-none cursor-not-allowed' : ''
                  }`}
                  isOutline={true}
                  isDefault={false}>
                  Log In
                </GreenButton>
              )}

              {!checkMemberState && (
                <div className='my-25px'>
                  <Link href='/member/forgot-password' passHref>
                    <a className='text-black-10 hover:text-black transition-all transition-duration-300ms text-15px cursor-pointer no-decoration'>
                      Forgot your password?
                    </a>
                  </Link>
                </div>
              )}
            </form>
            <p className='text-red-5 text-15px mt-25px'>{checkError}</p>
          </div>
        </div>

        <SignUpModalImage checkMemberState={checkMemberState} setCheckMemberState={setCheckMemberState} />
      </div>
    </Modal>
  )
}
