export interface MenuItem {
  path: string;
  label: string;
  description: string;
}

export const menuItems: MenuItem[] = [
  {
    path: "/",
    label: "Home",
    description: "Navigate to the main page",
  },
  {
    path: "/projects",
    label: "Projects",
    description: "View my work and projects",
  },
  {
    path: "/awards",
    label: "Awards",
    description: "Explore my accomplishments and awards",
  },
  {
    path: "/about",
    label: "About",
    description: "Learn more about me outside of work",
  },
]; 