"use client";

import { useTranslation } from "@/app/i18n/client";
import { useAppContext } from "@/context/AppWrapper";
import { MenuItem, SubMenuItem } from "@/types";
import { Oswald } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import IonLogoYoutube from "../../../public/assets/icons/IonLogoYoutube";
import IonSocialFacebook from "../../../public/assets/icons/IonSocialFacebook";
import IonSocialInstagramOutline from "../../../public/assets/icons/IonSocialInstagramOutline";
import logoT from "../../../public/assets/images/logo_transparent.png";
import { NavMobile } from "../NavMobile";
import { navMenu } from "./constant";

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const Header = () => {
  const { lng } = useAppContext();
  const { t } = useTranslation(lng, "header");
  const [visibleSocial, setVisibleSocial] = useState(true);
  const [visibleNav, setVisibleNav] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollingUp = prevScrollPos > currentScrollPos;
      const scrollingDown = prevScrollPos < currentScrollPos;

      // Scroll yukarı yapılıyorsa veya sayfanın en üstündeyse visibleSocial'ı görünür yap.
      setVisibleSocial(scrollingUp || currentScrollPos === 0);

      // visibleNav ilk başta bg-transparant olmalı.
      if (currentScrollPos === 0) {
        setVisibleNav(false);
      } else if (scrollingDown) {
        // Scroll aşağı yapılıyorsa  görünür yap
        setVisibleNav(true);
      }

      // Güncellenen scroll pozisyonunu sakla.
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    // Component unmount olduğunda event listener'ı temizle.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setVisibleNav, setVisibleSocial]);

  const headerNavStyle = [visibleNav ? "bg-white py-4" : "lg:bg-transparent"];
  const headerSocialStyle = [visibleSocial ? "translate-y-0" : " lg:translate-y-[-50px]"];

  return (
    <header
      className={`relative lg:fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerSocialStyle} `}>
      <div className={`hidden lg:block lg:bg-black lg:w-full lg:min-h-full   `}>
        <div className="container mx-auto  flex justify-end items-center  min-w-[320px] w-auto min-h-full  max-w-[1260px] px-4 py-2 ">
          <div className="text-white flex items-center gap-1 ">
            <div className="text-xs">Follow us on:</div>
            <Link href={"https://www.facebook.com/PolarisFootballAcademy"}>
              <IonSocialFacebook className="border-2 p-1 rounded-full transition hover:border-blue-500 hover:text-blue-500 " />
            </Link>
            <Link href={"https://www.instagram.com/polarisfootballacademy"}>
              <IonSocialInstagramOutline className="border-2 p-1 rounded-full transition hover:border-[#f40c5a]  hover:text-[#f40c5a]" />
            </Link>
            <Link href={"https://www.youtube.com/@PolarisFootballAcademyTaiwan"}>
              <IonLogoYoutube className="border-2 p-1 rounded-full transition hover:border-red-600 hover:text-red-600 " />
            </Link>
          </div>
        </div>
      </div>
      <div className={`w-full shadow-lg mdl1:px-[30px] max-lg:bg-white ${headerNavStyle}`}>
        <div className="container mx-auto w-full flex lg:justify-around items-center ">
          <NavMobile lng={lng} />
          <div>
            <Link href={`/${lng}`}>
              <Image
                className="transition-all duration-500 "
                src={logoT}
                width={`${visibleNav ? 75 : 100}`}
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
                alt="logo"
              />
            </Link>
          </div>
          <nav className="nav-wrapper">
            <ul className="hidden lg:flex items-center gap-2 mdl1:gap-5 text-[15px]">
              {navMenu.map((item: MenuItem) => {
                return (
                  <li
                    key={item.title}
                    className={`group relative tracking-wide transition  text-black ${oswald.className} font-bold hover:text-[#CC9966] uppercase`}>
                    <Link href={`/${lng}/${item.href}`}>{t(item.title)}</Link>
                    {item.dropdown && (
                      <div className={`group-hover:block absolute hidden h-auto `}>
                        <ul className="top-0 w-48 bg-white shadow  ">
                          {item?.subMenu &&
                            item.subMenu.map((subItem: SubMenuItem, index: number) => {
                              return (
                                <li
                                  key={index}
                                  className="p-4 border-b border-b-[#E8E8E8] border-opacity-50 hover:border-b-black hover:border-opacity-100 last:border-0">
                                  <Link
                                    href={subItem.href}
                                    className={`block text-black text-xs font-bold ${oswald.className} uppercase duration-300 transition hover:text-[#CC9966] cursor-pointer`}>
                                    {t(subItem.title)}
                                  </Link>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
