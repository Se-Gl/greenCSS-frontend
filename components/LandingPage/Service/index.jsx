import Section from '../../reusable/Section'
import Presentation from '@/components/reusable/Presentation'

export default function Service() {
  const aboutImages = [
    {
      path: 'landingpage/service/asian_girl',
      alt: '3D asian girl by greenCSS',
      additionalStyle: 'mt-50px bg-blue flex justify-center items-end',
      width: 545,
      height: 500
    },
    {
      path: 'landingpage/service/designer_man',
      alt: '3D designer man by greenCSS',
      additionalStyle: 'bg-turquoise mb-50px flex justify-center items-end',
      width: 545,
      height: 500
    },
    {
      path: 'landingpage/service/student_boy',
      alt: '3D student boy by greenCSS',
      additionalStyle: 'mt-50px bg-red flex justify-center items-end',
      width: 545,
      height: 500
    },
    {
      path: 'landingpage/service/muslim_girl',
      alt: '3D muslim girl by greenCSS',
      additionalStyle: 'bg-orange mb-50px flex justify-center items-end',
      width: 545,
      height: 500
    }
  ]

  return (
    <Section id='service' header='Our Mission - Save the Programming Planet'>
      <Presentation
        fileformat='.png'
        backgroundColor='bg-black'
        headline='Start to code with zero emissions: Unique, Open-Source,  Lightweight, Animated and Responsive'
        imagesInfo={aboutImages}
        hasButton={true}
        buttonText='Install now'
        buttonLink='/docs/activate-getting-started'
      />
    </Section>
  )
}
