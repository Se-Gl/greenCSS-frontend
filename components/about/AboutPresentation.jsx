import Image from 'next/image'
import isInView from '@/hooks/InView/scrollView'
import { GreenButton } from '../reusable/Button'
import Section from '../reusable/Section'

export default function AboutPresentation() {
  const [ref, isVisible] = isInView({
    threshold: 0.1,
    unobserveOnEnter: true
  })

  const aboutImages = [
    {
      path: 'zurich-sunset',
      alt: 'Zurich sunset by greenCSS',
      additionalStyle: 'mt-50px'
    },
    {
      path: 'switzerland-nature',
      alt: 'Switzerland nature sunset by greenCSS'
    },
    {
      path: 'germany-sunset',
      alt: 'Germany sunset nature by greenCSS',
      additionalStyle: 'mt-50px'
    },
    {
      path: 'berlin',
      alt: 'Berlin sunset by greenCSS'
    }
  ]

  return (
    <Section id='presentation' additionalClassName='bg-black rounded-20px mt-100px'>
      <div className='m-auto grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1 mx-20px'>
        <div className='grid grid-row-2 grid-col-2 gap-30px text-white' ref={ref}>
          {aboutImages.map((image, index) => (
            <div
              key={index}
              style={{ opacity: 0 }}
              className={`${image.additionalStyle} rounded-20px overflow-hidden ${
                isVisible && `opacity-100per fade-in animate animation-forwards animation-delay-${(index + 1) * 2}00ms`
              }`}>
              <Image
                className='rounded-20px transition-transform transition-duration-700ms hover:scale-105'
                quality={100}
                src={`/images/about/${image.path}.webp`}
                alt={image.alt}
                width={500}
                height={747}
                placeholder='blur'
                blurDataURL={`/_next/image?url=/images/about/${image.path}.webp&w=16&q=1`}
              />
            </div>
          ))}
        </div>
        <div className='m-auto sm:text-center md:text-center'>
          <h2 className='text-white'>Unique sustainable open-source software supported from all over the world</h2>
          <div className='sm:flex md:flex'>
            <div className='mx-auto'>
              <GreenButton
                id='new-member-button'
                className='text-black text-15px font-400 ml-0px mt-25px greencss-button-reverse bg-white border-none'
                isLinkedOutline={true}
                isDefault={false}
                href='/member/account'>
                Become a supporter
              </GreenButton>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
