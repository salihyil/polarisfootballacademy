import { LanguageType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import bgImage from "../../../public/assets/images/bg-image.jpg";

export default async function Language({ params: { lng } }: Readonly<LanguageType>) {
  /* const { t } = await useTranslation(lng); */
  return (
    <main>
      <div className="flex justify-center items-center bg-black">
        <Image src={bgImage} alt="logo" sizes="100vw" priority quality={100} />
      </div>

      <div className="container  mx-auto  mt-14 px-32  pb-12  ">
        <div className="body">
          <p className="mt-2">Dear Parents,</p>
          <p className="mt-2">
            GDS is strengthening our requirements for class due to the pandemic of COVID-19. We will
            need everyone to cooperate, and, together, let’s create a safe and healthy environment
            for everyone!
          </p>

          <ol className="list-decimal list-inside [&>li]:mt-2 ">
            <li>
              Do not attend class if you or your child are sick. (For example: Have a cold, a cough,
              runny nose , fever, etc.)
            </li>
            <li>
              If you or any of your family members have recently traveled abroad, please implement
              the 14-day quarantine and do not attend class for the safety of others.
            </li>
            <li>
              GDS will check temperatures and provide alcohol sanitization upon students & parents
              arrival. GDS will also open windows at all venues for ventilation.
            </li>
            <li>
              It is not required to wear masks in class. However, if parents have doubts, children
              can still wear it.
            </li>
            <li>Wash your hands frequently</li>
          </ol>
          <p className="mt-2 mb-7">
            We encourage parents to keep their children exercising! Let’s fight this pandemic by
            keeping our kids active and stronger by strengthening their immune system.
          </p>

          <Link href={`/${lng}/registration`}>
            <div className="hover:bg-[#CC9966] bg-[#E8E8E8] transition text-center uppercase py-12 text-3xl font-semibold  font-oswald">
              REGISTER NOW
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
