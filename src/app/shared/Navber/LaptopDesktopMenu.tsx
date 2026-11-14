import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import type { CategoriesByAudienceType } from "@/app/utils/interfaces";
import type { Session } from "next-auth";

type DropDownMenuCategoriesType = {
  titleOfCategory: string;
  link: string;
  categoriesByAudience: CategoriesByAudienceType[];
};
type TypeOfProps = {
  session: Session | never[] | null;
  categoriesForAll: DropDownMenuCategoriesType[];
};

const LaptopDesktopMenu = ({ session, categoriesForAll }: TypeOfProps) => {
  
  return (
    <div className="relative hidden md:flex">
      <ul className="flex justify-center items-center gap-1.5 lg:gap-2 text-base lg:text-lg">
        {categoriesForAll?.map((menuList: DropDownMenuCategoriesType) => (
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
            <ul className={`absolute top-full left-0 z-50 hidden bg-white shadow-lg rounded gap-2 group-hover:grid w-[400px] md:w-[500px] ${ menuList?.categoriesByAudience?.length > 2 ? "lg:w-[600px] grid-cols-2" : "lg:w-[300px] grid-cols-1" }`}>
              {menuList?.categoriesByAudience?.map(
                (categoryByAudience: CategoriesByAudienceType) => (
                  <li key={categoryByAudience?.categoryTitle}>
                    <Link
                      href={`${menuList.link}/${categoryByAudience?.categorySlug}`}
                      className="block p-2 hover:bg-gray-100"
                    >
                      <div className="text-sm lg:text-base leading-none font-medium">
                        {categoryByAudience?.categoryTitle}
                      </div>
                      <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {categoryByAudience?.description}
                      </p>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </li>
        ))}

        {
          // session?.user?.role === "admin" &&
          <li className="bg-white px-2 py-1.5 rounded">
            <Link href="/dashboard">Dashboard</Link>
          </li>
        }
      </ul>
    </div>
  );
};

export default LaptopDesktopMenu;
