import { CategoryDocument } from "@/app/interfaces/product";
import { poppins } from "@/app/layout";
import { Card, CardContent, } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const Categories = async () => {
   const baseUrl = process.env.NEXT_PUBLIC_API_URL;
   console.log(baseUrl);

   const res = await fetch(`${baseUrl}/api/categories`);
   

  const data = await res.json();
  console.log(9, data);
  

  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold ${poppins.className}`}>-SHOP BY-</h2>
      <div className="grid grid-cols gap-1">
        <h1 className="text-4xl">{data?.data?.name}</h1>
        <p className="text-2xl">{data?.data?.roll}</p>
      </div>
    </section>
  );
};

export default Categories;
