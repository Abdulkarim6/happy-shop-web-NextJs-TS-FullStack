
import { getCategories } from "@/app/actions/products/getCategories";
import NavberClient from "./NavberClient";
import { CategoriesType } from "@/app/utils/interfaces";

const Navber = async() => {
  const categoriesOfGenders: CategoriesType[] = await getCategories(); // ✅ render এর বাইরে fetch

  return (
    <section className="flex flex-col sticky top-0 bg-slate-100 z-50">
      <NavberClient categoriesOfGenders={categoriesOfGenders}></NavberClient>
    </section>
  );
};

export default Navber;
