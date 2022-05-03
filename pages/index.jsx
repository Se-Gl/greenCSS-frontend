import dynamic from 'next/dynamic'
import Hero from '@/components/LandingPage/Hero'
import { getPosts } from '@/lib/posts'
import { sortByDate } from '@/utils/SortBy'
import { DonationProvider } from '@/utils/DonationContext'
import LayoutTitle from '@/components/reusable/LayoutTitle'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })
const Presentation = dynamic(() => import('@/components/LandingPage/Presentation'))
const Service = dynamic(() => import('@/components/LandingPage/Service'))
const CalculateFootprint = dynamic(() => import('@/components/LandingPage/CalculateFootprint'))
const Sponsor = dynamic(() => import('@/components/LandingPage/Sponsor'))
const News = dynamic(() => import('@/components/LandingPage/News'))
const Testimonial = dynamic(() => import('@/components/LandingPage/Testimonial'))
const Newsletter = dynamic(() => import('@/components/LandingPage/Newsletter'))
const Faq = dynamic(() => import('@/components/LandingPage/Faq/Faq'))

export default function HomePage({ posts }) {
  return (
    <LayoutTitle>
      <div className='overflow-x-hidden'>
        <Layout className='container min-h-100vh relative z-2 bg-white'>
          <DonationProvider>
            <Hero />
            <Presentation />
            <Service />
            <CalculateFootprint />
            <Sponsor />
            <News posts={posts} />
            <Testimonial />
            <Newsletter />
            <Faq />
          </DonationProvider>
        </Layout>
      </div>
    </LayoutTitle>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts(sortByDate, 'posts-blog').slice(0, 3)
    }
  }
}
