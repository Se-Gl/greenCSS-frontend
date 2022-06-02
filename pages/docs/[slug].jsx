import dynamic from 'next/dynamic'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getPosts } from '@/lib/posts'
import { sortAlphabetically } from '@/utils/SortBy'
import Loader from '@/components/logo/Loader'
import SEO from '@/components/reusable/SEO'

const SlugComponent = dynamic(() => import('@/components/reusable/SlugComponent'), {
  ssr: false,
  loading: () => (
    <div className='flex h-100vh w-100vw overflow-hidden bg-green-10'>
      <div className='m-auto'>
        <Loader />
      </div>
    </div>
  )
})
const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })
const DevelopmentToClipboard = dynamic(() => import('@/utils/DevelopmentToClipboard'))

export default function DocsPostPage({
  frontmatter: { title, excerpt, category, date, cover_image, author, isBlog, keywords, plainText },
  content,
  slug,
  posts,
  categories
}) {
  return (
    <SEO
      title={`How to use ${title} CSS class`}
      hasCanonical={true}
      description={excerpt}
      image={cover_image}
      url={`docs/${slug}`}
      keywords={`${category}, ${keywords} greenCSS, css, green css`}
      author={author}>
      <Layout className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh'>
        <DevelopmentToClipboard content={content} />
        <SlugComponent
          title={title}
          excerpt={excerpt}
          category={category}
          keywords={keywords}
          date={date}
          cover_image={cover_image}
          author={author}
          content={content}
          slug={slug}
          isBlog={isBlog}
          posts={posts}
          categories={categories}
          plainText={plainText}
        />
      </Layout>
    </SEO>
  )
}

// get slug
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts-doc'))
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))
  //   console.log(paths)
  return {
    paths,
    fallback: false
  }
}

// get blog post
export async function getStaticProps({ params: { slug } }) {
  const posts = getPosts(sortAlphabetically)
  const categories = posts.map((post) => post.frontmatter.category)
  const uniqueCategories = [...new Set(categories)]
  const markdownMeta = fs.readFileSync(path.join('posts-doc', slug + '.md'), 'utf-8')

  const { data: frontmatter, content } = matter(markdownMeta)
  return {
    props: {
      posts,
      categories: uniqueCategories,
      frontmatter,
      content,
      slug
    }
  }
}
