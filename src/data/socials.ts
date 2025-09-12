import linkedinIcon from "@assets/linkedin.svg";
import githubIcon from "@assets/github.svg";
import gmailIcon from "@assets/gmail.svg";

export interface SocialData {
  name: string;
  link: string;
  logo: string;
  ariaLabel?: string;
}

export const socials: SocialData[] = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yash-rajsingh",
    logo: linkedinIcon,
  },
  {
    name: "GitHub",
    link: "https://github.com/Yash-RajSingh",
    logo: githubIcon,
  },
  {
    name: "Gmail",
    link: "mailto:yashraj45202@gmail.com",
    logo: gmailIcon,
  },
];
