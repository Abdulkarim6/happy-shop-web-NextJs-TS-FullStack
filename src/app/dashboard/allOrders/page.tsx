import { getAllOrders } from "@/app/actions/ordersManageActions";
import OrdersManageTable from "@/app/dashboardComponents/OrdersManageTable/OrdersManageTable";


const page = async() => {
    const allOrders = await getAllOrders();
    return (
      <div>
        <OrdersManageTable allOrders={allOrders}/>
      </div>
    );
};

export default page;