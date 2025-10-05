"use client"

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, } from "@/components/ui/navigation-menu";
import { AlignJustify, ChevronDownIcon, CircleUserRound, Search, X, } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { SubCategoriesType, CategoriesType, Product } from "@/app/utils/interfaces";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import MobileView from "./MobileView";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

type TypeOfGenders = {
  categoriesOfMan : CategoriesType | undefined;
  categoriesOfwomen : CategoriesType | undefined;
  categoriesOfkids : CategoriesType | undefined;
  categoriesOfaccessories : CategoriesType | undefined;
}
// const NavberClient = ({categoriesOfGenders}: {categoriesOfGenders: CategoriesType[]}) => {
const NavberClient = ({categoriesOfMan, categoriesOfwomen, categoriesOfkids, categoriesOfaccessories}: TypeOfGenders) => {
    const { data: session } = useSession();
    const [searchProduct, setSearchProduct] = useState<string>("");
    const [toggleHamburger, setToggleHamburger] = useState<boolean>(false);
    const [width, setWidth] = useState<number>(0);

    // const categoriesOfMan = categoriesOfGenders?.find(categoriesOfGender => categoriesOfGender.men);
    // const categoriesOfwomen = categoriesOfGenders?.find(categoriesOfGender => categoriesOfGender.women);
    // const categoriesOfkids = categoriesOfGenders?.find(categoriesOfGender => categoriesOfGender.kids);
    // const categoriesOfaccessories = categoriesOfGenders?.find(categoriesOfGender => categoriesOfGender.accessories);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navigationMenuLink = `text-base lg:text-lg font-medium !px-2 !py-1 lg:!px-4 lg:!py-2`;

  //  console.log("categoriesOfGenders", categoriesOfGenders);
  //  console.log("categoriesOfMan", categoriesOfMan);
  //  {categoriesOfMan?.men?.map((subCategory => console.log(subCategory?.subCategory)))}

    return (
        <section className="flex items-center relative p-2 !pr-2 md:!pr-10">
        {/* toggle Hamburger Handle */}
        <div className="md:hidden">
          {toggleHamburger ? (
            <> <X onClick={() => setToggleHamburger(!toggleHamburger)} size={30} className="mx-2" /> </>
          ) : (
            <> <AlignJustify onClick={() => setToggleHamburger(!toggleHamburger)} size={30} className="mx-2" /> </>
          )}
        </div>

        {/* Logo Text */}
        <button
          className={`cursor-default shrink-0 text-base md:text-xl lg:text-3xl font-semibold mr-4 md:mr-10 lg:mr-14 ${poppins.className}`}
        >
          {/* Happy Shop */}

          {session?.user?.name}
        </button>

        {/* NavigationMenu for Tab and Desktop view */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} ${navigationMenuLink}`}
              >
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href={`/categories/men`}>
                <NavigationMenuTrigger className={navigationMenuLink}>
                  Men
                  <ChevronDownIcon
                    className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
                    aria-hidden="true"
                  />
                </NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {categoriesOfMan?.men?.map((subCategory : SubCategoriesType | null, id) => (
                    <NavigationMenuLink asChild key={id}>
                      <Link href={`/categories/men/${subCategory?.subCategory?.split(" ").join("-")}`}>
                        <div className="text-sm lg:text-base leading-none font-medium">
                          {subCategory?.subCategory}
                        </div>
                        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                          {subCategory?.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={`/categories/women`}>
               <NavigationMenuTrigger className={navigationMenuLink}>
                  Women
                  <ChevronDownIcon
                    className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
                    aria-hidden="true"
                  />
                </NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {categoriesOfwomen?.women?.map((subCategory : SubCategoriesType | null, id) => (
                    <NavigationMenuLink asChild key={id}>
                      <Link href={`/categories/women/${subCategory?.subCategory?.split(" ").join("-")}`}>
                        <div className="text-sm lg:text-base leading-none font-medium">
                          {subCategory?.subCategory}
                        </div>
                        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                          {subCategory?.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={`/categories/kids`}>
                <NavigationMenuTrigger className={navigationMenuLink}>
                  Kids
                  <ChevronDownIcon
                    className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
                    aria-hidden="true"
                  />
                </NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-2 md:w-[300px] lg:w-[400px]">
                  {categoriesOfkids?.kids?.map((subCategory : SubCategoriesType | null, id) => (
                    <NavigationMenuLink asChild key={id}>
                      <Link href={`/categories/kids/${subCategory?.subCategory}`}>
                       <div className="text-sm lg:text-base leading-none font-medium">
                          {subCategory?.subCategory}
                        </div>
                        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                          {subCategory?.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={`/categories/accessories`}>
                <NavigationMenuTrigger className={navigationMenuLink}>
                  Accessories
                  <ChevronDownIcon
                    className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
                    aria-hidden="true"
                  />
                </NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-2 md:w-[300px] lg:w-[400px]">
                  {categoriesOfaccessories?.accessories?.map((subCategory : SubCategoriesType | null, id) => (
                    <NavigationMenuLink asChild key={id}>
                      <Link href={`/categories/accessories/${subCategory?.subCategory}`}>
                       <div className="text-sm lg:text-base leading-none font-medium">
                          {subCategory?.subCategory}
                        </div>
                        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                          {subCategory?.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search bar of product */}
        <div className="flex w-full items-center mx-2 gap-1">
          <Search className="hidden lg:flex " />
          <Input
            onChange={(e) => setSearchProduct(e.target.value)}
            className="w-full"
            type="text"
            placeholder="Search..."
          />
        </div>

        {/* Authentication related Menu */}
        <NavigationMenu viewport={false} className="">
          <NavigationMenuList>
            <NavigationMenuItem className="">
              <NavigationMenuTrigger className={navigationMenuLink}>
                <CircleUserRound />
                <ChevronDownIcon
                  className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
                  aria-hidden="true"
                />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="!absolute w-auto -left-6 md:left-0">
                <ul className="grid gap-1">
                  <Link href="/account/register">
                    <Button variant="ghost" className="text-base lg:text-lg py-1 px-2" >
                      Register
                    </Button>
                  </Link>
                  <Link href="/account/login">
                    <Button variant="ghost" className="text-base lg:text-lg py-1 px-2" >
                      Login
                    </Button>
                  </Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* NavigationMenu for only mobile view */}
        {width <= 767 && (
          <div
            className={`absolute top-full overflow-x-hidden 
               transition-all duration-200 ease-in-out ${
                 toggleHamburger
                   ? "w-4/5 translate-x-0"
                   : "w-0 -translate-x-full"
               } `}
          >
            <MobileView />
          </div>
        )}
      </section>
    );
};

export default NavberClient;