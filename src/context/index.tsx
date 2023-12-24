"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { supabase } from "@/lib/supabase";
import { User } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({
  children,
  lng,
}: Readonly<{
  children: React.ReactNode;
  lng: string;
}>) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        setLoading(true);

        const { data }: any = await supabase.auth.getSession();

        if (data) {
          setUser(data.session.user);
        }
      } catch (e) {
        // Handle error
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        supabase,
        lng,
      }}>
      <main>
        {user && (
          <div className="flex items-start justify-start w-full relative">
            <Sidebar />
          </div>
        )}
        {!user && (
          <>
            <Header />
            <main className="container mx-auto relative max-lg:static">{children}</main>
            <Footer />
          </>
        )}
      </main>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
