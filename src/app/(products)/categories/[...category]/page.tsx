import Link from "next/link";
import { CategoriesByAudienceType} from "@/app/utils/interfaces";
import Image, { StaticImageData } from "next/image";
import BannerTitleComponent from "@/app/shared/BannerTitleComponent/BannerTitleComponent";
import Products from "@/app/components/productsPageComponents/Products/Products";

import { poppins } from "@/lib/font"; 
import CustomerBenefits from "@/app/components/homeComponents/CustomerBenefits/CustomerBenefits";
import { categoriesForAllArray } from "@/app/utils/categoriesForAll";

type typeforcategories = {
    targetAudience: string;
    bannerImg: StaticImageData;
    bannerTitle: string;
    bannerSubTitle: string;
    categoriesByAudience: CategoriesByAudienceType[];
}

const imageStyle = { border: "1px solid #fff" };

const decodeParams = async(values:string[]) =>{
// ['men', 'Trousers-%26-T-shirt'] 👉 ['men', 'Trousers-&-T-shirt']
return values?.map(v => decodeURIComponent(v));
}

const page = async ({ params }: { params: Promise<{ category: string[]}> }) => {
  const categoriesDataForAll: typeforcategories[] = await categoriesForAllArray();

  const { category } = await params; // like 👉 Promise<{ category: ['men', 'Pant'] }>
  const decodedParams = await decodeParams(category);
  const urlPath = decodedParams?.join("/").toLocaleLowerCase();

  const categoriesByAudience = categoriesDataForAll.find(
    (item) => item.targetAudience.toLowerCase() === urlPath
  );


  console.log(categoriesDataForAll);
  
  let content = null;

  // categories for individual targetAudience(men OR women OR kids OR Acc)
  // url path: categories/men OR categories/women OR categories/kids OR categories/Accessories
  if (categoriesByAudience) {
    content = (
      <section>
        {/* --- Banner section --- */}
        <div>
          <figure className="relative w-full h-[330px] md:h-[450px] lg:h-[550px]">
            <Image
              src={categoriesByAudience?.bannerImg}
              style={imageStyle}
              alt={categoriesByAudience?.bannerTitle}
              fill
              priority
            />
            <div className="absolute top-0 w-full h-full flex justify-end bg-r-overlay ">
              <BannerTitleComponent
                title={categoriesByAudience?.bannerTitle}
                subTitle={categoriesByAudience?.bannerSubTitle}
              />
            </div>
          </figure>
        </div>

        <div>
          {/* --- Categories Grid Section -- */}
          <h3 className="text-2xl md:text-4xl font-semibold text-center my-3 md:my-5">
            SHOP BY CATEGORIES
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 w-full mx-auto p-2">
            {categoriesByAudience?.categoriesByAudience?.map(
              (categoryByAudience: CategoriesByAudienceType, id: number) => (
                <Link
                  key={id}
                  href={`/categories/${urlPath}/${categoryByAudience?.categorySlug}`}
                >
                  <Image
                    src={categoryByAudience?.image}
                    alt={categoryByAudience.categoryTitle}
                    width={450}
                    height={500}
                    className="rounded hover:rounded-md overflow-hidden hover:scale-105 transition-transform opacity-90"
                  />
                  <div className={`my-2 ${poppins.className}`}>
                    <h3 className="text-sm md:text-3xl text-center leading-none font-medium my-2">
                      {categoryByAudience.categoryTitle}
                    </h3>
                    <p className="text-base font-medium">
                      {categoryByAudience.description}
                    </p>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
        <CustomerBenefits />
      </section>
    );
  }

  // category for individual targetAudience(men OR women OR kids OR Acc)
  // url path: categories/men/pants OR categories/men/t-shirts OR categories/women/t-shirts OR etc.
  if (urlPath.includes("/")) {
    content = <Products decodedParams={decodedParams} />;
  }

  return <div className="md:px-3 mt-0 md:mt-2">{content}</div>;
};

export default page;