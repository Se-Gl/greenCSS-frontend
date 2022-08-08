import CtaButton from '@/components/reusable/CtaButton'
import Image from 'next/image'

export default function SponsorCard({
  onMouseEnter,
  onMouseLeave,
  onKeyDown,
  bgColor = 'bg-white',
  imageUrl = '/images/landingpage/donation/planet-01.png',
  imageAlt,
  onClick,
  headerClass,
  header,
  priceClass,
  price,
  descriptionClass = 'text-gray',
  fillOne,
  fillTwo,
  subheader,
  cart,
  index,
  hover
}) {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} key={index} onKeyDown={onKeyDown}>
      <div
        className={`relative shadow-small-gray rounded-20px cursor-pointer min-h-35rem ${
          (index === 0 && 'bg-white') ||
          (index === 1 && 'bg-blue') ||
          (index === 2 && 'bg-black') ||
          (bgColor && bgColor)
        }`}
        onClick={onClick}>
        {imageUrl && (
          <div className='relative min-h-25rem sm:h-25per md:h-25per w-100per'>
            <Image
              quality={80}
              layout='fill'
              objectFit='cover'
              src={
                (index === 0 && '/images/landingpage/donation/planet-01.png') ||
                (index === 1 && '/images/landingpage/donation/planet-02.png') ||
                (index === 2 && '/images/landingpage/donation/planet-03.png') ||
                (imageUrl && imageUrl)
              }
              alt={
                (index === 0 && 'greenCSS 3D planet green') ||
                (index === 1 && 'greenCSS 3D planet blue') ||
                (index === 2 && 'greenCSS 3D planet purple') ||
                (imageAlt && imageAlt)
              }
              placeholder='blur'
              blurDataURL={`/_next/image?url=${imageUrl}&w=16&q=1`}
            />
          </div>
        )}

        <div className='px-25px py-50px'>
          <h3
            className={`mb-10px ${
              (index === 0 && 'text-black') ||
              (index === 1 && 'text-white') ||
              (index === 2 && 'text-white') ||
              (headerClass && headerClass)
            }`}>
            {cart ? cart.header : header}
          </h3>
          <h4
            className={`text-20px font-500 ${
              (index === 0 && 'text-greencss') ||
              (index === 1 && 'text-white') ||
              (index === 2 && 'text-gray') ||
              (priceClass && priceClass)
            }`}>
            {cart ? cart.price : price}
          </h4>
          <p
            className={`text-15px mb-0px ${
              (index === 0 && 'text-gray') ||
              (index === 1 && 'text-white') ||
              (index === 2 && 'text-white') ||
              (descriptionClass && descriptionClass)
            }`}>
            {cart ? cart.subheader : subheader}
          </p>
          <CtaButton
            index={index}
            hover={hover}
            className='absolute bottom-2per right-2per'
            fillOne={fillOne && fillOne}
            fillTwo={
              (index === 0 && 'fill-black') ||
              (index === 1 && 'fill-white') ||
              (index === 2 && 'fill-gray') ||
              (fillTwo && fillTwo)
            }
          />
        </div>
      </div>
    </div>
  )
}
