import { poppins } from "@/app/layout";
import { ArrowRightLeft, PhoneCall, Truck } from "lucide-react";


const CustomerBenefits = () => {
  const classFor_sm_md_Device = `flex justify-evenly items-center my-2 lg:flex-col lg:justify-start lg:items-start lg:my-0 shadow-sm p-1`;
   
  return (
      //Full container
      <section className="w-full flex flex-col items-center justify-center p-2 my-2 md:my-5">
        <h1 className={`text-2xl md:text-3xl lg:text-4xl font-semibold ${poppins.className}`} >
          -WHY BUY FROM US-
        </h1>

        {/* Cards parent container [controlled cards container]*/}
        <div className="w-full flex flex-col lg:flex-row lg:justify-around mt-3 md:mt-5">
         
          {/* Cards container [controlled individual card] */}
          <div className={classFor_sm_md_Device}>
            <Truck className="size-24 md:size-32" />
            <div className="text-sm md:text-base">
              <h4 className="text-xl md:!text-2xl font-medium">Delivery</h4>
              <p>Standard Delivery (Inside Dhaka): BDT 80.00</p>
              <p>Standard Delivery (Outside Dhaka): BDT 150.00</p>
              <p><strong>Free Delivary: </strong>On orders over BDT 3000.00</p>
            </div>
          </div>
          <div className={`${classFor_sm_md_Device} md:bg-slate-100`}>
            <ArrowRightLeft className="size-24 md:size-32 order-2 lg:order-1"/>
            <div className="text-sm md:text-base order-1 lg:order-2">
              <h4 className="text-2xl font-mediumtext-xl md:!text-2xl font-medium">Return</h4>
              <p>Simply return it within 1 Week for an exchange.</p>
              <p><strong>Note: </strong>Product return acceptable only for our mistakes!</p>
            </div>
          </div>
          <div className={classFor_sm_md_Device}>
            <PhoneCall className="size-24 md:size-32" />
            <div className="text-sm md:text-base">
              <h4 className="text-xl md:!text-2xl font-medium">Contuct</h4>
              <p>Contact us 24 hours a day, 7 days a week</p>
              <p><strong>Phone: </strong>(+880) 01888181990</p>
              <p><strong>Gmail: </strong>mdhossainJwe687@gmail.com </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default CustomerBenefits;