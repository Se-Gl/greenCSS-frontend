import dynamic from 'next/dynamic'
import { GreenButton } from '@/components/reusable/Button'
import SEO from '@/components/reusable/SEO'
import ModernGrid from '@/components/grid/ModernGrid'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function AnimationIndexPage() {
  return (
    <SEO
      title='Handmade, crafted animations by greenCSS'
      description='The collaboration of design and code plays an important role, especially in web development. Check the full selection, including animation examples.'
      url='docs/animation'
      keywords='Animation, handmade css animation, reusable animation, green css'>
      <Layout className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh'>
        <div id='animation-main'>
          <ModernGrid
            header='Handmade, crafted animations'
            subheader='The collaboration of design and code plays an important role, especially in web development. Nowadays, a
            beautiful website is more or less easy to create. However, bringing a web application alive is more
            difficult. The keyword for this process is "animation". Animation originates from the latin
            verb "animare" and means as much as spirit, life, breath or simply to bring to life. To see the full selection, including animation examples, proceed by clicking on the button below.'
            imageBg='turquoise'
            imageUrl='/images/examples/hammer-greencss.webp'
            imageAlt='greencss hammer, construction'
          />
          <GreenButton
            hasLink={true}
            isDefault={false}
            className='my-50px'
            href='/examples/animation'
            id='visit-examples-2'>
            Animation Examples
          </GreenButton>
        </div>
      </Layout>
    </SEO>
  )
}
