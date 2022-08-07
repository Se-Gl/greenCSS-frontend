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

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <NavProvider>
          <Progress />
          <Component {...pageProps} />
        </NavProvider>
      </UserProvider>
    </>
  )
}

export default MyApp
