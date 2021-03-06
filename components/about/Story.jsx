import ModernCard from '@/components/reusable/ModernCard'
import Section from '../reusable/Section'

export default function Story() {
  const presentations = [
    {
      header: 'Protect Our Earth Against Climate Change with sustainable software',
      subheader:
        'greenCSS is a sustainable cascade style sheet library that is intuitive to use and provides zero-emissions programming. The vision is to reduce our carbon footprint and simultaneously create beautiful new web applications for our clients, our agency or for ourselves.',
      imageBg: 'black',
      imageUrl: '/images/about/tv.webp',
      imageAlt: 'greencss protect the earth television',
      isRevert: false,
      isBlog: true
    },
    {
      header: 'Together We Can Restore Our Planet',
      subheader:
        'greenCSS is more than just a bachelor project. Created like bulma with SASS (SCSS). Classic like tailwindcss, but more intuitive. For the environment and for yourself - do something good while you work. greenCSS features easy to use and production redy animations and moreover it is suitable for all frameworks and screen types. Lets create beautiful and sustainable web applications together.',
      imageBg: 'black',
      imageUrl: '/images/about/plants.webp',
      imageAlt: 'greencss protect the earth leaf',
      isRevert: true,
      isBlog: true
    }
  ]

  return (
    <Section id='story'>
      <>
        {presentations.sort().map((presentation, index) => {
          return (
            <div className='mb-30px' key={index}>
              <ModernCard
                isRevert={presentation.isRevert}
                header={presentation.header}
                subheader={presentation.subheader}
                imageBg={presentation.imageBg}
                imageUrl={presentation.imageUrl}
                imageAlt={presentation.imageAlt}
                isBlog={presentation.isBlog}
              />
            </div>
          )
        })}
      </>
    </Section>
  )
}
