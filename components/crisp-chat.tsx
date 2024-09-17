"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("031e9c52-0d8e-4c54-82c9-87a23b3ef55b");
  }, []);

  return null;
};