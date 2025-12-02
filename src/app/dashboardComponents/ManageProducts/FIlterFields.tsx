import FIlterFieldsClient from './FilterFieldsClient';
import { getCategories } from '@/app/utils/getCategories';

const FIlterFields = async() => {
  const allCategories = await getCategories();

  return ( <FIlterFieldsClient allCategories={allCategories}/> );
};

export default FIlterFields;