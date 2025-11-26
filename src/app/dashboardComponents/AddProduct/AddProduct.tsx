
import { getCategories } from '@/app/utils/getCategories';
import AddProductCient from './AddProductClient';

const AddProduct = async() => {
    const allCategories = await getCategories();
    return (
        <div>
           <AddProductCient allCategories={allCategories}/> 
        </div>
    );
};

export default AddProduct;