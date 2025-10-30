"use client";
import { Heart } from "lucide-react";
import React, { useState } from "react";
import { Rating as ReactRating} from "react-simple-star-rating";

export function Rating({rating}:{rating:number}) {
  // const [rating, setRating] = useState(2.5);
  console.log(rating);
  
  // const handleRating = (rate: number) => {
  //   setRating(rate);

  // };
 let fillColor;
 if (rating >= 1 && rating <= 2) {
   fillColor = "#ff0000";
 } else if (rating >= 3 && rating < 4) {
   fillColor = "#ffd11a"; 
 } else if (rating >= 4 && rating <= 5) {
   fillColor = "#009933";
 }

  return (
    <div className="">
      <ReactRating
        fillColor={fillColor}
        initialValue={rating}
        allowFraction
        readonly
        size={30}
        className="[&_svg]:inline-block"
      />
    </div>
  );
}
