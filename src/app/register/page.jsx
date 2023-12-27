"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
// Photo source import
import GoogleLogo from "/public/png/googleLogo.png";
import GitHubLogo from "/public/png/gitHubLogo.png";
import { useRouter } from "next/navigation";

export default function page() {
  const route = useRouter();

  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [surename, setSurename] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = async () => {
    if (name !== "" && surename !== "" && email !== "" && password !== "") {
      setError(false);
      try {
        const res = await fetch("http://localhost:3000/api/auth");
        // to be continued
      } catch (error) {}
      route.push("/");
    } else {
      setError(true);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>
          Make the most of your professional life
        </h1>
        <div className={styles.loginForm}>
          <div className={styles.inputField}>
            <p className={styles.inputText}>Name</p>
            <input
              type="text"
              className={styles.input}
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className={styles.inputField}>
            <p className={styles.inputText}>Surename</p>
            <input
              type="text"
              className={styles.input}
              required
              onChange={(e) => {
                setSurename(e.target.value);
              }}
            />
          </div>
          <div className={styles.inputField}>
            <p className={styles.inputText}>Email</p>
            <input
              type="email"
              className={styles.input}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className={styles.inputField}>
            <p className={styles.inputText}>Password</p>
            <input
              type="password"
              className={styles.input}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button className={styles.signInBtn} onClick={signInHandler}>
            Sign In
          </button>
        </div>
        {error && (
          <p style={{ color: "red" }}>Somthing went wrong! check fields</p>
        )}
      </div>
    </main>
  );
}
