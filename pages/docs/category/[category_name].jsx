import dynamic from 'next/dynamic'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getPosts } from '@/lib/posts'
import BlogCard from '@/components/blog/BlogCard'
import BlogLayout from '@/components/blog/BlogLayout'
import { BackButton } from '@/components/reusable/Button'
import { sortAlphabetically } from '@/utils/SortBy'
import SEO from '@/components/reusable/SEO'
import ModernGrid from '@/components/grid/ModernGrid'

const SideBarlayout = dynamic(() => import('@/components/reusable/SideBarlayout'), { ssr: false })

export default function DocsCategorySlugPage({ posts, categoryName, categories }) {
  return (
    <SEO
      title={`Documentation - ${categoryName}`}
      description={`greenCSS documentation - get an overview about the category ${categoryName}, its css classes and how to apply them.`}
      url={`docs/category/${categoryName}`}
      keywords='docs, documentation, information, search, css'>
      <SideBarlayout
        categories={categories}
        posts={posts}
        hasSubcategory={true}
        content={
          <div className='min-w-100per relative col-span-9 sm:col-span-12 md:col-span-12'>
            <BackButton>Back</BackButton>
            <div className='min-w-100per relative' id={`category-${categoryName}`}>
              <ModernGrid
                header={`Browse by category: ${categoryName.replace('-', ' ')}`}
                subheader={`Get an overview in the category \"${categoryName}\" and browse through all the documentation.`}
                imageBg='black'
                imageUrl='/images/docs/books-greencss.webp'
                imageAlt='greencss documentation book'
              />
              <BlogLayout>
                {posts.map((post, index) => (
                  <div className='my-30px' key={index}>
                    <BlogCard post={post} index={index} isCategory={true} />
                  </div>
                ))}
              </BlogLayout>
            </div>
          </div>
        }
      />
    </SEO>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts-doc'))
  const categories = files.map((filename) => {
    const markdownMeta = fs.readFileSync(path.join('posts-doc', filename), 'utf-8')
    const { data: frontmatter } = matter(markdownMeta)

    return frontmatter.category.toLowerCase()
  })

  const paths = categories.map((category) => ({
    params: { category_name: category }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { category_name } }) {
  const posts = getPosts(sortAlphabetically)
  const categories = posts.map((post) => post.frontmatter.category)
  const uniqueCategories = [...new Set(categories)]
  const categoryPosts = posts.filter((post) => post.frontmatter.category.toLowerCase() === category_name)

  return {
    props: {
      posts: categoryPosts,
      categoryName: category_name,
      categories: uniqueCategories
    }
  }
}
