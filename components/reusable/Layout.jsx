import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../header'))
const Footer = dynamic(() => import('./Footer'))
const Cookies = dynamic(() => import('./Cookies'))

export default function Layout({ children, className = 'container sm:px-10px md:px-25px lg:px-50px bg-gray-9' }) {
  return (
    <>
      <Header />
      <main>
        <div className={`${className} bg-gray-9`}>{children}</div>
      </main>
      <Footer />
      <Cookies />
    </>
  )
}
