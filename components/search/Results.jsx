import Link from 'next/link'
import { useState } from 'react'

export default function Results({ results }) {
  if (results.length === 0) return <></>

  const [isAllSelected, setisAllSelected] = useState(true)
  const [isDocSelected, setisDocSelected] = useState(false)
  const [isBlogSelected, setisBlogSelected] = useState(false)

  return (
    <>
      <div className='flex relative mx-20px my-10px text-15px'>
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
          className={`cursor-pointer mx-20px ${isDocSelected && 'font-500'}`}
          onClick={() => {
            setisBlogSelected(false)
            setisAllSelected(false)
            setisDocSelected(true)
          }}>
          Docs
        </div>
        <div
          className={`cursor-pointer ${isBlogSelected && 'font-500'}`}
          onClick={() => {
            setisDocSelected(false)
            setisAllSelected(false)
            setisBlogSelected(true)
          }}>
          Blog
        </div>
        <hr
          className='absolute bottom-neg-50per h-2px w-10per m-0px bg-blue border-none transition-all transition-duration-300ms ease ml-0px'
          style={{ marginLeft: (isDocSelected && '12%') || (isBlogSelected && '24%') }}
        />
      </div>
      <hr className='border-0px h-1px bg-gray-5' />
      <div className='mt-25px' id='search-results'>
        {isDocSelected && (
          <>
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
          </>
        )}
        {isBlogSelected && (
          <>
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
          </>
        )}

        {isAllSelected && (
          <>
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
          </>
        )}
      </div>
    </>
  )
}
