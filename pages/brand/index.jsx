import dynamic from 'next/dynamic'
import BrandCard from '@/components/brand/BrandCard'
import SEO from '@/components/reusable/SEO'
import ModernGrid from '@/components/grid/ModernGrid'
import Presentation from '@/components/reusable/Presentation'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function BrandHome() {
  const brandCards = [
    {
      title: 'Logo',
      link: '/brand/logo'
    },
    {
      title: 'Typography',
      link: '/brand/typography'
    },
    {
      title: 'Colours',
      link: '/brand/colours'
    },
    {
      title: 'Composition',
      link: '/brand/composition'
    }
  ]
  const brandImages = [
    {
      path: 'brand/logo-icon',
      alt: 'greenCSS 3D logo icon',
      width: 500,
      height: 500,
      additionalStyle: 'mt-100px'
    },
    {
      path: 'brand/colour-icon',
      alt: 'greenCSS colour palette 3D icon',
      width: 500,
      height: 500
    },
    {
      path: 'brand/typography-icon',
      alt: 'greenCSS brand typography 3d icon',
      width: 500,
      height: 500,
      additionalStyle: 'mt-100px'
    },
    {
      path: 'brand/composition-icon',
      alt: 'greenCSS brand composition 3d logo',
      width: 500,
      height: 500
    }
  ]
  return (
    <SEO
      title='greenCSS Brand Book | Styleguide | Corporate Identity'
      description='A Brand Book - the right way to get to know a story by exploring a style guide.'
      url='brand'
      keywords='Styleguide, Brand Book, greenCSS, Design, Corporate Identity, green css'>
      <Layout className='bg-blue-7'>
        <div className='min-w-100per relative' id='brand-intro'>
          <ModernGrid
            header='A Brand Book - the right way to get to know the core of the box'
            subheader='The brand system features four core elements - logo, typography, colours and composition. All brand features featured in the greenCSS Brand Book or this website are copyrighted. The greenCSS
            library is licensed under the MIT License. If you choose to use logos, designs and/or other brand assets,
            you acknowledge that you sufficiently attribute the specific content.'
            imageBg='yellow'
            imageUrl='/images/brand/brand-box-greencss.webp'
            imageAlt='greencss brand book'
          />
          <Presentation
            id='presentation-brand'
            backgroundColor='bg-blue'
            headline='Curious how greenCSS was designed? Learn more about the design principles.'
            imagesInfo={brandImages}
            hasButton={false}
          />
          <div className='m-auto max-w-60rem my-50px'>
            <div className='m-auto grid grid-col-2 gap-30px sm:gap-15px sm:grid-col-1 md:grid-col-1'>
              {brandCards.sort().map((card, index) => (
                <BrandCard title={card.title} link={card.link} key={index} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </SEO>
  )
}
