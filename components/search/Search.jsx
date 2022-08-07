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
      </div>
      <hr className='border-0px h-1px bg-gray-5' />
      <Results results={searchResults} searchTerm={searchTerm} />
    </>
  )
}
