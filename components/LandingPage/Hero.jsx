import dynamic from 'next/dynamic'
import { GreenButton } from '@/components/reusable/Button'
import Loader from '../logo/Loader'
import { useEffect, useState } from 'react'
import ReusableModal from '../modal/ReusableModal'

const ThreeDObject = dynamic(() => import('./3D/Index'), {
  loading: () => (
    <>
      <div className='flex h-75vh'>
        <div className='m-auto'>
          <Loader />
        </div>
      </div>
    </>
  )
})

export default function Hero() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onload = setLoading(false)
    }
  }, [])
  return (
    <section
      id='hero'
      className={`${loading === false ? 'fade-in animate animation-forwards opacity-100per' : 'opacity-1per'}`}>
      <div className='m-auto grid gap-30px grid-col-2 sm:grid-col-1 md:grid-col-1'>
        <div className='col-span-1 min-h-75vh sm:min-h-100vh'>
          <div className='flex h-75vh'>
            <div className='m-auto'>
              <h1 className='font-800 text-63px max-w-40rem'>A classy way to write CSS design</h1>
              <p className='max-w-40rem'>
                Styling CSS reimagined - for for everyone. Start to code with{' '}
                <span className='text-greencss font-900'>zero emission</span>: for your creativity and your planet.
              </p>
              <div className='flex gap-10px'>
                <ReusableModal isHero={true} />
                <GreenButton hasLink={true} isDefault={false} href='/docs/activate-getting-started' id='linkedbutton'>
                  Install
                </GreenButton>
              </div>
            </div>
          </div>
        </div>
        <div className='sm:display-none md:display-none col-span-1 min-h-75vh sm:col-span-full sm:row-start-1 sm:col-end-1 md:col-span-full md:row-start-1 md:col-end-1 overflow-hidden'>
          <div className='min-h-75rem'>
            <ThreeDObject />
          </div>
        </div>
      </div>
    </section>
  )
}
