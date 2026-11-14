import AddProduct from "@/app/dashboardComponents/AddProduct/AddProduct";
import { getCategories } from "@/app/utils/getCategories";

const page = () => {
    const categoriesForAll = getCategories();
    // console.log(categoriesForAll);
    
    return (
      <div>
        <AddProduct promise={categoriesForAll} />
      </div>
    );
};

export default page;