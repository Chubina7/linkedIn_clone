"use client";

import React from "react";
import { SessionProvider, useSession } from "next-auth/react";
import Loading from "../loading/Loading";

export default function AuthProvider({ children }) {

  return <SessionProvider>{children}</SessionProvider>;
}
