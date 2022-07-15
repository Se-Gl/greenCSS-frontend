function SearchIcon({ width = '20', height = '20', className, fillColor = '#7D7D7D' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className={className}
      fill='none'
      viewBox='0 0 20 20'>
      <path
        fill={fillColor}
        fillRule='evenodd'
        d='M15.266 12.027a6.667 6.667 0 10-1.177 1.176l.036.038 3.535 3.536a.834.834 0 101.18-1.18l-3.537-3.534a.891.891 0 00-.037-.036zm-1.73-7.624a5 5 0 11-7.013 7.128 5 5 0 017.013-7.128z'
        clipRule='evenodd'></path>
    </svg>
  )
}

export default SearchIcon
