import { MenuItem } from "@/types";

export const navMenu: MenuItem[] = [
  {
    title: "English",
    href: "",
    dropdown: true,
    subMenu: [
      {
        title: "English",
        href: "en",
      },
      {
        title: "中文",
        href: "tw",
      },
    ],
  },
  {
    title: "Weekend Program",
    href: "weekend-program",
    dropdown: true,
    subMenu: [
      {
        title: "Teamsnap",
        href: "teamsnap",
      },
    ],
  },
  {
    title: "Schedule",
    href: "schedule",
    dropdown: false,
  },
  {
    title: "Camp",
    href: "camp",
    dropdown: false,
  },
  {
    title: "Spotlight",
    href: "spotlight",
    dropdown: false,
  },
  {
    title: "About Us",
    href: "about-us",
    dropdown: true,
    subMenu: [
      {
        title: "Our Story",
        href: "our-story",
      },
      {
        title: "Why Choose Us",
        href: "why-choose-us",
      },
      {
        title: "Instructors",
        href: "instructors",
      },
      {
        title: "Cooperative Schools",
        href: "cooperative-schools",
      },
      {
        title: "Our Locations",
        href: "our-locations",
      },
      {
        title: "Franchise Info",
        href: "franchise-info",
      },
      {
        title: "Refund Policy",
        href: "refund-policy",
      },
    ],
  },
  {
    title: "Registration",
    href: "registration",
    dropdown: false,
  },
  {
    title: "News",
    href: "news",
    dropdown: false,
  },
];
