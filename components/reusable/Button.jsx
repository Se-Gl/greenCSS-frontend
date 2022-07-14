import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ChevronRight from '../icon/ChevronRight'
import ChevronRightHover from '../icon/ChevronRightHover'
import CtaButton from './CtaButton'

export function GreenButton({
  href = '/',
  className = 'text-15px',
  type = 'button',
  onClick,
  id = 'button',
  isDefault = true,
  hasLink = false,
  isDownload = false,
  isReverse = false,
  isOutline = false,
  isLinkedOutline = false,
  isdisabled = false,
  children
}) {
  const [hover, setHover] = useState(false)

  function handleMouseOver() {
    setHover(true)
  }
  function handleMouseOut() {
    setHover(false)
  }
  return (
    <>
      {isDefault && (
        <button
          onClick={onClick}
          id={id}
          className={`greencss-button cursor-pointer flex py-10px px-50px font-bold bg-black hover:bg-black-2 active:bg-black-5 focus:bg-black-5 transition-duration-200ms transition-all rounded-10px border-1px border-solid border-transparent hover:border-black my-auto text-center justify-center items-center m-auto text-15px ${className} text-white`}
          type={type}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
          {children}
        </button>
      )}
      {isReverse && (
        <button
          onClick={onClick}
          id={id}
          className={`greencss-button-reverse cursor-pointer flex py-10px px-50px bg-greencss font-bold hover:bg-black active:bg-black-9 focus:bg-black-8 transition-duration-200ms transition-all rounded-10px border-1px border-solid hover:border-white border-transparent my-auto text-center justify-center items-center m-auto ${className} text-white`}
          type={type}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
          {children}
        </button>
      )}
      {isOutline && (
        <button
          disabled={isdisabled}
          onClick={onClick}
          id={id}
          className={`greencss-button cursor-pointer flex py-10px px-25px min-w-50px font-bold transition-duration-200ms transition-all rounded-10px border-1px border-solid border-black my-auto text-center justify-center items-center m-auto ${className} text-black`}
          type={type}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
          {children}
        </button>
      )}
      {isLinkedOutline && (
        <Link href={href} passHref>
          <button
            disabled={isdisabled}
            id={id}
            className={`greencss-button cursor-pointer flex py-10px px-25px min-w-50px font-bold transition-duration-200ms transition-all rounded-10px border-1px border-solid border-black my-auto text-center justify-center items-center m-auto ${className} text-black`}
            type={type}
            href={href}>
            {children}
          </button>
        </Link>
      )}
      {hasLink && (
        <Link href={href} passHref>
          <button
            onClick={onClick}
            id={id}
            className={`greencss-button cursor-pointer flex py-10px px-50px font-bold bg-black hover:bg-greencss active:bg-greencss-9 focus:bg-greencss-8 transition-duration-200ms transition-all rounded-10px border-1px border-solid border-transparent hover:border-black my-auto text-center justify-center items-center m-auto text-15px ${className} text-white`}
            type={type}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            {children}
          </button>
        </Link>
      )}
      {isDownload && (
        <a href={href} download className='no-decoration mb-0px'>
          <button
            onClick={onClick}
            id={id}
            className={`greencss-button cursor-pointer flex py-10px px-50px hover:text-black font-bold bg-transparent hover:bg-greencss active:bg-greencss-9 focus:bg-greencss-8 transition-duration-200ms transition-all rounded-10px border-1px border-solid border-transparent hover:border-black my-auto text-center justify-center items-center m-auto text-15px ${className} text-greencss hover:text-white`}
            type={type}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            {children}
          </button>
        </a>
      )}
    </>
  )
}

export function BackButton({ className, type = 'button', id = 'back-button', children }) {
  const router = useRouter()
  const [hover, setHover] = useState(false)

  function handleMouseOver() {
    setHover(true)
  }
  function handleMouseOut() {
    setHover(false)
  }
  return (
    <div className='flex sm:min-w-90px sm:min-h-30px min-w-12rem min-h-50px responsive z-98'>
      <button
        onClick={() => router.back()}
        id={id}
        className={`${className} flex my-auto text-center text-15px font-bold bg-transparent transition-duration-500ms hover:text-black-3 active:text-black-6 focus:text-black-6`}
        style={{ border: 'none', cursor: 'pointer' }}
        type={type}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
        {!hover && <ChevronRight className='my-auto mr-20px rotate-180deg' />}
        {hover && <ChevronRightHover className='my-auto mr-11px rotate-180deg' />}
        {children}
      </button>
    </div>
  )
}

export function PaginationButton({ id, hover, setHover, href, title, isRevert = false }) {
  return (
    <div
      id={id}
      className={`shadow-small-black max-h-50px flex relative bg-white py-10px rounded-10px cursor-pointer min-w-13rem ${
        isRevert ? 'pr-10px' : 'pl-10px'
      }`}
      onMouseEnter={() => {
        setHover(1)
      }}
      onMouseLeave={() => setHover(-1)}>
      <Link href={href}>
        <a className='min-w-13rem flex justify-between items-center no-decoration text-15px font-500 my-0px'>
          {isRevert ? (
            <>
              <CtaButton hover={hover} index={1} className='h-25px rotate-180deg' />
              <div>{title}</div>
            </>
          ) : (
            <>
              <div>{title}</div>
              <div>
                <CtaButton hover={hover} index={1} className='h-25px' />
              </div>
            </>
          )}
        </a>
      </Link>
    </div>
  )
}
