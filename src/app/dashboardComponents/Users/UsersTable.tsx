'use client';
import { deleteUser } from "@/app/actions/deleteUser";
import { useUsersContext } from "@/app/contexts/usersPageContext/useUsersContext";
import { UserType } from "@/app/utils/interfaces";
import Swal from "sweetalert2";

export default function UsersTable({ users }: { users: UserType[] }) {
  const { query } = useUsersContext();

  const filtered = users
    .filter((u) =>
      (u.name + u.email).toLowerCase().includes(query.toLowerCase())
    );

    const handleDelete = async(userId:string) => {
    Swal.fire({
      title: "Are you sure?", text: "You won't be able to revert this!", icon: "warning",
      showCancelButton: true, confirmButtonColor: "#3085d6", cancelButtonColor: "#d33", confirmButtonText: "Yes, delete it!",
      showLoaderOnConfirm:true,
      preConfirm: async () => {
      try {
      const response = await deleteUser(userId);
      return response;
      } catch (error) {
        return {
          message : "Failed to deleted!"
        }
     }},
    }).then((result) => {
      if (result.value?.acknowledged) {
        Swal.fire(result.value.message, "", "success");
      }
    });
    };

  return (
    <tbody>
      {filtered?.map((u, i) => (
        <tr className="border-b" key={i}>
          <td className="p-2">{u.name}</td>
          <td className="p-2">{u.email}</td>
          <td className="p-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded">
              Update
            </button>
          </td>
          <td onClick={() => handleDelete(u?._id)} className="p-2">
            <button className="bg-red-500 text-white px-3 py-1 rounded">
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
