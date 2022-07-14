import Image from 'next/image'
import useWindowDimensions from '@/utils/WindowDimensions'

export default function ModernGrid({
  isRevert = false,
  isHero = true,
  isFull = false,
  id,
  header,
  subheader,
  imageBg,
  imageUrl,
  imageAlt,
  titleStyle = 'text-black',
  descriptionStyle = 'text-gray',
  imagePosition = false,
  children
}) {
  const { width } = useWindowDimensions()
  return (
    <div className='min-h-100vh grid grid-col-12 sm:grid-col-1 md:grid-col-1 sm:mx-0px md:mx-15px my-50px' id={id}>
      {!isRevert ? (
        <div
          className={`${
            imageUrl
              ? 'col-span-8 rounded-left-radius-20px sm:rounded-top-radius-0px md:rounded-top-radius-0px sm:rounded-bottom-radius-20px md:rounded-bottom-radius-20px'
              : 'col-span-12 rounded-20px'
          } sm:max-w-100per p-50px sm:p-0px sm:py-50px md:p-0px md:py-50px lg:p-0px lg:py-50px ${
            isFull ? `bg-${imageBg}` : 'bg-white shadow-small-gray'
          }`}>
          <div className='flex min-h-100vh sm:min-h-50vh md:min-h-50vh'>
            <div className='my-auto sm:text-center md:text-center px-25px'>
              {isHero ? (
                <h1 className={`pt-25px capitalize ${titleStyle}`}>{header}</h1>
              ) : (
                <h2 className={`pt-25px capitalize ${titleStyle}`}>{header}</h2>
              )}
              <p className={`text-15px ${descriptionStyle}`}>{subheader}</p>
              {children}
            </div>
          </div>
        </div>
      ) : (
        imageUrl && (
          <div
            className={`col-span-4 flex mx-0px bg-${imageBg} rounded-left-radius-20px sm:rounded-top-radius-0px md:rounded-top-radius-0px sm:rounded-bottom-radius-20px md:rounded-bottom-radius-20px ${
              !isFull && 'shadow-small-gray'
            }`}>
            <div className='relative sm:h-50vh md:h-50vh w-100per'>
              {imagePosition ? (
                <div className='absolute' style={{ top: 0, right: 0, bottom: 0, left: 0 }}>
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
              ) : (
                <Image
                  quality={100}
                  layout='fill'
                  objectFit='contain'
                  src={`${imageUrl}`}
                  alt={`${imageAlt}`}
                  placeholder='blur'
                  blurDataURL={`/_next/image?url=${imageUrl}&w=16&q=1`}
                />
              )}
            </div>
          </div>
        )
      )}

      {!isRevert ? (
        imageUrl && (
          <div
            className={`col-span-4 sm:row-start-1 md:row-start-1 flex mx-0px bg-${imageBg} rounded-right-radius-20px sm:rounded-bottom-radius-0px md:rounded-bottom-radius-0px sm:rounded-top-radius-20px md:rounded-top-radius-20px ${
              !isFull && 'shadow-small-gray sm:shadow-small-transparent md:shadow-small-transparent'
            }`}>
            <div className='relative sm:h-50vh md:h-50vh w-100per'>
              {imagePosition && width >= 768 ? (
                <div className='absolute' style={{ top: 0, right: -50, bottom: 0, left: 0 }}>
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
              ) : (
                <Image
                  quality={100}
                  layout='fill'
                  objectFit='contain'
                  src={`${imageUrl}`}
                  alt={`${imageAlt}`}
                  placeholder='blur'
                  blurDataURL={`/_next/image?url=${imageUrl}&w=16&q=1`}
                />
              )}
            </div>
          </div>
        )
      ) : (
        <div
          className={`${
            imageUrl
              ? 'col-span-8 sm:row-start-1 md:row-start-1 rounded-right-radius-20px sm:rounded-bottom-radius-0px md:rounded-bottom-radius-0px sm:rounded-top-radius-20px md:rounded-top-radius-20px'
              : 'col-span-12 rounded-20px'
          } sm:max-w-100per p-50px sm:p-0px sm:py-50px md:p-0px md:py-50px lg:p-0px lg:py-50px ${
            isFull ? `bg-${imageBg}` : 'bg-white shadow-small-gray'
          }`}>
          <div className='flex min-h-100vh sm:min-h-50vh md:min-h-50vh'>
            <div className='my-auto sm:text-center md:text-center px-25px'>
              {isHero ? (
                <h1 className={`pt-25px capitalize ${titleStyle}`}>{header}</h1>
              ) : (
                <h2 className={`pt-25px capitalize ${titleStyle}`}>{header}</h2>
              )}
              <p className={`text-15px ${descriptionStyle}`}>{subheader}</p>
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
