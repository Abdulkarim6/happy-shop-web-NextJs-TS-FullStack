'use client';

import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { addReview } from '@/app/actions/addReview';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Textarea } from "@/components/ui/textarea";
import { Rating } from "./Rating";
import { useState, useTransition } from "react";
import Form from "next/form";
type ResType = { acknowledged: boolean; insertedId: string; }

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const AddButton = () => {
  const [rating, setRating] = useState(0);
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition(); // ২. লোডিং স্টেট হ্যান্ডেল করার জন্য

  const addReviewHandler = async(formdata : FormData) =>{
    console.log( 22);

    startTransition(async () => {
      try {
        // এখানে আপনার সার্ভার অ্যাকশন কল করুন
        // await addReview(formData); 
        
        // ডামি ডিলে (বোঝার সুবিধার জন্য)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log("Submitted Successfully");

        // ৩. সাকসেস হলে ডায়লগ বন্ধ করা
        setOpen(false); 
        setRating(0); // রেটিং রিসেট করা
        router.refresh();
      } catch (error) {
        console.error("Error submitting review:", error);
      }
    });
    
  }

    const router = useRouter();
  //   const addReviewHandler = async () => {
  //     // const res = await fetch(`${baseUrl}/api/addReviews`, {
  //     //   method: "POST",
  //     //   body: JSON.stringify(data),
  //     //   headers: {
  //     //     "Content-Type": "application/json",
  //     //   },
  //     // });
  // //}

  //     const res:ResType | null = await addReview();
  //     console.log(res);
  //     if(res?.acknowledged){
  //       router.refresh();
  //     }
  //   };


    return (
      <>
        <Dialog
          open={open}
          onOpenChange={(val) => {
            if (!isPending) setOpen(val); // সাবমিট চলাকালীন বন্ধ হবে না
          }}
        >
          <DialogTrigger asChild className="my-5 ">
            <Button variant="outline">Share your experience</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm bg-slate-100">
            <Form action={addReviewHandler} className="">
              <DialogHeader>
                <DialogTitle>Rating</DialogTitle>
                <Rating
                  rating={rating}
                  setRating={setRating}
                  readonly={false}
                />
                <input type="hidden" name="rating" value={rating} />
              </DialogHeader>
              <FieldGroup>
                <Field>
                  <Label htmlFor="name-1">Name</Label>
                  <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                </Field>
                <Field>
                  <Label htmlFor="comment">Comment</Label>
                  <Textarea
                    name="comment"
                    placeholder="Type your message here."
                  />
                </Field>
              </FieldGroup>
              <DialogFooter>
                <DialogClose asChild>
                  <Button
                    variant="outline"
                    className="bg-yellow-400 hover:bg-yellow-500"
                    disabled={isPending}
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                </DialogClose>
                
                <Button
                  type="submit"
                  className="bg-blue-500 text-black hover:bg-blue-600"
                  disabled={isPending} // ৪. সাবমিট চলাকালীন বাটন ডিজেবল হবে
                >
                  {isPending ? "Submitting..." : "Submit Review"}
                </Button>
              </DialogFooter>
            </Form>
          </DialogContent>
        </Dialog>
      </>
    );
};

export default AddButton;