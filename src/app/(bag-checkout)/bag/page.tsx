import getOrderedProducts from "@/app/utils/getOrderedProducts";
import { Trash2 } from "lucide-react";
import { OrderedDataype } from "@/app/utils/interfaces";
import React from "react";
import Image from "next/image";
import DeleveryPolicy_Terms from "@/app/components/deleveryPolicy_TermsComponents/DeleveryPolicy_TermsParent/DeleveryPolicy_TermsParent";
import CustomerBenefits from "@/app/components/homeComponents/CustomerBenefits/CustomerBenefits";
import BagClient from "@/app/bag-checkoutComponents/BagClient";

const page = async () => {
  const orderedProducts = await getOrderedProducts();
  console.log(orderedProducts, 12);
  
  
  return (
    <div>
      <div className="bg-[#f8f9fa] font-sans text-gray-800">
        <div className="bg-[#f8f9fa] py-5 text-center">
          <h1 className="text-3xl font-normal uppercase tracking-wide mb-2">
            Your Shopping Cart
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-2 md:px-4 sm:px-6 lg:px-8 pb-20">
          <BagClient orderedProducts={orderedProducts}/>
        </div>
      </div>
      <DeleveryPolicy_Terms />
      <CustomerBenefits />
    </div>
  );
};

export default page;
