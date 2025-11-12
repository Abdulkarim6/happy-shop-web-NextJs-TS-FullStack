import { preloadProduct } from "@/app/actions/products/getProduct";
import DeleveryPolicy_Terms from "@/app/components/deleveryPolicy_TermsComponents/DeleveryPolicy_TermsParent/DeleveryPolicy_TermsParent";
import CustomerBenefits from "@/app/components/homeComponents/CustomerBenefits/CustomerBenefits";
import ProductBlock from "./ProductBlock";
import { Suspense } from "react";
import LoadingSection from "./LoadingSection";

type PageProps = {
  params: Promise<{ id: string[] }>;
};

const page = async ({ params }: PageProps) => {
  const p = await params;
  preloadProduct(p?.id[1]);

  return (
    <section>
      <Suspense fallback={<LoadingSection/>}>
       <ProductBlock id={p?.id[1]}/>
      </Suspense>

       <DeleveryPolicy_Terms/>
       <CustomerBenefits/>
    </section>
  );
};

export default page;
