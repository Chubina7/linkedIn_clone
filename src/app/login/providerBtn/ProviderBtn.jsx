"use client";

import React from "react";
import styles from "./ProviderBtn.module.css";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function ProviderBtn({ src, alt, title, action }) {
  const signInHandler = () => {
    signIn(action);
  };

  return (
    <div className={styles.provider} onClick={signInHandler}>
      <p>{title}</p>
      <Image src={src} width={18} height={18} alt={alt} />
    </div>
  );
}
