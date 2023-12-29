"use client"

import { useSession } from "next-auth/react"
import { createContext, useEffect, useState } from "react"

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {
    const session = useSession()

    const [userLogined, setUserLogined] = useState(false)
    const [userImage, setUserImage] = useState("")
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")

    useEffect(() => {
        if (session.status == "unauthenticated") {
            setUserLogined(false)
        }
        if (session.status == "authenticated") {
            setUserLogined(true)
            setUserImage(session.data?.user?.image)
            setUserName(session.data?.user?.name)
            setUserEmail(session.data?.user?.email)
        }
    }, [session.status])

    return (
        <LoginContext.Provider value={{ userLogined, userImage, userName, userEmail }}>
            {children}
        </LoginContext.Provider>
    )
}