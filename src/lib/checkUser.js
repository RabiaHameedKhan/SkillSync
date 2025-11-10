"use client";

import { supabase } from "./supabaseClient";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function useCheckUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function getUser() {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        // not logged in → send to login page
        router.push("/login");
      } else {
        setUser(data.user);
      }
      setLoading(false);
    }

    getUser();
  }, [router]);

  return { user, loading };
}
