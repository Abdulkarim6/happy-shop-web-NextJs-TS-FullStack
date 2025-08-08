"use client";

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, } from "@/components/ui/navigation-menu";
import { AlignJustify, ChevronDownIcon, CircleUserRound, Search, X, } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { Product } from "@/app/interfaces/product";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import MobileView from "./MobileView";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const categorys: Product[] = [
  {
    id: 1,
    name: "Boys Formal Shirt",
    description: "Comfortable cotton t-shirt for everyday use.",
    brand: "KidsZone",
    category: "Shirt",
  },
  {
    id: 2,
    name: "Boys Formal Shirt",
    description: "Comfortable cotton t-shirt for everyday use.",
    brand: "KidsZone",
    category: "Shirt",
  },
  {
    id: 3,
    name: "Boys Formal Shirt",
    description: "Comfortable cotton t-shirt for everyday use.",
    brand: "KidsZone",
    category: "Shirt",
  },
  {
    id: 4,
    name: "Boys Formal Shirt",
    description: "Comfortable cotton t-shirt for everyday use.",
    brand: "KidsZone",
    category: "Shirt",
  },
  {
    id: 5,
    name: "Boys Formal Shirt",
    description: "Comfortable cotton t-shirt for everyday use.",
    brand: "KidsZone",
    category: "Shirt",
  },
  {
    id: 6,
    name: "Boys Casual Shirt",
    description: "Comfortable cotton shirt for everyday use.",
    brand: "KidsZone",
    category: "Shirt",
  },
  {
    id: 7,
    name: "Boys Casual Shirt",
    description: "Comfortable cotton shirt for everyday use.",
    brand: "KidsZone",
    category: "Shirt",
  },
  {
    id: 8,
    name: "Boys Casual Shirt",
    description: "Comfortable cotton shirt for everyday use.",
    brand: "KidsZone",
    category: "Shirt",
  },
  {
    id: 9,
    name: "Boys Casual Shirt",
    description: "Comfortable cotton shirt for everyday use.",
    brand: "KidsZone",
    category: "Shirt",
  },
];


const Navber = () => {
  const [searchProduct, setSearchProduct] = useState<string>("");
  const [toggleHamburger, setToggleHamburger] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigationMenuLink = `text-base lg:text-lg font-medium !px-2 !py-1 lg:!px-4 lg:!py-2`;

  return (
    <section className="flex flex-col sticky top-0 bg-slate-100 z-50">
      <section className="flex items-center relative md:p-2 !pr-2 md:!pr-10">
        {/* toggle Hamburger Handle */}
        <div className="md:hidden">
          {toggleHamburger ? (
            <>
              <X onClick={() => setToggleHamburger(!toggleHamburger)} size={30} className="mx-2" />
            </>
          ) : (
            <>
              <AlignJustify onClick={() => setToggleHamburger(!toggleHamburger)} size={30} className="mx-2"
              />
            </>
          )}
        </div>

        {/* Logo Text */}
        <button
          className={`cursor-default shrink-0 text-base md:text-xl lg:text-3xl font-semibold mr-4 md:mr-10 lg:mr-14 ${poppins.className}`}
        >
          Happy Shop
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
              <NavigationMenuTrigger className={navigationMenuLink}>
                Man
                <ChevronDownIcon
                  className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
                  aria-hidden="true"
                />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {categorys.map((category) => (
                    <NavigationMenuLink asChild key={category?.id}>
                      <Link href="">
                        <div className="text-sm leading-none font-medium">
                          {category?.name}
                        </div>
                        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                          {category?.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={navigationMenuLink}>
                Women
                <ChevronDownIcon
                  className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
                  aria-hidden="true"
                />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {categorys.map((category) => (
                    <NavigationMenuLink asChild key={category?.id}>
                      <Link href="">
                        <div className="text-sm leading-none font-medium">
                          {category?.name}
                        </div>
                        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                          {category?.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={navigationMenuLink}>
                Kids
                <ChevronDownIcon
                  className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
                  aria-hidden="true"
                />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {categorys.map((category) => (
                    <NavigationMenuLink asChild key={category?.id}>
                      <Link href="">
                        <div className="text-sm leading-none font-medium">
                          {category?.name}
                        </div>
                        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                          {category?.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={navigationMenuLink}>
                Accessories
                <ChevronDownIcon
                  className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
                  aria-hidden="true"
                />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {categorys.map((category) => (
                    <NavigationMenuLink asChild key={category?.id}>
                      <Link href="">
                        <div className="text-sm leading-none font-medium">
                          {category?.name}
                        </div>
                        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                          {category?.description}
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
              <NavigationMenuContent className="!absolute !bg-fuchsia-800 w-auto -left-6 md:left-0">
                <ul className="grid gap-1">
                  <NavigationMenuLink asChild className="py-1 px-2">
                    <Link href="" className="text-base lg:text-lg">
                      Register
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild className="py-1 px-2">
                    <Link href="" className="text-base lg:text-lg">
                      Login
                    </Link>
                  </NavigationMenuLink>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* NavigationMenu for only mobile view */}
        {
          width <= 767 &&
             <div className={`absolute top-full overflow-x-hidden 
               transition-all duration-200 ease-in-out ${toggleHamburger ? "w-4/5 translate-x-0" : "w-0 -translate-x-full"} `} >
               <MobileView />
             </div>
        }

      </section>
    </section>
  );
};

export default Navber;
