import ModernGrid from '../grid/ModernGrid'

export default function Testimonial() {
  return (
    <ModernGrid
      isHero={false}
      id='testimonial'
      header='Hear what the creator says'
      subheader='“It all started with omenCSS. In fact, this was my capstone project for my bachelor thesis in software engineering. I wanted to create a free MIT licensed CSS library for any framework - no matter whether JavaScript, PHP or Python. This was not enough for me and so the story of greenCSS began.”'
      imageBg='black'
      imageUrl='/images/blog/users/segl-avatar-large.webp'
      imageAlt='severin glaser testimonial'
    />
  )
}
