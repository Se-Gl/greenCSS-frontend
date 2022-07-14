import { useState } from 'react'
import { PaginationButton } from './Button'

export default function Pagination({ currentPage, numPages }) {
  const [hover, setHover] = useState(false)
  const [hoverRevert, setHoverRevert] = useState(false)
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === numPages
  const prevPage = `/blog/page/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`
  if (numPages === 1) return <></>

  return (
    <div className='my-100px'>
      <ul className='flex flex-row justify-center'>
        {!isFirstPage && (
          <PaginationButton
            hover={hoverRevert}
            setHover={setHoverRevert}
            href={prevPage}
            title='Back'
            isRevert={true}
          />
        )}
        {!isLastPage && (
          <PaginationButton hover={hover} setHover={setHover} href={nextPage} title='Next' isRevert={false} />
        )}
      </ul>
    </div>
  )
}
