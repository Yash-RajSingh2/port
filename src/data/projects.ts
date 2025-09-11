import type { ProjectData } from '@/routes/pages/projects/Projects.interfaces';
import Ensemble from "@assets/ensemble.webp";
import OverWatch from "@assets/overwatch.webp";
import ACEWebsite from "@assets/ace-website.webp";
import InternSahara from "@assets/internsahara.webp";

export const projects: ProjectData[] = [
  {
    id: "1",
    title: "Ensemble",
    description:
      "A web platform designed for seamless collaboration and group projects. It enables teams to organize tasks, manage progress, and work together efficiently, providing a structured space for project management and tracking.",
    imageSrc: Ensemble,
    technologies: [
      "React.js",
      "Firebase",
      "Styled Components",
      "Python",
      "Flask",
      "PostgreSQL",
    ],
    liveUrl: "https://en-semble.netlify.app/",
    githubUrl: "https://github.com/example/ecommerce",
  },
  {
    id: "2",
    title: "OverWatch",
    description:
      "A map-based website that highlights dangerous locations based on real user experiences. It allows users to mark danger zones on the map and share their personal stories, creating a community-driven resource to help others stay alert and safe.",
    imageSrc: OverWatch,
    technologies: [
      "React.js",
      "Redux",
      "Styled Components",
      "ReactLeaflet.js",
      "Python",
      "Flask",
      "PostgreSQL",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://over-watch.netlify.app/",
  },
  {
    id: "3",
    title: "ACE Website",
    description:
      "The official website for the technical society of V.I.P.S., built as a group project. It served as the live platform showcasing the society’s identity, activities, projects, members, and history, providing a complete hub of information for students and visitors.",
    imageSrc: ACEWebsite,
    technologies: ["React.js", "Styled Components", "Gatsby.js", "GraphQL"],
    liveUrl: "https://vipsace.org/",
    githubUrl: "https://github.com/example/weather-dashboard",
  },
  {
    id: "4",
    title: "InternSahara",
    description:
      "A website that aggregates internship openings by scraping data from Internshala. It features filters for different streams, allowing users to easily browse and find opportunities relevant to their field.",
    imageSrc: InternSahara,
    technologies: ["React.js", "Styled Components", "Framer motion"],
    liveUrl: "https://internsahara.netlify.app/",
    githubUrl: "https://github.com/example/social-analytics",
  },
]; 