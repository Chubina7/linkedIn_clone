import React from "react";
import styles from "./Backdrop.module.css";

export default function Backdrop({ show, onClick, zIndex }) {
  if (!show) return null;
  return (
    <div
      className={styles.overlay}
      onClick={onClick}
      style={{ zIndex: `${zIndex}` }}
    ></div>
  );
}
