export interface ProjectLinks {
  googlePlay?: string;
  appStore?: string;
  repo?: string;
  web?: string;
  npm?: string;
}

export enum ProjectType {
  Freelance = "Freelance",
  Hobby = "Hobby",
  Personal = "Personal",
  Packages = "Packages",
  OpenSource = "Open Source",
}

export interface Project {
  title: string;
  description: string;
  types: ProjectType[];
  developed?: string[];
  technologies?: string[];
  date?: string;
  links?: ProjectLinks;
  company?: string;
  image?: string;
}
