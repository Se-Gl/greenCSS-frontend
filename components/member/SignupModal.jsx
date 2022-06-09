import { useRouter } from 'next/router'
import React, { useState, useContext } from 'react'
import Select from 'react-select'
import Image from 'next/image'
import axios from 'axios'
import { UserContext } from '@/utils/SubscriptionContext'
import MemberInput from './MemberInput'
import { countries, regions } from '@/data/countries'
import Modal from '../modal/Modal'
import { GreenButton } from '../reusable/Button'
import { useToast } from '@/components/toast/hooks/useToast'

export default function SignupModal({ showModal, setShowModal }) {
  const toast = useToast()
  const router = useRouter()

  const [name, setName] = useState('SeGl')
  const [email, setEmail] = useState('info@greencss.dev')
  const [password, setPassword] = useState('123456')
  const [selectedCountry, setselectedCountry] = useState()
  const [selectedRegion, setselectedRegion] = useState()
  const [checkRegion, setcheckRegion] = useState(false)
  const [checkMemberState, setCheckMemberState] = useState(false)
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
        // toast.error(data.error)
        toast('error', `⚡ Oops! ${data.error}`)
        // console.log(data.error)
      } else {
        checkMemberState && setName('')
        setEmail('')
        setPassword('')
        checkMemberState && setselectedCountry(countries[0])
        checkMemberState && setselectedRegion(regions[0])
        toast('success', `🚀 Hey ${data.user.name}. Welcome to the greenCSS community.`)
        setState(data)
        localStorage.setItem('auth', JSON.stringify(data))
        router.push('/member')
      }
    } catch (err) {
      // console.log(err)
      toast('error', '⚡Something went wrong. Try again')
    }
  }

  return (
    <Modal
      onClose={() => setShowModal(false)}
      show={showModal}
      showSearch={false}
      modalSize='w-90vw min-h-95vh max-h-50rem rounded-50px'
      modalStyle=''>
      <div className='m-auto grid grid-col-12 sm:grid-col-1 md:grid-col-1 overflow-hidden'>
        <div className='col-span-8 flex sm:mb-10rem md:mb-10rem mx-25px'>
          <div className='my-auto sm:m-unset sm:max-w-30rem'>
            <h1 className='pt-5px mb-0px capitalize'>{checkMemberState ? `Let's Get Started` : `Let's log in`}</h1>
            <p className='text-black-10'>
              {checkMemberState
                ? 'Sign up for free. And choose where you want your donations to go.'
                : 'Check your current green state. Decide independently where your donations go.'}
            </p>
            {checkMemberState && <MemberInput label='Name' type='text' value={name} setValue={setName} />}
            <MemberInput label='Email' type='email' value={email} setValue={setEmail} />
            <MemberInput label='Password' type='password' value={password} setValue={setPassword} />

            {checkMemberState && (
              <>
                <p className='text-black text-15px font-600 mb-0px ml-10px' style={{ marginTop: '-22px' }}>
                  {checkRegion ? 'Region' : 'Country'}
                </p>
                <Select
                  placeholder={`${checkRegion ? 'select your preferred region' : 'select your preferred country'}`}
                  value={checkRegion ? selectedRegion : selectedCountry}
                  onChange={onchangeSelect}
                  options={checkRegion ? regions : countries}
                  getOptionValue={(option) => option.value}
                  getOptionLabel={(option) => option.label}
                />
                <input
                  className='mt-10px accent-greencss'
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
            <GreenButton
              id='login-button'
              className='text-white text-15px font-400 bg-black ml-0px mt-25px greencss-button-reverse'
              isOutline={true}
              isDefault={false}
              onClick={handleClick}>
              {checkMemberState ? 'Register' : 'Log In'}
            </GreenButton>
          </div>
        </div>

        <div
          className={`col-span-4 sm:row-start-1 md:row-start-1 flex mx-0px ${
            checkMemberState ? 'bg-blue-1' : 'bg-greencss-1'
          }`}>
          <div className='flex w-33per lg:block md:block sm:block absolute z-2 p-20px'>
            <p className=' text-white mb-0px sm:min-w-35rem md:min-w-35rem'>
              {checkMemberState ? 'Do you have an account?' : 'You do not have an account yet?'}
            </p>
            <GreenButton
              id='login-button'
              className='text-white border-white ml-auto lg:ml-0px md:ml-0px sm:ml-0px lg:mt-10px md:mt-10px sm:mt-10px'
              isOutline={true}
              isDefault={false}
              onClick={() => setCheckMemberState(!checkMemberState)}>
              {checkMemberState ? 'Log In' : 'Sign Up'}
            </GreenButton>
          </div>
          <div className='relative h-100vh sm:h-50vh md:h-50vh w-100per overflow-hidden'>
            <Image
              quality={100}
              layout='fill'
              objectFit='contain'
              src={`/images/member/signup-${checkMemberState ? 'blue' : 'green'}.webp`}
              alt='greenCSS 3D nature'
              placeholder='blur'
              blurDataURL={`/_next/image?url=/images/member/signup-${
                checkMemberState ? 'blue' : 'green'
              }.webp&w=16&q=1`}
            />
          </div>
        </div>
      </div>
    </Modal>
  )
}
