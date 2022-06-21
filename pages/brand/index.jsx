import dynamic from 'next/dynamic'
import BrandCard from '@/components/brand/BrandCard'
import SEO from '@/components/reusable/SEO'
import ModernGrid from '@/components/grid/ModernGrid'

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

  return (
    <SEO
      title='greenCSS Brand Book | Styleguide | Corporate Identity'
      description='A Brand Book - the right way to get to know a story by exploring a style guide.'
      url='brand'
      keywords='Styleguide, Brand Book, greenCSS, Design, Corporate Identity, green css'>
      <Layout className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh mb-10rem'>
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
          <div className='m-auto max-w-60rem mb-10rem'>
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
