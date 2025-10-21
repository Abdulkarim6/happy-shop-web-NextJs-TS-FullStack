import getProduct from "@/app/actions/products/getProduct";
import CustomerBenefits from "@/app/components/homeComponents/CustomerBenefits/CustomerBenefits";
import DeleveryPolicy_Terms from "@/app/deleveryPolicy_TermsComponents/DeleveryPolicy_Terms/DeleveryPolicy_Terms";
import MenProductDetails from "@/app/components/productsPageComponents/MenProductDetails/MenProductDetails";
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
       <div className="sm:w-full px-24 rounded-none bg-slate-100 pt-5 flex justify-around gap-3 w-full">
         <div className="">
           <Image
             alt="" quality={100}
             src={product?.image}
             height={800} width={500}
             className="rounded"
           />
         </div>
     
         <MenProductDetails product={product} />
       </div>

       <DeleveryPolicy_Terms/>
       <CustomerBenefits/>
    </section>
  );
};

export default page;
