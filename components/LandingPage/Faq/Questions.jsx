import React, { useState, useRef, useEffect } from 'react'
import FaqIcon from '../../icon/Faq/FaqIcon'

export default function FaqQuestions({ question }) {
  const [active, setActive] = useState(false)

  const contentRef = useRef(null)

  useEffect(() => {
    contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
  }, [contentRef, active])

  const toggleQuestion = () => {
    setActive(!active)
  }
  return (
    <button
      className='cursor-pointer border-1px border-solid border-black-10 rounded-10px bg-white p-15px mb-10px greencss-button shadow-small-gray transition-all transition-duration-300ms ease'
      onClick={toggleQuestion}>
      <div className={`bg-transparent ${active}`}>
        <div className='flex items-center'>
          <h3 className='text-15px font-800 mb-0px text-center'>{question.title}</h3>
          <FaqIcon className={`ml-auto ${active && 'rotate-45deg'}`} />
        </div>
        <div ref={contentRef} className='overflow-hidden transition-all transition-duration-300ms ease'>
          <p className='text-15px text-black-10 relative z-99 mb-0px'>{question.description}</p>
        </div>
      </div>
    </button>
  )
}
