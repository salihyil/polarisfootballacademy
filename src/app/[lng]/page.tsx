import { LanguageType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import bgImage from "../../../public/assets/images/bg-image.jpg";
import { useTranslation } from "../i18n";

export default async function Language({ params: { lng } }: Readonly<LanguageType>) {
  const { t } = await useTranslation(lng, "home-page");
  return (
    <main>
      <div className="flex justify-center items-center bg-black">
        <Image src={bgImage} alt="logo" sizes="100vw" priority quality={100} />
      </div>

      <div className="container  mx-auto  mt-14 px-32  pb-12 max-lg:text-red-100 ">
        <div className="body">
          <p className="mt-2">{t("dear-parents")}</p>
          <p className="mt-2">{t("information-for-parents")}</p>

          <ol className="list-decimal list-inside [&>li]:mt-2 ">
            <li>{t("info-1")}</li>
            <li>{t("info-2")}</li>
            <li>{t("info-3")}</li>
            <li>{t("info-4")}</li>
            <li>{t("info-5")}</li>
          </ol>
          <p className="mt-2 mb-7">{t("info-6")}</p>

          <Link href={`/${lng}/registration`}>
            <div className="hover:bg-[#CC9966] bg-[#E8E8E8] transition text-center uppercase py-12 text-3xl font-semibold  font-oswald">
              {t("register-now")}
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
