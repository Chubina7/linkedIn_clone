"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Loading from "@/components/loading/loading";

export default function page({ params }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://dummyjson.com/users/${params.user}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const result = await res.json();

      setData(result);
    };

    fetchData();
  }, []);
  return (
    <main className={styles.main}>
      {data ? <h1>this is the user {params.user} page</h1> : <Loading />}
    </main>
  );
}
