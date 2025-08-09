import { ArrowRightLeft, PhoneCall, Truck } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const CustomerBenefits = () => {
    return (
      <section className="w-full flex flex-col items-center justify-center p-2 my-2">
        <h1 className={`text-4xl font-semibold ${poppins.className}`}>
          -Why Buy From Us-
        </h1>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-around justify-items-center mt-2 md:mt-5">
          <div>
            <Truck className="size-32 text-base md:text-lg" />
            <h4 className="text-2xl font-medium">Delivery</h4>
            <p>Standard Delivery (Inside Dhaka): BDT 80.00</p>
            <p>Standard Delivery (Outside Dhaka): BDT 150.00</p>
            <p> <strong>Free Delivary: </strong>On orders over BDT 3000.00 </p>
          </div>
          <div>
            <ArrowRightLeft className="size-32 text-base md:text-lg" />
            <h4 className="text-2xl font-medium">Return</h4>
            <p>Simply return it within 1 Week for an exchange.</p>
            <p> <strong>Note: </strong>Product return acceptable only for our mistakes! </p>
          </div>
          <div>
            <PhoneCall className="size-32 text-base md:text-lg" />
            <h4 className="text-2xl font-medium">Return</h4>
            <p>Contact us 24 hours a day, 7 days a week</p>
            <p> <strong>Phone: </strong>(+880) 01888181990 </p>
            <p> <strong>Gmail: </strong>mdhossainJwe687@gmail.com </p>
          </div>
        </div>
      </section>
    );
};

export default CustomerBenefits;