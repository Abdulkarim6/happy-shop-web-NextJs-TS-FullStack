import { Product, typeforcategories } from "@/app/utils/interfaces";
import Products from "@/app/components/productsPageComponents/Products/Products";
import { categoriesForAllArray } from "@/app/utils/categoriesForAll";
import CategoriesByAudienceComponent from "@/app/components/productsPageComponents/CategoriesByAudienceComponent/CategoriesByAudienceComponent";
import { notFound } from "next/navigation";
import { getProductsByAudience } from "@/app/utils/getProductsByAudience";
import ProductBlock from "@/app/components/productsPageComponents/ProductDetails/ProductBlock";

const decodeParams = async (values: string[]) => {
  // ['men', 'Trousers-%26-T-shirt'] 👉 ['men', 'Trousers-&-T-shirt']
  return values?.map((v) => decodeURIComponent(v));
};

const page = async ({ params, }: { params: Promise<{ category: string[] }>; }) => {
  const { category } = await params;
  const decodedParams = await decodeParams(category);
  const urlPath = decodedParams?.join("/").toLocaleLowerCase();
  
  const [categoriesDataForAllRes, productsByAudienceRes] = await Promise.allSettled([
    categoriesForAllArray(), getProductsByAudience( decodedParams )
  ])
  const categoriesDataForAll = categoriesDataForAllRes?.status === "fulfilled" ? categoriesDataForAllRes?.value as typeforcategories[] : [];
  const productsByAudience = productsByAudienceRes?.status === "fulfilled" ? productsByAudienceRes?.value as Product[] || null : [];
  
  const categoriesByAudience = categoriesDataForAll.find( (item) => item.targetAudience.toLowerCase() === urlPath ) as typeforcategories;
  
  const productId = decodedParams?.length <= 3 ? decodedParams[2] : "";
  const product = productsByAudience?.find( (product) => product?._id === productId ? product : null ) as Product || null;

  // categories for individual targetAudience(men OR women OR kids OR Acc)
  // url path: categories/men OR categories/women OR categories/kids OR categories/Accessories
  if (decodedParams.length === 1 && categoriesByAudience) {
    return (
      <CategoriesByAudienceComponent
        categoriesByAudience={categoriesByAudience}
        decodedParams={decodedParams}
      />
    );
  }

  // category for individual targetAudience(men OR women OR kids OR Acc)
  // url path: categories/men/pants OR categories/men/t-shirts OR categories/women/t-shirts OR etc.
  if (decodedParams.length === 2 && productsByAudience) {
    return (
      <Products
        productsByAudience={productsByAudience}
        decodedParams={decodedParams}
      />
    );
  }

  // Shows Product details
  //  url path: categories/men/pants/pant_id
  if (decodedParams.length === 3 && product) {
    return <ProductBlock product={product} />;
  }

  notFound();
};

export default page;