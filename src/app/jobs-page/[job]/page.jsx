import React from "react";
import styles from "./page.module.css";
import UserPic from "@/components/userPic/UserPic";
import BgComponent from "@/components/background/BgComponent";
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
    jobDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quia ipsum odio. Illum, necessitatibus deserunt. Tenetur quas minima quod magnam pariatur minus at?",
  },
  {
    id: 1,
    jobTitle: "Back-end developer",
    jobRecruiter: "Facebok",
    statusTitle: "Applicant review time is typically 3 days",
    src: FacebookLogo,
    jobDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quia ipsum odio. Illum, necessitatibus deserunt. Tenetur quas minima quod magnam pariatur minus at?",
  },
  {
    id: 2,
    jobTitle: "QA Engineer",
    jobRecruiter: "Instigrim",
    statusTitle: "Applicant review time is typically 3 days",
    src: InstagramLogo,
    jobDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quia ipsum odio. Illum, necessitatibus deserunt. Tenetur quas minima quod magnam pariatur minus at?",
  },
  {
    id: 3,
    jobTitle: "Senior Tester",
    jobRecruiter: "Ai for us",
    statusTitle: "Applicant review time is typically 3 days",
    src: AiLogo,
    jobDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quia ipsum odio. Illum, necessitatibus deserunt. Tenetur quas minima quod magnam pariatur minus at?",
  },
  {
    id: 4,
    jobTitle: ".Net developer",
    jobRecruiter: "GamesGames.com",
    statusTitle: "Applicant review time is typically 3 days",
    src: DotNetLogo,
    jobDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quia ipsum odio. Illum, necessitatibus deserunt. Tenetur quas minima quod magnam pariatur minus at?",
  },
];

export default function page({ params }) {
  return (
    <main className={styles.main}>
      <BgComponent>
        <div className={styles.wrapper}>
          <div>
            <UserPic width={64} height={64} src={jobs[params.job].src} />
          </div>
          <h1>
            <span style={{ fontWeight: "normal", textDecoration: "underline" }}>
              Job Title:{" "}
            </span>
            {jobs[params.job].jobTitle}
          </h1>
          <p>
            <span style={{ textDecoration: "underline" }}>Recruiter: </span>
            {jobs[params.job].jobRecruiter}
          </p>
          <p style={{ textAlign: "center" }}>
            <span style={{ textDecoration: "underline" }}>
              Job description:{" "}
            </span>
            {jobs[params.job].jobDescription}
          </p>
        </div>
      </BgComponent>
    </main>
  );
}
