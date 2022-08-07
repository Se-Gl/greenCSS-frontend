import 'codn/dist/style/green.css'
import 'codn/dist/style/input.css'
if (process.env.NODE_ENV == 'production') {
  require('@/css/green.css')
} else {
  require('greencss/css/greencss.css')
}
require('@/styles/globals.scss')

import Progress from '@/components/progress/Progress'
import { NavProvider } from '@/utils/NavContext'
import { UserProvider } from '@/utils/SubscriptionContext'
import { ModalProvider } from '@/utils/ModalContext'

function MyApp({ Component, pageProps }) {
  return (
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
  )
}

export default MyApp
