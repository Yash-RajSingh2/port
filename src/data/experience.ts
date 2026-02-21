import impactAnalyticsLogo from "@assets/IaLogo.svg";
import switchLabsLogo from "@assets/switchlabs.webp";
import aceLogo from "@assets/AceLogo.svg";

export interface ExperienceData {
  company: string;
  jobTitle: string;
  period: string;
  description: string[];
  imageSrc: string;
}

export const experiences: ExperienceData[] = [
  {
    company: "Impact Analytics",
    jobTitle: "Software Engineer",
    period: "Aug 2022 – present",
    imageSrc: impactAnalyticsLogo,
    description: [
      'Led a complete UI revamp of the company’s core microfrontend application (serving 40+ enterprise clients) improving usability, performance, and scalability across platforms.',
      'Engineered and shipped key features, including a drag-and-drop pivot panel for tables, enabling advanced data manipulation and significantly enhancing analyst productivity.',
      'Drove UI/UX enhancements and defect resolutions, resulting in smoother workflows and contributing to the successful onboarding of 8 new clients post-migration.',
      'Collaborated cross-functionally with product managers, designers, and backend developers to ensure seamless integration, consistent design standards, and high-performance delivery.'

    ],
  },
  {
    company: "Impact Analytics",
    jobTitle: "Software Engineer Trainee",
    period: "Nov 2022 – 07/2023 (originally 02/2023)",
    imageSrc: impactAnalyticsLogo,
    description: [
      'Engineered reusable UI components with MUI, Highcharts and ag-Grid, enabling consistent design and reducing feature development time by ~20%.',
      'Implemented responsive, pixel-perfect UI designs that streamlined client workflows and contributed to a smoother onboarding of 7+ clients.'
    ],
  },
  {
    company: "SwitchLabs",
    jobTitle: "Software Engineer Intern",
    period: "Aug 2022 – Oct 2022",
    imageSrc: switchLabsLogo,
    description: [
      'Developed an analytics system to track user activity(views, time spent), enabling personalized discounts and boosting engagement by ~15%.',
      'Rebuilt company website from HTML/CSS/JS to React, delivering a UI revamp with improved responsiveness.'
    ],
  },
  {
    company: "ACE- Association for Computer Enthusiasts",
    jobTitle: "Web Dev Mentor",
    period: "December 2022 – July 2023",
    imageSrc: aceLogo,
    description: [
      "Mentored team members in frontend fundamentals, Git workflows, and responsive design principles.",
      "Conducted hands-on sessions on component-based UI, accessibility best practices, and deployment workflows.",
    ],
  },
  {
    company: "ACE- Assn. for Computer Enthusiasts",
    jobTitle: "Web development team core member",
    period: "February 2021 – December 2022",
    imageSrc: aceLogo,
    description: [
      "Built the official live website for the Association of Computer Enthusiasts (ACE) as part of a 4-member team.",
      "Implemented site architecture and a responsive UI for About, Projects, Members, and History sections.",
      "Worked on group projects within the society, collaborating on design, development, and deployment tasks.",
    ],
  },
];
