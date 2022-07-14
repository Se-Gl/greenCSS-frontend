import Section from '../../reusable/Section'
import ModernCard from '@/components/reusable/ModernCard'

export default function Service() {
  const nutshellCard = [
    {
      header: 'Responsive',
      subheader:
        'Design your website for all users, whether desktop, laptop, tablet or smartphone. Comfortably and intuitively and easy to learn - like bulma or tailwindcss but for everyone.',
      imageBg: 'blue',
      imageUrl: '/images/landingpage/service/responsive-greencss.webp',
      imageAlt: 'greencss responsive card',
      isRevert: false,
      animation: 'fade-in-left animation-duration-500ms animation-forwards'
    },
    {
      header: 'Competitive',
      subheader:
        'Created like bulma with SASS (SCSS). Classic like tailwindcss, but more intuitive. For the environment and for yourself - do something good while you work.',
      imageBg: 'magenta',
      imageUrl: '/images/landingpage/service/competitive-greencss.webp',
      imageAlt: 'greencss competitive card',
      isRevert: true,
      animation: 'fade-in-right animation-duration-500ms animation-forwards'
    }
  ]
  return (
    <Section id='service'>
      <h2 className='max-w-50per sm:max-w-100per md:max-w-100per lg:max-w-100per text-center mx-auto'>
        Our Mission - Save the Programming Planet
      </h2>
      <ModernCard
        animation='fade-in animation-duration-500ms animation-forwards'
        id='animated'
        isRevert={false}
        isFull={true}
        header='Animated'
        headerclass='text-white'
        subheader='Pure CSS animations work with vanilla HTML or with any web framework - from JavaScript over Python and even PHP.'
        imageBg='black'
        imageUrl='/images/landingpage/service/animated-greencss.webp'
        imageAlt='greencss animated card'
      />
      <div className='m-auto grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
        {nutshellCard.sort().map((card, index) => (
          <ModernCard
            key={index}
            animation={card.animation}
            id={`${card.header.toLowerCase()}`}
            isRevert={card.isRevert}
            isFull={card.isFull}
            header={card.header}
            headerclass={card.headerclass}
            subheader={card.subheader}
            imageBg={card.imageBg}
            imageUrl={card.imageUrl}
            imageAlt={card.imageAlt}
          />
        ))}
      </div>
    </Section>
  )
}
