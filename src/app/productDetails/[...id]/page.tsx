import getProduct from "@/app/actions/products/getProduct";
import CustomerBenefits from "@/app/components/homeComponents/CustomerBenefits/CustomerBenefits";
import DeleveryPolicy_Terms from "@/app/deleveryPolicy_TermsComponents/DeleveryPolicy_Terms/DeleveryPolicy_Terms";
import ProductDetails from "@/app/components/productsPageComponents/ProductDetails/ProductDetails";
import { Product } from "@/app/utils/interfaces";
import Image from "next/image";

type PageProps = {
  params: Promise<{ id: string[] }>;
};

const page = async ({ params }: PageProps) => {
  const p = await params;
  const product : Product = await getProduct(p?.id[1]);

  return (
    <section>
       <div className="px-2 md:px-24 rounded-none bg-slate-100 pt-3 md:pt-5 flex flex-col md:flex-row justify-around gap-3 w-full">
         <div className="w-full md:w-1/2">
           <Image
             alt="" quality={100}
             src={product?.image}
             height={800} width={500}
             className="rounded"
           />
         </div>
     
         <div className="w-full md:w-1/2">
          <ProductDetails product={product} />
         </div>
       </div>

       <DeleveryPolicy_Terms/>
       <CustomerBenefits/>
    </section>
  );
};

export default page;
