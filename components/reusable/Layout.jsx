import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../header'))
const Footer = dynamic(() => import('./Footer'))
const CookieBanner = dynamic(() => import('../cookieBanner/CookieBanner'))

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
      <CookieBanner />
    </>
  )
}
