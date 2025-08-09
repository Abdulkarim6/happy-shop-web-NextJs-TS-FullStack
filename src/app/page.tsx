import Banner from "./components/homeComponents/Banner/Banner";
import CustomerBenefits from "./components/homeComponents/CustomerBenefits/CustomerBenefits";

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <Banner />
      <CustomerBenefits />

      {/* <Button variant="outline">Button</Button>
      <Button className="cursor-default" variant="default">
        Button
      </Button>
      <button className="cursor-default">Button</button>
      <button className="cursor-default">Button</button>
      <button className="cursor-default">Button</button>
      <button className="cursor-default">Button</button>
      <button className="cursor-default">Button</button> */}
      <button className="cursor-default">Button</button>
      <button className="cursor-default">Button</button>
      <button className="cursor-default">Button</button>
      <button className="cursor-default">Button</button>
    </main>
  );
}
