import { useState } from 'react'
import { createContext } from 'react'

export const AlbumModalContext = createContext({})

export const AlbumModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AlbumModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </AlbumModalContext.Provider>
  )
}
