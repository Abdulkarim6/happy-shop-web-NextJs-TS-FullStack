"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  ChevronDownIcon,
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  CircleUserRound,
  Search,
} from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { Product } from "@/app/interfaces/product";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
  const [searchProduct, setSearchProduct] = useState("");
  console.log(searchProduct);

  return (
    <section className="sticky top-0 bg-slate-200">
      <NavigationMenu className="p-2 !pr-10">
        <button
          className={`cursor-default shrink-0 text-xl md:text-2xl lg:text-3xl font-semibold mr-10 md:mr-14 ${poppins.className}`}
        >
          Happy Shop
        </button>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
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
            <NavigationMenuTrigger>
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
            <NavigationMenuTrigger>
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
            <NavigationMenuTrigger>
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

        <div className="flex w-full items-center mx-2 gap-1">
          <Search />
          <Input
            onChange={(e) => setSearchProduct(e.target.value)}
            className="w-full"
            type="text"
            placeholder="Search..."
          />
        </div>

        <NavigationMenu viewport={false}>
          <NavigationMenuList className="">
            <NavigationMenuItem className="">
              <NavigationMenuTrigger>
                <CircleUserRound />
                <ChevronDownIcon
                  className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
                  aria-hidden="true"
                />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="!absolute">
                <ul className="grid gap-1 max-w-max">
                  <NavigationMenuLink asChild className="py-1 px-2">
                    <Link href="">Register</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild className="py-1 px-2">
                    <Link href="">Login</Link>
                  </NavigationMenuLink>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </NavigationMenu>
    </section>
  );
};

export default Navber;
