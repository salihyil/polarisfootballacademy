"use client";

import { FooterBase } from "./FooterBase";
import { useTranslation } from "../../../i18n/client";
import { LanguageType } from "@/types";

export const Footer = ({ lng, path }: { lng: string; path: string | undefined }) => {
  const { i18n } = useTranslation(lng, "footer");
  return <FooterBase i18n={i18n} lng={lng} path={path} />;
};
