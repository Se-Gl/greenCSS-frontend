import { useRouter } from 'next/router'
import React, { useState, useContext } from 'react'
import Select from 'react-select'
import Image from 'next/image'
import MemberInput from './MemberInput'
import { countries, regions } from '@/data/countries'
import Modal from '../modal/Modal'

export default function SignupModal({ showSignupModal, setShowSignupModal }) {
  const [name, setName] = useState('SeGl')
  const [email, setEmail] = useState('info@greencss.dev')
  const [password, setPassword] = useState('123456')
  const [selectedCountry, setselectedCountry] = useState()
  const [selectedRegion, setselectedRegion] = useState()
  const [checkRegion, setcheckRegion] = useState(false)
  const [showModal, setShowModal] = useState(true)

  const onchangeSelect = (item) => {
    setselectedCountry(item) || setselectedRegion(item)
  }
  return (
    <Modal
      onClose={() => setShowModal(false)}
      show={showModal}
      showSearch={false}
      modalSize='w-90vw min-h-90vh sm:w-100per max-h-50rem sm:min-h-75vh rounded-50px'
      modalStyle='ml-25px'>
      <div className='m-auto grid grid-col-12 sm:grid-col-1 md:grid-col-1 overflow-hidden'>
        <div className='col-span-8 flex sm:mb-10rem md:mb-10rem'>
          <div className='my-auto sm:m-unset'>
            <h1 className='pt-5px mb-0px'>Let&apos;s Get Started</h1>
            <p className='text-black-10'>Sign up for free. And choose where you want your donations to go.</p>
            <MemberInput label='Name' type='text' value={name} setValue={setName} />
            <MemberInput label='Email' type='email' value={email} setValue={setEmail} />
            <MemberInput label='Password' type='password' value={password} setValue={setPassword} />

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
            <span className='text-black-10'>Do not want to donate in your home country? Choose a region instead.</span>
          </div>
        </div>

        <div className='col-span-4 flex bg-blue-3 '>
          <div className='relative h-100vh w-100per overflow-hidden'>
            <Image
              quality={100}
              layout='fill'
              objectFit='contain'
              src='/images/member/signup.webp'
              alt='greenCSS 3D nature'
              placeholder='blur'
              blurDataURL='/_next/image?url=/images/member/signup.webp&w=16&q=1'
            />
          </div>
        </div>
      </div>
    </Modal>
  )
}
