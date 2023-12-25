"use client";

import { useTranslation } from "@/app/i18n/client";
import { MenuItem, SubMenuItem } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import MaterialSymbolsArrowRightAlt from "../../../public/assets/icons/MaterialSymbolsArrowRightAlt";
import Button from "../Button";
import { navMenu } from "../Header/constant";

export const NavMobile = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, "header");
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  useClickAway(ref, () => setIsOpen(false));

  return (
    <div ref={ref} className="lg:hidden ">
      <Hamburger toggled={isOpen} size={30} toggle={setIsOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed w-2/3 h-screen left-0 shadow-4xl top-0  p-8  bg-[#E8E8E8] border-b border-b-white/20">
            <div className="font-bold text-black hover:text-[#CC9966]  uppercase font-oswald mb-4 ">
              Menu
            </div>
            <ul className=" grid items-center gap-5">
              {navMenu.map((item: MenuItem, index: number) => {
                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + index / 10,
                    }}
                    key={item.title}
                    className={`group relative tracking-wide transition  text-[#4A4A4A] font-oswald font-bold hover:text-[#CC9966] uppercase`}>
                    <div className="flex items-center">
                      {item.dropdown ? (
                        <div>{t(item.title)}</div>
                      ) : (
                        <Link href={`/${lng}/${item.href}`}>{t(item.title)}</Link>
                      )}

                      {item.dropdown && (
                        <div className="ml-2">
                          <MaterialSymbolsArrowRightAlt className=" text-xl" />
                        </div>
                      )}
                    </div>
                    {item.dropdown && (
                      <div className={`group-hover:block z-[999] relative hidden h-auto  `}>
                        <ul className="relative bg-slate-400 shadow px-2 py-3    ">
                          {item?.subMenu &&
                            item.subMenu.map((subItem: SubMenuItem, index: number) => {
                              return (
                                <li key={index} className="py-1">
                                  <Link
                                    href={subItem.href}
                                    className="relative w-full top-0 left-8 text-black font-bold text-base uppercase duration-300 transition hover:text-[#CC9966] hover:border-b-gray-500 hover:border-b-2  cursor-pointer">
                                    {t(subItem.title)}
                                  </Link>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
