"use client";

import { useUsersContext } from "@/app/contexts/usersPageContext/useUsersContext";

export default function SearchClient() {
  const { setQuery } = useUsersContext();

  return (
    <input
      placeholder="Search by name or email..."
      className="border p-2 rounded w-full max-w-sm"
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
