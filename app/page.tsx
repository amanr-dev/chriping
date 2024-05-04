"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const page = () => {
  const session = useSession();
  useEffect(() => {
    if (!session.data) {
      console.log("No Session");
    } else {
      console.log(session);
    }
  }, []);

  return "Suxxy Baka";
};

export default page;
