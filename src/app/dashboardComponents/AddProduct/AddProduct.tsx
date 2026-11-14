import AddProductCient from './AddProductClient';
import { CategoriesForAllType } from '@/app/utils/interfaces';

const AddProduct = async({promise}:{promise : Promise<CategoriesForAllType[]>}) => {
    const categoriesForAll = await promise;
    // console.log(categoriesForAll);
    
    return (
        <div>
           <AddProductCient categoriesForAll={categoriesForAll}/> 
        </div>
    );
};

export default AddProduct;