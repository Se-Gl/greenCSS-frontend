import Link from 'next/link'
import { useState } from 'react'

export default function Results({ results, searchTerm }) {
  if (results.length === 0) return <></>

  const [isAllSelected, setisAllSelected] = useState(true)
  const [isDocSelected, setisDocSelected] = useState(false)
  const [isBlogSelected, setisBlogSelected] = useState(false)

  return (
    <>
      <div className='flex mx-20px my-10px text-15px'>
        <div
          className='cursor-pointer'
          onClick={() => {
            setisDocSelected(false)
            setisBlogSelected(false)
            setisAllSelected(true)
          }}>
          All <span className='bg-gray-9 text-blue text-10px p-2px rounded-3px'>{results.length}</span>
        </div>
        <div
          className='cursor-pointer mx-20px'
          onClick={() => {
            setisBlogSelected(false)
            setisAllSelected(false)
            setisDocSelected(true)
          }}>
          Docs
        </div>
        <div
          className='cursor-pointer'
          onClick={() => {
            setisDocSelected(false)
            setisAllSelected(false)
            setisBlogSelected(true)
          }}>
          Blog
        </div>
      </div>
      <hr className='border-0px h-1px bg-gray-5' />
      {isDocSelected && (
        <>
          <div className='mt-25px'>
            {results.map(
              (result, index) =>
                !result.frontmatter.isBlog && (
                  <div
                    className='my-10px px-20px py-10px hover:bg-gray-9 transition-all transition-duration-500ms'
                    key={index}>
                    <Link
                      passHref
                      href={{
                        pathname: 'docs/[slug]',
                        query: { slug: `${result.slug}` }
                      }}>
                      <div className='flex w-100per cursor-pointer'>
                        <div className='ml-15px'>
                          <h4 className='text-15px mb-0px capitalize'>{result.frontmatter.title}</h4>
                          <p className='text-15px font-400 text-gray mt-10px mb-0px'>{result.frontmatter.excerpt}</p>
                        </div>
                        <div className='flex ml-auto'>
                          <p className='bg-gray-8 text-gray text-10px font-500 p-5px rounded-3px my-auto'>
                            {result.frontmatter.category}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
            )}
          </div>
        </>
      )}
      {isBlogSelected && (
        <>
          <div className='mt-25px'>
            {results.map(
              (result, index) =>
                result.frontmatter.isBlog && (
                  <div
                    className='my-10px px-20px py-10px hover:bg-gray-9 transition-all transition-duration-500ms'
                    key={index}>
                    <Link
                      passHref
                      href={{
                        pathname: 'blog/[slug]',
                        query: { slug: `${result.slug}` }
                      }}>
                      <div className='flex w-100per cursor-pointer'>
                        <div className='ml-15px'>
                          <h4 className='text-15px mb-0px capitalize'>{result.frontmatter.title}</h4>
                          <p className='text-15px font-400 text-gray mt-10px mb-0px'>{result.frontmatter.excerpt}</p>
                        </div>
                        <div className='flex ml-auto'>
                          <p className='bg-gray-8 text-gray text-10px font-500 p-5px rounded-3px my-auto'>
                            {result.frontmatter.category}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
            )}
          </div>
        </>
      )}

      {isAllSelected && (
        <>
          <div className='mt-25px'>
            {results.map((result, index) => (
              <div
                className='my-10px px-20px py-10px hover:bg-gray-9 transition-all transition-duration-500ms'
                key={index}>
                <Link
                  passHref
                  href={{
                    pathname: `/${result.frontmatter.isBlog ? 'blog/[slug]' : 'docs/[slug]'}`,
                    query: { slug: `${result.slug}` }
                  }}>
                  <div className='flex w-100per cursor-pointer'>
                    <div className='ml-15px'>
                      <h4 className='text-15px mb-0px capitalize'>{result.frontmatter.title}</h4>
                      <p className='text-15px font-400 text-gray mt-10px mb-0px'>{result.frontmatter.excerpt}</p>
                    </div>
                    <div className='flex ml-auto'>
                      <p className='bg-gray-8 text-gray text-10px font-500 p-5px rounded-3px my-auto'>
                        {result.frontmatter.category}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}

      {/* <div className='p-25px' id='search-results'>
        {results.length <= 1 ? (
          <h2 className='text-20px'>{results.length} Result</h2>
        ) : (
          <h2 className='text-20px'>{results.length} Results</h2>
        )}
        {results.map((result, index) => (
          <div
            className={`bg-green-9 hover:bg-greencss-5 transition-all transition-duration-500ms p-10px rounded-10px flex justify-between items-center mb-10px border-bottom-1px border-black border-solid clip-inset-in-left animate animation-forwards animation-delay-${
              (index + 1) * 1
            }00ms`}
            key={index}>
            <Link
              passHref
              href={{
                pathname: `/${result.frontmatter.isBlog ? 'blog/[slug]' : 'docs/[slug]'}`,
                query: { slug: `${result.slug}` }
              }}>
              <div className='flex w-100per cursor-pointer'>
                {result.frontmatter.isBlog && <Blog className='my-auto' />}
                {!result.frontmatter.isBlog && <Document className='my-auto' />}
                <div className='ml-15px'>
                  <div className='flex items-center'>
                    <h3 className='transition-all transition-duration-500ms text-15px font-600 text-greencss hover:text-greencss-2 bg-green-5 hover:bg-greencss-9 rounded-20px py-5px px-10px mb-0px'>
                      {result.frontmatter.category}
                    </h3>
                  </div>
                  <p className='text-15px font-600 text-greencss mt-10px mb-0px capitalize'>
                    {result.frontmatter.title}
                  </p>
                </div>
                <ChevronRight className='ml-auto my-auto' />
              </div>
            </Link>
          </div>
        ))}
      </div> */}
    </>
  )
}
