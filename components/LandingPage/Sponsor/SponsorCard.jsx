import CtaButton from '@/components/reusable/CtaButton'

export default function SponsorCard({ onMouseEnter, onMouseLeave, onKeyDown, onClick, cart, index, hover }) {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} key={index} onKeyDown={onKeyDown}>
      <div
        className='relative bg-white shadow-small-gray rounded-20px p-20px cursor-pointer min-h-35rem'
        onClick={onClick}>
        <h3>{cart.header}</h3>
        <p className='text-15px text-gray mb-0px'>{cart.subheader}</p>
        <CtaButton index={index} hover={hover} />
      </div>
    </div>
  )
}
