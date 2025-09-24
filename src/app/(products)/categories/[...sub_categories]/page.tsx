import { getCategories } from "@/app/actions/products/getCategories";
import Link from "next/link";
//import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, } from "@/components/ui/navigation-menu";
import { SubCategoriesType, CategoriesType, Product } from "@/app/utils/interfaces";
import Image from "next/image";
import { getAllProducts } from "@/app/actions/products/getAllProducts";
import { decodeParams } from "@/app/utils/decodeParams";
import { filteredDataBySubcategory } from "@/app/utils/filteredDataBySubcategory";
import BannerRightTitleComponent from "@/app/shared/BannerRightTitleComponent/BannerRightTitleComponent";

import man from "../../../../../public/productsPageBannerImages/162770 (2).jpg";
import woman from "../../../../../public/productsPageBannerImages/122063.jpg";
import acc from "../../../../../public/productsPageBannerImages/acc.png";
import k from "../../../../../public/productsPageBannerImages/k.jpeg";

const imageStyle = {
  border: "1px solid #fff",
  width: "100%",
  height: "550px",
};

const page = async ({ params }: { params: Promise<{ sub_categories: string[]}> }) => {
  const sub_categories = await params;
  const allProductsOfCategories: Product[] = await getAllProducts();
  
  const categoriesOfGenders: CategoriesType[] = await getCategories();
  const categoriesOfMan = categoriesOfGenders?.find(categoriesOfGender => categoriesOfGender.men);
  const thumbMen = await categoriesOfMan?.thumbnail;
  const categoriesOfwomen = categoriesOfGenders?.find(categoriesOfGender => categoriesOfGender.women);
  const categoriesOfkids = categoriesOfGenders?.find(categoriesOfGender => categoriesOfGender.kids);
  const categoriesOfaccessories = categoriesOfGenders?.find(categoriesOfGender => categoriesOfGender.accessories);

  const decodedParams = await decodeParams(sub_categories);
  const decodedSub_categories = decodedParams?.sub_categories;
  const urlPathe = decodedSub_categories.join("/");
  
  let content;

  if (urlPathe === "men") {
    content = (
      <section>
        <div>
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
                <div className="text-sm md:text-3xl text-center leading-none font-medium my-2">
                  {subCategory?.subCategory}
                </div>
                <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                  {subCategory?.description}
                </p>
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
    </section>
  }
  else if(urlPathe === "kids"){
    content = (
      <section>
        <div>
          <figure className="relative">
            <Image src={k} style={imageStyle} alt="banner" />
            <div className="absolute top-0 w-full h-full bg-l-overlay">
              <BannerRightTitleComponent
                title="KIDS"
                subTitle="Explore our kids collection designed for endless play, happy smiles, and unforgettable memories"
              />
            </div>
          </figure>
        </div>
      </section>
    );
  }
  else if(urlPathe === "accessories"){
    content = <section>
      <div>
          <figure className="relative">
            <Image src={acc} style={imageStyle} alt="banner" />
            <div className="absolute top-0 w-full h-full flex justify-end bg-r-overlay ">
              <BannerRightTitleComponent
                title="Accessories"
                subTitle="Explore our Mans accessories designed for endless play, happy smiles, and unforgettable memories"
              />
            </div>
          </figure>
        </div>
    </section>
  }


  if (urlPathe.startsWith("men/")) {
   const dataBySubcategory = 
     allProductsOfCategories?.filter(allProductsOfCategory => 
     filteredDataBySubcategory(allProductsOfCategory, decodedSub_categories));
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
    <div>
     {content}
    </div>
  );
};

export default page;
