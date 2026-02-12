"use client";
import { useState } from "react";
import { Rating as ReactRating} from "react-simple-star-rating";

type RatingParams = {
  rating?:number,
  setRating?:React.Dispatch<React.SetStateAction<number>>,
  readonly?:boolean
};

export function Rating(params:RatingParams) {
  const [dynamicColor, setDynamicColor] = useState(0);
  const onPointerMove = (value: number) => setDynamicColor(value);

  const handleRating = (rate: number) => {
    params?.setRating?.(rate);
  };

 let fillColor;
 const rating = dynamicColor ? dynamicColor : params?.rating;
 if(rating){
   if (rating >= 1 && rating <= 2) {
     fillColor = "#ff0000";
   } else if (rating >= 3 && rating < 4) {
     fillColor = "#ffd11a"; 
   } else if (rating >= 4 && rating <= 5) {
     fillColor = "#009933";
   }
 };

  return (
    <div className="">
      <ReactRating
        initialValue={params?.rating}
        onClick={params?.readonly ? undefined : handleRating}
        readonly={params?.readonly}
        onPointerMove={onPointerMove}

        fillColor={fillColor}
        allowFraction
        size={30}
        className="[&_svg]:inline-block"
      />
    </div>
  );
}
