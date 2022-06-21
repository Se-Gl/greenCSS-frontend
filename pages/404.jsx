import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { NEXT_URL } from '@/config/index'
import { GreenButton } from '@/components/reusable/Button'
import SEO from '@/components/reusable/SEO'
import ModernGrid from '@/components/grid/ModernGrid'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function ForOhFor() {
  const { asPath } = useRouter()

  return (
    <SEO
      title='greenCSS 404 - Something has gone terribly wrong'
      description='It seems that this page has been lost somewhere in the WWW. Maybe you should use the search function.'
      url={NEXT_URL + asPath}
      keywords='404, not found, error, sorry'>
      <Layout>
        <div id='404'>
          <ModernGrid
            header='Something has gone terribly wrong - Please forgive me!'
            subheader='It seems that this page has been lost somewhere in the WWW. Maybe you should use the search function. Press F3 on your keyboard'
            imageBg='blue'
            imageUrl='/images/404/404-greencss.webp'
            imageAlt='greencss 404 not found'
          />
          <div className='w-100per mb-50px'>
            <GreenButton href='/' hasLink={true} isDefault={false}>
              Or Go back
            </GreenButton>
          </div>
        </div>
      </Layout>
    </SEO>
  )
}
