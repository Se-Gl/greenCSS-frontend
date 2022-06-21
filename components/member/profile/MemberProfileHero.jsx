import { useEffect, useState, useContext } from 'react'
import ModernGrid from '@/components/grid/ModernGrid'
import { UserContext } from '@/utils/SubscriptionContext'
import { GreenButton } from '@/components/reusable/Button'

export default function MemberProfileHero() {
  const [greetings, setGreetings] = useState('day')
  const [isAdmin, setisAdmin] = useState(false)
  const [state] = useContext(UserContext)

  useEffect(() => {
    let myDate = new Date()
    let hours = myDate.getHours()
    let greet

    if (hours < 10) greet = 'morning'
    else if (hours >= 14 && hours <= 17) greet = 'afternoon'
    else if (hours >= 17 && hours <= 20) greet = 'evening'
    else if (hours >= 21 && hours <= 24) greet = 'night'
    else greet = 'day'
    setGreetings(greet)
  }, [])

  useEffect(() => {
    const showDashboard = async () => {
      const auth = JSON.parse(localStorage.getItem('auth'))
      if (auth.user.role == 1) {
        setisAdmin(true)
      }
    }
    showDashboard()
  }, [])

  return (
    <ModernGrid
      header={`Good ${greetings}, ${state.user.name}`}
      subheader={`${
        isAdmin
          ? 'Continue to the user dashboard or check your subscriptions below.'
          : 'Welcome to your dashboard. Adjust your settings or your subscriptions in seconds.'
      }`}
      imageBg={`${
        (greetings == 'morning' && 'orange') ||
        (greetings == 'afternoon' && 'blue') ||
        (greetings == 'evening' && 'purple') ||
        (greetings == 'night' && 'black') ||
        (greetings == 'day' && 'blue')
      }`}
      imageUrl='/images/member/jungle-member-hero.webp'
      imageAlt='member section hero'>
      {isAdmin && (
        <GreenButton isLinkedOutline={true} isDefault={false} href='/member/auth' className='font-500 text-15px'>
          Dashboard
        </GreenButton>
      )}
    </ModernGrid>
  )
}
