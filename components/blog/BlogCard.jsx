import Link from 'next/link'
import isInView from '@/hooks/InView/scrollView'
import ModernCard from '../reusable/ModernCard'

export default function BlogCard({ post, index }) {
  const [ref, isVisible] = isInView({
    threshold: 0.15,
    unobserveOnEnter: true
  })

  let animationStagger = isVisible
    ? `opacity-100per fade-in animate animation-forwards animation-delay-${(index + 1) * 2}00ms`
    : 'opacity-0per'

  return (
    <>
      <div ref={ref} id={`${post.slug}`} className={animationStagger} style={{ opacity: 0 }}>
        <>
          <Link href={`${post.frontmatter.isBlog ? `/blog/${post.slug}` : `/docs/${post.slug}`}`} passHref>
            <a className='no-decoration'>
              <ModernCard
                key={index}
                isBlog={true}
                isRevert={index % 2 === 0 ? false : true}
                header={post.frontmatter.title}
                headerclass='text-30px leading-100per'
                subheader={post.frontmatter.excerpt}
                imageBg='black'
                imageUrl={post.frontmatter.cover_image}
                imageAlt={post.frontmatter.title}
              />
            </a>
          </Link>
        </>
      </div>
    </>
  )
}
