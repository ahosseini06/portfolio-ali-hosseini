import React from "react";
import styles from "./Prio.module.css";
import phone from "./assets/iPhoneHL_PRIO.svg";

const Prio = () => {
  //list of bulletPoints
  //bulletPoint is {heading: string, description: string}
  const bulletPoints = [
    {
      heading: "Use of Color Psychology",
      description:
        "PRIO uses color to create a sense of urgency, helping users prioritize tasks and meet deadlines.",
    },
    {
      heading: "Cloud-Based Task Management",
      description:
        "Access PRIO from anywhere with an internet connection. The cloud-based system ensures that tasks are always up-to-date and accessible.",
    },
    {
      heading: "Widget Integration",
      description:
        "Add PRIO widgets to your desktop or mobile device for quick access to tasks and reminders. Stay on top of your to-do list with ease.",
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.t1}>
        <div className={styles.row}>
          <div className={styles.intro}>
            <h1 className={styles.title}>PRIO</h1>
            <p className={styles.introduction}>
              PRIO is a task management system that uses a priority-based
              approach. We used{" "}
              <a
                style={{ color: "lightblue" }}
                href="https://www.health.mil/Military-Health-Topics/MHS-Toolkits/Brand-Resources-for-Communicators/Color-Psychology-Guide#:~:text=Red,and%20increases%20urgency%20and%20intensity."
              >
                research in colour science
              </a>{" "}
              to create a sense of urgency that makes users 25% more likely to
              meet deadlines.
            </p>
            <div className={styles.bpContainer}>
              {bulletPoints.map((bp) => (
                <div className={styles.bp}>
                  <h3 className={styles.bpHeading}>{bp.heading}</h3>
                  <p className={styles.bpDescription}>{bp.description}</p>
                </div>
              ))}
            </div>
          </div>
          <img className={styles.img} src={phone} alt="iPhone" />
        </div>
      </div>
    </div>
  );
};

export default Prio;
