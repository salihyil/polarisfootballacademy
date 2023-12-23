"use client";

import Login from "@/app/[lng]/login/page";
import { useNavigation } from "@/hooks/useNavigation";
import PublicComponent from "../PublicComponent";

const Pathname = ({ child, lang }: { child: React.ReactNode; lang: string }) => {
  const { pathname } = useNavigation();

  return (
    <>
      {pathname.includes(`${lang}/login`) ? (
        <Login />
      ) : (
        <PublicComponent lang={lang} child={child} />
      )}
    </>
  );
};

export default Pathname;
