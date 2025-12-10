"use client"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, } from "@/components/ui/navigation-menu";
import { AlignJustify, ChevronDownIcon, CircleUserRound, Search, ShoppingBag, X, } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { SubCategoriesType, CategoriesType} from "@/app/utils/interfaces";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import MobileView from "./MobileView";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import DisplaySearchedProducts from "./DisplaySearchedProducts";
import { useQuery } from "@tanstack/react-query";
import CartNavber from "./CartNavber";

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

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
function useOrders(){
  return useQuery({
    queryKey:["orders"],
    queryFn: async() => {
      const res = await fetch(`${baseUrl}/api/getOrderedProducts`);
      return await res.json();
    }
  })
};

const NavberClient = ({categoriesOfMan, categoriesOfwomen, categoriesOfkids, categoriesOfaccessories}: TypeOfGenders) => {
    const { data: session } = useSession();
    const [searchForProducts, setSearchForProducts] = useState<string>("");

    const [toggleHamburger, setToggleHamburger] = useState<boolean>(false);
    const [width, setWidth] = useState<number>(0);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navigationMenuLink = `text-base lg:text-lg font-medium !px-2 !py-1 lg:!px-4 lg:!py-2`;

    const { status, data, error, isFetching } = useOrders();

    return (
        <div className="relative w-full">
        <div className="flex items-center p-2 !pr-2 md:!pr-10 relative bg-slate-100 z-10">
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
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} ${navigationMenuLink}`}
              >
                <Link href="/dashboard">Dashboard</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search bar of product */}
        {/* <div className="flex w-full relative items-center mx-2 gap-1">
          <Search className="hidden lg:flex absolute right-1" size={20} />
          <Input
            value={searchForProducts}
            onChange={(e) => setSearchForProducts(e.target.value)}
            className="w-full rounded pl-1"
            type="text"
            placeholder="Search..."
          />
        </div> */}
        
        {/* Shopping Bag */}
        <div 
        onClick={() => setIsCartOpen(!isCartOpen)}
        className="relative title z-30 cursor-pointer">
         <ShoppingBag className="size-7 mr-2 cursor-pointer"/>
         {
           data && 
         <p className="absolute bottom-3 left-3 text-sm font-medium z-10 bg-black text-white py-1 px-2 rounded-full">{data?.length}</p>
         }
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
            className={`absolute top-full left-0 overflow-x-hidden 
               transition-all duration-200 ease-in-out ${
                 toggleHamburger
                   ? "w-3/5 translate-x-0"
                   : "w-0 -translate-x-full"
               } `}
          >
            <MobileView 
             categoriesOfMan={categoriesOfMan}
             categoriesOfwomen={categoriesOfwomen}
             categoriesOfkids={categoriesOfkids}
             categoriesOfaccessories={categoriesOfaccessories}
            />
          </div>
        )}
        </div> 

        {/* showing products by searching */}
        <DisplaySearchedProducts
          searchForProducts={searchForProducts}
          setSearchForProducts={setSearchForProducts}
        />

        <div className={`bg-slate-100 h-screen w-[80%] md:w-[35%] fixed top-0 right-0 z-50 rounded transform 
        transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <CartNavber orders={data} setIsCartOpen={setIsCartOpen}/>
        </div>
        {
          isCartOpen &&
        <div className="fixed w-full h-full bg-black/90 opacity-50"></div>
        }
      </div>
    );
};

export default NavberClient;