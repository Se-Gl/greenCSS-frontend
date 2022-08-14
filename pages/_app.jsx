import 'codn/dist/style/green.css'
import 'codn/dist/style/input.css'
if (process.env.NODE_ENV == 'production') {
  require('@/css/green.css')
} else {
  require('greencss/css/greencss.css')
}
require('@/styles/globals.scss')

import { BotProvider } from '@/utils/BotContext'
import { UserProvider } from '@/utils/SubscriptionContext'
import { NavProvider } from '@/utils/NavContext'
import { ModalProvider } from '@/utils/ModalContext'
import Progress from '@/components/progress/Progress'
import VerifyBot from '@/components/bot/VerifyBot'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  // check for bot activity
  const [isBotLocalstorage, setIsBotLocalstorage] = useState(
    useEffect(() => {
      const interval = setInterval(() => {
        const checkBotState = JSON.parse(localStorage.getItem('protection-required'))
        setIsBotLocalstorage(checkBotState)
      }, 2000)

      return () => clearInterval(interval)
    }, [])
  )

  return (
    <BotProvider>
      {isBotLocalstorage ? (
        <VerifyBot />
      ) : (
        <>
          <UserProvider>
            <NavProvider>
              <ModalProvider>
                <Progress />
                <Component {...pageProps} />
              </ModalProvider>
            </NavProvider>
          </UserProvider>
        </>
      )}
    </BotProvider>
  )
}

export default MyApp
