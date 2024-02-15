import React from "react";
import styles from "./Recomendations.module.css";
import Image from "next/image";
import RecomendedUser from "./recomendedUser/RecomendedUser";
import Link from "next/link";
import BgComponent from "@/components/background/BgComponent";
// Photo source import
import MoreInfoIcon from "/public/svg/info.svg";
import RightPointedArrow from "/public/svg/arrowToRight.svg";

const randomId = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

const getData = async () => {
  const response = await fetch(
    `https://dummyjson.com/users?limit=3&skip=${randomId}&select=firstName,lastName,image,company`
  );
  const result = await response.json();

  return result.users;
};

export default async function Recomendations() {
  const data = await getData();

  return (
    <BgComponent>
      <div className={styles.upperContainer}>
        <p className={styles.heading}>Add to your feed</p>
        <Image
          src={MoreInfoIcon}
          alt="more info icon"
          className={styles.moreInfoIcon}
        />
      </div>
      {data.map((item) => {
        return (
          <RecomendedUser
            userId={item.id}
            userImage={item.image}
            userName={item.firstName}
            userSureName={item.lastName}
            workTitle={item.company.title}
          />
        );
      })}
      <div className={styles.bottomContainer}>
        <Link href={"/mynetwork"}>
          <div className={styles.bottomTextWrapper}>
            <p className={styles.bottomText}>View all recomendations</p>
            <Image
              src={RightPointedArrow}
              alt="arrow to right"
              className={styles.arrow}
            />
          </div>
        </Link>
      </div>
    </BgComponent>
  );
}
