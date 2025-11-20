import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t-2 border-solid border-t-blue-700 sticky top-[100vh] mt-5 text-neutral-content flex flex-col md:flex-row justify-start md:justify-around items-start md:items-center w-full px-3 md:px-4 py-3 md:py-4 ">
      <aside className="flex items-center">
        <svg
          width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current mr-2"
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p>Copyright © {new Date().getFullYear()} Happy Shop. All right reserved</p>
      </aside>

      <ul className="my-5 md:my-0">
        <li><Link href="/deleveryPolicy" className="rounded-sm underline hover:text-blue-600">DELEVERY POLICY</Link></li>
        <li><Link href="/return_RefundPolicy" className="rounded-sm underline hover:text-blue-600">RETURN & REFUND POLICY</Link></li>
        <li><Link href="/exchange_Complain" className="rounded-sm underline hover:text-blue-600">EXCHANGE & COMPLAIN</Link></li>
        <li><Link href="/testimonials" className="rounded-sm underline hover:text-blue-600">WHAT OUR CUSTOMERS SAY</Link></li>
      </ul>

      <nav className="flex flex-col justify-center items-center">
        <h3 className="text-2xl text-center">Touch Us With Social</h3>
        <div className="flex gap-5 justify-center items-center">
          <Link href="" className="rounded-full p-2 border-2 border-black border-solid">
            <Instagram stroke="currentColor" size={36} />
          </Link>
          <Link href="" className="rounded-full p-2 border-2 border-black border-solid">
            <Youtube size={36} />
          </Link>
          <Link href="" className="rounded-full p-2 border-2 border-black border-solid">
            <Facebook size={36} />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
