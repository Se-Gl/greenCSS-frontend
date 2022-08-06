import dynamic from 'next/dynamic'
import SideBar from '../category/SideBar'

const Header = dynamic(() => import('../header'))
const Footer = dynamic(() => import('./Footer'))
const Cookies = dynamic(() => import('./Cookies'))

export default function SideBarlayout({ categories, posts, hasSubcategory, content, className = 'bg-white' }) {
  return (
    <>
      <div className='shadow-small-black'>
        <Header />
      </div>
      <div className={`fade-in animation-duration-100ms animation-forwards overflow-hidden ${className}`}>
        <main>
          <div className='h-100per w-30rem lg:w-25rem fixed left-0per top-0per bg-gray-9 min-h-100vh sm:display-none md:display-none'>
            <div className='mt-75px border-1px border-solid border-gray-7 p-10px'>
              <div
                className='overflow-y-scroll sticky max-h-100vh'
                style={{ scrollbarWidth: 'thin', scrollbarColor: '#898989 #fdfdfd', top: '75px' }}
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
        <div className='ml-30rem lg:ml-25rem sm:ml-0px md:ml-0px'>
          <Footer />
        </div>
      </div>
      <Cookies />
    </>
  )
}
