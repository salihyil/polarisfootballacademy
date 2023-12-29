"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useNavigation } from "@/hooks/useNavigation";
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
  const [images, setImages] = useState<any>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { pathname, router } = useNavigation();

  const getImages = async () => {
    try {
      const { data, error } = await supabase.storage.from("images").list();

      if (data !== null) {
        setImages(data);
      } else {
        console.log("Error:", error);
      }
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    if (user && pathname.includes("/")) {
      router.push("/admin");
    }

    if (user) {
      getImages();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
        images,
        setImages,
        getImages,
         
      }}>
      <main>
        {user === null ? (
          <>
            <Header />
            <main className="container mx-auto relative max-lg:static">{children}</main>
            <Footer />
          </>
        ) : (
          <div className="flex items-start justify-start w-full relative">
            <Sidebar>{pathname.includes("/admin") && children}</Sidebar>
          </div>
        )}
      </main>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
