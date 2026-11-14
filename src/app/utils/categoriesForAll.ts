import { getCategories } from "./getCategories";
import { CategoriesForAllType, CategoriesByAudienceType } from "./interfaces";
import manBannerImg from "../../../public/productsPageBannerImages/man.webp";
import womenBannerImg from "../../../public/productsPageBannerImages/girl.webp";
import kidsBannerImg from "../../../public/productsPageBannerImages/kids.webp";
import accBannerImg from "../../../public/productsPageBannerImages/acce.webp";

export const categoriesForAllArray = async () => {
  const categoriesForAll = await getCategories();

  const categoryOfMen: CategoriesByAudienceType[] = categoriesForAll?.find((item: CategoriesForAllType) => item.targetAudience === "men")?.men ?? [];
  const categoryOfWomen: CategoriesByAudienceType[] = categoriesForAll?.find((item: CategoriesForAllType) => item.targetAudience === "women")?.women ?? [];
  const categoryOfKids: CategoriesByAudienceType[] = categoriesForAll?.find((item: CategoriesForAllType) => item.targetAudience === "kids")?.kids ?? [];
  const categoryOfAccessories: CategoriesByAudienceType[] = categoriesForAll?.find((item: CategoriesForAllType) => item.targetAudience === "accessories")?.accessories ?? [];

  return [
    {
      targetAudience: "Men",
      bannerImg: manBannerImg,
      bannerTitle: "Men",
      bannerSubTitle: "Explore our Men's collection designed for everyday style, comfort, and confidence",
      categoriesByAudience: categoryOfMen,
    },
    {
      targetAudience: "Women",
      bannerImg: womenBannerImg,
      bannerTitle: "Women",
      bannerSubTitle: "Explore our Women's collection designed for elegance, comfort, and unforgettable moments",
      categoriesByAudience: categoryOfWomen,
    },
    {
      targetAudience: "Kids",
      bannerImg: kidsBannerImg,
      bannerTitle: "KIDS",
      bannerSubTitle: "Explore our Kids collection designed for endless play, happy smiles, and unforgettable memories",
      categoriesByAudience: categoryOfKids,
    },
    {
      targetAudience: "Accessories", 
      bannerImg: accBannerImg,
      bannerTitle: "Accessories",
      bannerSubTitle: "Explore our Accessories collection to complete your everyday look",
      categoriesByAudience: categoryOfAccessories,
    }
  ];
};


//-------------------------- Level-based Naming -------------------------------------

// targetedAudiences = ['man', 'women', 'kids', 'acc'];
// targetedAudience = 'man';

// categoriesForAll = ['shirts', 'pants', 'tops', 'watches'];
// categoriesByAudience = ['shirts', 'pants'];
// categoryByAudience = ['shirts'];
// subCategory = shirts.shirt_1;


// পুরো পাথ বা রাউট সেগমেন্ট:
//const categoryPath = 'man/pants';        // বা categoriesByAudience = ['man', 'pants']
