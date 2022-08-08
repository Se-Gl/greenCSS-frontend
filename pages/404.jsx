import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState, useContext } from 'react'
import { NEXT_URL } from '@/config/index'
import { GreenButton } from '@/components/reusable/Button'
import SEO from '@/components/reusable/SEO'
import ModernGrid from '@/components/grid/ModernGrid'
import { getOS } from '@/utils/getOS'
import ModalContext from '@/utils/ModalContext'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function ForOhFor() {
  const { setIsModalOpen } = useContext(ModalContext)
  const { asPath } = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  return (
    <SEO
      title='greenCSS 404 - Something has gone terribly wrong'
      description='It seems that this page has been lost somewhere in the WWW. Maybe you should use the search function.'
      url={NEXT_URL + asPath}
      keywords='404, not found, error, sorry'>
      <Layout className='min-h-100vh relative z-2 bg-blue-7'>
        <div id='404'>
          <ModernGrid
            header='Something has gone terribly wrong - Please forgive me!'
            imageBg='blue'
            imageUrl='/images/404/404-greencss.webp'
            imageAlt='greencss 404 not found'>
            <p className='text-gray text-15px'>
              It seems that this page has been lost somewhere in the WWW. Maybe you should use the search function.{' '}
              <>
                {getOS() == 'MacOS' && (
                  <>
                    <span>Press </span>
                    <span className='font-600 cursor-pointer' onClick={(e) => handleSearch(e)}>
                      CMD + k
                    </span>
                    <span> on your keyboard.</span>
                  </>
                )}
                {getOS() == 'Windows' && (
                  <>
                    <span>Press </span>
                    <span className='font-600 cursor-pointer' onClick={(e) => handleSearch(e)}>
                      CTRL + k
                    </span>
                    <span> on your keyboard.</span>
                  </>
                )}
                {getOS() != 'MacOS' ||
                  (getOS() != 'Windows' && (
                    <>
                      <span>Click </span>
                      <span className='font-600 cursor-pointer' onClick={(e) => handleSearch(e)}>
                        here
                      </span>
                      <span> to open the search modal.</span>
                    </>
                  ))}
              </>
            </p>
            <div className='w-100per mb-50px'>
              <GreenButton href='/' hasLink={true} isDefault={false}>
                Or Go back
              </GreenButton>
            </div>
          </ModernGrid>
        </div>
      </Layout>
    </SEO>
  )
}
