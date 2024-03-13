import React from "react";
import styles from "./Jobs.module.css";
import ExactJob from "./exactJob/ExactJob";
import Link from "next/link";
// photo source import
import GoogleLogo from "/public/jpg/google.jpg";
import FacebookLogo from "/public/jpg/facebook.jpg";
import InstagramLogo from "/public/jpg/instagram.jpg";
import AiLogo from "/public/jpg/ai.jpg";
import DotNetLogo from "/public/jpg/dotNet.jpg";

const jobs = [
  {
    id: 0,
    jobTitle: "Front-end developer",
    jobRecruiter: "Google",
    statusTitle: "Applicant review time is typically 3 days",
    src: GoogleLogo,
  },
  {
    id: 1,
    jobTitle: "Back-end developer",
    jobRecruiter: "Facebok",
    statusTitle: "Applicant review time is typically 3 days",
    src: FacebookLogo,
  },
  {
    id: 2,
    jobTitle: "QA Engineer",
    jobRecruiter: "Instigrim",
    statusTitle: "Applicant review time is typically 3 days",
    src: InstagramLogo,
  },
  {
    id: 3,
    jobTitle: "Senior Tester",
    jobRecruiter: "Ai for us",
    statusTitle: "Applicant review time is typically 3 days",
    src: AiLogo,
  },
  {
    id: 4,
    jobTitle: ".Net developer",
    jobRecruiter: "GamesGames.com",
    statusTitle: "Applicant review time is typically 3 days",
    src: DotNetLogo,
  },
];
export default function Jobs() {
  return (
    <div className={styles.componentWrapper}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Jobs For You</h1>
        <p className={styles.description}>
          Based on your profile search and history:
        </p>
      </div>
      <div className={styles.wrapper}>
        {jobs.map((item, index) => {
          return (
            <Link href={`/jobs-page/${item.id}`}>
              <ExactJob
                jobTitle={item.jobTitle}
                jobRecruiter={item.jobRecruiter}
                statusTitle={item.statusTitle}
                src={item.src}
                key={index + item.jobTitle + item.id}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
