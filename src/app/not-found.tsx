"use client";

import { supabase } from "@/lib/supabase";
import { User } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const router = useRouter();
  const pathname = usePathname();
  const [countdown, setCountdown] = useState(3);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const { data }: any = await supabase.auth.getSession();

        if (data) {
          setUser(data.session.user);
        }
      } catch (e) {
        // Handle error
        console.log(e);
      }
    };

    fetchCurrentUser();
  }, []);

  useEffect(() => {
    const redirectTimer = setInterval(() => {
      if (countdown > 0) {
        setCountdown((prevCountdown) => prevCountdown - 1);
      } else {
        if (user && pathname.includes("/")) {
          router.push("/admin");
        } else {
          router.push("/"); // Redirect to the desired page
        }
      }
    }, 1000); // Update every 1 second

    return () => clearInterval(redirectTimer);
  }, [countdown, pathname, router, user]);

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-black text-white">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>You will be directed to the home page within {countdown} seconds...</p>
    </div>
  );
}
