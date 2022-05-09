import { getIconPath } from "../helpers";
import { ProjectType } from "../interfaces";
import { Icons } from "./icons";

export const repoUrl = "https://github.com/metehankurucu/website-v2";
export const issuesUrl = `${repoUrl}/issues`;
export const emailAddress = "hey@metehan.dev";
export const fullName = "Metehan Kurucu";
export const shortDescription = "Software Developer";
export const siteUrl = "https://metehan.dev";

export const NAVBAR_LINKS = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Projects",
    to: "/projects",
  },
  {
    title: "Contact",
    to: "/contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Icons.Github,
    url: "https://github.com/metehankurucu",
  },
  {
    icon: Icons.LinkedIn,
    url: "https://linkedin.com/in/metehankurucu",
  },
  {
    icon: Icons.Instagram,
    url: "https://instagram.com/metehan.kurucu",
  },
  {
    icon: Icons.Twitter,
    url: "https://twitter.com/metehankurucu",
  },
];

export const techStack = {
  main: [
    {
      name: "React.js",
      svg: getIconPath("react.svg"),
    },
    {
      name: "Node.js",
      svg: getIconPath("nodejs.svg"),
    },
    {
      name: "JavaScript",
      svg: getIconPath("javascript.svg"),
    },
    {
      name: "TypeScript",
      svg: getIconPath("typescript.svg"),
    },
    {
      name: "React Native",
      svg: getIconPath("react-native.svg"),
    },
    {
      name: "Expo",
      svg: getIconPath("expo.svg"),
    },
    {
      name: "Firebase",
      svg: getIconPath("firebase.svg"),
    },
    {
      name: "Next.js",
      svg: getIconPath("nextjs.svg"),
    },
    {
      name: "MongoDB",
      svg: getIconPath("mongodb.svg"),
    },
    {
      name: "HTML",
      svg: getIconPath("html.svg"),
    },
    {
      name: "CSS",
      svg: getIconPath("css.svg"),
    },
  ],
  familiar: [
    {
      name: "Flutter",
      svg: getIconPath("flutter.svg"),
    },
    {
      name: "Python",
      svg: getIconPath("python.svg"),
    },
    {
      name: "Docker",
      svg: getIconPath("docker.svg"),
    },
    {
      name: "Java",
      svg: getIconPath("java.svg"),
    },
    {
      name: "Jest",
      svg: getIconPath("jest.svg"),
    },
    {
      name: "MySQL",
      svg: getIconPath("mysql.svg"),
    },
    {
      name: "Webpack",
      svg: getIconPath("webpack.svg"),
    },
    {
      name: "GraphQL",
      svg: getIconPath("graphql.svg"),
    },
    {
      name: "PHP",
      svg: getIconPath("php.svg"),
    },
  ],
};

export const projectTypes = [
  ProjectType.Freelance,
  ProjectType.Hobby,
  ProjectType.Personal,
  ProjectType.Packages,
  ProjectType.OpenSource,
];
