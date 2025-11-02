import Image from "next/image";
import Link from "next/link";

const StylishLooks = () => {
  const images = [
    { src: "/stylishLooks/blue_shirt.png", span: "row-span-4 row-start-2", link:"/categories/men/Shirts"},
    { src: "/stylishLooks/menT-shirt.jpg", span: "row-span-3", link:"/categories/men/T-Shirts"},
    { src: "/stylishLooks/girlT-shirt.jpg", span: "row-span-4", link:"/categories/women/T-Shirts"},
    { src: "/stylishLooks/saree.jpg", span: "row-span-4", link:"/categories/women/Saree"},
    { src: "/stylishLooks/three-peace.png", span: "row-span-6 row-start-2", link:"/categories/women/3-piece-sets"},
    { src: "/stylishLooks/kids-girl.webp", span: "row-span-4", link:"/categories/kids/Boys"},
    { src: "/stylishLooks/kids-boy.png", span: "row-span-4", link:"/categories/kids/Girls"},
  ];

  return (
    <section className="my-10 md:my-16 px-6 md:px-24">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-3 md:mb-5">
        - Stylish Looks -
      </h2>

      {/* Masonry-style grid */}
      <div className="grid grid-flow-col grid-rows-8 h-[60vh] md:h-[80vh] w-[96%] md:w-[90%] lg:w-[80%] mx-auto">
      {
        images?.map(img => 
        <Link href={img.link} className={`${img.span} relative overflow-hidden shadow-md group hover:border border-solid border-black`} key={img.src}>
          <Image
            src={img.src}
            alt="Look 4"
            fill
            className="object-cover absolute inset-0 group-hover:scale-125 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition-all">
           Modern Look
          </div>
        </Link>
        )
      }
      </div>
    </section>
  );
};

export default StylishLooks;
