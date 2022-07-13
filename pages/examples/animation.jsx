import dynamic from 'next/dynamic'
import { BackButton } from '@/components/reusable/Button'
import SEO from '@/components/reusable/SEO'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })
const DropDown = dynamic(() => import('@/components/animation/DropDown'))

export default function AnimationPage() {
  return (
    <SEO
      title='CSS Animations by greenCSS'
      description='Explore the range of animations. Enter your preferred animation, the animation duration and the animation type.'
      url='docs/animation/example'
      keywords='Animation, css animation, reusable animation, green css'>
      <Layout className='sm:px-10px md:px-25px lg:px-50px min-h-100vh'>
        <div className='mb-10rem min-w-100per relative'>
          <BackButton>Back</BackButton>
          <div className='m-auto max-w-60rem'>
            <h1>greenCSS Animations - example</h1>
            <p>Explore the range of animations</p>
          </div>
          <DropDown />
        </div>
      </Layout>
    </SEO>
  )
}
