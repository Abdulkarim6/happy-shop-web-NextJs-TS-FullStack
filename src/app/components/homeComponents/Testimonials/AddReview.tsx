'use client';
import {Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { addReview } from '@/app/actions/addReview';
import { Button } from '@/components/ui/button';
import { Textarea } from "@/components/ui/textarea";
import { Rating } from "./Rating";
import React, { useState, useTransition } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
type ResType = { acknowledged: boolean; insertedId: string | null; };

const AddReview = () => {
  const {data:session} = useSession();
  const [rating, setRating] = useState(0);
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition(); // ২. লোডিং স্টেট হ্যান্ডেল করার জন্য
  
  const addReviewHandler = async(e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const review = {
      rating: rating as number,
      review: formData.get("comment") as string,
    }
    
    startTransition(async () => {
      try {
          const res = (await addReview(review)) as ResType;
          console.log(res, 36);
          
          if(res?.acknowledged){ 
            setRating(0);
            setTimeout(() => setOpen(false), 300);
          }
      } catch (error) {
        console.error("Error submitting review:", error);
        setOpen(false); 
        setRating(0);
      }
    });
  }

    return (
      <>
        <Dialog
          open={open}
          onOpenChange={(val) => {
            if (!isPending) setOpen(val); // সাবমিট চলাকালীন বন্ধ হবে না
          }}
        >
          <DialogTrigger asChild className="my-5 block w-fit mx-auto">
            <Button variant="outline" buttonSize={"sm"} className=" ">
              Click and share your experience
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm bg-slate-100">
            <form onSubmit={addReviewHandler} className="">
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
                  <Input
                    id="name-1"
                    name="name"
                    value={`${session?.user ? session?.user?.name : ""}`}
                    readOnly
                  />
                </Field>
                <Field>
                  <Label htmlFor="comment">Comment</Label>
                  <Textarea
                    name="comment"
                    placeholder="Type your message here."
                    required
                  />
                </Field>
              </FieldGroup>
              <DialogFooter className="mt-5">
                <DialogClose asChild>
                  <Button
                   type="button"
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
                  disabled={isPending || !session?.user || rating === 0} // ৪. সাবমিট চলাকালীন বাটন ডিজেবল হবে
                >
                  {isPending ? "Submitting..." : "Submit Review"}
                </Button>
              </DialogFooter>
            </form>
            {!session?.user && (
              <p className="text-red-600 font-extralight text-xs text-center"> Please <Link href="/account/auth?mode=login" className="underline"> Login </Link> first to add review ! </p>
            )}
          </DialogContent>
        </Dialog>
      </>
    );
};

export default AddReview;