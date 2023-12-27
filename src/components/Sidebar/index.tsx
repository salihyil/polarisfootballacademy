"use client";

import { useAppContext } from "@/context/AppWrapper";
import { useNavigation } from "@/hooks/useNavigation";
import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "hamburger-react";
import { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { Home } from "../Icons/Home";
import SidebarMenu from "./Menu";
import UserItem from "./UserItem";
export interface MenuItem {
  icon: any;
  path: string;
  title: string;
  signOut?: boolean;
}

export const menu: MenuItem[] = [
  {
    icon: <Home />,
    path: "/admin",
    title: "Dashboard",
  },
  {
    icon: <Home />,
    path: `admin/upload-image`,
    title: "Upload Image",
  },
  {
    icon: <Home />,
    path: `admin/yoklama`,
    title: "Yoklama",
  },
  {
    icon: <Home />,
    path: `/`,
    title: "Çıkış Yap",
    signOut: true,
  },
];

export default function Sidebar({ children }: Readonly<{ children: React.ReactNode }>) {
  const { user } = useAppContext();
  const { pathname } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setIsOpen(false));

  useEffect(() => {
    console.log("user:::", user);
  }, [user]);

  return (
    <>
      <div className="  lg:flex flex-col min-h-screen py-6 px-6 overflow-hidden w-[360px] border-r max-lg:border-none">
        <div ref={ref} className="lg:hidden ">
          <Hamburger toggled={isOpen} size={30} toggle={setIsOpen} />
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="z-[1] fixed w-2/3 h-screen left-0 shadow-4xl top-0  p-8  bg-[#E8E8E8] border-b border-b-white/20">
                <div className="mb-4">
                  <UserItem />
                </div>
                <div className="w-full grow">
                  <SidebarMenu menu={menu} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className=" max-lg:hidden">
          <div className="mb-4">
            <UserItem />
          </div>
          <div className="w-full grow">
            <SidebarMenu menu={menu} />
          </div>
        </div>
      </div>

      {children}
    </>
  );
}
