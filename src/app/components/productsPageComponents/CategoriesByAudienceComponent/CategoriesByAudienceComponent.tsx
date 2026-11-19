import BannerTitleComponent from "@/app/shared/BannerTitleComponent/BannerTitleComponent";
import { CategoriesByAudienceType } from "@/app/utils/interfaces";
import { poppins } from "@/lib/font";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import CustomerBenefits from "../../homeComponents/CustomerBenefits/CustomerBenefits";
type typeforcategories = {
    targetAudience: string;
    bannerImg: StaticImageData;
    bannerTitle: string;
    bannerSubTitle: string;
    categoriesByAudience: CategoriesByAudienceType[];
}

type PropTypes = {
    decodedParams: string[];
    categoriesByAudience:typeforcategories;
}

const CategoriesByAudienceComponent = async ({categoriesByAudience, decodedParams}:PropTypes) => {
  const urlPath = decodedParams?.join("/").toLocaleLowerCase();
  const imageStyle = { border: "1px solid #fff" };

    return (
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
};

export default CategoriesByAudienceComponent;