import Link from 'next/link'
import ReusableModal from '../modal/ReusableModal'

export default function SideBar({ categories, posts, hasSubcategory = false, showSearch = true }) {
  return (
    <>
      {showSearch === true && <ReusableModal isSidebar={true} />}
      {categories.sort().map((category, index) => (
        <div key={index} className='whitespace-nowrap overflow-x-hidden mt-25px'>
          <li>
            <Link href={`/docs/category/${category.toLowerCase()}`} passRef>
              <a className='font-600 text-15px text-black-3 mb-0px no-decoration'>{category.replace('-', ' ')}</a>
            </Link>
          </li>
          {hasSubcategory === true &&
            posts.sort().map((subcategory, index) =>
              category === subcategory.frontmatter.category ? (
                <Link href={`/docs/${subcategory.slug}`} passRef key={subcategory.slug}>
                  <li
                    key={subcategory.slug}
                    className='py-5px hover:bg-gray-8 transition-all transition-duration-300ms cursor-pointer'>
                    <a className={`font-400 text-black-5 mb-0px text-15px no-decoration`}>
                      {subcategory.frontmatter.title}
                    </a>
                  </li>
                </Link>
              ) : null
            )}
        </div>
      ))}
    </>
  )
}
