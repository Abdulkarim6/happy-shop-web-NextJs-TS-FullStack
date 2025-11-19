'use client'

import { addReview } from '@/app/actions/addReview';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
type ResType = { acknowledged: boolean; insertedId: string; }

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const AddButton = () => {

    const router = useRouter();
    const addReviewHandler = async () => {
      // const res = await fetch(`${baseUrl}/api/addReviews`, {
      //   method: "POST",
      //   body: JSON.stringify(data),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
  //}

      const res:ResType | null = await addReview();
      console.log(res);
      if(res?.acknowledged){
        router.refresh();
      }
    };

    return (
      <Button variant={"destructive"} onClick={() => addReviewHandler()}>
        ADD
      </Button>
    );
};

export default AddButton;