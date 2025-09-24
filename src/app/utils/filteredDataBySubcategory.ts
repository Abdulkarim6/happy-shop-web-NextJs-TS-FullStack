import { Product } from "./interfaces";


export const filteredDataBySubcategory = (subCategory : Product, decodedSub_categories: string[]) => {
  // console.log(subCategory.targetAudience?.toLowerCase(), decodedSub_categories[0]?.toLowerCase(), subCategory.targetAudience?.toLowerCase() === decodedSub_categories[0]?.toLowerCase());
  // console.log(subCategory.subCategory?.split(" ").join("-").toLowerCase(), decodedSub_categories[1]?.toLowerCase(), subCategory.subCategory?.split(" ").join("-").toLowerCase() === decodedSub_categories[1]?.toLowerCase());
  // console.log(subCategory.subCategory?.split(" ").join("-").toLowerCase(), decodedSub_categories[0]?.toLowerCase(), subCategory.subCategory?.split(" ").join("-").toLowerCase() === decodedSub_categories[1]?.toLowerCase());
  
  const isMatchtargetAudience = subCategory.targetAudience?.toLowerCase() === decodedSub_categories[0]?.toLowerCase();
  const isMatchSubcategory = subCategory.subCategory?.split(" ").join("-").toLowerCase() === decodedSub_categories[1]?.toLowerCase();

    return isMatchtargetAudience && isMatchSubcategory;
}