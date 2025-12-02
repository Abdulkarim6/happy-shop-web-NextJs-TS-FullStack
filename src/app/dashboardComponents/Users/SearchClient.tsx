"use client";

import { UserType } from "@/app/utils/interfaces";
import { useEffect, useState } from "react";

export default function SearchClient({ users }: { users: UserType[] }) {
  const [query, setQuery] = useState("");

  const filtered = users.filter((u) =>
    (u.name + u.email).toLowerCase().includes(query.toLowerCase())
  ).splice(0,5);

  // tbody override
  useEffect(() => {
    const tbody = document.getElementById("users-body");
    if (!tbody) return;

    tbody.innerHTML = filtered
      .map(
        (u) => `
        <tr class="border-b">
          <td class="p-2">${u.name}</td>
          <td class="p-2">${u.email}</td>
          <td class="p-2">
            <button class="bg-blue-500 text-white px-3 py-1 rounded">Update</button>
          </td>
          <td class="p-2">
            <button class="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
          </td>
        </tr>
      `
      )
      .join("");
  }, [filtered]);

  return (
    <input
      placeholder="Search by name or email..."
      className="border p-2 rounded w-full max-w-sm"
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
