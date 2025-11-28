// export const dynamic = "auto";
import ManageProducts from "@/app/dashboardComponents/ManageProducts/ManageProducts";
import { getAllProducts } from "@/app/utils/getAllProducts";

const page = () => {
  
  void getAllProducts();

  return (
      <ManageProducts />
  );
};

export default page;