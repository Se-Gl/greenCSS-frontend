import Image from 'next/image'

export default function ModernCard({ id, header, subheader, imageBg, imageUrl, imageAlt, children, isRevert = false }) {
  return (
    <div className='my-50px grid grid-col-12 sm:grid-col-1 md:grid-col-1 sm:mx-0px md:mx-15px' id={id}>
      {!isRevert ? (
        <div className='sm:max-w-100per p-50px sm:p-0px sm:py-50px md:p-0px md:py-50px lg:p-0px lg:py-50px mb-20px col-span-6 sm:mb-10rem md:mb-10rem bg-white rounded-left-radius-20px sm:rounded-top-radius-0px md:rounded-top-radius-0px sm:rounded-bottom-radius-20px md:rounded-bottom-radius-20px shadow-small-gray sm:shadow-transparent'>
          <div className={`flex ${children ? '' : 'min-h-33vh'}`}>
            <div className='my-auto sm:text-center md:text-center'>
              <h3 className='pt-25px capitalize'>{header}</h3>
              <p className='text-black-10 text-15px'>{subheader}</p>
            </div>
          </div>
          <div className='mx-20px sm:mx-5px md:mx-5px'>{children}</div>
        </div>
      ) : (
        <div
          className={`mb-20px col-span-6 flex mx-0px bg-${imageBg} rounded-left-radius-20px sm:rounded-top-radius-0px md:rounded-top-radius-0px sm:rounded-bottom-radius-20px md:rounded-bottom-radius-20px shadow-small-${imageBg}-5`}>
          <div className='relative min-h-33vh sm:h-25vh md:h-25vh w-100per'>
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
      )}

      {!isRevert ? (
        <div
          className={`mb-20px sm:mb-0px md:mb-0px col-span-6 sm:row-start-1 md:row-start-1 flex mx-0px bg-${imageBg} rounded-right-radius-20px sm:rounded-bottom-radius-0px md:rounded-bottom-radius-0px sm:rounded-top-radius-20px md:rounded-top-radius-20px shadow-small-${imageBg}-5 sm:shadow-small-transparent md:shadow-small-transparent`}>
          <div className='relative min-h-33vh sm:h-25vh md:h-25vh w-100per'>
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
      ) : (
        <div className='sm:max-w-100per p-50px sm:p-0px sm:py-50px md:p-0px md:py-50px lg:p-0px lg:py-50px mb-20px sm:mb-0px md:mb-0px col-span-6 sm:row-start-1 md:row-start-1 bg-white rounded-right-radius-20px sm:rounded-bottom-radius-0px md:rounded-bottom-radius-0px sm:rounded-top-radius-20px md:rounded-top-radius-20px shadow-small-gray sm:shadow-transparent md:shadow-transparent'>
          <div className={`flex ${children ? '' : 'min-h-33vh'}`}>
            <div className='my-auto sm:text-center md:text-center'>
              <h3 className='pt-25px capitalize'>{header}</h3>
              <p className='text-black-10 text-15px'>{subheader}</p>
            </div>
          </div>
          <div className='mx-20px sm:mx-5px md:mx-5px'>{children}</div>
        </div>
      )}
    </div>
  )
}
