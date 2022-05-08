import { IoIosArrowDown, IoLogoGithub } from "react-icons/io";
import {
  IoLogoAppleAppstore,
  IoLogoGooglePlaystore,
  IoLogoNpm,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoMailOutline,
} from "react-icons/io5";
import { VscLinkExternal } from "react-icons/vsc";

export const Icons = {
  Github: IoLogoGithub,
  GooglePlay: IoLogoGooglePlaystore,
  AppStore: IoLogoAppleAppstore,
  Npm: IoLogoNpm,
  Instagram: IoLogoInstagram,
  Twitter: IoLogoTwitter,
  Link: VscLinkExternal,
  LinkedIn: IoLogoLinkedin,
  Mail: IoMailOutline,
  ArrowDown: IoIosArrowDown,
};

export const projectLinkIcons = {
  googlePlay: Icons.GooglePlay,
  appStore: Icons.AppStore,
  repo: Icons.Github,
  web: Icons.Link,
  npm: Icons.Npm,
};
