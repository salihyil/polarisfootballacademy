"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const redirectTimer = setInterval(() => {
      if (countdown > 0) {
        setCountdown((prevCountdown) => prevCountdown - 1);
      } else {
        router.push("/"); // Redirect to the desired page
      }
    }, 1000); // Update every 1 second

    return () => clearInterval(redirectTimer);
  }, [router, countdown]);

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-black text-white">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>You will be directed to the home page within {countdown} seconds...</p>
    </div>
  );
}
