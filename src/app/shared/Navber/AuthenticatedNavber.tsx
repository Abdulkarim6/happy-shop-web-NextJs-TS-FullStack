import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, } from "@/components/ui/navigation-menu";
import { ChevronDownIcon, CircleUserRound } from "lucide-react";
import Link from "next/link";

const AuthenticatedNavber = async() => {
    const session = await auth();
    // console.log(9, session, new Date().toLocaleString());
    
    
    const navigationMenuLink = `text-base lg:text-lg font-medium !px-2 !py-1 lg:!px-4 lg:!py-2`;
    
    return (
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
                  <Link href="/account/auth?mode=register">
                    <Button variant="ghost" className="text-base lg:text-lg py-1 px-2" >
                      Register
                    </Button>
                  </Link>
                  {
                    session?.user ?
                  <form>
                    <Button 
                      type="submit"
                      formAction={ async () =>{
                        "use server";
                        await signOut();
                      }}
                      variant="ghost" className="text-base lg:text-lg py-1 px-2" >
                      LogOut
                    </Button>
                  </form>
                    :
                  <Link href="/account/auth?mode=login">
                    <Button variant="ghost" className="text-base lg:text-lg py-1 px-2" >
                      Login
                    </Button>
                  </Link>
                  }
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
    );
};

export default AuthenticatedNavber;