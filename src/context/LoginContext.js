"use client"

import { useSession } from "next-auth/react"
import { createContext, useEffect, useState } from "react"

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {
    const session = useSession()

    const [loading, setLoading] = useState(true)
    const [userLogined, setUserLogined] = useState(false)
    const [userImage, setUserImage] = useState("")
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")

    useEffect(() => {
        if (session.status == "unauthenticated") {
            setLoading(false)
            setUserLogined(false)
        }
        if (session.status == "loading") setLoading(true)
        if (session.status == "authenticated") {
            setLoading(false)
            setUserLogined(true)
            setUserImage(session.data?.user?.image)
            setUserName(session.data?.user?.name)
            setUserEmail(session.data?.user?.email)
            // const userPostReq = async () => {
            //     try {
            //         await fetch("http://localhost:3000/api/users", {
            //             method: "POST",
            //             body: JSON.stringify({
            //                 name: userName,
            //                 email: userEmail,
            //                 // phoneNumber: "",
            //                 profileImage: userImage,
            //                 // backgroundImage: "",
            //                 // workPlace: "",
            //                 // workTitle: "",
            //                 followers: 0,
            //                 posts: 0,
            //             }),
            //         });
            //     } catch (error) {
            //         console.log(error);
            //     }
            // };
            // userPostReq();
        }
    }, [session.status])

    return (
        <LoginContext.Provider value={{ userLogined, userImage, userName, userEmail, loading }}>
            {children}
        </LoginContext.Provider>
    )
}