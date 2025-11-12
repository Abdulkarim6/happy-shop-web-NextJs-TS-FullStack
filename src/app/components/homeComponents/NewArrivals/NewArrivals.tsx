import NewArrivalsClient from "./NewArrivalsClient";
import { getNewArrivals } from "@/app/utils/getNewArrivals";

const NewArrivals = async() => {
    const arrivalsProducts = await getNewArrivals();

    if (!arrivalsProducts) {
      return <p>No Found any new product</p>
    }

    return (
      <section className="w-full flex flex-col justify-center items-center my-5 md:my-10">
         <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-5`}>-New Arrivals-</h2>

        <NewArrivalsClient arrivalsProducts={arrivalsProducts}/>
      </section>
    );
};

export default NewArrivals;