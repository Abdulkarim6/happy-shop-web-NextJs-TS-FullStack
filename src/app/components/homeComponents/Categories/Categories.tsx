import { CategoryDocument } from "@/app/interfaces/product";
import { poppins } from "@/app/layout";
import { Card, CardContent, } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const Categories = async () => {

  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold ${poppins.className}`}>-SHOP BY-</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
        
      </div>
    </section>
  );
};

export default Categories;
