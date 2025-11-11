import NavberClient from "./NavberClient";
import { CategoriesType } from "@/app/utils/interfaces";

const Navber = async () => {
   const baseUrl = process.env.NEXT_PUBLIC_API_URL;

   const res = await fetch(`${baseUrl}/api/categories`,{cache: "force-cache"});
   if(!res.ok){
     throw new Error("Failed to fetch categories");
    }
    const resJson = await res.json(); 
    const categoriesOfGenders = await resJson?.data;
    
    const categoriesOfMan = categoriesOfGenders?.find((categoriesOfGender: CategoriesType) => categoriesOfGender.men);
    const categoriesOfwomen = categoriesOfGenders?.find((categoriesOfGender: CategoriesType) => categoriesOfGender.women);
    const categoriesOfkids = categoriesOfGenders?.find((categoriesOfGender: CategoriesType) => categoriesOfGender.kids);
    const categoriesOfaccessories = categoriesOfGenders?.find((categoriesOfGender: CategoriesType) => categoriesOfGender.accessories);

  return (
    <section className="sticky top-0 z-50">
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
