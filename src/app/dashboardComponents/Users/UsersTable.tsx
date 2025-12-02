// UsersTable.tsx
import { UserType } from "@/app/utils/interfaces";
import SearchClient from "./SearchClient";

export default function UsersTable({ users }: { users: UserType[] }) {
  return (
    <div className="space-y-4">
      <SearchClient users={users} />

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Update</th>
            <th className="border p-2">Delete</th>
          </tr>
        </thead>

        {/* tbody client component থেকে override হবে */}
        <tbody id="users-body">
          <tr>
            <td colSpan={4} className="p-4 text-center text-gray-400">
              Loading...
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
