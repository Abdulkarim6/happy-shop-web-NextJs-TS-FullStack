import Link from "next/link";
//import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, } from "@/components/ui/navigation-menu";
import { SubCategoriesType, CategoriesType, Product } from "@/app/utils/interfaces";
import Image from "next/image";
import { decodeParams } from "@/app/utils/decodeParams";
import { filteredDataBySubcategory } from "@/app/utils/filteredDataBySubcategory";
import BannerTitleComponent from "@/app/shared/BannerTitleComponent/BannerTitleComponent";
import Products from "@/app/components/productsPageComponents/Products/Products";

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
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

   const response = await fetch(`${baseUrl}/api/allProducts`, {cache: "force-cache"});
   if(!response.ok){
     throw new Error("Failed to fetch all Products");
    }
   const allProductsOfCategories = await response.json(); // loads all products via api route

   const res = await fetch(`${baseUrl}/api/categories`,{cache: "force-cache"});
   const resJson = await res.json(); 
   if(!res.ok){
    throw new Error("Failed to fetch categories"); 
   }
   const categoriesOfGenders = await resJson?.data; // loads all categories via api route
  
  const categoriesOfMan = categoriesOfGenders?.find((categoriesOfGender: CategoriesType) => categoriesOfGender.men);
  const categoriesOfwomen = categoriesOfGenders?.find((categoriesOfGender:CategoriesType) => categoriesOfGender.women);
  const categoriesOfkids = categoriesOfGenders?.find((categoriesOfGender:CategoriesType) => categoriesOfGender.kids);
  const categoriesOfaccessories = categoriesOfGenders?.find((categoriesOfGender:CategoriesType) => categoriesOfGender.accessories);
  
  const sub_categories = await params; // like: {sub_categories: Array(2)(2) ['men', 'Pant'} 
  const decodedParams = await decodeParams(sub_categories);
  const decodedSub_categories = decodedParams?.sub_categories;
  const urlPathe = decodedSub_categories.join("/");
  
  let content;

  if (urlPathe === "men") {
    content = 
      <section>
        <div>
         {/* --Banner for men page-- */}
          <figure className="relative">
            <Image src={man} style={imageStyle} alt="banner" />
            <div className="absolute top-0 w-full h-full flex justify-end bg-r-overlay ">
              <BannerTitleComponent
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
            {categoriesOfMan?.men?.map((subCategory: SubCategoriesType, id:number) => (
              <Link
                key={id}
                href={`/categories/men/${subCategory?.subCategory?.split(" ").join("-")}`}
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
  } 
  else if(urlPathe === "women"){
    content = <section>
       <div>
         {/* --Banner for women page-- */}
          <figure className="relative">
            <Image src={woman} style={imageStyle} alt="banner" />
            <div className="absolute top-0 w-full h-full flex justify-end bg-r-overlay ">
              <BannerTitleComponent
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
            {categoriesOfwomen?.women?.map((subCategory: SubCategoriesType, id:number) => (
              <Link
                key={id}
                href={`/categories/women/${subCategory?.subCategory?.split(" ").join("-")}`}
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
              <BannerTitleComponent
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
            {categoriesOfkids?.kids?.map((subCategory: SubCategoriesType, id:number) => (
                <Link
                  key={id}
                  href={`/categories/kids/${subCategory?.subCategory?.split(" ").join("-")}`}
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
              <BannerTitleComponent
                title="Accessories"
                subTitle="Explore our Mans accessories designed for endless play, happy smiles, and unforgettable memories"
              />
            </div>
          </figure>
      </div>

      <div>
          {/* --Categories for accessories page-- */}
          <h3 className="text-4xl font-semibold text-center my-3 md:my-5">SHOP BY CATEGORIES</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {categoriesOfaccessories?.accessories?.map((subCategory: SubCategoriesType, id:number) => (
              <Link
                key={id}
                href={`/categories/accessories/${subCategory?.subCategory?.split(" ").join("-")}`}
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
     allProductsOfCategories?.filter((allProductsOfCategory:Product) => 
     filteredDataBySubcategory(allProductsOfCategory, decodedSub_categories));
    // console.log(dataBySubcategory);
     
    content = <Products dataBySubcategory={dataBySubcategory} 
            categoriesOfAudience={categoriesOfMan} decodedSub_categories={decodedSub_categories}/>;
  } 
  else if(urlPathe.startsWith("women/") ) {
    const dataBySubcategory = 
      allProductsOfCategories?.filter((allProductsOfCategory:Product) => 
      filteredDataBySubcategory(allProductsOfCategory, decodedSub_categories));

    content = <Products dataBySubcategory={dataBySubcategory} 
            categoriesOfAudience={categoriesOfwomen} decodedSub_categories={decodedSub_categories}/>
  }
  else if(urlPathe.startsWith("kids/") ) {
    const dataBySubcategory = 
      allProductsOfCategories?.filter((allProductsOfCategory:Product) => 
      filteredDataBySubcategory(allProductsOfCategory, decodedSub_categories));

      content = <Products dataBySubcategory={dataBySubcategory} 
           categoriesOfAudience={categoriesOfkids} decodedSub_categories={decodedSub_categories}/>;
  }
  else if(urlPathe.startsWith("accessories/") ) {
    const dataBySubcategory = 
      allProductsOfCategories?.filter((allProductsOfCategory:Product) => 
      filteredDataBySubcategory(allProductsOfCategory, decodedSub_categories));
      
      content = <Products dataBySubcategory={dataBySubcategory} 
           categoriesOfAudience={categoriesOfaccessories} decodedSub_categories={decodedSub_categories}/>;
  }


  return (
    <div className="md:px-3 mt-0 md:mt-2">
     {content}
    </div>
  );
};

export default page;
