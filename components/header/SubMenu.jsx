import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useGlobalContext } from '@/utils/NavContext'
import ToggleMember from './ToggleMember'

const SubMenu = () => {
  const {
    isSubmenuOpen,
    submenuPosition,
    submenuItem: {
      page,
      pageLink,
      subtext,
      links,
      secondpage,
      secondpageLink,
      secondlinks,
      secondsubtext,
      thirdpage,
      thirdpageLink,
      thirdlinks,
      thirdsubtext
    }
  } = useGlobalContext()
  const [columns, setColumns] = useState('grid-col-2')
  const container = useRef(null)

  useEffect(() => {
    setColumns('grid-col-2')

    const { leftPosition, bottomPosition } = submenuPosition

    container.current.style.left = `${leftPosition}px`
    container.current.style.top = `${bottomPosition}px`

    if (links && links.length === 3) {
      setColumns('grid-col-3')
    }
    if (links && links.length > 3) {
      setColumns('grid-col-4')
    }
  }, [submenuPosition, page, links])
  return (
    <aside
      id='submenu'
      className={`${
        isSubmenuOpen
          ? 'submenu block p-20px z-99 bg-white absolute left-50per translate-x-neg-50per rounded-10px transition-all transition-duration-500ms shadow-small-black-10 clip-circle-in animation-duration-700ms animation-forwards'
          : 'display-none'
      }`}
      ref={container}>
      <section>
        <h4 className='mb-0px'>
          <Link href={`${pageLink}`}>
            <a className='text-15px font-700 capitalize mt-0px mb-0px no-decoration cursor-pointer'>{page}</a>
          </Link>
        </h4>
        <p className='text-15px text-black-10 mb-10px'>{subtext}</p>

        {links && (
          <div className={`m-auto grid rounded-5px gap-15px ${columns}`}>
            {links &&
              links.map((link, index) => {
                const { url, label } = link
                return (
                  <li key={`${label}-${index}`} style={{ listStyleType: 'none' }}>
                    <Link href={url}>
                      <a className='capitalize my-0px no-decoration flex text-15px font-400 items-center hover:text-greencss active:text-black-7 transition-all transition-duration-500ms'>
                        {label}
                      </a>
                    </Link>
                  </li>
                )
              })}

            {secondlinks && (
              <>
                <div className='col-start-1 col-end-3 mt-25px'>
                  <h4 className='mb-0px'>
                    <Link href={`${secondpageLink}`}>
                      <a className='text-15px font-700 capitalize mt-0px mb-0px no-decoration cursor-pointer'>
                        {secondpage}
                      </a>
                    </Link>
                  </h4>
                  <p className='text-15px text-black-10 mb-0px'>{secondsubtext}</p>
                </div>
                {secondlinks.map((secondlink, index) => {
                  const { url, label } = secondlink
                  return (
                    <div key={`${label}-${index}`}>
                      <Link href={url}>
                        <a className='capitalize my-0px no-decoration flex text-15px font-400 items-center hover:text-greencss active:text-black-7 transition-all transition-duration-500ms'>
                          {label}
                        </a>
                      </Link>
                    </div>
                  )
                })}
              </>
            )}
            {thirdlinks && (
              <>
                <div className='col-start-1 col-end-3 mt-25px'>
                  <h4 className='mb-0px'>
                    <Link href={`${thirdpageLink}`}>
                      <a className='text-15px font-700 capitalize mt-0px mb-0px no-decoration cursor-pointer'>
                        {thirdpage}
                      </a>
                    </Link>
                  </h4>
                  <p className='text-15px text-black-10 mb-0px'>{thirdsubtext}</p>
                </div>
                {thirdlinks.map((thirdlink, index) => {
                  const { url, label } = thirdlink
                  return (
                    <div key={`${label}-${index}`}>
                      <Link href={url}>
                        <a className='capitalize my-0px no-decoration flex text-15px font-400 items-center hover:text-greencss active:text-black-7 transition-all transition-duration-500ms'>
                          {label.includes('Login') ? null : label}
                        </a>
                      </Link>
                      {label.includes('Login') && (
                        <div className='m-0px'>
                          <ToggleMember />
                        </div>
                      )}
                    </div>
                  )
                })}
              </>
            )}
          </div>
        )}
      </section>
    </aside>
  )
}

export default SubMenu
