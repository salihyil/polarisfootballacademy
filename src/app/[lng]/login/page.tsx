"use client";

import Button from "@/components/Button";
import { useAppContext } from "@/context";
import { useNavigation } from "@/hooks/useNavigation";

import { isValidEmail } from "@/lib/utils";
import { useState } from "react";

export default function Login() {
  const { router } = useNavigation();
  const { supabase, setUser } = useAppContext();
  const [data, setData] = useState<{ email: string; password: string }>({
    email: "test@test.com",
    password: "123456",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const login = async () => {
    const { email, password } = data;
    if (email.length < 4 || password.length < 4)
      return alert(
        "Please enter a valid email address & password length must be at least 4 characters."
      );
    if (!isValidEmail(email)) return alert("Please enter a valid email address");
    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) return setError("Sorry impossible to login.");

      if (data) {
        const { user } = data;
        const { access_token, refresh_token } = data.session;
        await supabase.auth.setSession({
          access_token,
          refresh_token,
        });
        setUser(user);
        router.refresh();
      }
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  console.log("Login");

  return (
    <div className="flex justify-center items-center bg-gray-100 h-screen w-full py-8">
      <div className="bg-white rounded-lg shadow-sm border w-[300px] mx-auto px-6 py-4 grid gap-4">
        <div className="grid">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" name="email" value={data?.email} onChange={handleChange} />
        </div>
        <div className="grid">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={data?.password}
            onChange={handleChange}
          />
        </div>
        {error && <div className="notification error">{error}</div>}
        <div>
          <Button loading={loading} label="Login" onClick={login} />
        </div>
      </div>
    </div>
  );
}