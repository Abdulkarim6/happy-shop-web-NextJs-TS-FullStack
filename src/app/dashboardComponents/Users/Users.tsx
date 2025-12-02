import { UserType } from '@/app/utils/interfaces';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import Image from 'next/image';
import UsersTable from './UsersTable';

const Users = async({usersCallsPromise}:{usersCallsPromise:Promise<UserType[]>}) => {
   const users = await usersCallsPromise;
   //console.log(users);

   const makeAdmin = (id:string) =>{
     console.log(id);
     
   };

    return (
      //   <Table>
      //     <TableHeader>
      //       <TableRow>
      //         {/* <TableHead>Image</TableHead> */}
      //         <TableHead className="w-300px">User Name</TableHead>
      //         <TableHead>User Email</TableHead>
      //         <TableHead>Action</TableHead>
      //         <TableHead>Action</TableHead>
      //       </TableRow>
      //     </TableHeader>
      //     <TableBody>
      //       {users?.map((user: UserType) => (
      //         <TableRow key={user._id}>
      //           {/* <TableCell>
      //             <Image
      //               alt={user.name}
      //               src={user.image}
      //               height={70}
      //               width={50}
      //             />
      //           </TableCell> */}
      //           <TableCell className="font-medium">{user.name}</TableCell>
      //           <TableCell>{user.email}</TableCell>
      //           <TableCell className="p-1" onClick={()=> makeAdmin(user?._id)}>
      //             <button className="border-2 border-blue-500 text-blue-700 rounded p-1">
      //               Make Admin
      //             </button>
      //           </TableCell>
      //           <TableCell className="p-1">
      //             <button className="border-2 border-red-500 text-red-700 rounded p-1">
      //               Delete
      //             </button>
      //           </TableCell>
      //           {/* <TableCell onClick={() => handleDelete(user?._id)} className='p-1'><button className='border-2 border-red-500 text-red-700 rounded p-1'>Delete</button></TableCell> */}
      //         </TableRow>
      //       ))}
      //     </TableBody>
      //   </Table>

      <UsersTable users={users} />
    );
};

export default Users;