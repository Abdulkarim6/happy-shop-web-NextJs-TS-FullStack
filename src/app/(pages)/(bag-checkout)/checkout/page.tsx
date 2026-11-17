import { loadAddress } from '@/app/actions/checkoutActions';
import CheckoutClient from '@/app/bag-checkoutComponents/CheckoutClient';
// import getMyOrders from '@/app/utils/getMyOrders';

const page = async() => {

  //  const [addressesResult, ordersResult] = await Promise.allSettled([
  //    loadAddress(),
  //    getMyOrders(),
  //  ]);

  //  const addresses = addressesResult.status === "fulfilled" ? addressesResult.value : [];

  //  const orders = ordersResult.status === "fulfilled" ? ordersResult.value : [];

    return (
      <div>
        {/* <CheckoutClient addresses={addresses} orders={orders} /> */}
        <p>hello</p>
      </div>
    );
};

export default page;