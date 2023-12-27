"use client";
import Image from "next/image";
import React from "react";
import styles from "./NavbarItem.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavbarItem({ src, alt, title, href }) {
  const pathName = usePathname();
  return (
    <Link href={href}>
      <div
        className={`${styles.wrapper} ${pathName == href ? styles.active : ""}`}
      >
        <Image className={styles.navItem} src={src} alt={alt} />
        <p className={styles.title}>{title}</p>
      </div>
    </Link>
  );
}
