import { LanguageType } from "@/types";
import { useTranslation } from "../../i18n";

export default async function Head({ params: { lng } }: Readonly<LanguageType>) {
  const { t } = await useTranslation(lng, "client-page");

  return (
    <>
      <title>{t("title")}</title>
      <meta
        name="description"
        content="A playground to explore new Next.js 13 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching."
      />
    </>
  );
}
