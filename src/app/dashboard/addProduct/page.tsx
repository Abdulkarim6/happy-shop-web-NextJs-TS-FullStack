import AddProduct from "@/app/dashboardComponents/AddProduct/AddProduct";
import { getCategories } from "@/app/utils/getCategories";

const page = () => {
    const allCategories = getCategories();
    // console.log(allCategories);
    
    return (
      <div>
        <AddProduct promise={allCategories} />
      </div>
    );
};

export default page;