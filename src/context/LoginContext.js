"use client"

import { Children, createContext } from "react"

export const LoginContext = createContext()

export const LoginProvider = () => {
    // The logic goes here
    <LoginContext.Provider value={""}>
        {Children}
    </LoginContext.Provider>
}