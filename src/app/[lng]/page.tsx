import { LanguageType } from "@/types";
import Link from "next/link";
import { useTranslation } from "../i18n";
import { Footer } from "./components/Footer";

export default async function Language({ params: { lng } }: Readonly<LanguageType>) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}/second-page`}>{t("to-second-page")}</Link>
      <br />
      <Link href={`/${lng}/client-page`}>{t("to-client-page")}</Link>
      <Footer lng={lng} />
    </>
  );
}
