import { getProjectImagePath } from "../helpers";
import { Project, ProjectType } from "../interfaces";

export const PROJECTS: Project[] = [
  {
    title: "Panoyabak",
    description: "A digital board mobile & web app with events.",
    developed: ["Mobile App", "Web App", "Backend"],
    image: getProjectImagePath("panoyabak.png"),
    types: [ProjectType.Freelance],
  },
  {
    title: "News UI",
    description: "News web app with Next.js, TypeScript and Chakra UI.",
    developed: ["Website"],
    image: getProjectImagePath("news.png"),
    links: {
      repo: "https://github.com/metehankurucu/news-ui",
      web: "https://news-ui-chi.vercel.app/",
    },
    types: [ProjectType.Hobby, ProjectType.OpenSource],
  },
  {
    title: "Firebase Chat",
    description: "A small package for one-to-one messaging with Firebase.",
    links: {
      npm: "https://www.npmjs.com/package/@metehankurucu/firebase-chat",
      repo: "https://github.com/metehankurucu/firebase-chat",
    },
    types: [ProjectType.OpenSource, ProjectType.Packages],
  },
  {
    title: "Dovizmix",
    description:
      "A financial mobile app that includes currency, stock market, gold, crypto currency, news and various calculators.",
    developed: ["Mobile App"],
    image: getProjectImagePath("dovizmix.png"),
    types: [ProjectType.Freelance],
  },
  {
    title: "Video Calling App",
    description:
      "Video calling app sample with React Native using react-native-webrtc, react-native-peerjs and socket.io for signaling.",
    links: {
      repo: "https://github.com/metehankurucu/react-native-video-calling-app",
    },
    technologies: ["React Native", "React.js", "Node.js"],
    types: [ProjectType.OpenSource, ProjectType.Hobby],
  },
  {
    title: "RaffleApp",
    description:
      "A mobile app that offers scattered raffles on social media on a single platform.",
    developed: ["Mobile App", "Landing Page", "Backend", "Admin Panel"],
    image: getProjectImagePath("raffleapp.png"),
    types: [ProjectType.Personal, ProjectType.Freelance],
  },
  {
    title: "Oral-B Pro Event",
    description:
      "The online event website prepared for the Azerbaijan Oral-B Pro Zirvəsi.",
    developed: ["Website"],
    image: getProjectImagePath("oralb.png"),
    types: [ProjectType.Freelance],
  },
  {
    title: "Student Coaching",
    description:
      "A web application for students preparing for the university exam. Students can view the exam result graphics, record the lessons they are studying, and track books and subjects of lessons.",
    developed: ["Website", "Backend"],
    image: getProjectImagePath("studentcoaching.png"),
    types: [ProjectType.Freelance],
  },
  {
    title: "Taboo Game",
    description: "The mobile app of the word guessing game Taboo.",
    developed: ["Mobile App"],
    image: getProjectImagePath("taboo.png"),
    types: [ProjectType.Hobby, ProjectType.Personal],
  },

  {
    title: "heroku-set-env",
    description:
      "One-command CLI tool to set all config vars from .env in Heroku project.",
    links: {
      npm: "https://www.npmjs.com/package/heroku-set-env",
      repo: "https://github.com/metehankurucu/heroku-set-env",
    },
    types: [ProjectType.OpenSource, ProjectType.Packages],
  },
  {
    title: "rn-use-input-focus",
    description:
      "A React Native hook that makes it easier to use focus in inputs.",
    links: {
      npm: "https://www.npmjs.com/package/rn-use-input-focus",
      repo: "https://github.com/metehankurucu/rn-use-input-focus",
    },
    types: [ProjectType.OpenSource, ProjectType.Packages],
  },
  {
    title: "react-native-upgrade-helper",
    description:
      "An experimental CLI tool that makes it easier to upgrade React Native apps.",
    links: {
      repo: "https://github.com/metehankurucu/react-native-upgrade-helper",
    },
    types: [ProjectType.OpenSource],
  },
  {
    title: "react-native-light-placeholder",
    description:
      "Lightweight and customizable placeholder component for React Native.",
    links: {
      npm: "https://www.npmjs.com/package/react-native-light-placeholder",
      repo: "https://github.com/metehankurucu/react-native-light-placeholder",
    },
    types: [ProjectType.OpenSource, ProjectType.Packages],
  },
  {
    title: "Meeth",
    description:
      "A mobile app that allows people to meet people close to each other by solving questions.",
    developed: ["Mobile App", "Backend", "Web App", "Admin Panel"],
    image: getProjectImagePath("meeth.png"),
    types: [ProjectType.Personal],
  },
  {
    title: "Shift App",
    description:
      "A mobile app to make it easier for employees and managers to prepare their weekly schedule.",
    developed: ["Mobile App", "Backend"],
    types: [ProjectType.Hobby],
  },
  {
    title: "Filexist",
    description:
      "A web app that allows people to easily share files with small or large groups fast.",
    developed: ["Web App"],
    links: {
      repo: "https://github.com/metehankurucu/filexist",
    },
    image: getProjectImagePath("filexist.png"),
    types: [ProjectType.Hobby, ProjectType.OpenSource],
  },
];
