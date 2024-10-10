import React from "react";
import styles from "./PlaySync.module.css";
import phone from "./assets/iPhoneHL_PlaySync.svg";
import laptop from "./assets/macBookHL_PlaySync.svg";

const PlaySync = () => {
  //list of bulletPoints
  //bulletPoint is {heading: string, description: string}
  const bulletPoints = [
    {
      heading: "Seamless Payment and Registration",
      description:
        "Teams can register online with a streamlined process that consolidates everything from sign-ups to secure payments, eliminating paperwork and manual tracking.",
    },
    {
      heading: "Automated Scheduling and Real-Time Updates",
      description:
        "PlaySync automatically generates match schedules based on team availability, tournament structure, and venue capacity. Real-time updates keep players and organizers informed about changes, with notifications for delays or timing adjustments.",
    },
    {
      heading: "Efficient Referee Assignments",
      description:
        "Assign referees in just a few clicks. The system ensures balance in workloads and qualifications for every game, saving organizers time and promoting fairness across the tournament.",
    },
    {
      heading: "Livestream Integration",
      description:
        "Set up and manage livestreams effortlessly, enabling fans to watch games from anywhere in the world. Whether it's family or distant supporters, PlaySync ensures no one misses out on the action.",
    },
    {
      heading: "User-Friendly Interface",
      description:
        "PlaySync offers mobile and desktop access with a sleek, intuitive design. Organizers can manage events on the go, while athletes and referees can easily check schedules, results, and locations.",
    },
  ];
  return (
    <div className={styles.page}>
      <div className={styles.t1}>
        <div className={styles.c1}>
          <h1 className={styles.title}>PLAYSYNC</h1>
          <p className={styles.description}>
            An all-in-one sports tournament management platform built to
            simplify the organization of sports events, whether local leagues or
            national championships. With a focus on automation and user-friendly
            design, PlaySync is tailored to meet the needs of tournament
            organizers, athletes, and fans.
          </p>
          <div className={styles.imgDescription}>Athlete View</div>
          <img className={styles.phone} src={phone} alt="iPhone" />
        </div>
        <div className={styles.c2}>
          <div className={styles.imgDescription}>Admin View</div>
          <img className={styles.laptop} src={laptop} alt="MacBook" />
          <div className={styles.bpContainer}>
            {bulletPoints.map((bp) => (
              <div className={styles.bp}>
                <h3 className={styles.bpHeading}>{bp.heading}</h3>
                <p className={styles.bpDescription}>{bp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaySync;
