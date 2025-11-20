import { CategoriesType, SubCategoriesType } from "@/app/utils/interfaces";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
import { Home, LayoutDashboard, Minus, Plus } from "lucide-react";
import Link from "next/link";

type TypeOfGenders = {
  categoriesOfMan : CategoriesType | undefined;
  categoriesOfwomen : CategoriesType | undefined;
  categoriesOfkids : CategoriesType | undefined;
  categoriesOfaccessories : CategoriesType | undefined;
}

// const MobileView = ({ onClose }: Props) => {
const MobileView = ({categoriesOfMan, categoriesOfwomen, categoriesOfkids, categoriesOfaccessories}: TypeOfGenders) => {
  return (
    <div className="mr-0 p-2 bg-slate-50">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="Home">
          <Link href="/" className="flex items-center justify-between group pt-2 pb-0">
            <span className="text-lg font-medium">Home</span>
            <span className="ml-2">
              <Home className="h-5 w-5 transition-all duration-200 group-data-[state=open]:hidden" />
            </span>
          </Link>
        </AccordionItem>

        <AccordionItem value="men">
          <AccordionTrigger className="flex items-center justify-between group pt-2 pb-0">
            <span className="text-lg font-medium">Men</span>
            <span className="ml-2">
              <Plus className="h-5 w-5 transition-all duration-200 group-data-[state=open]:hidden" />
              <Minus className="h-5 w-5 transition-all duration-200 hidden group-data-[state=open]:inline" />
            </span>
          </AccordionTrigger>
          <AccordionContent className="ml-3 p-0">
            <ul>
              {categoriesOfMan?.men?.map((subCategory : SubCategoriesType | null, id) => (
                <li key={id} className="my-2">
                  <Link type="button" href={`/categories/men/${subCategory?.subCategory?.split(" ").join("-")}`}
                  className="active:bg-blue-500 text-black  border-l border-l-blue-500 px-2 text-base leading-none font-medium"
                  >
                    {subCategory?.subCategory}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="women">
          <AccordionTrigger className="flex items-center justify-between group pt-2 pb-0">
            <span className="text-lg font-medium">Women</span>
            <span className="ml-2">
              <Plus className="h-5 w-5 transition-all duration-200 group-data-[state=open]:hidden" />
              <Minus className="h-5 w-5 transition-all duration-200 hidden group-data-[state=open]:inline" />
            </span>
          </AccordionTrigger>
          <AccordionContent className="ml-3 p-0">
            <ul>
              {categoriesOfwomen?.women?.map((subCategory : SubCategoriesType | null, id) => (
                <li key={id} className="my-2">
                  <Link type="button" href={`/categories/women/${subCategory?.subCategory?.split(" ").join("-")}`}
                  className="active:bg-blue-500 text-black  border-l border-l-blue-500 px-2 text-base leading-none font-medium"
                  >
                    {subCategory?.subCategory}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="kids">
          <AccordionTrigger className="flex items-center justify-between group pt-2 pb-0">
            <span className="text-lg font-medium">Kids</span>
            <span className="ml-2">
              <Plus className="h-5 w-5 transition-all duration-200 group-data-[state=open]:hidden" />
              <Minus className="h-5 w-5 transition-all duration-200 hidden group-data-[state=open]:inline" />
            </span>
          </AccordionTrigger>
          <AccordionContent className="ml-3 p-0">
            <ul>
              {categoriesOfkids?.kids?.map((subCategory : SubCategoriesType | null, id) => (
                <li key={id} className="my-2">
                  <Link type="button" href={`/categories/kids/${subCategory?.subCategory?.split(" ").join("-")}`}
                  className="active:bg-blue-500 text-black  border-l border-l-blue-500 px-2 text-base leading-none font-medium"
                  >
                    {subCategory?.subCategory}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="accessories">
          <AccordionTrigger className="flex items-center justify-between group pt-2 pb-0">
            <span className="text-lg font-medium">Accessories</span>
            <span className="ml-2">
              <Plus className="h-5 w-5 transition-all duration-200 group-data-[state=open]:hidden" />
              <Minus className="h-5 w-5 transition-all duration-200 hidden group-data-[state=open]:inline" />
            </span>
          </AccordionTrigger>
          <AccordionContent className="ml-3 p-0">
            <ul>
              {categoriesOfaccessories?.accessories?.map((subCategory : SubCategoriesType | null, id) => (
                <li key={id} className="my-2">
                  <Link type="button" href={`/categories/accessories/${subCategory?.subCategory?.split(" ").join("-")}`}
                  className="active:bg-blue-500 text-black  border-l border-l-blue-500 px-2 text-base leading-none font-medium"
                  >
                    {subCategory?.subCategory}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

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
