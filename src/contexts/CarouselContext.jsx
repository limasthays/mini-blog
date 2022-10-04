import { useState } from 'react'
import { createContext } from 'react'

export const CarouselContext = createContext({})

export const CarouselContextProvider = ({ children }) => {
  const [focusedPhotoId, setFocusedPhotoId] = useState(0)

  return (
    <CarouselContext.Provider value={{ focusedPhotoId, setFocusedPhotoId }}>
      {children}
    </CarouselContext.Provider>
  )
}
