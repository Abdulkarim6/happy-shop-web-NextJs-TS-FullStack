'use client'

import { addReview } from '@/app/actions/addReview';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
type ResType = { acknowledged: boolean; insertedId: string; }

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const AddButton = () => {
    const router = useRouter();
    const addproduct = async () => {
      // const data = {
      //   review: "add new review",
      //   profile: "yes",
      //   customer: "karim",
      // };

      // const res = await fetch(`${baseUrl}/api/addReviews`, {
      //   method: "POST",
      //   body: JSON.stringify(data),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });

      // console.log(res);
      // if (res?.ok) {
      //   console.log(res?.ok);
        
      //   router.refresh();
      //   // alert("added success")
      // }

      const res:ResType | null = await addReview();
      console.log(res);
      if(res?.acknowledged){
        router.refresh();
      }
      
    };

    return (
      <Button variant={"destructive"} onClick={() => addproduct()}>
        ADD
      </Button>
    );
};

export default AddButton;