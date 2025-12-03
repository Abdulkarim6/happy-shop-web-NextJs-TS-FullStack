import { UserType } from '@/app/utils/interfaces';
import UsersTable from './UsersTable';

const Users = async({usersCallsPromise}:{usersCallsPromise:Promise<UserType[]>}) => {
   const users = await usersCallsPromise;
   //console.log(users);

   const makeAdmin = (id:string) =>{
     console.log(id);
     
   };

    return (
      <UsersTable users={users} />
    );
};

export default Users;