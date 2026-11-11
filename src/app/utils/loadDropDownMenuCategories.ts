import { getCategories } from "./getCategories";
import { CategoriesType, SubCategoriesType } from "./interfaces";

export const loadDropDownMenuCategories = async () => {
const categoriesOfGenders = await getCategories();

const subCategoriesOfMen:SubCategoriesType[] = categoriesOfGenders?.find((item: CategoriesType) => item.targetAudience === "men")?.men ?? [];
const subCategoriesOfWomen:SubCategoriesType[] = categoriesOfGenders?.find((item: CategoriesType) => item.targetAudience === "women")?.women ?? [];
const subCategoriesOfKids:SubCategoriesType[] = categoriesOfGenders?.find((item: CategoriesType) => item.targetAudience === "kids")?.kids ?? [];
const subCategoriesOfAccessories:SubCategoriesType[] = categoriesOfGenders?.find((item: CategoriesType) => item.targetAudience === "accessories")?.accessories ?? [];

return [
  { titleOfCategory: "Men", link:"/categories/men", subCategories: subCategoriesOfMen ?? []},
  { titleOfCategory: "Women", link:"/categories/women", subCategories: subCategoriesOfWomen ?? []},
  { titleOfCategory: "Kids", link:"/categories/kids", subCategories: subCategoriesOfKids ?? []},
  { titleOfCategory: "Accessories", link:"/categories/accessories", subCategories: subCategoriesOfAccessories ?? []}
];
};