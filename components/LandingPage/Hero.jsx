import { useEffect, useState } from 'react'
import { GreenButton } from '@/components/reusable/Button'
import ReusableModal from '../modal/ReusableModal'
import ModernGrid from '../grid/ModernGrid'

export default function Hero() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onload = setLoading(false)
    }
  }, [])

  return (
    <section
      id='hero'
      className={`${loading === false ? 'fade-in animate animation-forwards opacity-100per' : 'opacity-0per'}`}>
      <ModernGrid
        id='hero-section'
        isHero={true}
        isFull={true}
        imagePosition={true}
        titleStyle='text-white'
        descriptionStyle='text-white'
        header='A classy way to write sustainable CSS'
        subheader='Styling CSS reimagined - for everyone. Start to code with zero emission: for your clients, for your
  creativity and for your planet.'
        imageBg='blue'
        imageUrl='/images/landingpage/hero-image.webp'
        imageAlt='macbook painting hero greencss'>
        <div className='flex sm:block gap-10px'>
          <ReusableModal isHero={true} />
          <GreenButton
            hasLink={true}
            isDefault={false}
            href='#calculate-footprint'
            id='linkedbutton'
            className='text-white min-w-14rem font-500 sm:mt-10px'>
            Calculate Footprint
          </GreenButton>
        </div>
      </ModernGrid>
    </section>
  )
}
