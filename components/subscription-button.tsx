"use client";

import axios from "axios";
import { useState } from "react";
import { Zap } from "lucide-react";
import { toast } from "react-hot-toast";

import { Button } from "@/components/ui/button";

export const SubscriptionButton = ({
  isPro = false
}: {
  isPro: boolean;
}) => {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);

      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button variant={isPro ? "default" : "premium"} disabled={loading} onClick={onClick} className="mt-4 h-10 w-full rounded-xl bg-violet-600 text-sm font-semibold transition hover:bg-violet-500 hover:bg-violet-600 cursor-pointer " >
      {isPro ? "Manage Subscription" : "Upgrade Now"}
      {!isPro }
    </Button>
  )
};