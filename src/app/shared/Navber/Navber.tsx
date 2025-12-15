import { getCategories } from "@/app/utils/getCategories";
import NavberClient from "./NavberClient";
import { CategoriesType } from "@/app/utils/interfaces";
import getOrderedProducts from "@/app/utils/getOrderedProducts";
import CartNavber from "./CartNavber";
import { auth } from "@/auth";
import AuthenticatedNavber from "./AuthenticatedNavber";

const Navber = async () => {
   const session = await auth();
    //  console.log("Navber", session);

   const categoriesOfGenders = await getCategories();
   const orderedProductsPromise = getOrderedProducts();
   
    const categoriesOfMan = categoriesOfGenders?.find((categoriesOfGender: CategoriesType) => categoriesOfGender.men);
    const categoriesOfwomen = categoriesOfGenders?.find((categoriesOfGender: CategoriesType) => categoriesOfGender.women);
    const categoriesOfkids = categoriesOfGenders?.find((categoriesOfGender: CategoriesType) => categoriesOfGender.kids);
    const categoriesOfaccessories = categoriesOfGenders?.find((categoriesOfGender: CategoriesType) => categoriesOfGender.accessories);

  return (
    <div className="sticky top-0 w-full z-50 flex items-center bg-slate-100">
      <NavberClient
        session={session}
        categoriesOfMan={categoriesOfMan}
        categoriesOfwomen={categoriesOfwomen}
        categoriesOfkids={categoriesOfkids}
        categoriesOfaccessories={categoriesOfaccessories}
      />

      {/* Authentication related Menu */}
      <AuthenticatedNavber />

      <div className="p-2 !pr-2 md:!pr-10 relative z-50">
        <CartNavber orderedProductsPromise={orderedProductsPromise} />
      </div>
    </div>
  );
};

export default Navber;
