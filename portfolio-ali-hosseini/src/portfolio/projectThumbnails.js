/* tag definitions */
  /* tag is {name: String, fgc: Color, bgc: Color } */
  /* tag.name is one of Cloud, Active Users, Full-Stack, Cross-Platform, Node, React, 0-100 */

  const CLOUD = { name: "Cloud", fgc: "#FBE9E3", bgc: "#D19A7D" }; // Saturated, original brightness
  const ACTIVE_USERS = { name: "Active Users", fgc: "#E5F3DF", bgc: "#579D01" }; // Saturated, original brightness
  const FULL_STACK = { name: "Full-Stack", fgc: "#FDEAF1", bgc: "#D8648E" }; // Saturated, original brightness
  const CROSS_PLATFORM = {
    name: "Cross-Platform",
    fgc: "#DEE7F3",
    bgc: "#7084B1",
  }; // Saturated, original brightness
  const NODE = { name: "Node", fgc: "#F2DCDC", bgc: "#7D4B49" }; // Saturated, original brightness
  const REACT = { name: "React", fgc: "#F8E5CD", bgc: "#B97C34" }; // Saturated, original brightness
  const ZERO_TO_HUNDRED = { name: "0-100", fgc: "#FDE7E3", bgc: "#C54F37" }; // Saturated, original brightness
  const IN_PROGRESS = { name: "In Progress", fgc: "#FDE7E3", bgc: "#C54F37" }; // Same as ZERO_TO_HUNDRED


export const projects = [
    {
      name: "PlaySync",
      description:
        "Cross-platform scheduling and payment software to manage sport tournaments.",
      tags: [
        ACTIVE_USERS,
        CLOUD,
        FULL_STACK,
        CROSS_PLATFORM,
        NODE,
        ZERO_TO_HUNDRED,
      ],
      bg: "url(/PSTN.png)",
      href: "/PlaySync",
    },
    {
      name: "ORDR",
      description: "A restaurant management system.",
      tags: [REACT, NODE, FULL_STACK, CROSS_PLATFORM],
      bg: "url(./ORDR_Waiter.svg)",
      href: "/ORDR",
    },
    {
      name: "PRIO",
      description: "A cloud-based task management system.",
      tags: [REACT, NODE, FULL_STACK, CROSS_PLATFORM, IN_PROGRESS],
      bg: "url(./PTN.png)",
      href: "/PRIO",
    },
  ];