import dynamic from 'next/dynamic'
import SEO from '@/components/reusable/SEO'
import MemberTierCard from '@/components/member/MemberTierCard'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function index({ stripeData }) {
  return (
    <SEO
      title='greenCSS member area'
      description='Check your current green state. Decide independently where your donations go.'
      url='member'
      keywords='member, donation, green software, sustainable software'>
      <Layout className='container sm:px-10px md:px-25px lg:px-50px min-h-100vh'>
        <div className='flex h-100vh'>
          <div className='m-auto text-center'>
            <h1>Choose your plan</h1>
            <p className='text-black-10'>
              You decide where you donate. Compare plans, then choose the one just right for you.
            </p>
          </div>
        </div>
        <>
          <div className='mx-auto text-center'>
            <h2>Compare your benefits</h2>
            <p className='text-black-10'>Not sure which plan to choose? Let us find the one just right for you</p>
          </div>
          <div className='grid grid-col-12 gap-30px sm:grid-col-1 md:grid-col-1'>
            <MemberTierCard title='' price='' isDescription={true} />

            {stripeData.map((d, i) => (
              <MemberTierCard key={i} title={d.nickname} price={d.unit_amount / 100} />
            ))}
          </div>
        </>
      </Layout>
    </SEO>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.PUBLIC_BACKEND_URL}/api/prices`)
  const stripeData = await res.json()

  return { props: { stripeData } }
}
