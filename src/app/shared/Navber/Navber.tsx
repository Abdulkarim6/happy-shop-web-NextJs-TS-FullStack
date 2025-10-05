
import { getCategories } from "@/app/actions/products/getCategories";
import NavberClient from "./NavberClient";
import { CategoriesType } from "@/app/utils/interfaces";

export const revalidate = 3600; // cache সময় — ১ ঘণ্টা

const Navber = async () => {
  // const categoriesOfGenders: CategoriesType[] = await getCategories(); // ✅ render এর বাইরে fetch

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

   const res = await fetch(`${baseUrl}/api/categories`,{cache: "force-cache"});
   const resJson = await res.json(); 
   if(!res.ok){
    throw new Error("Failed to fetch");
   }
   const categoriesOfGenders = await resJson?.data;
    const categoriesOfMan = categoriesOfGenders?.find((categoriesOfGender: CategoriesType) => categoriesOfGender.men);
    const categoriesOfwomen = categoriesOfGenders?.find((categoriesOfGender: CategoriesType) => categoriesOfGender.women);
    const categoriesOfkids = categoriesOfGenders?.find((categoriesOfGender: CategoriesType) => categoriesOfGender.kids);
    const categoriesOfaccessories = categoriesOfGenders?.find((categoriesOfGender: CategoriesType) => categoriesOfGender.accessories);

  return (
    <section className="flex flex-col sticky top-0 bg-slate-100 z-50">
        {/* <NavberClient categoriesOfGenders={categoriesOfGenders}></NavberClient> */}
        <NavberClient 
          categoriesOfMan={categoriesOfMan}
          categoriesOfwomen={categoriesOfwomen}
          categoriesOfkids={categoriesOfkids}
          categoriesOfaccessories={categoriesOfaccessories}
        />
    </section>
  );
};

export default Navber;
