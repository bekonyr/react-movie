import React, { useState } from 'react'
import { LanguageContext } from '.'
import { Dark } from '.'


const RootContext = ({children}) => {
    const [language, setLanguage] = useState("en-US")
    const [dark , setDark ] = useState(false)
    const [page , setPage] = useState(1)
  return (
<LanguageContext.Provider value={{
language,
setLanguage,
dark,
setDark,
page,
setPage

}} >
{children}
</LanguageContext.Provider>
    
  )
}

export default RootContext