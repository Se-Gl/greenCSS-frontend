import { useEffect, useState } from 'react'
import { GreenButton } from '@/components/reusable/Button'
import ReusableModal from '../modal/ReusableModal'
import ModernGrid from '../grid/ModernGrid'
import Image from 'next/image'
import Tilt from '../tilt/Tilt'
import Link from 'next/link'
import Arrow from '../icon/Arrow'

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
      className={`${loading === false ? 'fade-in animate animation-forwards opacity-100per' : 'opacity-0per'}`}>
      <div className='bg-black min-h-100vh rounded-20px grid grid-col-12 sm:grid-col-1 md:grid-col-1'>
        <div className='col-span-6 flex min-h-100vh'>
          <div className='my-auto px-20px sm:px-10px'>
            <h1 className='text-white text-60px sm:text-40px'>A classy way to write sustainable CSS</h1>
            {/* <p className='text-gray'>
              Styling CSS reimagined - for everyone. Start to code with zero emission: for your clients, for your
              creativity and for your planet.
            </p> */}
            <div className='flex sm:block gap-10px sm:gap-0px'>
              <div className='max-w-25rem sm:max-w-100per border-1px border-solid border-magenta p-10px rounded-10px hover:shadow-small-magenta transition-all transition-duration-300ms'>
                <h2 className='text-white text-30px'>Sustainable React Components</h2>
                <p className='text-gray text-15px'>
                  Check green react components, based on the greenCSS brand guidelines.
                </p>
                <button className='text-black bg-white hover:bg-gray-7 active:bg-gray-9 rounded-10px transition-all transition-duration-300ms'>
                  <a className='m-0px text-10px no-decoration p-10px flex items-center' href='https://www.codn.dev/'>
                    codn{' '}
                    <span className='ml-10px'>
                      <Arrow />
                    </span>
                  </a>
                </button>
              </div>
              <div className='max-w-25rem sm:max-w-100per border-1px border-solid border-purple p-10px rounded-10px sm:mt-10px hover:shadow-small-purple transition-all transition-duration-300ms'>
                <h2 className='text-white text-30px'>Sustainable Software for everyone</h2>
                <p className='text-gray text-15px'>
                  A CSS library for the Web 2.0 and 3.0. Completely climate neutral - without greenwashing.
                </p>
                <div className='flex sm:block gap-10px'>
                  <ReusableModal isHero={true} />
                  <button className='text-black bg-white hover:bg-gray-7 active:bg-gray-9 rounded-10px flex items-center transition-all transition-duration-300ms sm:mt-10px'>
                    <Link href='/docs'>
                      <a className='m-0px text-10px no-decoration p-10px flex items-center'>
                        documentation{' '}
                        <span className='ml-10px min-w-9px'>
                          <Arrow />
                        </span>
                      </a>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className='col-span-6 flex h-100vh sm:h-40vh md:h-50vh sm:row-start-1 md:row-start-1 relative w-100per h-100per'
          id='hero-section'>
          <div
            className='absolute top-50per left-60per sm:h-50vh md:h-70vh h-100vh w-100per'
            style={{ transform: 'translate(-50%, -50%)' }}>
            <>
              <Tilt perspective={1000} max={2}>
                <div className='w-20rem h-20rem rounded-50per sphere top-10per' style={{ left: '30rem' }} />
                <div
                  className='w-100px h-100px rounded-50per sphereTwo bottom-25per sm:bottom-60per md:bottom-55per'
                  style={{ left: 0 }}
                />
              </Tilt>
            </>

            <div className='pointer-events-none'>
              <Image
                quality={80}
                layout='fill'
                objectFit='contain'
                src='/images/landingpage/hero-image.png'
                alt='wolf 3d hero greencss'
                placeholder='blur'
                blurDataURL={`/_next/image?url=/images/landingpage/hero-image.png&w=16&q=1`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <ModernGrid
        id='hero-section'
        isHero={true}
        isFull={true}
        imagePosition={true}
        titleStyle='text-white'
        descriptionStyle='text-white'
        header='A classy way to write sustainable CSS'
        subheader='Styling CSS reimagined - for everyone. Start to code with zero emission: for your clients, for your
  creativity and for your planet.'
        imageBg='black'
        imageUrl='/images/landingpage/hero-image.png'
        imageAlt='wolf 3d hero greencss'>
        <div className='flex sm:block gap-10px'>
          <ReusableModal isHero={true} />
          <GreenButton
            hasLink={true}
            isDefault={false}
            href='#calculate-footprint'
            id='linkedbutton'
            className='text-white min-w-14rem font-500 sm:mt-10px'>
            Calculate Footprint
          </GreenButton>
        </div>
      </ModernGrid> */}
    </section>
  )
}
