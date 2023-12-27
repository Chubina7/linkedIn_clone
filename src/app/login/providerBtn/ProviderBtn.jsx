"use client";

import React from "react";
import styles from "./ProviderBtn.module.css";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";

export default function ProviderBtn({ src, alt, title, action }) {
  const session = useSession();
  console.log(session);
  return (
    <div className={styles.provider} onClick={() => signIn(action)}>
      <p>{title}</p>
      <Image src={src} width={18} height={18} alt={alt} />
    </div>
  );
}
