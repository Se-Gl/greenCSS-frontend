import dynamic from 'next/dynamic'
import BrandCard from '@/components/brand/BrandCard'
import LayoutTitle from '@/components/reusable/SEO'
import ModernGrid from '@/components/grid/ModernGrid'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function ExamplesIndexPage() {
  const examples = [
    {
      title: 'Hero Section',
      link: '/examples/hero'
    },
    {
      title: 'Animation',
      link: '/examples/animation'
    }
  ]

  return (
    <LayoutTitle
      title='Handmade, crafted examples by greenCSS'
      description='The collaboration of design and code plays an important role, especially in web development. Check the full selection, explore countless examples such as animations or tutorial examples.'
      url='examples'
      keywords='Examples, Animation, handmade css animation, tutorial examples, green css'>
      <Layout className='min-h-100vh relative z-2 bg-magenta-7' id='examples-index'>
        <div id='examples-index'>
          <ModernGrid
            header='Handmade, crafted examples'
            subheader='Nowadays, a beautiful website is easy to create - if you use greenCSS. However, bringing a web application alive is more difficult.'
            imageBg='yellow'
            imageUrl='/images/examples/hammer-greencss.webp'
            imageAlt='greencss hammer, construction'
          />
          <div className='pb-100px'>
            <p>
              The collaboration of design and code plays an important role, especially in web development. The keyword
              for this process is &quot;learning by doing&quot;. Check the example cards below in order to obtain a
              visual impression of all projects, tutorials or animations.
            </p>
            <div className='m-auto grid grid-col-2 gap-30px sm:gap-15px sm:grid-col-1 md:grid-col-1'>
              {examples
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((example, index) => (
                  <BrandCard title={example.title} link={example.link} key={index} />
                ))}
            </div>
          </div>
        </div>
      </Layout>
    </LayoutTitle>
  )
}
