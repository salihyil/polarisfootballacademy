import { useTranslation } from "@/app/i18n";
import { LanguageType } from "@/types";
import Link from "next/link";
import { Footer } from "../components/Footer";

export default async function SecondPage({ params: { lng } }: Readonly<LanguageType>) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}`}>{t("back-to-home")}</Link>
      <Footer lng={lng} />
    </>
  );
}
