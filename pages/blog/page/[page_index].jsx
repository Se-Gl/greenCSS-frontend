import dynamic from 'next/dynamic'
import fs from 'fs'
import path from 'path'
import BlogLayout from '@/components/blog/BlogLayout'
import BlogCard from '@/components/blog/BlogCard'
import { POSTS_PER_PAGE } from '@/config/index'
import Pagination from '@/components/reusable/Pagination'
import { getPosts } from '@/lib/posts'
import { sortByDate } from '@/utils/SortBy'
import SEO from '@/components/reusable/SEO'
import ModernGrid from '@/components/grid/ModernGrid'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function BlogIndex({ posts, numPages, currentPage }) {
  return (
    <SEO
      title='A Blog - the right way to tell a story | greenCSS Blog'
      description='Explore the blog posts, to learn more about the latest tips and tricks.'
      url='blog'
      keywords='Blog, write, news, updates, css, greenCSS'>
      <Layout className='sm:px-10px md:px-25px lg:px-50px min-h-100vh mb-10rem bg-orange-7'>
        <div className='min-w-100per relative'>
          <ModernGrid
            header='A Blog - the right way to write a story'
            subheader='Explore the blog posts, to learn more about the latest tips and tricks.'
            imageBg='orange'
            imageUrl='/images/blog/pen-greencss.webp'
            imageAlt='greencss blog write pencil'
          />
          <BlogLayout>
            {posts.map((post, index) => (
              <BlogCard key={index} post={post} index={index} />
            ))}
          </BlogLayout>
          <Pagination currentPage={currentPage} numPages={numPages} />
        </div>
      </Layout>
    </SEO>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts-blog'))
  const numPages = Math.ceil(files.length / POSTS_PER_PAGE)
  let paths = []

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() }
    })
  }

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const page = parseInt((params && params.page_index) || 1)
  const files = fs.readdirSync(path.join('posts-blog'))
  const posts = getPosts(sortByDate, 'posts-blog')

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE)
  const pageIndex = page - 1
  const orderedPosts = posts.slice(pageIndex * POSTS_PER_PAGE, (pageIndex + 1) * POSTS_PER_PAGE)

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page
    }
  }
}
