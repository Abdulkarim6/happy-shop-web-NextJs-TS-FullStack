import { CategoryDocument } from "@/app/interfaces/product";
import { poppins } from "@/app/layout";
import { Card, CardContent, } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";


const Categories = async () => {
  // const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  
  // const res = await fetch(`${baseUrl}/api/categories`);
  // const categoriesOfGenders = await res.json();
 
  // if (!res.ok) {
  //   return "There was an error in categories server component.";
  // }

  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold ${poppins.className}`}>-SHOP BY-</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
        {/* {categoriesOfGenders?.map((categoryOfGenders: CategoryDocument) => (
          <Link href={`/${categoryOfGenders?.title}`} key={categoryOfGenders?._id}>
          <Card
            className="w-full py-0 gap-0 rounded-lg"
          >
            <CardContent className="p-1 md:p-2">
              <Image
                src={categoryOfGenders?.thumbnail}
                alt="Picture of the author"
                width={500}
                height={500}
                className="rounded-md hover:rounded-lg overflow-hidden hover:scale-105 transition-transform opacity-90"
              />
            </CardContent>
            <h3 className="text-center text-xl md:text-2xl font-semibold my-2">
              {categoryOfGenders?.title.toUpperCase()}
            </h3>
          </Card>
          </Link>
        ))} */}
      </div>
    </section>
  );
};

export default Categories;
