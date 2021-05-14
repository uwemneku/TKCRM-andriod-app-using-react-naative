/* eslint-disable prettier/prettier */
import React, {useState, createContext} from 'react'


export const ShowHeaderContext = createContext()

export  function ShowHeaderProvider({children}) {
    const [showHeader, setshowHeader] = useState(true)
    return (
        <ShowHeaderContext.Provider value={[showHeader, setshowHeader]}>
            {children}
        </ShowHeaderContext.Provider>
    )
}
