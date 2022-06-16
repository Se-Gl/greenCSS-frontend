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

    if (hours < 12) greet = 'morning'
    else if (hours >= 12 && hours <= 17) greet = 'afternoon'
    else if (hours >= 17 && hours <= 24) greet = 'evening'
    else greet = 'day'
    setGreetings(greet)
  }, [])

  return (
    <ModernGrid
      header={`Good ${greetings}, ${state.user.name}`}
      subheader='Welcome to your dashboard. Adjust your settings or your subscriptions in seconds'
      imageBg={`${
        (greetings == 'morning' && 'bg-orange') ||
        (greetings == 'afternoon' && 'bg-blue') ||
        (greetings == 'evening' && 'bg-purple') ||
        (greetings == 'day' && 'bg-greencss')
      }`}
      imageUrl='/images/member/jungle-member-hero.webp'
      imageAlt='member section hero'
    />
  )
}
