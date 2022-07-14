export default function SponsorCard({ onMouseEnter, onMouseLeave, onKeyDown, onClick, cart, index, hover }) {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} key={index} onKeyDown={onKeyDown}>
      <div
        className='relative bg-white shadow-small-gray rounded-20px p-20px cursor-pointer min-h-35rem'
        onClick={onClick}>
        <h3>{cart.header}</h3>
        <p className='text-15px text-gray mb-0px'>{cart.subheader}</p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='50'
          height='50'
          fill='none'
          viewBox='0 0 50 50'
          className='absolute bottom-5per right-5per'>
          {hover === index && (
            <circle
              className='fade-in animation-duration-200ms animation-forwards'
              cx='25'
              cy='25'
              r='25'
              fill='#066EF9'></circle>
          )}
          <mask
            id='mask0_516384_1156'
            style={{ maskType: 'alpha' }}
            width='21'
            height='17'
            x='14'
            y='16'
            maskUnits='userSpaceOnUse'>
            <path
              fill='#101010'
              fillRule='evenodd'
              d='M15.5 25.5h15.586l-5.293 5.293a1 1 0 001.414 1.414l7-7a.999.999 0 000-1.414l-7-7a.997.997 0 00-1.414 0 1 1 0 000 1.414l5.293 5.293H15.5a1 1 0 000 2z'
              clipRule='evenodd'></path>
          </mask>
          <g mask='url(#mask0_516384_1156)'>
            <path
              fill={`${hover === index ? '#FDFDFD' : '#7D7D7D'}`}
              d='M37 37H62V62H37z'
              transform='rotate(180 37 37)'></path>
          </g>
        </svg>
      </div>
    </div>
  )
}
