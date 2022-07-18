import Image from 'next/image'
import isInView from '@/hooks/InView/scrollView'
import { GreenButton } from '../reusable/Button'
import Section from '../reusable/Section'

export default function Presentation({
  id = 'presentation',
  backgroundColor = 'bg-black',
  imagesInfo,
  headline,
  buttonLink,
  buttonText,
  hasButton = false
}) {
  const [ref, isVisible] = isInView({
    threshold: 0.1,
    unobserveOnEnter: true
  })

  return (
    <Section id={id} additionalClassName={`${backgroundColor} rounded-20px my-100px shadow-small-gray`}>
      <div className='m-auto grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1 mx-20px'>
        <div className='grid grid-row-2 grid-col-2 gap-30px text-white' ref={ref}>
          {imagesInfo.map((image, index) => (
            <div
              key={index}
              style={{ opacity: 0 }}
              className={`${image.additionalStyle} rounded-20px overflow-hidden ${
                isVisible && `opacity-100per fade-in animate animation-forwards animation-delay-${(index + 1) * 2}00ms`
              }`}>
              <Image
                className='rounded-20px transition-transform transition-duration-700ms hover:scale-105'
                quality={100}
                src={`/images/${image.path}.webp`}
                alt={image.alt}
                width={image.width}
                height={image.height}
                placeholder='blur'
                blurDataURL={`/_next/image?url=/images/${image.path}.webp&w=16&q=1`}
              />
            </div>
          ))}
        </div>
        <div className='m-auto sm:text-center md:text-center'>
          <h2 className='text-white'>{headline}</h2>
          {hasButton && (
            <div className='sm:flex md:flex'>
              <div className='mx-auto'>
                <GreenButton
                  id='new-member-button'
                  className='text-black text-15px font-400 ml-0px mt-25px greencss-button-reverse bg-white border-none'
                  isLinkedOutline={true}
                  isDefault={false}
                  href={buttonLink}>
                  {buttonText}
                </GreenButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
