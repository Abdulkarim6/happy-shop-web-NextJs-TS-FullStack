import FIlterFieldsClient from './FilterFieldsClient';
import { getCategories } from '@/app/utils/getCategories';

const FIlterFields = async() => {
  const categoriesForAll = await getCategories();

  return ( <FIlterFieldsClient categoriesForAll={categoriesForAll}/> );
};

export default FIlterFields;