import React, { useState, createContext } from 'react'
import { Modal } from 'codn'
import Search from '@/components/search/Search'

const ModalContext = createContext()

export function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSearchBar = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <ModalContext.Provider value={{ handleSearchBar, isModalOpen, setIsModalOpen }}>
      {/* Modal */}
      <Modal toggle={isModalOpen} setToggle={setIsModalOpen} className='h-75vh w-75vw container'>
        <Search />
      </Modal>
      {children}
    </ModalContext.Provider>
  )
}
export default ModalContext
