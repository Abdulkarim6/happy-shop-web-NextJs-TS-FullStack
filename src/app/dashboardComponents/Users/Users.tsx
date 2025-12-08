import { UserType } from '@/app/utils/interfaces';
import SearchClient from "./SearchClient";
import UsersTable from './UsersTable';
import UsersContextProvider from '@/app/contexts/usersPageContext/UsersContextProvider';

const Users = async({usersCallsPromise}:{usersCallsPromise:Promise<UserType[]>}) => {
   const users = await usersCallsPromise;
   
    return (
      <UsersContextProvider>
        <div className="space-y-4">
          <SearchClient />

          <table className="w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Update</th>
                <th className="border p-2">Delete</th>
              </tr>
            </thead>

            <UsersTable users={users}/>
          </table>
        </div>
      </UsersContextProvider>
    );
};

export default Users;