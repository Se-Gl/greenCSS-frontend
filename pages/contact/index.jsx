import dynamic from 'next/dynamic'
import ContactForm from '@/components/contact/ContactForm'
import SEO from '@/components/reusable/SEO'
import Loader from '@/components/logo/Loader'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })
const ContactMap = dynamic(() => import('@/components/contact/ContactMap'), { loading: () => <Loader />, ssr: false })
const ContactDetails = dynamic(() => import('@/components/contact/ContactDetails'), { ssr: false })

export default function ContactPage() {
  return (
    <SEO
      title='greenCSS contact - get in touch'
      description='Contact - the right way to get to know each other.'
      url='docs'
      keywords='contact, message, information, exchange'>
      <Layout className='bg-orange-7'>
        <ContactForm />
        <ContactMap />
        <ContactDetails />
      </Layout>
    </SEO>
  )
}
