import getProduct from "@/app/actions/products/getProduct";
import { Product } from "@/app/utils/interfaces";

type PageProps = {
  params: Promise<{ id: string[] }>;
};

const page = async ({ params }: PageProps) => {
  const p = await params;
  const data : Product = await getProduct(p?.id[1]);
  console.log(data?.name)

  return (
      <section>hello {data?.name}</section>
  );
};

export default page;
