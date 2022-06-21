import Image from 'next/image'
import { useEffect, useState } from 'react'
import { GreenButton } from '@/components/reusable/Button'
import ReusableModal from '../modal/ReusableModal'
import HeroPhone from './HeroPhone'
import ResultHeroPhone from './HeroPhone/ResultHeroPhone'
import useWindowDimensions from '@/utils/WindowDimensions'
import ModernGrid from '../grid/ModernGrid'

export default function Hero() {
  const { width } = useWindowDimensions()

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
      {width >= 768 ? (
        <div className='relative w-100vw h-100vh'>
          <div
            className='absolute z-neg-99 top-0per left-0per w-100per h-100per bg-no-repeat bg-cover'
            style={{
              backgroundImage: `url("/images/landingpage/background-shape.svg")`
            }}></div>
          {/* GRID */}
          <div className='m-auto grid gap-30px grid-col-2 sm:grid-col-1 md:grid-col-1'>
            <div className='col-span-1 h-100vh'>
              <div className='flex h-90vh'>
                <div className='m-auto max-w-55rem'>
                  <h1 className='pt-25px capitalize'>A classy way to write sustainable CSS</h1>
                  <p className='text-black-10 text-15px'>
                    Styling CSS reimagined - for everyone. Start to code with zero emission: for your clients, for your
                    creativity and for your planet.
                  </p>
                  <div className='flex gap-10px'>
                    <ReusableModal isHero={true} />
                    <GreenButton
                      hasLink={true}
                      isDefault={false}
                      href='/docs/activate-getting-started'
                      id='linkedbutton'
                      className='text-white'>
                      Install
                    </GreenButton>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${
                loading
                  ? 'opacity-0per'
                  : 'relative col-span-1 snap-in-bottom animate animation-forwards animation-delay-500ms opacity-100per overflow-hidden'
              }`}
              id='phone-image'>
              <div
                className='absolute bottom-0per sm:display-none md:display-none min-w-50rem'
                style={{ bottom: '-350px' }}>
                <Image
                  quality={100}
                  width={497}
                  height={758}
                  className={loading ? 'opacity-0per' : 'opacity-100per'}
                  src='/images/landingpage/phone.webp'
                  alt='greenCSS Hero Image Iphone'
                  placeholder='blur'
                  blurDataURL='/_next/image?url=/images/landingpage/phone.webp&w=16&q=1'
                />
              </div>
              <HeroPhone loading={loading} />

              <div
                className='absolute z-neg-1 sm:display-none md:display-none min-w-80rem ml-50px'
                style={{ bottom: `${width > 1500 ? '210px' : '350px'}`, left: `${width > 1500 ? '200px' : '-100px'}` }}>
                <Image
                  quality={100}
                  width={907}
                  height={537}
                  className={loading ? 'opacity-0per' : 'opacity-100per'}
                  src='/images/landingpage/desktop.webp'
                  alt='greenCSS Hero Blurred Desktop'
                  placeholder='blur'
                  blurDataURL='/_next/image?url=/images/landingpage/desktop.webp&w=16&q=1'
                />
              </div>

              <ResultHeroPhone loading={loading} />
            </div>
          </div>
        </div>
      ) : (
        <ModernGrid
          isHero={true}
          header='A classy way to write sustainable CSS'
          subheader='Styling CSS reimagined - for everyone. Start to code with zero emission: for your clients, for your
        creativity and for your planet.'
          imageBg='black'
          imageUrl='/images/landingpage/Macbook-Pro-hero.webp'
          imageAlt='macbook pro hero greencss'
        />
      )}
    </section>
  )
}
