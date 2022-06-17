import Image from 'next/image'

export default function ModernGrid({ id, header, subheader, imageBg, imageUrl, imageAlt, children }) {
  return (
    <div className='my-50px grid grid-col-12 sm:grid-col-1 md:grid-col-1 sm:mx-0px md:mx-15px' id={id}>
      <div className='mb-20px col-span-8 sm:mb-10rem md:mb-10rem bg-white rounded-left-radius-20px sm:rounded-top-radius-0px md:rounded-top-radius-0px sm:rounded-bottom-radius-20px md:rounded-bottom-radius-20px shadow-small-gray sm:shadow-transparent'>
        <div className={`flex ${children ? '' : 'min-h-100vh'}`}>
          <div className='my-auto px-20px max-w-75per sm:max-w-100per md:max-w-100per sm:text-center md:text-center'>
            <h1 className='pt-25px capitalize'>{header}</h1>
            <p className='text-black-10 text-15px'>{subheader}</p>
          </div>
        </div>
        <div className='px-20px sm:px-5px md:px-5px'>{children}</div>
      </div>

      <div
        className={`mb-20px sm:mb-0px md:mb-0px col-span-4 sm:row-start-1 md:row-start-1 flex mx-0px ${imageBg} rounded-right-radius-20px sm:rounded-bottom-radius-0px md:rounded-bottom-radius-0px sm:rounded-top-radius-20px md:rounded-top-radius-20px`}>
        <div className='relative h-100vh sm:h-50vh md:h-50vh w-100per'>
          <Image
            quality={100}
            layout='fill'
            objectFit='contain'
            src={`${imageUrl}`}
            alt={`${imageAlt}`}
            placeholder='blur'
            blurDataURL={`/_next/image?url=${imageUrl}&w=16&q=1`}
          />
        </div>
      </div>
    </div>
  )
}
