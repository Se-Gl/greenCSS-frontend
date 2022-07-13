import SearchIcon from '../icon/Search/SearchIcon'

export default function SearchBar({ setShowModal, className, isHero }) {
  return (
    <div
      className={`flex w-100per min-h-40px border-1px border-solid ${
        isHero ? 'border-white text-white' : 'border-black'
      } rounded-10px ${className}`}
      onClick={setShowModal}
      style={{ cursor: 'pointer' }}>
      <SearchIcon width='25px' height='25px' className='my-auto mx-10px' fillColor={isHero ? '#fdfdfd' : '#0D0D0D'} />
      <input
        type='search'
        name='modal-search'
        id='modal-search'
        className={`flex bg-transparent justify-center w-100per ${
          isHero ? 'text-white' : 'text-black'
        } border-none text-10px`}
        placeholder={`${isHero ? 'Check the docs' : 'Rapid Search'}`}
      />
      <p className='text-10px font-600 bg-black p-10px rounded-5px my-auto mx-5px text-white' id='close-modal'>
        F3
      </p>
    </div>
  )
}
