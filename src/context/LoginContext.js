"use client"

import { createContext, useState } from "react"

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {
    // The logic goes here
    const [userLogined, setUserLogined] = useState(false)

    return <LoginContext.Provider value={{ userLogined }}>
        {children}
    </LoginContext.Provider>
}