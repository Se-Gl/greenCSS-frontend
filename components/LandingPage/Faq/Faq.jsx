import { Accordion } from 'codn'
import Section from '@/components/reusable/Section'

const getGreenData = (path) => {
  if (typeof window !== 'undefined') {
    const localGreenData = localStorage.getItem(`green-data-${path}`)
    if (localGreenData) return JSON.parse(localGreenData)
  }
}

const questions = [
  {
    title: 'What is greenCSS?',
    description:
      'greenCSS is a MIT licensed CSS library. It uses the same technology like bulma, but with a class based system similar to tailwindcss. The difference is that greenCSS additionally aims to provide a green fingerprint for the earth. You can develop beautiful websites and code emission-free at the same time.'
  },
  {
    title: 'Are you greenwashing?',
    description:
      'Greenwashing, also known as "green sheen", is a method of advertising or marketing. It involves the deceptive use of green PR to convince the public that an organizations products, goals and strategies are environmentally friendly. greenCSS is committed to preventing greenwashing - we only work with organizations that share the same values as we do. For this reason: a clear NO, because we do not want to harm our planet!'
  },
  {
    title: 'How does it work?',
    description:
      'Transparency is important. greenCSS is primarily supported by donations and crowdfunding. Funds are not wasted on marketing, advertising or other unnecessary expenses. Every contribution is reinvested so that trees can be planted all over the world. All persons involved do not receive any salary, everything happens on a voluntary basis - in the spirit of the open-source and climate movement.'
  },
  {
    title: 'What does it cost?',
    description:
      'greenCSS is completely free. Feel free to contribute your portion by using greenCSS in your next web-project. If this is not enough for you, feel free to make a small donation - the planet and greenCSS thank you for any support!'
  },
  {
    title: 'How can I contribute?',
    description:
      'greenCSS is open source and has an MIT license. You can clone the repository on GitHub, create a branch and contribute your part with a pull request. If you have any questions, suggestions or bug fixes, feel free to get in touch via the contact form.'
  },
  {
    title: 'How can I donate?',
    description:
      'Donations are always welcome. Only then, we can collectively achieve our dream of a future for our children and ourselves. Let`s make the world a little bit better - together.'
  },
  {
    title: 'What is the goal of greenCSS?',
    description:
      'While you are programming, whether for a school project, a university assignment, in an agency or as a freelancer, you need electricity. Most of the energy is still produced without a climate-neutral footprint. The main goal is to plant trees worldwide and reduce the C02 emissions. You can be part of it and contribute to your carbon footprint. Even when you just use greenCSS in your next project, you are already helping. If this is not enough for you, you are welcome to leave a small donation. Your children, your family, our planet and greenCSS will be eternally grateful!'
  },
  {
    title: 'What are your stats?',
    description: `We try to keep our energy consumption as low as possible. We host on Vercel. Vercel relies on a serverless architecture, which is an efficient alternative to conventional servers. While conventional servers must stay online for 24/7/365, serverless computations only run when needed. Consequently, each individual website user only generates ${
      getGreenData('emission') ? getGreenData('emission') : 0.17
    }g of CO2 per visit. Most bots and spam accounts are filtered before the page loads. In other words, we are about ${
      getGreenData('percent') ? getGreenData('percent') : 84
    }% greener than the rest of the web.`
  }
]

export default function Faq() {
  return (
    <Section
      id='faq'
      background='from-blue-9 to-orange-9 gradient-to-right sm:gradient-to-bottom md:gradient-to-bottom rounded-20px shadow-small-yellow-5'>
      <>
        <div className='mx-50px sm:mx-25px md:mx-25px'>
          <h2 className='w-66per sm:w-100per md:w-100per mb-50px sm:mb-25px md:mb-25px'>
            FAQ - There’s more to know about greenCSS
          </h2>
          {questions.map((question, index) => (
            <Accordion
              boxStyle={true}
              expand={question.title}
              collapse={question.description}
              key={index}
              className='bg-white hover:opacity-75per'
              headerStyleExpanded='text-20px font-600 text-black pb-10px'
              headerStyle='text-20px font-600 text-black'
              circleExpand='bg-gray-10 rotate-90deg'
              iconColorExpanded='stroke-blue'
            />
          ))}
        </div>
      </>
    </Section>
  )
}
