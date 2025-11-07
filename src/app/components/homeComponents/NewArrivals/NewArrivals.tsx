import { Product } from "@/app/utils/interfaces";
import NewArrivalsClient from "./NewArrivalsClient";

const NewArrivals = async() => {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;

      const res = await fetch(`${baseUrl}/api/getNewArrivals`,{cache: "force-cache"});
     if (!res.ok) {
       throw new Error("Failed to fetch getNewArrivals");
      }
      const arrivalsProducts: Product[] = await res.json();

    return (
      <section className="w-full flex flex-col justify-center items-center my-5 md:my-10">
         <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-5`}>-New Arrivals-</h2>

        <NewArrivalsClient arrivalsProducts={arrivalsProducts}/>
      </section>
    );
};

export default NewArrivals;