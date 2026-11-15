"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";

const DashboardList = () => {
  const { data: session, status } = useSession();
  console.log(session);
  

//   if (status === "loading") return <p>লোড হচ্ছে...</p>;
  if (status === "loading" || status === "unauthenticated") return null;

  return <Link className="bg-white px-2 py-1.5 rounded" href="/dashboard">Dashboard</Link>;
};

export default DashboardList;