export type LanguageType = { params: { lng: string } };

type TranslationKey =
  | "en"
  | "tw"
  | "weekend-program"
  | "teamsnap"
  | "schedule"
  | "camp"
  | "spotlight"
  | "about-us"
  | "our-story"
  | "why-choose-us"
  | "instructors"
  | "cooperative-schools"
  | "our-locations"
  | "franchise-info"
  | "refund-policy"
  | "registration"
  | "news";

export interface SubMenuItem {
  title: TranslationKey; 
  href: string;
}

export type MenuItem = {
  title: TranslationKey; 
  href: string;
  dropdown?: boolean;
  subMenu?: SubMenuItem[];
};
