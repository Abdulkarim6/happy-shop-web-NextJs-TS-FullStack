import { UserType } from '@/app/utils/interfaces';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import Image from 'next/image';

const Users = async({usersCallsPromise}:{usersCallsPromise:Promise<UserType[]>}) => {
   const users = await usersCallsPromise;
   //console.log(users);

    return (
        <Table>
        <TableHeader>
          <TableRow>
            {/* <TableHead>Image</TableHead> */}
            <TableHead className="w-300px">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user: UserType) => (
            <TableRow key={user._id}>
              {/* <TableCell>
                <Image
                  alt={user.name}
                  src={user.image}
                  height={70}
                  width={50}
                />
              </TableCell> */}
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="p-1">
                <button className="border-2 border-blue-500 text-blue-700 rounded p-1">
                  Update
                </button>
              </TableCell>
              <TableCell className="p-1">
                <button className="border-2 border-red-500 text-red-700 rounded p-1">
                  Delete
                </button>
              </TableCell>
              {/* <TableCell onClick={() => handleDelete(user?._id)} className='p-1'><button className='border-2 border-red-500 text-red-700 rounded p-1'>Delete</button></TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
};

export default Users;