"use client";

import { useUser } from "@/context/UserContext";
import { useEffect } from "react";

const MyDietPage = () => {
  const { user } = useUser() || {};
  useEffect(() => {
    console.log(user);
  }, []);
  return <div>MyDietPage</div>;
};

export default MyDietPage;
