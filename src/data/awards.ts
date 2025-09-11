import HackJMI from "@assets/hackjmi.webp";
import Hack36 from "@assets/hack36.webp";
import HackOverflow from "@assets/hackoverflow.webp";
import ElytraHacks from "@assets/elytrahack.webp";
import SpotAward from "@assets/spot.webp";
import Cloud from "@assets/cloudFacilitator.webp";
import Hacktoberfest from "@assets/hacktoberfest.webp";
export interface Award {
  desc: string;
  name: string;
  image: string;
}

export const awards: Award[] = [
  {
    desc: "Got awarded a spot award for Excellence during Q4,2023",
    name: "Impact Analytics",
    image: SpotAward,
  },
  {
    desc: "Secured 2nd Position at Hack JMI organised on February 16th 2023",
    name: "Hack JMI",
    image: HackJMI,
  },
  {
    desc: "Achieved first milestone of Google Cloud Facilitator Program",
    name: "Google Cloud Facilitator Program",
    image: Cloud,
  },
  {
    desc: "Secured a place among the top 50 teams",
    name: "Hack 36",
    image: Hack36,
  },
  {
    desc: "Secured a place among the top 15 teams",
    name: "HackOverflow",
    image: HackOverflow,
  },
  {
    desc: "Secured a place among the top 10 teams",
    name: "Elytra Hacks",
    image: ElytraHacks,
  },
  {
    desc: "Secured a place among the top 10 teams",
    name: "Hacktoberfest 21 & 22",
    image: Hacktoberfest,
  },
]; 