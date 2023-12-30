import { MenuItem } from "@/types";

export const navMenu: MenuItem[] = [
  {
    title: "en",
    href: "",
    dropdown: true,
    subMenu: [
      {
        title: "en",
        href: "/en",
      },
      {
        title: "tw",
        href: "/tw",
      },
    ],
  },
  {
    title: "weekend-program",
    href: "weekend-program",
    dropdown: true,
    subMenu: [
      {
        title: "teamsnap",
        href: "teamsnap",
      },
    ],
  },
  {
    title: "photo-gallery",
    href: "photo-gallery",
    dropdown: false,
  },
  {
    title: "camp",
    href: "camp",
    dropdown: false,
  },
  {
    title: "spotlight",
    href: "spotlight",
    dropdown: false,
  },
  {
    title: "about-us",
    href: "about-us",
    dropdown: true,
    subMenu: [
      {
        title: "our-story",
        href: "our-story",
      },
      {
        title: "why-choose-us",
        href: "why-choose-us",
      },
      {
        title: "instructors",
        href: "instructors",
      },
      {
        title: "cooperative-schools",
        href: "cooperative-schools",
      },
      {
        title: "our-locations",
        href: "our-locations",
      },
      {
        title: "franchise-info",
        href: "franchise-info",
      },
      {
        title: "refund-policy",
        href: "refund-policy",
      },
    ],
  },
  {
    title: "registration",
    href: "registration",
    dropdown: false,
  },
  {
    title: "news",
    href: "news",
    dropdown: false,
  },
];
