import LaptopDesktopMenu from "./LaptopDesktopMenu";
import getOrderedProducts from "@/app/utils/getOrderedProducts";
import CartMenu from "./CartMenu";
import { auth } from "@/auth";
import AuthenticatedMenu from "./AuthenticatedMenu";
import { loadDropDownMenuCategories } from "@/app/utils/loadDropDownMenuCategories";
import Link from "next/link";
import { poppins } from "@/lib/font";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";

const Navber = async () => {
  const [sessionRes, categoriesRes] = await Promise.allSettled([
    auth(),
    loadDropDownMenuCategories()
  ]);
  const session = sessionRes?.status === "fulfilled" ? sessionRes?.value : [];
  const categoriesForAll = categoriesRes?.status === "fulfilled" ? categoriesRes?.value : [];

  const orderedProductsPromise = getOrderedProducts();

  return (
    <div className="sticky top-0 w-full z-50 flex justify-between items-center !pr-3 p-1 bg-slate-100">
      <div className="flex items-center">
        {/*-----Menu part for Mobile----- */}
        <MobileMenu categoriesForAll={categoriesForAll} />

        {/*----Navber Logo----- */}
        <Link href="/">
          <strong
            className={`cursor-pointer shrink-0 text-base md:text-lg lg:text-2xl font-semibold mr-4 md:mr-5 lg:mr-12 ${poppins.className}`}
          >
            HappyShop
          </strong>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        {/*----- Menu part for laptop and Desktop----- */}
        <LaptopDesktopMenu session={session} categoriesForAll={categoriesForAll} />

        {/* -----Search Bar for desktop----- */}
        <SearchBar />

        <div className="flex items-center gap-2 bg-white rounded px-1.5">
          {/* auth menu list */}
          <AuthenticatedMenu />

          {/* cart menu */}
          <CartMenu orderedProductsPromise={orderedProductsPromise} />
        </div>
      </div>
    </div>
  );
};

export default Navber;
