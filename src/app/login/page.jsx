"use client";

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import ProviderBtn from "./providerBtn/ProviderBtn";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
// Photo source import
import GoogleLogo from "/public/png/googleLogo.png";

export default function page() {
  const session = useSession();
  const router = useRouter();
  if (session.status == "authenticated") return router.push("/");

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>
          Welcome to your professional community
        </h1>
        <div className={styles.loginForm}>
          <div className={styles.inputField}>
            <p className={styles.inputText}>Email</p>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.inputField}>
            <p className={styles.inputText}>Password</p>
            <input
              type="password"
              name="password"
              id="password"
              className={styles.input}
              required
            />
          </div>
          <button className={styles.signInBtn}>Sign In</button>
          <p
            style={{
              fontSize: "14px",
              opacity: "70%",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            OR <br /> Sign in using
          </p>
          <ProviderBtn
            src={GoogleLogo}
            title={"Google"}
            alt={"google icon"}
            action={"google"}
          />
        </div>
        <Link href={"/register"} style={{ width: "100%", textAlign: "center" }}>
          <button className={styles.registerBtn}>
            New to LinkedIn? Join now
          </button>
        </Link>
      </div>
    </main>
  );
}
