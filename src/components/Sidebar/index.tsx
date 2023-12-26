"use client";

import UploadImage from "@/components/UploadImage";
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
    path: "/",
    title: "Dashboard",
  },
  {
    icon: <Home />,
    path: `/upload-image`,
    title: "Upload Image",
    signOut: true,
  },
  {
    icon: <Home />,
    path: `/yoklama`,
    title: "Yoklama",
    signOut: true,
  },
  {
    icon: <Home />,
    path: `/`,
    title: "Çıkış Yap",
    signOut: true,
  },
];

export default function Sidebar() {
  return (
    <>
      <div className="flex flex-col min-h-screen py-6 px-6 overflow-hidden w-[360px] border-r">
        <div className="mb-4">
          <UserItem />
        </div>
        <div className="w-full grow">
          <SidebarMenu menu={menu} />
        </div>
      </div>
      <UploadImage />
    </>
  );
}
