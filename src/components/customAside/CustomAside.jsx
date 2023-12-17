import React from "react";
import styles from "./CustomAside.module.css";
import Recomendations from "./recomendations/Recomendations";
import Footer from "../footer/Footer";

export default function CustomAside() {
  return (
    <aside className={styles.wrapper}>
      <Recomendations />
      <Footer />
    </aside>
  );
}
