"use client";

import { MenuItem } from "@/components/Sidebar";
import { useNavigation } from "@/hooks/useNavigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function SidebarMenu({
  menu = [],
}: Readonly<{
  menu: MenuItem[];
}>) {
  const { pathname, router } = useNavigation();

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    router.push("/");
    //reflesh page
    window.location.reload();

    if (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="grid w-full gap-2">
      {menu.map((item: MenuItem, index: number) => (
        <Link
          onClick={item.signOut ? logout : () => {}}
          key={index}
          href={item.signOut ? "/" : `/admin${item.path}`}
          className={`flex items-center justify-start px-3 py-1 rounded-lg gap-2 hover:bg-gray-100 ${
            pathname === item.path ? "bg-gray-100" : ""
          } transition w-full`}>
          {item.icon}
          {item.title}
        </Link>
      ))}
    </div>
  );
}
