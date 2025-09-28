import { getCategories } from "@/app/actions/products/getCategories";
import Link from "next/link";
//import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, } from "@/components/ui/navigation-menu";
import { SubCategoriesType, CategoriesType, Product } from "@/app/utils/interfaces";
import Image from "next/image";
import { getAllProducts } from "@/app/actions/products/getAllProducts";
import { decodeParams } from "@/app/utils/decodeParams";
import { filteredDataBySubcategory } from "@/app/utils/filteredDataBySubcategory";
import BannerRightTitleComponent from "@/app/shared/BannerRightTitleComponent/BannerRightTitleComponent";
import { Button } from "@/components/ui/button";
import {SlidersHorizontal, Trash2 } from "lucide-react";

import man from "../../../../../public/productsPageBannerImages/162770 (2).jpg";
import woman from "../../../../../public/productsPageBannerImages/122063.jpg";
import kids from "../../../../../public/productsPageBannerImages/k.jpeg";
import accessories from "../../../../../public/productsPageBannerImages/acc.png";
import { poppins } from "@/app/layout";

const imageStyle = {
  border: "1px solid #fff",
  width: "100%",
  height: "550px",
};

const page = async ({ params }: { params: Promise<{ sub_categories: string[]}> }) => {
  const allProductsOfCategories: Product[] = await getAllProducts(); // loaded all products
  
  const categoriesOfGenders: CategoriesType[] = await getCategories(); // loaded all categories
  const categoriesOfMan = categoriesOfGenders?.find(categoriesOfGender => categoriesOfGender.men);
  const categoriesOfwomen = categoriesOfGenders?.find(categoriesOfGender => categoriesOfGender.women);
  const categoriesOfkids = categoriesOfGenders?.find(categoriesOfGender => categoriesOfGender.kids);
  const categoriesOfaccessories = categoriesOfGenders?.find(categoriesOfGender => categoriesOfGender.accessories);
  
  const sub_categories = await params; // like: ['women', 'Saree'] 
  const decodedParams = await decodeParams(sub_categories);
  const decodedSub_categories = decodedParams?.sub_categories;
  const urlPathe = decodedSub_categories.join("/");
  
  let content;

  if (urlPathe === "men") {
    content = (
      <section>
        <div>
         {/* --Banner for men page-- */}
          <figure className="relative">
            <Image src={man} style={imageStyle} alt="banner" />
            <div className="absolute top-0 w-full h-full flex justify-end bg-r-overlay ">
              <BannerRightTitleComponent
                title="Men"
                subTitle="Explore our Mans collection designed for endless play, happy smiles, and unforgettable memories"
              />
            </div>
          </figure>
        </div>
        
        <div>
          {/* --Categories for men page-- */}
          <h3 className="text-4xl font-semibold text-center my-3 md:my-5">SHOP BY CATEGORIES</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {categoriesOfMan?.men?.map((subCategory: SubCategoriesType, id) => (
              <Link
                key={id}
                href={`/categories/${ categoriesOfMan?.targetAudience
                }/${subCategory?.subCategory?.split(" ").join("-")}`}
              >
                <Image
                  src={subCategory?.image} alt="Picture of the author" width={450} height={500}
                  className="rounded-md hover:rounded-lg overflow-hidden hover:scale-105 transition-transform opacity-90"
                />
                <div className={`my-2 ${poppins.className}`}>
                  <h3 className="text-sm md:text-3xl text-center leading-none font-medium my-2">
                    {subCategory?.subCategory}
                  </h3>
                  <p className="text-base font-medium">
                     {subCategory?.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </section>
    );
  } 
  else if(urlPathe === "women"){
    content = <section>
       <div>
         {/* --Banner for women page-- */}
          <figure className="relative">
            <Image src={woman} style={imageStyle} alt="banner" />
            <div className="absolute top-0 w-full h-full flex justify-end bg-r-overlay ">
              <BannerRightTitleComponent
                title="Women"
                subTitle="Explore our womans collection designed for endless play, happy smiles, and unforgettable memories"
              />
            </div>
          </figure>
        </div>

        <div>
          {/* --Categories for women page-- */}
          <h3 className="text-4xl font-semibold text-center my-3 md:my-5">SHOP BY CATEGORIES</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {categoriesOfwomen?.women?.map((subCategory: SubCategoriesType, id) => (
              <Link
                key={id}
                href={`/categories/${ categoriesOfwomen?.targetAudience
                }/${subCategory?.subCategory?.split(" ").join("-")}`}
              >
                <Image
                  src={subCategory?.image} alt="Picture of the author" width={400} height={450}
                  className="rounded-md hover:rounded-lg overflow-hidden hover:scale-105 transition-transform opacity-90"
                />
                <div className={`my-2 ${poppins.className}`}>
                  <h3 className="text-sm md:text-3xl text-center leading-none font-medium my-2">
                    {subCategory?.subCategory}
                  </h3>
                  <p className="text-base font-medium">
                     {subCategory?.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
    </section>
  }
  else if(urlPathe === "kids"){
    content = (
      <section>
        <div>
          {/* --Banner for kids page-- */}
          <figure className="relative">
            <Image src={kids} style={imageStyle} alt="banner" />
            <div className="absolute top-0 w-full h-full bg-l-overlay">
              <BannerRightTitleComponent
                title="KIDS"
                subTitle="Explore our kids collection designed for endless play, happy smiles, and unforgettable memories"
              />
            </div>
          </figure>
        </div>

        <div>
          {/* --Categories for kids page-- */}
          <h3 className="text-4xl font-semibold text-center my-3 md:my-5"> SHOP BY CATEGORIES </h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {categoriesOfkids?.kids?.map(
              (subCategory: SubCategoriesType, id) => (
                <Link
                  key={id}
                  href={`/categories/${
                    categoriesOfkids?.targetAudience
                  }/${subCategory?.subCategory?.split(" ").join("-")}`}
                >
                  <Image
                    src={subCategory?.image} alt="Picture of the author" width={400} height={450}
                    className="rounded-md hover:rounded-lg overflow-hidden hover:scale-105 transition-transform opacity-90"
                  />
                  <div className={`my-2 ${poppins.className}`}>
                    <h3 className="text-sm md:text-3xl text-center leading-none font-medium my-2">
                      {subCategory?.subCategory}
                    </h3>
                    <p className="text-base font-medium">
                      {subCategory?.description}
                    </p>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>
    );
  }
  else if(urlPathe === "accessories"){
    content = <section>
      <div>
         {/* --Banner for accessories page-- */}
          <figure className="relative">
            <Image src={accessories} style={imageStyle} alt="banner" />
            <div className="absolute top-0 w-full h-full flex justify-end bg-r-overlay ">
              <BannerRightTitleComponent
                title="Accessories"
                subTitle="Explore our Mans accessories designed for endless play, happy smiles, and unforgettable memories"
              />
            </div>
          </figure>
      </div>

      <div>
          {/* --Categories for men page-- */}
          <h3 className="text-4xl font-semibold text-center my-3 md:my-5">SHOP BY CATEGORIES</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {categoriesOfaccessories?.accessories?.map((subCategory: SubCategoriesType, id) => (
              <Link
                key={id}
                href={`/categories/${ categoriesOfaccessories?.targetAudience
                }/${subCategory?.subCategory?.split(" ").join("-")}`}
              >
                <Image
                  src={subCategory?.image} alt="Picture of the author" width={400} height={450}
                  className="rounded-md hover:rounded-lg overflow-hidden hover:scale-105 transition-transform opacity-90"
                />
                <div className={`my-2 ${poppins.className}`}>
                  <h3 className="text-sm md:text-3xl text-center leading-none font-medium my-2">
                    {subCategory?.subCategory}
                  </h3>
                  <p className="text-base font-medium">
                     {subCategory?.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
    </section>
  }


  if (urlPathe.startsWith("men/")) {
   const dataBySubcategory = 
     allProductsOfCategories?.filter(allProductsOfCategory => 
     filteredDataBySubcategory(allProductsOfCategory, decodedSub_categories));
    // console.log(dataBySubcategory);
     
     content = 
        <section className="w-full flex gap-2">
          <div className="w-1/5">
            <h4 className="flex items-center"> 
              <SlidersHorizontal size={18}/> <span className="text-xl font-bold ml-2"> FILTER BY </span>
            </h4>
            <div className="w-full border-1 border-gray-300 my-2 pr-12"></div>
            <div>
              <Button variant="ghost" buttonSize="sm" className="flex items-center"> 
                <Trash2 size={18}/> <span className="text-lg font-medium"> CLEAR ALL </span>
              </Button>
            </div>
          </div>
          <div className="w-4/5 grid grid-cols-2 lg:grid-cols-3 gap-5">
            {dataBySubcategory?.map((product: Product, id) => (
              <Link
                key={id}
                href={`/categories/${ categoriesOfMan?.targetAudience
                }/${product?.subCategory?.split(" ").join("-")}`}
              >
                <Image
                  src={product?.image} alt="Picture of the author" width={450} height={550}
                  className="overflow-hidden hover:scale-105 transition-transform opacity-90"
                />
                <div className={`my-2 ${poppins.className}`}>
                  <h3 className="text-sm md:text-2xl text-center leading-none font-medium my-2">
                    {product?.name}
                  </h3>
                  <p className="text-base font-medium">
                     {product?.description}
                  </p>
                  <p className="text-lg font-light">
                     BDT {product?.price} TK
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
  } 
  else if(urlPathe.startsWith("women/") ) {
    const dataBySubcategory = 
      allProductsOfCategories?.filter(allProductsOfCategory => 
      filteredDataBySubcategory(allProductsOfCategory, decodedSub_categories));
  }
  else if(urlPathe.startsWith("kids/") ) {
    const dataBySubcategory = 
      allProductsOfCategories?.filter(allProductsOfCategory => 
      filteredDataBySubcategory(allProductsOfCategory, decodedSub_categories));
  }
  else if(urlPathe.startsWith("accessories/") ) {
    const dataBySubcategory = 
      allProductsOfCategories?.filter(allProductsOfCategory => 
      filteredDataBySubcategory(allProductsOfCategory, decodedSub_categories));
  }


  return (
    <div className="px-3 mt-2">
     {content}
    </div>
  );
};

export default page;
