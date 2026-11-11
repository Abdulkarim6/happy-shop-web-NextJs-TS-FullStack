import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import type { SubCategoriesType } from "@/app/utils/interfaces";
import type { Session } from "next-auth";

type DropDownMenuCategoriesType = {
  titleOfCategory: string;
  link: string;
  subCategories: SubCategoriesType[];
};
type TypeOfProps = {
  session: Session | never[] | null;
  categories: DropDownMenuCategoriesType[];
};

const LaptopDesktopMenu = ({ session, categories }: TypeOfProps) => {
  
  return (
    <div className="relative hidden md:flex">
      {/* <div className="flex items-center p-2 !pr-2 relative z-20"> */}

      <ul className="flex justify-center items-center gap-1.5 lg:gap-2 text-base lg:text-lg">
        {categories?.map((menuList: DropDownMenuCategoriesType) => (
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
            <ul className={`absolute top-full left-0 z-50 hidden bg-white shadow-lg rounded gap-2 group-hover:grid w-[400px] md:w-[500px] ${ menuList?.subCategories?.length > 2 ? "lg:w-[600px] grid-cols-2" : "lg:w-[300px] grid-cols-1" }`}>
              {menuList?.subCategories?.map(
                (subCategory: SubCategoriesType) => (
                  <li key={subCategory?.subCategory}>
                    <Link
                      href={`${menuList.link}/${subCategory?.subCategory
                        ?.split(" ")
                        .join("-")}`}
                      className="block p-2 hover:bg-gray-100"
                    >
                      <div className="text-sm lg:text-base leading-none font-medium">
                        {subCategory?.subCategory}
                      </div>
                      <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {subCategory?.description}
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
      {/* </div> */}
    </div>
  );
};

export default LaptopDesktopMenu;
