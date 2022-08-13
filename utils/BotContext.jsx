import React, { useState, useEffect, createContext } from 'react'
import isbot from 'isbot'

const BotContext = createContext()

export function BotProvider({ children }) {
  const [isBot, setIsBot] = useState(false)

  useEffect(() => {
    setIsBot(isbot(navigator.userAgent))
    localStorage.setItem('protection-required', JSON.stringify(isBot))
  }, [])

  return <BotContext.Provider value={{ isBot, setIsBot }}>{children}</BotContext.Provider>
}
export default BotContext
