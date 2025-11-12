import { getCategories } from "@/app/utils/getCategories";
import NavberClient from "./NavberClient";
import { CategoriesType } from "@/app/utils/interfaces";

const Navber = async () => {
   const categoriesOfGenders = await getCategories();
   console.log(categoriesOfGenders);
   
   
    const categoriesOfMan = categoriesOfGenders?.find((categoriesOfGender: CategoriesType) => categoriesOfGender.men);
    const categoriesOfwomen = categoriesOfGenders?.find((categoriesOfGender: CategoriesType) => categoriesOfGender.women);
    const categoriesOfkids = categoriesOfGenders?.find((categoriesOfGender: CategoriesType) => categoriesOfGender.kids);
    const categoriesOfaccessories = categoriesOfGenders?.find((categoriesOfGender: CategoriesType) => categoriesOfGender.accessories);

  return (
    <section className="sticky top-0 z-50">
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
