import 'codn/dist/style/green.css'
if (process.env.NODE_ENV == 'production') {
  require('@/css/green.css')
} else {
  require('greencss/css/greencss.css')
}
require('@/styles/globals.scss')

import Progress from '@/components/progress/Progress'
import { ToastProvider } from '@/components/toast/context/ToastContext'
import ToastContainer from '@/components/toast/ToastContainer'
import { NavProvider } from '@/utils/NavContext'
import { UserProvider } from '@/utils/SubscriptionContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <NavProvider>
          <Progress />
          <ToastProvider>
            <Component {...pageProps} />
            <ToastContainer />
          </ToastProvider>
        </NavProvider>
      </UserProvider>
    </>
  )
}

export default MyApp
