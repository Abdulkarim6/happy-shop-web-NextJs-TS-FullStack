"use client";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import type { OrderedDataype } from "@/app/utils/interfaces";

const CART_URL = `/api/loadMyOrders`;

const fetcher = async ([url]: readonly [string, string]) => {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load cart");
  const d = await res.json();
  return Array.isArray(d) ? d : d?.data || [];
};

export function useCart() {
  
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;

  const { data, error, isLoading, mutate } = useSWR<OrderedDataype[]>(
    status === "authenticated" && userEmail ? ([CART_URL, userEmail] as const) : null,
    fetcher
  );

  return {
    orders: status === "authenticated" && userEmail ? data ?? [] : [],
    isLoading: status === "loading" || isLoading,
    error,
    refreshCart: mutate,
  };
}
