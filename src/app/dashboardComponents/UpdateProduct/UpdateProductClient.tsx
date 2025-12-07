"use client"
import { updateProduct } from "@/app/actions/updateProduct";
import FormOfProductFields from "@/app/shared/FormOfProductFields/FormOfProductFields";
import { CategoriesType, Toast } from "@/app/utils/interfaces";
import { Spinner } from "@/components/ui/spinner";
import Form from "next/form";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { useActionState, useEffect, useState } from "react";

type ParamsType = {
  allCategories: CategoriesType[];
  productid: string;
};
const UpdateProductClient = ({allCategories,productid}:ParamsType) => {
    const today = new Date().toLocaleString();
   
    const initialState = {
     productid:productid,  message: "", acknowledged: "", date:today,
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