import Image from 'next/image'
import { useEffect, useState } from 'react'
import { GreenButton } from '@/components/reusable/Button'
import ReusableModal from '../modal/ReusableModal'
import HeroPhone from './HeroPhone'
import ResultHeroPhone from './HeroPhone/ResultHeroPhone'
import useWindowDimensions from '@/utils/WindowDimensions'
import ModernGrid from '../grid/ModernGrid'

export default function Hero() {
  const { width } = useWindowDimensions()

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
        imageAlt='macbook pro hero greencss'>
        <div className='flex gap-10px'>
          <ReusableModal isHero={true} />
          <GreenButton
            hasLink={true}
            isDefault={false}
            href='#calculate-footprint'
            id='linkedbutton'
            className='text-white min-w-14rem font-500'>
            Calculate Footprint
          </GreenButton>
        </div>
      </ModernGrid>
    </section>
  )
}
