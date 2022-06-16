import ModernGrid from '@/components/grid/ModernGrid'

export default function MemberProfileHero() {
  return (
    <ModernGrid
      header='Welcome to your dashboard'
      subheader='adjust your settings or your subscriptions in seconds'
      imageBg='bg-orange'
      imageUrl='/images/member/jungle-member-hero.webp'
      imageAlt='member section hero'
    />
  )
}
