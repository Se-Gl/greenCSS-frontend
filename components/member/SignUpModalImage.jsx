import Image from 'next/image'
import { GreenButton } from '../reusable/Button'

export default function SignUpModalImage({ checkMemberState, setCheckMemberState }) {
  return (
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
          blurDataURL={`/_next/image?url=/images/member/signup-${checkMemberState ? 'blue' : 'green'}.webp&w=16&q=1`}
        />
      </div>
    </div>
  )
}
