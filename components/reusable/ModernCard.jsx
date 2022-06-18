import Image from 'next/image'

export default function ModernCard({
  id,
  header,
  headerclass,
  subheader,
  imageBg,
  imageUrl,
  imageAlt,
  children,
  isRevert = false,
  isBlog = false,
  imageClass
}) {
  return (
    <div
      className={`grid grid-col-12 sm:grid-col-1 md:grid-col-1 sm:mx-0px md:mx-15px ${isBlog ? '' : 'my-50px'}`}
      id={id}>
      {!isRevert ? (
        <div
          className={`${
            imageUrl
              ? 'col-span-6 rounded-left-radius-20px sm:rounded-top-radius-0px md:rounded-top-radius-0px sm:rounded-bottom-radius-20px md:rounded-bottom-radius-20px'
              : 'col-span-12 rounded-20px'
          } sm:max-w-100per p-50px sm:p-0px sm:py-50px md:p-0px md:py-50px lg:p-0px lg:py-50px bg-white shadow-small-gray sm:shadow-transparent`}>
          <div className={`flex ${children ? '' : 'min-h-33vh'}`}>
            <div className='my-auto sm:text-center md:text-center'>
              <h3 className={`pt-25px capitalize ${headerclass}`}>{header}</h3>
              <p className='text-black-10 text-15px'>{subheader}</p>
            </div>
          </div>
          <div className='mx-20px sm:mx-5px md:mx-5px'>{children}</div>
        </div>
      ) : (
        imageUrl && (
          <div
            className={`overflow-hidden col-span-6 flex mx-0px bg-${imageBg} rounded-left-radius-20px sm:rounded-top-radius-0px md:rounded-top-radius-0px sm:rounded-bottom-radius-20px md:rounded-bottom-radius-20px shadow-small-${imageBg}-5`}>
            <div className='relative min-h-33vh sm:h-25vh md:h-25vh w-100per'>
              <Image
                quality={100}
                layout='fill'
                objectFit={`${!isBlog ? 'contain' : 'cover'}`}
                src={`${imageUrl}`}
                alt={`${imageAlt}`}
                placeholder='blur'
                blurDataURL={`/_next/image?url=${imageUrl}&w=16&q=1`}
                className={`${
                  isBlog
                    ? 'rounded-left-radius-20px sm:rounded-top-radius-0px md:rounded-top-radius-0px sm:rounded-bottom-radius-20px md:rounded-bottom-radius-20px transition-transform transition-duration-700ms hover:scale-105'
                    : `${imageClass} transition-transform transition-duration-700ms hover:scale-115`
                }`}
              />
            </div>
          </div>
        )
      )}

      {!isRevert ? (
        imageUrl && (
          <div
            className={`overflow-hidden col-span-6 sm:row-start-1 md:row-start-1 flex mx-0px bg-${imageBg} rounded-right-radius-20px sm:rounded-bottom-radius-0px md:rounded-bottom-radius-0px sm:rounded-top-radius-20px md:rounded-top-radius-20px shadow-small-${imageBg}-5 sm:shadow-small-transparent md:shadow-small-transparent`}>
            <div className='relative min-h-33vh sm:h-25vh md:h-25vh w-100per'>
              <Image
                quality={100}
                layout='fill'
                objectFit={`${!isBlog ? 'contain' : 'cover'}`}
                src={`${imageUrl}`}
                alt={`${imageAlt}`}
                placeholder='blur'
                blurDataURL={`/_next/image?url=${imageUrl}&w=16&q=1`}
                className={`${
                  isBlog
                    ? 'rounded-right-radius-20px sm:rounded-bottom-radius-0px md:rounded-bottom-radius-0px sm:rounded-top-radius-20px md:rounded-top-radius-20px transition-transform transition-duration-700ms hover:scale-105'
                    : `${imageClass} transition-transform transition-duration-700ms hover:scale-115`
                }`}
              />
            </div>
          </div>
        )
      ) : (
        <div
          className={`${
            imageUrl
              ? 'col-span-6 sm:row-start-1 md:row-start-1 rounded-right-radius-20px sm:rounded-bottom-radius-0px md:rounded-bottom-radius-0px sm:rounded-top-radius-20px md:rounded-top-radius-20px'
              : 'col-span-12 rounded-20px'
          } sm:max-w-100per p-50px sm:p-0px sm:py-50px md:p-0px md:py-50px lg:p-0px lg:py-50px bg-white shadow-small-gray sm:shadow-transparent md:shadow-transparent`}>
          <div className={`flex ${children ? '' : 'min-h-33vh'}`}>
            <div className='my-auto sm:text-center md:text-center'>
              <h3 className={`pt-25px capitalize ${headerclass}`}>{header}</h3>
              <p className='text-black-10 text-15px'>{subheader}</p>
            </div>
          </div>
          <div className='mx-20px sm:mx-5px md:mx-5px'>{children}</div>
        </div>
      )}
    </div>
  )
}
