import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useContext } from 'react'
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

  const checkOS = [
    {
      system: 'MacOS',
      command: 'CMD + k',
      describe: 'on your keyboard.'
    },
    {
      system: 'Windows',
      command: 'CTRL + k',
      describe: 'on your keyboard.'
    },
    {
      system: 'iOS',
      command: 'here',
      describe: 'to open the search modal.'
    },
    {
      system: 'Android',
      command: 'here',
      describe: 'to open the search modal.'
    },
    {
      system: 'Linux',
      command: 'CTRL + k',
      describe: 'on your keyboard.'
    }
  ]

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
            <div className='text-gray text-15px'>
              <span>
                It seems that this page has been lost somewhere in the WWW. Maybe you should use the search function.{' '}
              </span>
              {checkOS.map((os, index) => {
                return (
                  <span key={index}>
                    {getOS() == `${os.system}` && (
                      <>
                        <span>Press </span>
                        <span className='font-600 cursor-pointer' onClick={(e) => handleSearch(e)}>
                          {os.command}
                        </span>
                        <span> {os.describe}</span>
                      </>
                    )}
                  </span>
                )
              })}
            </div>
            <div className='w-100per my-50px'>
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
