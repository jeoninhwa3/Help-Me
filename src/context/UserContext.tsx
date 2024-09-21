"use client";

import { createClient } from "@/utils/supabase/client";
import { createContext, useContext, useEffect, useState } from "react";

type UserType = {
  id: string;
  email: string;
  nickname: string;
} | null;

type UserContextType = {
  user: UserType | null;
  profileUrl?: string;
};

const UserContext = createContext<UserContextType | null>(null);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const supabase = createClient();
  const [user, setUser] = useState<UserType>(null);
  const [profileUrl, setProfileUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data?.user;
      if (user) {
        setUser({
          id: user.id,
          email: user.email || "",
          nickname: user.user_metadata.nickname,
        });

        const { data: profileUrl } = await supabase
          .from("users")
          .select("profile_url")
          .eq("user_id", user.id)
          .single();

        if (profileUrl) {
          setProfileUrl(profileUrl.profile_url);
        }
      } else {
        setUser(null);
        setProfileUrl(undefined);
      }
    };

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser({
          id: session?.user.id,
          email: session?.user.email || "",
          nickname: session?.user.user_metadata.nickname || "",
        });
      } else {
        setUser(null);
        setProfileUrl(undefined);
      }
    });

    return () => {
      if (subscription && typeof subscription.unsubscribe === "function") {
        subscription.unsubscribe();
      }
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, profileUrl }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => useContext(UserContext);
