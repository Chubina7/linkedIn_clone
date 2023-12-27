"use client"

import { useSession } from "next-auth/react"
import { createContext, useEffect, useState } from "react"

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {
    const session = useSession()
    const [userLogined, setUserLogined] = useState(false)

    useEffect(() => {
        if (session.status == "unauthenticated") setUserLogined(false)
        if (session.status == "loading") setUserLogined(false)
        if (session.status == "authenticated") setUserLogined(true)
    }, [session.status])

    return (
        <LoginContext.Provider value={{ userLogined }}>
            {children}
        </LoginContext.Provider>
    )
}