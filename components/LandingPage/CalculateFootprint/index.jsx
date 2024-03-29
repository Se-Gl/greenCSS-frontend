import Image from 'next/image'
import isInView from '@/hooks/InView/scrollView'
import Section from '@/components/reusable/Section'
import DesktopComputer from './DesktopComputer'
import DesktopComputerContent from './DesktopComputerContent'

export default function index() {
  const [ref, isVisible] = isInView({
    threshold: 0.25,
    unobserveOnEnter: true
  })

  return (
    <Section id='calculate-footprint' additionalClassName='h-100vh sm:h-50vh'>
      <div className='w-100per absolute left-0per'>
        <DesktopComputer />

        <div
          className={`overflow-auto absolute select-none ${
            isVisible ? 'desktopScreenRotation opacity-100per' : 'opacity-1per'
          }`}
          ref={ref}
          style={{ top: '4.5%', left: '10.25%', width: '79.4%', height: '73.4%' }}>
          <Image
            quality={90}
            className='select-none'
            src='/images/landingpage/Landing-desktop-bg.png'
            alt='greenCSS MacBook donation section'
            width={874}
            height={2087}
            placeholder='blur'
            blurDataURL='/_next/image?url=/images/landingpage/Landing-desktop-bg.png&w=16&q=1'
          />
          <DesktopComputerContent />
        </div>
      </div>
    </Section>
  )
}
