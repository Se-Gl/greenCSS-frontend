import dynamic from 'next/dynamic'
import SEO from '@/components/reusable/SEO'
import ModernGrid from '@/components/grid/ModernGrid'
import AboutPresentation from '@/components/about/AboutPresentation'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })
const Story = dynamic(() => import('@/components/about/Story'))

export default function AboutPage() {
  return (
    <SEO
      title='greenCSS about - get a glimpse'
      description='greenCSS is a global, environmental, sustainable open source, non-profit organization that works to make the world a better and more environmentally friendly way for nature'
      url='docs'
      keywords='about, sustainable open source, competitive development, sustainable programming'>
      <Layout className='bg-red-7'>
        <ModernGrid
          id='about-index'
          header='About greenCSS'
          subheader='You have already found the key to our heart. So we will gladly tell you a little bit more about us...'
          imageBg='blue'
          imageUrl='/images/about/key-greencss.webp'
          imageAlt='greencss documentation book'
        />
        <AboutPresentation />
        <Story />
        <ModernGrid
          isHero={false}
          isRevert={true}
          header='greenCSS is a sustainable open source cascade style sheet library'
          subheader='We love to work globally, sustainably, environmentally friendly and not politically. The vision of the
          non-profit organization is to make the programming world a better place and contribute for a more competitive
          webapplication development. Let us think and code outside the box together. '
          imageBg='black'
          imageUrl='/images/about/world-box-greencss.webp'
          imageAlt='greencss world box'
        />
      </Layout>
    </SEO>
  )
}
