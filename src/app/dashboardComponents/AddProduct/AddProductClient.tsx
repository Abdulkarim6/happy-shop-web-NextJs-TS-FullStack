'use client'
import { addProduct } from '@/app/actions/addProduct';
import Form from 'next/form';
import { useActionState, useEffect, useState } from 'react';
import { CategoriesType, Toast } from '@/app/utils/interfaces';
import { Spinner } from '@/components/ui/spinner';
import FormOfProductFields from '@/app/shared/FormOfProductFields/FormOfProductFields';

const AddProductCient = ({allCategories}:{allCategories: CategoriesType[]}) => {  
    const initialState = { message: "", acknowledged: "", insertedId: "" };
    const [state, formAction, isPanding] = useActionState(addProduct, initialState);

    const [targetAudience, setTargetAudience] = useState<null | string>(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState("");
    
    useEffect(() => {
      if(state?.acknowledged === "success"){
        Toast.fire({
          icon:"success",
          title:state?.message
        });
        setTargetAudience("");
        setSelectedSubCategory("");
      }
      if(state?.acknowledged === "failed"){
        Toast.fire({
          icon:"error",
          title:state?.message
        });
        setTargetAudience("");
        setSelectedSubCategory("");
      }
      
    }, [state])

    return (
    <Form action={formAction} className='w-full my-3'>
    
      <FormOfProductFields
       allCategories={allCategories}
       selectedSubCategory={selectedSubCategory}
       setSelectedSubCategory={setSelectedSubCategory}
       targetAudience={targetAudience}
       setTargetAudience={setTargetAudience}
      />
        <button type='submit' className='block hover:bg-sky-600 bg-sky-500 mx-auto p-2 rounded w-[80%] text-lg font-medium'>
          {
           isPanding ? 
            <span className='flex justify-center items-center'><Spinner className='size-4'/> Pending...</span>
           :
           "SUBMIT"
          }
        </button>
    </Form>  
    );
};

export default AddProductCient;