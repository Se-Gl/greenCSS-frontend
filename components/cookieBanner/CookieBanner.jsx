import React, { useEffect, useState } from 'react'
import { CookieBanner as Cookie } from 'codn'

export default function CookieBanner() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onload = setLoading(false)
    }
  }, [])
  return (
    <>
      {loading ? null : (
        <>
          <Cookie
            className={
              loading ? 'opacity-0per' : 'animation-delay-500ms fade-in animate animation-forwards opacity-0per'
            }
            header='🍪 Our website uses cookies'
            buttonStyle='cursor-pointer flex py-10px px-25px min-w-50px font-bold transition-duration-200ms transition-all rounded-10px border-1px border-solid border-black my-auto text-center justify-center items-center m-auto text-15px text-black hover:bg-black hover:text-white'>
            <p className='text-gray text-15px mb-0px'>
              Click “Accept” to enable greenCSS to use cookies in order to personalize this site for you. In this
              process you agree to the storing of cookies and/or data in your local storage. You agree, that we use
              analytics to enhance site navigation and analyze site usage. It helps us to improve the UI/UX experience
              for you.
            </p>
          </Cookie>
        </>
      )}
    </>
  )
}
