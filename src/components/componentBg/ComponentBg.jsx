import React from "react";
import styles from "./CompnentBg.module.css";

export default function ComponentBg({ children }) {
  return <section className={styles.wrapper}>{children}</section>;
}
