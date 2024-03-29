function Checkmark({ width = '20', height = '20', className, fillColor = 'fill-greencss' }) {
  return (
    <svg
      id='checkmark'
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 30 30'
      className={`${className} min-w-20px min-h-20px`}>
      <path fill='transparent' d='M0 0H30V30H0z'></path>
      <path
        className={fillColor}
        d='M23.664 8.253a1 1 0 01.083 1.411l-10.666 12a1 1 0 01-1.495 0l-5.333-6a1 1 0 011.494-1.328l4.586 5.159 9.92-11.16a1 1 0 011.411-.082z'></path>
    </svg>
  )
}

export default Checkmark
