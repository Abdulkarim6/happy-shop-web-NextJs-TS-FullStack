import Image from "next/image";
import Link from "next/link";

const StylishLooks = () => {
  const images = [
    { src: "/stylishLooks/blue_shirt.png", span: "row-span-5 row-start-2", link:"/categories/men/Shirts"},
    { src: "/stylishLooks/menT-shirt.jpg", span: "row-span-4", link:"/categories/men/T-Shirts"},
    { src: "/stylishLooks/girlT-shirt.jpg", span: "row-span-4", link:"/categories/women/T-Shirts"},
    { src: "/stylishLooks/saree.jpg", span: "row-span-6", link:"/categories/women/Saree"},
    { src: "/stylishLooks/three-peace.png", span: "row-span-9", link:"/categories/women/3-piece-sets"},
    { src: "/stylishLooks/kids-girl.webp", span: "row-span-5", link:"/categories/kids/Girls"},
    { src: "/stylishLooks/kids-boy.png", span: "row-span-5", link:"/categories/kids/Boys"},
  ];

  return (
    <section className="mb-10 md:mb-16 px-2 md:px-[88px]">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-3 md:mb-5">
        - Stylish Looks -
      </h2>

      {/* Masonry-style grid */}
      <div className="grid grid-flow-col grid-rows-10 h-[60vh] md:h-[80vh] w-[96%] md:w-[90%] lg:w-[85%] mx-auto">
      {
        images?.map(img => 
        <Link href={img.link} className={`${img.span} relative overflow-hidden shadow-md group hover:border border-solid border-black`} key={img.src}>
          <Image
            src={img.src}
            alt="Look 4"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover absolute inset-0 group-hover:scale-125 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition-all">
           SHOP NOW
          </div>
        </Link>
        )
      }
      </div>
    </section>
  );
};

export default StylishLooks;
