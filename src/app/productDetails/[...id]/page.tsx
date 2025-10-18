import getProduct from "@/app/actions/products/getProduct";
import MenProductDetails from "@/app/components/productsPageComponents/MenProductDetails/MenProductDetails";
import { Product } from "@/app/utils/interfaces";
import Image from "next/image";

type PageProps = {
  params: Promise<{ id: string[] }>;
};

const page = async ({ params }: PageProps) => {
  const p = await params;
  const product : Product = await getProduct(p?.id[1]);
  console.log(product?.name)

  return (
    <section className="sm:w-full px-24 rounded-none bg-slate-100 p-3 flex justify-around gap-3 w-full">
      <div className="">
        <Image
          alt=""
          quality={100}
          src={product?.image}
          height={800}
          width={500}
          className="rounded"
        />
      </div>
  
      <MenProductDetails product={product} />
    </section>
  );
};

export default page;
