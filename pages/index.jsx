import dynamic from 'next/dynamic'
import Hero from '@/components/LandingPage/Hero'
import useWindowDimensions from '@/utils/WindowDimensions'
import { getPosts } from '@/lib/posts'
import { sortByDate } from '@/utils/SortBy'
import { DonationProvider } from '@/utils/DonationContext'
import SEO from '@/components/reusable/SEO'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })
const Service = dynamic(() => import('@/components/LandingPage/Service'))
const CalculateFootprint = dynamic(() => import('@/components/LandingPage/CalculateFootprint'))
const Sponsor = dynamic(() => import('@/components/LandingPage/Sponsor'))
const News = dynamic(() => import('@/components/LandingPage/News'))
const Testimonial = dynamic(() => import('@/components/LandingPage/Testimonial'))
const Faq = dynamic(() => import('@/components/LandingPage/Faq/Faq'))

export default function HomePage({ posts }) {
  const { width } = useWindowDimensions()
  return (
    <SEO>
      <div className='overflow-x-hidden'>
        <Layout className='min-h-100vh relative z-2 bg-yellow-7'>
          <DonationProvider>
            {/* <div className='container'> */}
            <Hero />
            <Service />
            {width >= 1000 && <CalculateFootprint />}
            <Sponsor />
            <News posts={posts} />
            <Testimonial />
            <Faq />
            {/* </div> */}
          </DonationProvider>
        </Layout>
      </div>
    </SEO>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts(sortByDate, 'posts-blog').slice(0, 4)
    }
  }
}
