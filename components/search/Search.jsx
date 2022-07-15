import { useState, useEffect } from 'react'
import SearchIcon from '../icon/Search/SearchIcon'
import Results from './Results'

export default function Search({ handleCloseClick }) {
  useEffect(() => {
    const getPreviousSearchResult = async () => {
      const getItem = JSON.parse(localStorage.getItem('search-results'))
      if (getItem == null) {
        return
      } else {
        setSearchTerm(getItem)
      }
    }
    getPreviousSearchResult()
  }, [])

  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const getResults = async () => {
      if (searchTerm === '') {
        setSearchResults([])
      } else {
        const res = await fetch(`/api/search?q=${searchTerm}`)
        const results = await res.json()
        setSearchResults(results)
        localStorage.setItem('search-results', JSON.stringify(searchTerm))
      }
    }
    getResults()
  }, [searchTerm])

  return (
    <>
      <div className='flex bg-white my-20px'>
        <form
          className='flex w-92per'
          onKeyPress={(e) => {
            e.key === 'Enter' && e.preventDefault()
          }}>
          <div type='submit' className='flex items-center justify-center text-black mx-20px'>
            <SearchIcon width='30px' height='30px' />
          </div>
          <div className='w-50rem my-auto'>
            <input
              autoFocus
              type='search'
              name='search'
              id='search'
              className='bg-transparent w-100per text-gray active:text-black border-none text-15px'
              placeholder='Search documentation'
              value={searchTerm.toLowerCase()}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </form>
        <svg
          id='close-modal'
          onClick={handleCloseClick}
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='none'
          viewBox='0 0 20 20'
          className='cursor-pointer my-auto'>
          <path
            className='fill-gray hover:fill-black transition-all transition-duration-300ms'
            d='M5.187 4.01A.833.833 0 004.01 5.187L8.822 10l-4.814 4.813a.835.835 0 101.179 1.178L10 11.178l4.813 4.813a.833.833 0 001.178-1.178L11.178 10l4.813-4.812a.833.833 0 00-1.178-1.179L10 8.822 5.187 4.008v.001z'></path>
        </svg>
      </div>
      <hr className='border-0px h-1px bg-gray-5' />
      <Results results={searchResults} searchTerm={searchTerm} />
    </>
  )
}
