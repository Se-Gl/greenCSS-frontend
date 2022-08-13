import { useState } from 'react'
import { Input, Captcha } from 'codn'
import { GreenButton } from '../reusable/Button'
import Section from '../reusable/Section'
import ModernGrid from '../grid/ModernGrid'

export default function VerifyBot() {
  // captcha
  const [verifyCaptcha, setverifyCaptcha] = useState('')
  const [captcha, setCaptcha] = useState([])

  let checkIsDisabled = verifyCaptcha === captcha

  const verifyBotLocalstorage = (toggle) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('protection-required', JSON.stringify(toggle))
    }
  }

  const handleBotChange = (e) => {
    e.preventDefault()
    verifyBotLocalstorage(!checkIsDisabled)
  }

  return (
    <main className='container'>
      <Section id='bot-detection' header='You have been blocked.'>
        <ModernGrid
          isHero={false}
          header='Something about the behaviour of your browser has caught our attention. '
          imageBg='black'
          imageUrl='/images/landingpage/greencss-bot.png'
          imageAlt='greencss 3D bot robot'>
          <p className='text-gray text-15px'>
            <span className='font-600'>Why does this message appear?</span> We try to keep bots away from the website as
            much as possible. Bots generate up to 40% of the total emissions of a website. We would like to prevent such
            emissions as effectively as possible. If you still want to access our website, we kindly ask you to solve
            the captcha.
          </p>
          <div className='flex sm:block md:block lg:block my-10px gap-25px'>
            <form className='mx-auto' onSubmit={handleBotChange}>
              <div className='flex gap-25px'>
                <Captcha setWord={setCaptcha} />
                <div className='sm:my-25px'>
                  <Input
                    label='captcha'
                    type='text'
                    value={verifyCaptcha}
                    setValue={setverifyCaptcha}
                    htmlFor='captcha'
                  />
                </div>
              </div>
              <GreenButton
                type='submit'
                isdisabled={!checkIsDisabled}
                id='submit-button'
                className={`text-15px font-400 ml-0px mt-25px ${
                  !checkIsDisabled ? 'cursor-not-allowed bg-gray-5 border-none' : ''
                }`}
                isOutline={true}
                isDefault={false}>
                Verify
              </GreenButton>
            </form>
          </div>
        </ModernGrid>
      </Section>
    </main>
  )
}
