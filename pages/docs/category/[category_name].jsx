import dynamic from 'next/dynamic'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getPosts } from '@/lib/posts'
import BlogCard from '@/components/blog/BlogCard'
import BlogLayout from '@/components/blog/BlogLayout'
import { BackButton } from '@/components/reusable/Button'
import SideBar from '@/components/category/SideBar'
import SubSectionHero from '@/components/grid/SubSectionHero'
import SlugDocsHero from '@/components/icon/Docs/SlugDocsHero'
import { sortAlphabetically } from '@/utils/SortBy'
import SEO from '@/components/reusable/SEO'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function DocsCategorySlugPage({ posts, categoryName, categories }) {
  return (
    <SEO
      title={`Documentation - ${categoryName}`}
      description={`greenCSS documentation - get an overview about the category ${categoryName}, its css classes and how to apply them.`}
      url={`docs/category/${categoryName}`}
      keywords='docs, documentation, information, search, css'>
      <Layout className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh mb-10rem'>
        <div className='grid grid-col-12 gap-30px'>
          <div
            className='overflow-y-scroll sticky max-h-75vh col-span-3 sm:display-none md:display-none mb-50px'
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#898989 #fdfdfd', top: '75px' }}
            id='sidebar'>
            <ul>
              <SideBar categories={categories} posts={posts} hasSubcategory={true} />
            </ul>
          </div>
          <div className='min-w-100per relative col-span-9 sm:col-span-12 md:col-span-12'>
            <BackButton>Back</BackButton>
            <div className='min-w-100per relative' id={`category-${categoryName}`}>
              <SubSectionHero
                header={`Browse by category: ${categoryName.replace('-', ' ')}`}
                subheader={`Get an overview in the category \"${categoryName}\" and browse through all the documentation.`}
                illustration={<SlugDocsHero width='100%' height='100%' />}
              />
              <BlogLayout>
                {posts.map((post, index) => (
                  <BlogCard key={index} post={post} index={index} isCategory={true} />
                ))}
              </BlogLayout>
            </div>
          </div>
        </div>
      </Layout>
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
