import dynamic from 'next/dynamic'
import { CookieBanner } from 'codn'

const Header = dynamic(() => import('../header'))
const Footer = dynamic(() => import('./Footer'))

export default function Layout({ children, className = 'container sm:px-10px md:px-25px lg:px-50px bg-yellow' }) {
  return (
    <>
      <div className={`fade-in animation-duration-100ms animation-forwards overflow-hidden ${className}`}>
        <Header />
        <main>
          <div className='container min-h-100vh'>{children}</div>
        </main>
        <Footer />
      </div>
      <CookieBanner header='🍪 Our website uses cookies' className='max-w-35rem'>
        <p className='text-gray text-15px mb-0px'>
          Click “Accept” to enable greenCSS to use cookies in order to personalize this site for you. In this process
          you agree to the storing of cookies and/or data in your local storage. You agree, that we use analytics to
          enhance site navigation and analyze site usage. It helps us to improve the UI/UX experience for you.
        </p>
      </CookieBanner>
    </>
  )
}
