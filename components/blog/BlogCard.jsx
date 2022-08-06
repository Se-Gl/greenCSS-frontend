import Link from 'next/link'
import isInView from '@/hooks/InView/scrollView'
import ModernCard from '../reusable/ModernCard'
import CtaButton from '../reusable/CtaButton'
import { useState } from 'react'

export default function BlogCard({ post, index }) {
  const [hover, setHover] = useState(false)
  const [ref, isVisible] = isInView({
    threshold: 0.15,
    unobserveOnEnter: true
  })

  let animationStagger = isVisible
    ? `opacity-100per fade-in animate animation-forwards animation-delay-${(index + 1) * 2}00ms`
    : 'opacity-0per'

  return (
    <div
      ref={ref}
      id={`${post.slug}`}
      className={`${animationStagger} sm:my-20px md:my-20px opacity-0per`}
      style={{ opacity: 0 }}>
      <>
        <Link href={`${post.frontmatter.isBlog ? `/blog/${post.slug}` : `/docs/${post.slug}`}`} passHref>
          <a
            className='no-decoration'
            onMouseEnter={() => {
              setHover(index)
            }}
            onMouseLeave={() => setHover(-1)}>
            <ModernCard
              id='blog-card'
              key={index}
              isBlog={true}
              header={post.frontmatter.title}
              headerclass='text-30px leading-100per'
              subheader={post.frontmatter.excerpt}
              imageBg='black'
              imageUrl={post.frontmatter.cover_image}
              imageAlt={post.frontmatter.title}>
              <div className='relative'>
                <CtaButton className='absolute bottom-0per right-0per mb-10px' index={index} hover={hover} />
              </div>
            </ModernCard>
          </a>
        </Link>
      </>
    </div>
  )
}
