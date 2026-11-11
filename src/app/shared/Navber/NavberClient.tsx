"use client"
import { useState } from "react";
import { AlignJustify, ChevronDownIcon, Search, X, } from "lucide-react";
import Link from "next/link";
import { SubCategoriesType} from "@/app/utils/interfaces";
import { Input } from "@/components/ui/input";
import MobileView from "./MobileView";
import DisplaySearchedProducts from "./DisplaySearchedProducts";
import { Session } from "next-auth";


type DropDownMenuCategoriesType = { titleOfCategory: string; link: string; subCategories: SubCategoriesType[]};
type TypeOfProps = {
  session: Session | never[] | null;
  categories: DropDownMenuCategoriesType[]
}

const NavberClient = ({session, categories}: TypeOfProps) => {
  const [searchForProducts, setSearchForProducts] = useState<string>("");
  const [toggleHamburger, setToggleHamburger] = useState<boolean>(false);

  return (
    <div className="relative">
      <div className="flex items-center p-2 !pr-2 relative z-20">
        {/* Hamburger controll for mobile*/}
        <div className="md:hidden">
          {toggleHamburger ? (
            <X onClick={() => setToggleHamburger(!toggleHamburger)} size={30} className="mx-2" />
          ) : (
            <AlignJustify onClick={() => setToggleHamburger(!toggleHamburger)} size={30} className="mx-2" />
          )}
        </div>

        {/* NavigationMenu for Tab and Desktop view */}
        <div className="hidden md:flex">
          <ul className="flex justify-center items-center gap-2">
            {
              categories?.map((menuList: DropDownMenuCategoriesType) =>
              <li className="relative group" key={menuList?.titleOfCategory}>
              {/* Menu Trigger */}
              <div className="flex justify-center items-center bg-white px-2 py-1.5 rounded">
                <Link href={menuList?.link}>{menuList?.titleOfCategory}</Link>
                <ChevronDownIcon
                  className="size-5 transition duration-300 group-hover:rotate-180"
                  aria-hidden="true"
                />
              </div>
              
              {/* Dropdown Content */}
              <ul className="absolute top-full left-0 z-50 hidden bg-white shadow-lg rounded gap-2 group-hover:grid group-focus-within:grid w-[400px] md:w-[500px] grid-cols-2 lg:w-[600px]" >
              {
                menuList?.subCategories?.map((subCategory : SubCategoriesType) => (
                
                <li key={subCategory?.subCategory}>
                  <Link 
                    href={`${menuList.link}/${subCategory?.subCategory?.split(" ").join("-")}`}
                    className="block p-3 hover:bg-gray-100"
                  >
                    <div className="text-sm lg:text-base leading-none font-medium">
                      {subCategory?.subCategory}
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      {subCategory?.description}
                    </p>
                  </Link>
                </li>
                ))
              }
              </ul>
            </li>
            ) }

            {
            // session?.user?.role === "admin" &&
            <li className="bg-white px-2 py-1.5 rounded">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            
            }
          </ul>
        </div>

        {/* Search bar of product */}
        <div className="hidden md:flex w-96 relative items-center mx-2">
          <Input
            value={searchForProducts}
            onChange={(e) => setSearchForProducts(e.target.value)}
            className="w-full rounded pl-2 pr-3"
            type="text"
            placeholder="Search..."
          />
          <Search className="absolute right-3" size={20} />
        </div>

        {/* navigationMenu for only mobile view */}
        <div
          className={`absolute md:hidden top-full left-0 overflow-x-hidden 
             transition-all duration-200 ease-in-out ${
               toggleHamburger
                 ? "w-3/5 translate-x-0" //menu width
                 : "w-0 -translate-x-full"
             }`}
        >
          <MobileView
            categories={categories}
          />
        </div>
      </div>

      {/* showing products by searching */}
      <DisplaySearchedProducts
        searchForProducts={searchForProducts}
        setSearchForProducts={setSearchForProducts}
      />
    </div>
  );
};

export default NavberClient;