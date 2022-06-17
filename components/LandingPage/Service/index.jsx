import Section from '../../reusable/Section'
import ModernCard from '@/components/reusable/ModernCard'

export default function Service() {
  const nutshellCard = [
    {
      header: 'Animated',
      subheader:
        'Pure CSS animations work with vanilla HTML or with any web framework - from JavaScript over Python and even PHP.',
      imageBg: 'black',
      imageUrl: '/images/landingpage/service/animated-greencss.webp',
      imageAlt: 'greencss animated card',
      isRevert: false
    },
    {
      header: 'Responsive',
      subheader:
        'Design your website for all users, whether desktop, laptop, tablet or smartphone. Comfortably and intuitively and easy to learn - like bulma or tailwindcss but for everyone.',
      imageBg: 'blue',
      imageUrl: '/images/landingpage/service/responsive-greencss.webp',
      imageAlt: 'greencss responsive card',
      isRevert: true
    },
    {
      header: 'Competitive',
      subheader:
        'Created like bulma with SASS (SCSS). Classic like tailwindcss, but more intuitive. For the environment and for yourself - do something good while you work.',
      imageBg: 'magenta',
      imageUrl: '/images/landingpage/service/competitive-greencss.webp',
      imageAlt: 'greencss competitive card',
      isRevert: false
    },
    {
      header: 'Plant Trees',
      subheader:
        'Programming and climate protection should be coherent. So far, little or no importance has been given to this issue. The primary goal of greenCSS is to reduce carbon emissions. For this reason, the majority of donations will be used to plant trees.',
      imageBg: 'green',
      imageUrl: '/images/member/signup-green.webp',
      imageAlt: 'greencss plant trees card',
      isRevert: true
    },
    {
      header: 'Water Refine',
      subheader:
        'Reducing carbon is the primary goal. Another important goal is to provide access to water. We from greenCSS believe that every human deserves to have water.  Therefore, in the future, we want donations to support water refineries.',
      imageBg: 'turquoise',
      imageUrl: '/images/landingpage/service/water-greencss.webp',
      imageAlt: 'greencss water drop card',
      isRevert: false
    },
    {
      header: 'Clean Energy',
      subheader:
        'A third goal for the future will be to invest and donate in sustainable energy. This is the only way to ensure that the CO2 limit can be effectively reduced in the long term.',
      imageBg: 'purple',
      imageUrl: '/images/landingpage/service/energy-greencss.webp',
      imageAlt: 'greencss green energy card',
      isRevert: true
    }
  ]
  return (
    <Section id='service'>
      <h2 className='max-w-50per'>Our Mission - Save the Programming Planet</h2>
      <div className='m-auto'>
        {nutshellCard.sort().map((card, index) => (
          <ModernCard
            key={index}
            id={`${card.header.toLowerCase()}`}
            isRevert={card.isRevert}
            header={card.header}
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
