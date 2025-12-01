import Users from "../dashboardComponents/Users/Users";
import { getUsers } from "../utils/getUsers";


const page = () => {
    const promise = getUsers();
    return (
        <div>
            <Users usersCallsPromise={promise}/>
        </div>
    );
};

export default page;