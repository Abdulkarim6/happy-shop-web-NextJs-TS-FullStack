"use client";
import useSWR, { mutate } from "swr";
import { useSession } from "next-auth/react";
import type { OrderedDataype } from "@/app/utils/interfaces";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const CART_KEY = `${baseUrl}/api/loadMyOrders`;

const fetcher = async (url: string) => {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load cart");
  const d = await res.json();
  return Array.isArray(d) ? d : d?.data || [];
};

export function useCart() {
  const { status } = useSession();
  const authed = status === "authenticated";
  const { data, isLoading } = useSWR<OrderedDataype[]>(authed ? CART_KEY : null, fetcher);
  return { orders: authed && data ? data : [], isLoading };
}

export const refreshCart = () => mutate(CART_KEY);