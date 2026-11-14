import { getCategories } from "./getCategories";
import { CategoriesForAllType, CategoriesByAudienceType } from "./interfaces";

export const loadDropDownMenuCategories = async () => {
const categoriesForAll = await getCategories();

const subCategoriesOfMen:CategoriesByAudienceType[] = categoriesForAll?.find((item: CategoriesForAllType) => item.targetAudience === "men")?.men ?? [];
const subCategoriesOfWomen:CategoriesByAudienceType[] = categoriesForAll?.find((item: CategoriesForAllType) => item.targetAudience === "women")?.women ?? [];
const subCategoriesOfKids:CategoriesByAudienceType[] = categoriesForAll?.find((item: CategoriesForAllType) => item.targetAudience === "kids")?.kids ?? [];
const subCategoriesOfAccessories:CategoriesByAudienceType[] = categoriesForAll?.find((item: CategoriesForAllType) => item.targetAudience === "accessories")?.accessories ?? [];

return [
  { titleOfCategory: "Men", link:"/categories/men", categoriesByAudience: subCategoriesOfMen ?? []},
  { titleOfCategory: "Women", link:"/categories/women", categoriesByAudience: subCategoriesOfWomen ?? []},
  { titleOfCategory: "Kids", link:"/categories/kids", categoriesByAudience: subCategoriesOfKids ?? []},
  { titleOfCategory: "Accessories", link:"/categories/accessories", categoriesByAudience: subCategoriesOfAccessories ?? []}
];
};