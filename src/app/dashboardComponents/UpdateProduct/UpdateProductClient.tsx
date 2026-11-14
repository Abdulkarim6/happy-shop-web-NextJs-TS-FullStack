"use client"
import { updateProduct } from "@/app/actions/updateProduct";
import FormOfProductFields from "@/app/shared/FormOfProductFields/FormOfProductFields";
import { CategoriesForAllType, Toast } from "@/app/utils/interfaces";
import { Spinner } from "@/components/ui/spinner";
import Form from "next/form";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";

type ParamsType = {
  categoriesForAll: CategoriesForAllType[];
  productid: string;
};
const UpdateProductClient = ({categoriesForAll,productid}:ParamsType) => {
    const initialState = {
     productid:productid,  message: "", acknowledged: "",
     modifiedCount: 0, upsertedId: "", upsertedCount: 0, matchedCount:0
    };
    const [state, formAction, ispending] = useActionState(updateProduct, initialState);
    const router = useRouter();
    const [targetAudience, setTargetAudience] = useState<null | string>(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState("");
    
    useEffect(() => {
      if(state?.acknowledged === "success"){
        Toast.fire({
          icon:"success",
          title:state?.message
        });
        setTargetAudience(null);
        setSelectedSubCategory("");
        router.refresh();
      }
      if(state?.acknowledged === "failed"){
        Toast.fire({
          icon:"error",
          title:state?.message
        });
        setTargetAudience(null);
        setSelectedSubCategory("");
      }
      
    }, [state, router])

    return (
    <Form action={formAction} className='w-full my-3'>
    
      <FormOfProductFields
       categoriesForAll={categoriesForAll}
       selectedSubCategory={selectedSubCategory}
       setSelectedSubCategory={setSelectedSubCategory}
       targetAudience={targetAudience}
       setTargetAudience={setTargetAudience}
      />
        <button type='submit' className='block w-[80%] mx-auto bg-sky-500 hover:bg-blue-500 p-2 rounded text-lg font-medium'>
          {
           ispending ? 
            <span className='flex justify-center items-center'><Spinner className='size-4'/> processing...</span>
           :
           "Update"
          }
        </button>
    </Form>  
    );
};

export default UpdateProductClient;