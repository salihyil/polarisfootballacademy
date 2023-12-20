export type LanguageType = { params: { lng: string } };

export type MenuItem = {
  title: string;
  href: string;
  dropdown: boolean;
  subMenu?: {
    title: string;
    href: string;
  }[];
};
