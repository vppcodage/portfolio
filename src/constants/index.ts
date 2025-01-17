import { RxInstagramLogo } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Whatsapp",
    icon: FaWhatsapp,
    link: "https://whatsapp.com",
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "/about-me",
  },
  {
    title: "Experiance",
    link: "/experiance",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Contact",
    link: "/contact",
  }
] as const;
