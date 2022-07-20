import CtaButton from '@/components/reusable/CtaButton'
import Image from 'next/image'

export default function SponsorCard({
  onMouseEnter,
  onMouseLeave,
  onKeyDown,
  bgColor = 'bg-white',
  imageUrl,
  imageAlt,
  onClick,
  headerClass,
  priceClass,
  descriptionClass = 'text-gray',
  fillOne,
  fillTwo,
  cart,
  index,
  hover
}) {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} key={index} onKeyDown={onKeyDown}>
      <div
        className={`relative shadow-small-gray rounded-20px cursor-pointer min-h-35rem ${bgColor}`}
        onClick={onClick}>
        {imageUrl && (
          <div className='relative min-h-25rem sm:h-25per md:h-25per w-100per'>
            <Image
              quality={100}
              layout='fill'
              objectFit='cover'
              src={imageUrl}
              alt={imageAlt}
              placeholder='blur'
              blurDataURL={`/_next/image?url=${imageUrl}&w=16&q=1`}
            />
          </div>
        )}

        <div className='px-25px pb-50px'>
          <h3 className={`mb-10px ${headerClass}`}>{cart.header}</h3>
          <h4 className={`text-20px font-500 ${priceClass}`}>{cart.price}</h4>
          <p className={`text-15px mb-0px ${descriptionClass}`}>{cart.subheader}</p>
          <CtaButton
            index={index}
            hover={hover}
            className='absolute bottom-2per right-2per'
            fillOne={fillOne}
            fillTwo={fillTwo}
          />
        </div>
      </div>
    </div>
  )
}
