"use client";

import { useEffect, useState } from "react";

type ProductDateProps = {
  date: string; // ISO date
};

export default function ProductDate({ date }: ProductDateProps) {
    const [localDate, setLocalDate] = useState('');

    useEffect(() => {
        const dateOptions: Intl.DateTimeFormatOptions = {
          year: "numeric",
          month: "long",
          day: "2-digit",
          hour: "numeric",
          minute: "2-digit",
        };
      
        const localDate = new Date(date).toLocaleString("en-US", dateOptions);
        setLocalDate(localDate);
    },[date])

    //Ensuring the component will render only in the browser
    if (!localDate) return null; 

  return <h4 className="text-lg">Date: {localDate}</h4>;
}
