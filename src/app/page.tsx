import Banner from "./components/homeComponents/Banner/Banner";
import Categories from "./components/homeComponents/Categories/Categories";
import CustomerBenefits from "./components/homeComponents/CustomerBenefits/CustomerBenefits";
import NewArrivals from "./components/homeComponents/NewArrivals/NewArrivals";
import StylishLooks from "./components/homeComponents/StylishLooks/StylishLooks";
import Testimonials from "./components/homeComponents/Testimonials/Testimonials";

export default function Home() {
  return (
    <section className="flex flex-col justify-center mb-50">
      <Banner />
      <CustomerBenefits />
      <Categories />
      <NewArrivals/>
      <StylishLooks/>
      <Testimonials/>


    </section>
  );
}
