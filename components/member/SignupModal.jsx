import { useRouter } from 'next/router'
import React, { useState, useContext } from 'react'
import Select from 'react-select'
import axios from 'axios'
import { UserContext } from '@/utils/SubscriptionContext'
import { Input } from '../reusable/Input'
import { countries, regions } from '@/data/countries'
import Modal from '../modal/Modal'
import { GreenButton } from '../reusable/Button'
import CheckValidInput from './CheckValidInput'
import SignUpModalImage from './SignUpModalImage'

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

  // form validator
  let nameLengthMin = name.length >= 3

  let checkValidEmail =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/.test(
      email
    )

  let checkValidPassword = /\d/.test(password)
  let checkValidPasswordTwo = /\W|_/g.test(password)
  let checkValidPasswordThree = /(?=.*[A-Z])(?=.*[a-z])/.test(password)
  let passwordLengthRegex = password.length < 7 || password.length > 30

  let checkRegionOrCountry = selectedCountry || selectedRegion != null

  let checkIsDisabled =
    nameLengthMin &&
    checkValidEmail &&
    checkValidPassword &&
    checkValidPasswordTwo &&
    checkValidPasswordThree &&
    !passwordLengthRegex &&
    checkRegionOrCountry

  let checkLoginIsDisabled =
    checkValidEmail && checkValidPassword && checkValidPasswordTwo && checkValidPasswordThree && !passwordLengthRegex

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
            {checkMemberState && (
              <div className='flex sm:block md:block lg:block'>
                <Input label='Name' type='text' value={name} setValue={setName} />
                {checkMemberState && <CheckValidInput checkIsValid={nameLengthMin} text='Name' />}
              </div>
            )}
            <div className='flex sm:block md:block lg:block'>
              <Input label='Email' type='email' value={email} setValue={setEmail} />
              {checkMemberState && <CheckValidInput checkIsValid={checkValidEmail} text='E-mail' />}
            </div>

            <div className='flex sm:block md:block lg:block'>
              <Input label='Password' type='password' value={password} setValue={setPassword} />
              {checkMemberState && (
                <CheckValidInput
                  checkIsValid={checkValidPassword}
                  text='At least one numeric digit'
                  secondText='At least a special character'
                  checkIsValidTwo={checkValidPasswordTwo}
                  thirdText='At least one lowercase and one uppercase character'
                  checkIsValidThree={checkValidPasswordThree}
                  fourthText='Between 7 to 30 characters'
                  checkIsValidFour={!passwordLengthRegex}
                />
              )}
            </div>

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
                  <CheckValidInput checkIsValid={checkRegionOrCountry} text='Select a region or country' />
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
            <p className='text-red-5 text-15px mt-25px'>{checkError}</p>
          </div>
        </div>

        <SignUpModalImage checkMemberState={checkMemberState} setCheckMemberState={setCheckMemberState} />
      </div>
    </Modal>
  )
}
