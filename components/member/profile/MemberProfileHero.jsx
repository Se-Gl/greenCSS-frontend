import { useEffect, useState, useContext } from 'react'
import ModernGrid from '@/components/grid/ModernGrid'
import { UserContext } from '@/utils/SubscriptionContext'

export default function MemberProfileHero() {
  const [greetings, setGreetings] = useState('day')
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

  return (
    <ModernGrid
      header={`Good ${greetings}, ${state.user.name}`}
      subheader='Welcome to your dashboard. Adjust your settings or your subscriptions in seconds.'
      imageBg={`${
        (greetings == 'morning' && 'bg-orange') ||
        (greetings == 'afternoon' && 'bg-blue') ||
        (greetings == 'evening' && 'bg-purple') ||
        (greetings == 'night' && 'bg-black') ||
        (greetings == 'day' && 'bg-blue')
      }`}
      imageUrl='/images/member/jungle-member-hero.webp'
      imageAlt='member section hero'
    />
  )
}
