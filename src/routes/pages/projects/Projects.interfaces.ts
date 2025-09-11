export interface ProjectData {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ProjectsProps {
  projects?: ProjectData[];
}

export interface ProjectItemProps {
  project: ProjectData;
  index: number;
}