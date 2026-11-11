import { SubCategoriesType } from "@/app/utils/interfaces";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
import { LayoutDashboard, Minus, Plus } from "lucide-react";
import Link from "next/link";

type DropDownMenuCategoriesType = { titleOfCategory: string; link: string; subCategories: SubCategoriesType[]};
type TypeOfProps = { categories: DropDownMenuCategoriesType[] }

const MobileView = ({categories}: TypeOfProps) => {

  return (
    <div className="mr-0 p-2 bg-slate-50">
      <Accordion type="single" collapsible className="w-full">
      {
        categories?.map((menulist: DropDownMenuCategoriesType) =>
            
        <AccordionItem value={menulist?.titleOfCategory} key={menulist?.titleOfCategory}>
          <AccordionTrigger className="flex items-center justify-between group pt-2 pb-0">
            <span className="text-lg font-medium">{menulist?.titleOfCategory}</span>
            <span className="ml-2">
              <Plus className="h-5 w-5 transition-all duration-200 group-data-[state=open]:hidden" />
              <Minus className="h-5 w-5 transition-all duration-200 hidden group-data-[state=open]:inline" />
            </span>
          </AccordionTrigger>

          <AccordionContent className="ml-3 p-0">
            <ul>
              {menulist?.subCategories?.map((subCategory : SubCategoriesType | null, id) => (
                <li key={id} className="my-2">
                  <Link type="button" href={`${menulist.link}/${subCategory?.subCategory?.split(" ").join("-")}`}
                  className="active:bg-blue-500 text-black  border-l border-l-blue-500 px-2 text-base leading-none font-medium"
                  >
                    {subCategory?.subCategory}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        )
        }

        <AccordionItem value="dashboard">
          <Link href="/dashboard" className="flex items-center justify-between group pt-2 pb-0">
            <span className="text-lg font-medium">dashboard</span>
            <span className="ml-2">
              <LayoutDashboard className="h-5 w-5 transition-all duration-200 group-data-[state=open]:hidden" />
            </span>
          </Link>
        </AccordionItem>

      </Accordion>
    </div>
  );
};

export default MobileView;
