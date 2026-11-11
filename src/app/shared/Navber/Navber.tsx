import NavberClient from "./NavberClient";
import getOrderedProducts from "@/app/utils/getOrderedProducts";
import CartNavber from "./CartNavber";
import { auth } from "@/auth";
import AuthenticatedNavber from "./AuthenticatedNavber";
import { loadDropDownMenuCategories } from "@/app/utils/loadDropDownMenuCategories";
import Link from "next/link";
import { poppins } from "@/lib/font"; 

const Navber = async () => {
  const [sessionRes, categoriesRes] = await Promise.allSettled([auth(), loadDropDownMenuCategories()])
  const session = sessionRes?.status === "fulfilled" ? sessionRes?.value : [];
  const categories = categoriesRes?.status === "fulfilled" ? categoriesRes?.value : [];
   
  const orderedProductsPromise = getOrderedProducts();
   
  return (
    <div className="sticky top-0 w-full right-0 z-50 flex justify-between items-center px-1 bg-slate-100">
      {/*menu Logo */}
      <Link href="/">
        <strong className={`cursor-pointer shrink-0 text-base md:text-xl lg:text-2xl font-semibold mr-4 md:mr-10 lg:mr-14 ${poppins.className}`} >
          HappyShop
        </strong>
      </Link>

      <div className="flex items-center">
        {/*navigation menu list */}
        <NavberClient session={session} categories={categories} />
  
        {/* auth menu list */}
        <AuthenticatedNavber />
  
        {/* cart menu */}
        <div className="p-2 !pr-2 md:!pr-10 relative z-50 bg-white">
          <CartNavber orderedProductsPromise={orderedProductsPromise} />
        </div>
      </div>
    </div>
  );
};

export default Navber;
