import React from "react";
import styles from "./BgComponent.module.css";

export default function BgComponent({ children }) {
  return <section className={styles.wrapper}>{children}</section>;
}
