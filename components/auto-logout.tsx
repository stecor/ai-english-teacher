"use client";

import { useEffect } from "react";
import { useClerk } from "@clerk/nextjs";

export default function AutoLogout() {
  const { signOut } = useClerk();

  useEffect(() => {
    const handleUnload = () => {
      signOut();
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [signOut]);

  return null;
}