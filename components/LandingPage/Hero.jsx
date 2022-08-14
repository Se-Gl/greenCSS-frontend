import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState, useContext } from 'react'
import { NEXT_URL } from '@/config/index'
import Arrow from '../icon/Arrow'
import SearchBar from '../modal/SearchBar'
import ModalContext from '@/utils/ModalContext'

export default function Hero() {
  const { handleSearchBar } = useContext(ModalContext)
  const card = useRef(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onload = setLoading(false)
    }
  }, [])

  const handleMouse = (e) => {
    if (typeof window !== 'undefined') {
      const x_axis = (window.innerWidth / 1.75 - e.pageX) / 25
      const y_axis = (window.innerHeight / 1.5 - e.pageY) / 50

      card.current.style.transform = `rotateY(${x_axis}deg) rotateX(${y_axis}deg)`
    }
  }

  const [carbonData, setCarbonData] = useState('')
  const [isShowingData, setIsShowingData] = useState(false)

  function handleErrors(response) {
    if (!response.ok) {
      setIsShowingData(false)
    } else {
      setIsShowingData(true)
    }
    return response
  }

  useEffect(() => {
    fetch(
      `https://api.websitecarbon.com/b?url=${
        process.env.NODE_ENV == 'development' ? 'https://www.greencss.dev' : NEXT_URL
      }`
    )
      .then(handleErrors)
      .then((response) => response.json())
      .then((data) => {
        setCarbonData(data)
        if (typeof window !== 'undefined') {
          localStorage.setItem('green-data', JSON.stringify(Object.entries(data)))
          const localGreenData = localStorage.getItem('green-data')

          if (localGreenData.includes('error')) {
            localStorage.setItem('green-data-emission', JSON.stringify(false))
            localStorage.setItem('green-data-percent', JSON.stringify(false))
          } else {
            localStorage.setItem('green-data-emission', JSON.stringify(localGreenData.substring(6, 10)))
            localStorage.setItem('green-data-percent', JSON.stringify(localGreenData.substring(17, 19)))
          }
        }
      })

      .catch((error) => error && setIsShowingData(false))
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
              <div className='relative max-w-25rem sm:max-w-100per md:max-w-100per border-1px border-solid border-magenta p-10px rounded-10px hover:shadow-small-magenta transition-all transition-duration-300ms'>
                <h2 className='text-white text-30px'>Green React Components</h2>
                <p className='text-gray text-15px'>
                  Check green react components, based on the greenCSS brand guidelines.
                </p>
                <button
                  className='absolute text-black bg-white hover:bg-gray-7 active:bg-gray-9 rounded-10px transition-all transition-duration-300ms'
                  style={{ bottom: '10px' }}>
                  <a className='m-0px text-10px no-decoration p-10px flex items-center' href='https://www.codn.dev/'>
                    codn{' '}
                    <span className='ml-10px'>
                      <Arrow />
                    </span>
                  </a>
                </button>
              </div>
              <div className='max-w-25rem sm:max-w-100per md:max-w-100per border-1px border-solid border-purple p-10px rounded-10px sm:mt-10px hover:shadow-small-purple transition-all transition-duration-300ms'>
                <h2 className='text-white text-30px'>Sustainable Software for everyone</h2>
                <p className='text-gray text-15px'>
                  A CSS library for the Web 2.0 and 3.0. Completely climate neutral - without greenwashing.
                </p>
                <div className='flex sm:block gap-10px max-w-23rem'>
                  <SearchBar setShowModal={handleSearchBar} isHero={true} />
                  <button className='text-black bg-white hover:bg-gray-7 active:bg-gray-9 rounded-10px flex items-center transition-all transition-duration-300ms sm:mt-10px'>
                    <Link href='/docs'>
                      <a className='m-0px text-10px no-decoration p-10px flex items-center'>
                        docs{' '}
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
          className='hero-height col-span-6 flex h-100vh sm:row-start-1 md:row-start-1 relative w-100per h-100per'
          id='hero-section'>
          <div className='normal-transform mobile-transform absolute top-50per left-60per sm:relative md:relative sm:h-50vh md:h-70vh h-100vh w-100per'>
            <>
              <div ref={card} onMouseMove={handleMouse} className='w-100per h-100per'>
                <div className='w-20rem h-20rem rounded-50per sphere top-10per' style={{ left: '30rem' }} />
                <div
                  className='pointer-events-none w-12rem h-12rem rounded-50per sphereTwo bottom-22per sm:bottom-60per md:bottom-55per sm:top-70per md:top-70per flex justify-center items-center overflow-hidden'
                  style={{ left: 0 }}>
                  {isShowingData && (
                    <span
                      className={`px-10px gradient-to-right from-white to-orange-2 text-transparent bg-clip-text text-center rotate-neg-5deg fade-in-right animation-duration-300ms ease animation-forwards animation-delay-100ms opacity-0per ${
                        !isShowingData ? 'blur-10px' : ''
                      }`}>
                      <span className='text-25px font-600 gradient-to-right from-yellow-3 to-orange text-transparent bg-clip-text'>
                        {carbonData.p}%
                      </span>
                      <br />
                      Cleaner than all web pages
                    </span>
                  )}
                </div>
                <div className='pointer-events-none w-15rem h-15rem rounded-50per sphereThree top-25per sm:top-10per left-15per sm:left-5per md:left-10per flex justify-center items-center overflow-hidden'>
                  {isShowingData && (
                    <span
                      className={`px-10px gradient-to-right from-blue-10 to-gray-2 text-transparent bg-clip-text text-center rotate-neg-5deg fade-in-left animation-duration-300ms ease animation-forwards ${
                        !isShowingData ? 'blur-10px' : ''
                      }`}>
                      <span className='text-25px font-600 gradient-to-right from-green-3 to-turquoise text-transparent bg-clip-text'>
                        {carbonData.c}g
                      </span>
                      <br />
                      CO&#x2082; was produced while you were loading the page
                    </span>
                  )}
                </div>
              </div>
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
    </section>
  )
}
