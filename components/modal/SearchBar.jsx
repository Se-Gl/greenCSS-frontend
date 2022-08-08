import { getOS } from '@/utils/getOS'
import SearchIcon from '../icon/Search/SearchIcon'

export default function SearchBar({ setShowModal, className, isHero }) {
  return (
    <div
      className={`flex w-100per min-h-40px border-1px border-solid ${
        isHero ? 'border-white text-white' : 'border-black'
      } rounded-10px ${className}`}
      onClick={setShowModal}
      style={{ cursor: 'pointer' }}>
      <div className='min-w-15px my-auto'>
        <SearchIcon width='15px' height='15px' className='my-auto' fillColor={isHero ? '#fdfdfd' : '#0D0D0D'} />
      </div>
      <input
        type='search'
        name='modal-search'
        id='modal-search'
        className={`flex bg-transparent justify-center w-100per ${
          isHero ? 'text-white' : 'text-black'
        } border-none text-10px`}
        placeholder={`${isHero ? 'Search' : 'Rapid Search'}`}
      />
      <p
        className={`text-10px font-600 bg-black rounded-5px my-auto mx-5px text-white ${
          isHero ? 'text-white min-w-50px' : 'p-10px min-w-62px'
        }`}
        id='close-modal'>
        {getOS() == 'MacOS' && 'CMD + k'}
        {getOS() == 'Windows' && 'CTRL + k'}
      </p>
    </div>
  )
}
