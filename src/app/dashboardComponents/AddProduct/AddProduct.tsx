import AddProductCient from './AddProductClient';
import { CategoriesType } from '@/app/utils/interfaces';

const AddProduct = async({promise}:{promise : Promise<CategoriesType[]>}) => {
    const allCategories = await promise;
    // console.log(allCategories);
    
    return (
        <div>
           <AddProductCient allCategories={allCategories}/> 
        </div>
    );
};

export default AddProduct;