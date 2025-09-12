export interface WorkExperience {
  imageSrc: string;
  jobTitle: string;
  company: string;
  period: string;
  description: string[];
}

export interface WorkProps {
  experiences: WorkExperience[];
}
