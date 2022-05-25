import { useEffect, useState } from 'react'
import { GreenButton } from './Button'

export default function Cookies() {
  const [cookieBanner, setCookieBanner] = useState(true)
  const getCookie = () => {
    if (typeof window !== 'undefined') {
      const localCookie = localStorage.getItem('cookie')
      if (localCookie) return JSON.parse(localCookie)
    }
    return ''
  }

  useEffect(() => {
    getCookie() == 'accepted' && setCookieBanner(false)
  }, [])

  const cookie = () => {
    localStorage.setItem('cookie', JSON.stringify('accepted'))
    setCookieBanner(false)
  }

  return (
    <>
      {cookieBanner && (
        <div
          className='fixed bottom-0per right-0per m-20px min-h-30vh w-30vw sm:w-auto md:w-auto bg-white z-99 rounded-10px shadow-small-black'
          id='cookie-banner'>
          <div className='flex sm:block min-h-30vh p-20px'>
            <div className='m-auto'>
              <h3 className='text-25px font-500'>greenCSS uses Cookies</h3>
              <p className='text-15px text-black-10'>
                Click “Accept” to enable greenCSS to use cookies in order to personalize this site for you. In this
                process you agree to the storing of cookies and/or data in your local storage. You agree, that we use
                google analytics to enhance site navigation and analyze site usage. It helps us to improve the UI/UX
                experience for you.
              </p>
              <>
                <GreenButton onClick={cookie} id='close-cookie'>
                  Accept
                </GreenButton>
              </>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
