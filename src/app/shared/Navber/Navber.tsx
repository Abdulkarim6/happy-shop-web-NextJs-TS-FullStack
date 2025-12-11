import { getCategories } from "@/app/utils/getCategories";
import NavberClient from "./NavberClient";
import { CategoriesType } from "@/app/utils/interfaces";
import getOrderedProducts from "@/app/utils/getOrderedProducts";
import CartNavber from "./CartNavber";

const Navber = async () => {
   const categoriesOfGenders = await getCategories();
   const orderedProductsPromise = getOrderedProducts();
   
    const categoriesOfMan = categoriesOfGenders?.find((categoriesOfGender: CategoriesType) => categoriesOfGender.men);
    const categoriesOfwomen = categoriesOfGenders?.find((categoriesOfGender: CategoriesType) => categoriesOfGender.women);
    const categoriesOfkids = categoriesOfGenders?.find((categoriesOfGender: CategoriesType) => categoriesOfGender.kids);
    const categoriesOfaccessories = categoriesOfGenders?.find((categoriesOfGender: CategoriesType) => categoriesOfGender.accessories);

  return (
    <div className="sticky top-0 z-50 flex items-center bg-slate-100">
      <NavberClient
        categoriesOfMan={categoriesOfMan}
        categoriesOfwomen={categoriesOfwomen}
        categoriesOfkids={categoriesOfkids}
        categoriesOfaccessories={categoriesOfaccessories}
      />
      <div className="p-2 !pr-2 md:!pr-10 relative z-50">
        <CartNavber orderedProductsPromise={orderedProductsPromise} />
      </div>
    </div>
  );
};

export default Navber;
