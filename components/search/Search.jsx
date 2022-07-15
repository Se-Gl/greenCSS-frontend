import { useState, useEffect } from 'react'
import SearchIcon from '../icon/Search/SearchIcon'
import Results from './Results'

export default function Search({ handleCloseClick }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const getResults = async () => {
      if (searchTerm === '') {
        setSearchResults([])
      } else {
        const res = await fetch(`/api/search?q=${searchTerm}`)
        const results = await res.json()
        // console.log(results);
        setSearchResults(results)
      }
    }
    getResults()
  }, [searchTerm])

  return (
    <>
      <div className='flex bg-white my-20px'>
        <form className='flex max-w-40rem'>
          <div type='submit' className='flex items-center justify-center text-black mx-20px'>
            <SearchIcon width='30px' height='30px' />
          </div>
          <div className='w-50rem my-auto'>
            <input
              autoFocus
              type='search'
              name='search'
              id='search'
              className='bg-transparent w-100per text-black border-none text-15px'
              // style={{ textTransform: 'lowercase' }}
              placeholder='Search documentation'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </form>
        <a
          href='#'
          onClick={handleCloseClick}
          className='text-10px bg-white p-10px rounded-5px mx-10px hover:bg-black hover:text-white transition-all transition-duration-500ms my-auto no-decoration'
          id='close-modal'>
          ESC
        </a>
      </div>
      <hr className='border-0px h-1px bg-gray-5' />
      <Results results={searchResults} searchTerm={searchTerm} />
    </>
  )
}
