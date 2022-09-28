import { useState } from 'react'
import { createContext } from 'react'

export const UserIdContext = createContext({})

export const UserIdProvider = ({ children }) => {
  const [userId, setUserId] = useState()

  return (
    <UserIdContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserIdContext.Provider>
  )
}
