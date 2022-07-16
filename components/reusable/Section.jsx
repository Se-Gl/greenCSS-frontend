import isInView from '@/hooks/InView/scrollView'

export default function Section({ id, background, additionalClassName, header, children }) {
  const [ref, isVisible] = isInView({
    threshold: 0.05,
    unobserveOnEnter: true
  })
  return (
    <section
      className={`py-10rem sm:my-0px md:my-0px sm:m-10px md:m-10px opacity-0per ${additionalClassName} ${
        !isVisible && 'bg-transparent'
      } ${
        isVisible &&
        `opacity-100per fade-in-bottom animate animation-forwards transition-all transition-duration-300ms transition-delay-700ms ${background}`
      }`}
      id={id}
      ref={ref}>
      {header && (
        <h2 className='max-w-50per sm:max-w-100per md:max-w-100per lg:max-w-100per text-center mx-auto mb-100px sm:mb-50px md:mb-50px'>
          {header}
        </h2>
      )}
      {children}
    </section>
  )
}
