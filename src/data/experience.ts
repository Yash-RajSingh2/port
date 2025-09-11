import  impactAnalyticsLogo  from '@assets/IaLogo.svg';
import  switchLabsLogo from "@assets/switchlabs.webp";
import aceLogo  from '@assets/AceLogo.svg';

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
      "Played an integral role in a complete UI revamp of the core product, improving usability and performance across web platforms.",
      "Led various UI/UX enhancements and bug fixes, improving user experience and interface efficiency across the application.",
      "Engineered and implemented key components, including a drag-and-drop pivot panel for tables, significantly enhancing user interaction and data manipulation capabilities.",
      "Collaborated closely with product managers, designers, and backend developers to ensure seamless integration and high-performance application delivery.",
      "Collaborated on building tailored products for client demos and onboarding processes.",
      "Contributed to the creation of an application that dynamically generates new apps from JSON inputs, reducing manual effort by 70%.",
      "Developed and delivered 18 high-impact demos under tight deadlines, effectively showcasing the application’s capabilities and value to prospective clients.",
    ],
  },
  {
    company: "Impact Analytics",
    jobTitle: "Software Engineer Trainee",
    period: "Nov 2022 – 07/2023 (originally 02/2023)",
    imageSrc: impactAnalyticsLogo,
    description: [
      "Engineered modular, reusable React components using MUI and ag-Grid to expand functionality and improve maintainability.",
      "Translated UI/UX designs into responsive, accessible interfaces that work across devices and browsers.",
      "Improved performance for complex data tables through virtualization, memoization, and careful rendering strategies to reduce UI lag on large datasets.",
    ],
  },
  {
    company: "SwitchLabs",
    jobTitle: "Software Engineer Intern",
    period: "Aug 2022 – Oct 2022",
    imageSrc: switchLabsLogo,
    description: [
      "Refactored and structured existing codebase to enhance maintainability and scalability.",
      "Built an analytics system to monitor website traffic, improving visibility into user behavior.",
      "Redesigned and rebuilt the company website, modernizing the overall user experience.",
    ],
  },
  {
    company: "ACE- Association for Computer Enthusiasts",
    jobTitle: "Web Dev Mentor",
    period: "December 15th 2022 – Present",
    imageSrc: aceLogo,
    description: [
      "Mentored team members in frontend fundamentals, Git workflows, and responsive design principles.",
      "Conducted hands-on sessions on component-based UI, accessibility best practices, and deployment workflows.",
    ],
  },
  {
    company: "ACE- Association for Computer Enthusiasts",
    jobTitle: "Web development team core member",
    period: "February 15th 2021 – December 14th 2022",
    imageSrc: aceLogo,
    description: [
      "Built the official live website for the Association of Computer Enthusiasts (ACE) as part of a 4-member team.",
      "Implemented site architecture and a responsive UI for About, Projects, Members, and History sections.",
      "Worked on group projects within the society, collaborating on design, development, and deployment tasks.",
    ],
  },
]; 