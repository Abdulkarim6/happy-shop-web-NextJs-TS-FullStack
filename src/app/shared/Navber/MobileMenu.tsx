"use client"
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import MobileView from "./MobileView";
import { SubCategoriesType } from "@/app/utils/interfaces";

type DropDownMenuCategoriesType = { titleOfCategory: string; link: string; subCategories: SubCategoriesType[]};
type TypeOfProps = {
  categories: DropDownMenuCategoriesType[]
}

const MobileMenu = ({categories}: TypeOfProps) => {
    const [toggleHamburger, setToggleHamburger] = useState<boolean>(false);

    return (
        <div className="md:hidden">
            {/* Hamburger controll for mobile*/}
              {toggleHamburger ? (
                <X onClick={() => setToggleHamburger(!toggleHamburger)} size={20} className="mx-2" />
              ) : (
                <AlignJustify onClick={() => setToggleHamburger(!toggleHamburger)} size={20} className="mx-2" />
              )}

            {/* navigationMenu for only mobile view */}
            <div
              className={`absolute top-full left-0 overflow-x-hidden 
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
    );
};

export default MobileMenu;