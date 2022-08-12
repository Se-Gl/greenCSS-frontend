import Image from 'next/image'
import useWindowDimensions from '@/utils/WindowDimensions'
import { GreenButton } from '../reusable/Button'

export default function SignUpModalImage({ checkMemberState, setCheckMemberState }) {
  const { width } = useWindowDimensions()
  return (
    <div
      className={`col-span-4 sm:row-start-1 md:row-start-1 flex mx-0px ${
        checkMemberState ? 'bg-blue-1' : 'bg-greencss-1'
      }`}>
      <div className='w-33per lg:block md:block sm:block absolute z-2 p-25px'>
        <h3 className=' text-white mb-0px sm:min-w-35rem md:min-w-35rem mt-50px'>
          {checkMemberState ? 'Do you have an account?' : 'You do not have an account yet?'}
        </h3>
        <div className='relative mt-25px'>
          <>
            <GreenButton
              style={{ borderColor: '#fdfdfd', margin: '0px' }}
              className='backdrop-blur-2px hover:bg-white text-white hover:text-black'
              id='login-button'
              isOutline={true}
              isDefault={false}
              onClick={() => setCheckMemberState(!checkMemberState)}>
              {checkMemberState ? 'Log In' : 'Sign Up'}
            </GreenButton>
          </>
        </div>
      </div>
      <div className='relative h-100vh sm:h-50vh md:h-50vh w-100per overflow-hidden flex justify-center items-end'>
        <Image
          quality={80}
          layout='fill'
          objectFit={width >= 768 ? 'cover' : 'contain'}
          src={`/images/member/signup-${checkMemberState ? 'blue' : 'green'}.webp`}
          alt='greenCSS 3D nature'
          placeholder='blur'
          blurDataURL={`/_next/image?url=/images/member/signup-${checkMemberState ? 'blue' : 'green'}.webp&w=16&q=1`}
        />
      </div>
    </div>
  )
}
