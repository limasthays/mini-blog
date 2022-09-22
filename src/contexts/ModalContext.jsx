import { createContext, useState } from 'react'

export const ModalCommentsContext = createContext({})

export const ModalCommentsProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ModalCommentsContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalCommentsContext.Provider>
  )
}
