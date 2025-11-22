
import { getCategories } from '@/app/utils/getCategories';
import AddProduct from '../dashboardComponents/AddProduct/AddProduct';

const page = async() => {
    const allCategories = await getCategories();
    return (
        <div>
           <AddProduct allCategories={allCategories}/> 
        </div>
    );
};

export default page;