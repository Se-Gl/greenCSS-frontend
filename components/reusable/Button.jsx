import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
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

export function BackButton({ id, title = 'Back' }) {
  const router = useRouter()
  const [hover, setHover] = useState(false)

  return (
    <div
      onClick={() => router.back()}
      id={id}
      className='shadow-small-gray-5 max-h-50px flex relative bg-transparent py-10px rounded-10px cursor-pointer w-13rem'
      onMouseEnter={() => {
        setHover(1)
      }}
      onMouseLeave={() => setHover(-1)}>
      <a className='min-w-13rem flex justify-between items-center no-decoration text-15px font-500 my-0px'>
        <CtaButton hover={hover} index={1} className='h-25px rotate-180deg' />
        <div className='pr-10px'>{title}</div>
      </a>
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
