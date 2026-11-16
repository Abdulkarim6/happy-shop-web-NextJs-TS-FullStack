import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ChevronDownIcon, CircleUserRound } from "lucide-react";
import Link from "next/link";
import AuthDropdownMenu from "./AuthDropdownMenu";

const AuthMenu = async() => {
  
  const navigationMenuLink = `text-base lg:text-lg font-medium !px-2 !py-1 lg:!px-4 lg:!py-2`;
  
  return (
      <NavigationMenu viewport={false} className="">
        <NavigationMenuList>
          <NavigationMenuItem className="">
            <NavigationMenuTrigger className={`${navigationMenuLink} bg-transparent rounded-none`}>
              <CircleUserRound className="size-5 lg:size-6"/>
              <ChevronDownIcon
                className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="!absolute w-auto -left-6 md:left-0">
              <ul className="grid gap-1">
                <li>
                   <Link href="/account/auth?mode=register" className="text-base lg:text-lg py-1 px-2">
                       Register
                   </Link>
                </li>
                
                <li>
                  <AuthDropdownMenu/>
                </li>

              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
  );
};

export default AuthMenu;