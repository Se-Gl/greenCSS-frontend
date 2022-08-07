import dynamic from 'next/dynamic'
import { CookieBanner } from 'codn'
import SideBar from '../category/SideBar'

const Header = dynamic(() => import('../header'))
const Footer = dynamic(() => import('./Footer'))

export default function SideBarlayout({ categories, posts, hasSubcategory, content, className = 'bg-white' }) {
  return (
    <>
      <div className='shadow-small-black'>
        <Header />
      </div>
      <div className={`fade-in animation-duration-100ms animation-forwards overflow-hidden ${className}`}>
        <main>
          <div className='h-100per w-30rem lg:w-25rem fixed left-0per top-0per bg-gray-9 min-h-100vh sm:display-none md:display-none'>
            <div className='mt-75px p-10px' style={{ borderRight: '1px solid #d2d2d2' }}>
              <div
                className='overflow-y-scroll sticky max-h-100vh'
                style={{ scrollbarWidth: 'thin', scrollbarColor: '#d2d2d2 #fdfdfd', top: '75px' }}
                id='sidebar'>
                <ul>
                  <SideBar categories={categories} posts={posts} hasSubcategory={hasSubcategory} />
                </ul>
              </div>
            </div>
          </div>
          <div
            className='px-10px lg:px-50px h-100per ml-30rem lg:ml-20rem sm:ml-0px md:ml-0px'
            style={{ maxWidth: '1100px' }}>
            {content}
          </div>
        </main>
        <div className='px-10px ml-30rem lg:ml-25rem sm:ml-0px md:ml-0px'>
          <Footer />
        </div>
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
