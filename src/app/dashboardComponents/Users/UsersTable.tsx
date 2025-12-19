'use client';
import { deleteUser } from "@/app/actions/deleteUser";
import { makeAdmin } from "@/app/actions/makeAdmin";
import { useUsersContext } from "@/app/contexts/usersPageContext/useUsersContext";
import { UserType } from "@/app/utils/interfaces";
import Swal from "sweetalert2";

export default function UsersTable({ users }: { users: UserType[] }) {
  const { query } = useUsersContext();

  const filteredUsers = users?.filter((u:UserType) =>{
    const name = u.name?.toLowerCase().includes(query?.toLowerCase());
    const email = u.email?.toLowerCase().includes(query?.toLowerCase());

    return name && email;
  });

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

    const handleMakeAdmin = async(userId:string) => {
    Swal.fire({
      title: "Are you sure?", text: "You want to make admin him/her!", icon: "warning",
      showCancelButton: true, confirmButtonColor: "#3085d6", cancelButtonColor: "#d33", confirmButtonText: "Yes!", cancelButtonText:"No!",
      showLoaderOnConfirm:true,
      preConfirm: async () => {
      try {
      const response = await makeAdmin(userId);
      return response;
      } catch (error) {
        return {
          message : "Failed to Make Admin!"
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
      {filteredUsers?.map((u, i) => (
        <tr className="border-b" key={i}>
          <td className="p-2">{u.name}</td>
          <td className="p-2">{u.email}</td>
          {
            u?.role === "admin" ?

          <td className="p-2">
            <button className="bg-green-500 text-white px-3 py-1 rounded" disabled>
              Admin
            </button>
          </td>
            :
          <td className="p-2" onClick={() => handleMakeAdmin(u?._id)}>
            <button className="bg-blue-500 text-white px-3 py-1 rounded">
              Make Admin
            </button>
          </td>
          }
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
