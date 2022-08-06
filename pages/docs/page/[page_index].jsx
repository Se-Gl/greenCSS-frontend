import dynamic from 'next/dynamic'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getPosts } from '@/lib/posts'
import SideBar from '@/components/category/SideBar'
import { sortAlphabetically } from '@/utils/SortBy'
import SEO from '@/components/reusable/SEO'

const SideBarlayout = dynamic(() => import('@/components/reusable/SideBarlayout'), { ssr: false })
const SyntaxComponent = dynamic(() => import('@/components/markdown/SyntaxComponent'))
const BrandCard = dynamic(() => import('@/components/brand/BrandCard'))

const syntax = [
  {
    header: 'Quick Start | NPM',
    description:
      "The simplest and fastest way to get up and running with greenCSS is to use NPM. This is the normal approach for all JavaScript frameworks like Angular, React or Vue. Here you can decide for yourself how to set up your code base for the production. Either import the entire css file: import 'greencss/css/greencss.css', or you can import a specific category. For example the animations: import 'greencss/css/classes/animation/animation.css'",
    markdown:
      "npm i greencss \n---\nimport 'greencss/css/greencss.css'\nimport 'greencss/css/classes/animation/animation.css'"
  },
  {
    header: 'Quick Start | CDN',
    description:
      'The most straightforward approach for non-JavaScript frameworks is to use CDN. Importing the greencss.css file, means that you have access to every greenCSS class. If you just want to import specific categories, check the example below.',
    markdown:
      '<head>\n  <title>Your awesome Website - designed with greenCSS</title>\n  <link rel="stylesheet" href="https://unpkg.com/greencss/css/minified/greencss.css" />\n  <link rel="stylesheet" href="https://unpkg.com/greencss/css/minified/classes/animation/animation.css" />\n</head>'
  }
]

export default function DocsCategoryPage({ categories, posts }) {
  return (
    <SEO
      title='greenCSS documentation - an overview'
      description='Docs - the right way to get to know the greenCSS by browsing the documentation. Search by categories. Get to know greenCSS and start writing design.'
      url='docs'
      keywords='docs, documentation, information, search, css'>
      <SideBarlayout
        categories={categories}
        posts={posts}
        hasSubcategory={true}
        content={
          <>
            <div className='min-w-100per relative col-span-9 sm:col-span-12 md:col-span-12' id='docs-index'>
              <div className='max-w-75rem mb-10rem'>
                <p className='text-greenCSS-5 font-600 text-15px mb-5px'>Documentation</p>
                <h1 className='font-900 mb-15px'>Docs - the right way to get to know the system</h1>
                <h2 className='text-20px font-normal mb-25px'>Get to know greenCSS and start writing design.</h2>
              </div>
              {syntax.map((syn, index) => (
                <SyntaxComponent header={syn.header} description={syn.description} markdown={syn.markdown} key={index}>
                  {syn.markdown}
                </SyntaxComponent>
              ))}
              <>
                <h2 className='mt-10rem'>All available categories</h2>
                <p className='mb-10px'>
                  If you just want to add a specific category, adjust the NPM Import{' '}
                  <span className='font-style-italic'>
                    import &apos;greencss/css/classes/
                    <span className='font-600'>ADJUST-YOUR-DESIRED-PATH</span>
                    &apos;
                  </span>
                  .
                </p>
                <p>
                  If you want to add a specific category by using CDN, adjust the link{' '}
                  <span className='font-style-italic'>
                    &quot;https://unpkg.com/greencss/css/minified/classes/
                    <span className='font-600'>ADJUST-YOUR-DESIRED-PATH</span>&quot;
                  </span>
                  .
                </p>
                <h3 id='category-paths'>Applicable paths</h3>
                <ol>
                  <li>animation/animation.css</li>
                  <li>background/background.css</li>
                  <li>borders/borders.css</li>
                  <li>color/color.css</li>
                  <li>effects/effects.css</li>
                  <li>filters/filters.css</li>
                  <li>flex-grow/flex-grow.css</li>
                  <li>interactivity/interactivity.css</li>
                  <li>layout/layout.css</li>
                  <li>sizing/sizing.css</li>
                  <li>spacing/spacing.css</li>
                  <li>svg/svg.css</li>
                  <li>tables/tables.css</li>
                  <li>transforms/transforms.css</li>
                  <li>typography/typography.css</li>
                </ol>
              </>
              <>
                <SyntaxComponent
                  header='Dark Mode'
                  description='Installing the dark mode is similar to the normal installation.'>
                  npm i @greencss/dark-mode
                </SyntaxComponent>
                <p className='mb-0px'>NPM import works the same way like the normal imports:</p>
                <div className='mb-25px bg-white p-5px rounded-5px text-20px font-style-italic'>
                  import &apos;@greencss/dark-mode/css/minified/greencss-dark.css&apos;
                  <br />
                  import &apos;@greencss/dark-mode/css/minified/classes/PATH-TO-YOUR-CATEGORY&apos;
                </div>

                <p className='mb-0px'>CDN import works the same way like the normal imports, the URL looks like:</p>
                <div className='bg-white p-5px rounded-5px text-20px font-style-italic'>
                  https://unpkg.com/@greencss/dark-mode/css/minified/greencss-dark.css
                  <br />
                  https://unpkg.com/@greencss/dark-mode/css/minified/classes/PATH-TO-YOUR-CATEGORY
                </div>
              </>
              <h2 className='mt-10rem'>The types</h2>
              <p className='mt-25px'>
                greenCSS features 15 core elements. These in turn are filtered into over 250 subcategories. You are
                looking for a specific css class element? Use the search function instead, just press F3.
              </p>
              <div className='m-auto grid grid-col-2 gap-30px sm:gap-15px sm:grid-col-1 md:grid-col-1'>
                {categories.sort().map((category, index) => (
                  <BrandCard title={category} link={`/docs/category/${category.toLowerCase()}`} key={index} />
                ))}
              </div>
            </div>
          </>
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
    params: { page_index: category.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const posts = getPosts(sortAlphabetically)
  const categories = posts.map((post) => post.frontmatter.category)
  const uniqueCategories = [...new Set(categories)]

  return {
    props: {
      posts,
      categories: uniqueCategories
    }
  }
}
