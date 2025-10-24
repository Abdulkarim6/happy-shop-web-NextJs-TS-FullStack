"use client"
import { CategoriesType, Product } from "@/app/utils/interfaces";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Cross, Delete, Eye, ListFilter, ListFilterIcon, Menu, Minus, Plus, Ruler, SlidersHorizontal, Trash2, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import QuickViewDialog from "../QuickViewDialog/QuickViewDialog";

type GroupPropsTypes = {
  dataBySubcategory : Product[];
  categoriesOfAudience: CategoriesType | undefined;
  decodedSub_categories : string[];
};

type filterAreaKey = "price" | "size" | "inStock" | "color";

const MenProducts = ({dataBySubcategory, categoriesOfAudience, decodedSub_categories} : GroupPropsTypes) => {
  const urlPathe = decodedSub_categories.join("/");
  const [filterArea, setFilterArea] = useState<Record<filterAreaKey, boolean>>({
      price:true, size:true, inStock:false, color:true
    });
    
    // state of filters values
    const [price, setPrice] = useState<string>("");
    const [sizes, setSizes] = useState<string[]>([]);
    const [inStock, setStock] = useState<boolean>(false);
    const [mobileNav, setMobileNav] = useState<boolean>(false);
    const [colors, setColors] = useState<string[]>([]); 
    const [quantityOfSizes, setQuantityOfSizes] = useState<{ _id: string, quantity: number }[]>([]);  

    function normalizeSize(size: string | string[]): string[] {
    if (Array.isArray(size)) {
      return size;
    }
    if (typeof size === "string" && size.trim() !== "") {
      return [size];
    }
    return []; // empty হলে খালি array ফেরত দিবে
    }

  const filteredProducts = dataBySubcategory.filter((product: Product) => {
  // price filter
  const matchPrice =
    price ? product.price <= parseInt(price) : true;

  // size filter (যদি product.size string[] হয় → some দিয়ে চেক করবো, 
  // যদি শুধু string হয় → includes দিয়ে)
  const matchSize =
    sizes.length > 0
      ? normalizeSize(product.size).some((s) => sizes.includes(s)) : true;

  // inStock filter (inStock যেহেতু string | number | boolean → প্রথমে normalize করতে হবে)
  let isAvailable: boolean = false;
  if (typeof product.inStock === "boolean") {
    isAvailable = product.inStock;
  } else if (typeof product.inStock === "number") {
    isAvailable = product.inStock > 0;
  } else if (typeof product.inStock === "string") {
    isAvailable = product.inStock.toLowerCase() === "true" || product.inStock !== "0";
  }

  const matchAvailability = inStock ? isAvailable : true;

  // color filter
  const matchColor =
    colors.length > 0 ? colors.some((c) => product.color.includes(c)) : true;

  return matchPrice && matchSize && matchAvailability && matchColor;
});

    //close and open dynamicly filter area for different filter section
    const filterArea_IconToggle = (areaFor: filterAreaKey) => {
      const current = filterArea[areaFor]; // true or false

      setTimeout(() => {
        setFilterArea((prev) => ({...prev, [areaFor] : !current}));
      }, 250);
    };
    // set and remove in state sizes 
    const handleSizeChange = (size:string) =>{
      setSizes(prev =>
          prev.includes(size) ? prev.filter(s => s != size) : [...prev, size]
      )}
     // set and remove in state colors
    const handleColorChange = (color:string) =>{
      setColors(prev =>
          prev.includes(color) ? prev.filter(s => s != color) : [...prev, color]
      )}

    const colorsArr = [
      { name: "Black", bg: "bg-black" }, { name: "Red", bg: "bg-red-500" },
      { name: "Green", bg: "bg-green-500" }, { name: "Yellow", bg: "bg-yellow-500" },
      { name: "White", bg: "bg-white" }, { name: "Blue", bg: "bg-blue-500" },
      { name: "Sky ", bg: "bg-sky-500" }, { name: "Orange", bg: "bg-orange-500" },
      { name: "Gray", bg: "bg-gray-500" }, { name: "Slate", bg: "bg-slate-500" },
      { name: "Maroon", bg: "bg-red-900" }, { name: "Purpal", bg: "bg-purple-500" }
    ];
    
    // clear filter values from state with one click or specific value click
    const handleRemoveFilterOption = (actionFor: string, option : string ) => {
          if(actionFor === "sizes"){
            setSizes(prev => prev.filter(s => s != option));
          }else if(actionFor === "price"){
            setPrice("");
          }else if(actionFor === "colors"){
            setColors(prev => prev.filter(c => c != option));
          }else if(actionFor === "inStock"){
            setStock(!inStock);
          }
          
          if (actionFor === "clearAll") {
            setSizes([]);
            setPrice("");
            setColors([]);
            setStock(false);  
          }
    }
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    // Loads quantity of products based on size
    useEffect(() => {
       fetch(`${baseUrl}/api/getQuantityOfItemsForEachSizes`,{
          cache:"no-store",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            subCategory: decodedSub_categories[1],
            targetAudience: decodedSub_categories[0],
           })
      })
       .then((res) => res.json())
         .then((data) => setQuantityOfSizes(data))
         .catch((err) => console.log("err", err));
    },[decodedSub_categories])

    return (
      <section className="relative ">
      {/* Filter drawer open button for mobile view*/}
      <div className="block md:hidden">
        <Button type="button" variant="secondary" className="flex items-center" onClick={() => setMobileNav(!mobileNav)}>
        <span className="text-base font-medium">FILTERS:</span><span className=""><ListFilter /></span>
        </Button>
      </div>

      <div className="w-full flex gap-2 z-30">         
          {/* Filtered Area */}
          <div className={`absolute top-0 transform ${mobileNav ? "translate-x-0" : "-translate-x-full"}
           transition-transform ease-in-out duration-300 md:translate-x-0 md:static w-3/5 md:w-1/5 bg-slate-100 z-30 h-lvh`}>
            <div className="hidden md:block">
              <h4 className="flex items-center" >
              <ListFilter size={18} /> <span className="text-xl font-bold ml-2"> FILTER BY </span>
            </h4>
            <div className="w-full border border-gray-300 my-2 pr-12"></div>
            </div>
            
            {/* Clear values of filter section */}
            <div className="w-full">
              <Button variant="ghost" buttonSize="sm" className="flex items-center" 
              onClick={() => handleRemoveFilterOption("clearAll", "")}
              >
                <Trash2 size={18} /> <span className="text-base font-medium">CLEAR ALL </span>
              </Button>
              {/* price filter options remove from state*/}
              <div className="w-full flex flex-row items-center gap-1">
                {
                  price && 
                <span onClick={() => handleRemoveFilterOption("price", "")}
                   className="flex items-center gap-1 border border-gray-50
                   hover:border-black rounded-2xl p-1 text-sm cursor-pointer">200TK - {price}TK <X className="size-3"/></span>
                }
              </div>
             
              {/* sizes filter options remove from state*/}
              <div className="w-full flex flex-row items-center gap-1">
                {
                  sizes && sizes.map((size, id) =>
                  <span key={id} onClick={() => handleRemoveFilterOption("sizes", size)}
                   className="flex items-center gap-1 border border-gray-50 hover:border-black rounded-2xl p-1 text-sm cursor-pointer">{size} <X className="size-3"/></span>
                  )
                }
              </div>
              {/* inStock filter options remove from state*/}
              <div className="w-full flex flex-row items-center gap-1">
                {
                  inStock && 
                  <span onClick={() => handleRemoveFilterOption("inStock", "false")}
                   className="flex items-center gap-1 border border-gray-50 hover:border-black rounded-2xl p-1 text-sm cursor-pointer">In Stock <X className="size-3"/></span>
                }
              </div>
              {/* color filter options remove from state*/}
              <div className="w-full grid grid-cols-3 items-center gap-1">
                {
                  colors && colors.map((color, id) =>
                  <span key={id} onClick={() => handleRemoveFilterOption("colors", color)}
                   className="flex items-center gap-1 border border-gray-50 hover:border-black rounded-2xl p-1 text-sm cursor-pointer">{color} <X className="size-3"/></span>
                 )
                }
              </div>
            </div>

            {/* Price based filter section */}
            <div className="my-5">
              <Button onClick={() => filterArea_IconToggle("price")} variant="ghost" buttonSize="sm" className="w-full relative flex items-center justify-between text-lg font-medium"> 
                <span className="flex items-center gap-2 text-lg font-medium">৳<span>PRICE</span></span> 
               
                <Minus className={`absolute right-0 transition-all duration-300 ${
                      filterArea.price ? "rotate-0 opacity-100" : "rotate-180 opacity-0" }`} />
                  <Plus className={`absolute right-0 transition-all duration-300 ${
                      filterArea.price ? "-rotate-180 opacity-0" : "rotate-0 opacity-100" }`} />
              </Button>
              
              <div className={`w-full relative overflow-hidden transition-all ease-in-out duration-700
              ${filterArea.price ? "max-h-lvh" : "max-h-0"}`}>
                <div className="bg-slate-100 p-5 w-full">
                  <label className="flex justify-between items-center">TK {price ? price : "200"} <span>TK 1500</span></label> 
                  <input type="range" min="200" max="1500" className="w-full" step="10" value={price ? price : "1500"}
                  onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>

           {/* size based filter section */}
            {
            !urlPathe.startsWith("accessories/") &&

            <div className="my-5">
              <Button onClick={() => filterArea_IconToggle("size")} variant="ghost" buttonSize="sm" className="w-full relative flex items-center justify-between text-lg font-medium">
                 <span className="flex items-center gap-2" ><Ruler />SIZE</span>
                  <Minus className={`absolute right-0 transition-all duration-300 ${
                      filterArea.size ? "rotate-0 opacity-100" : "rotate-180 opacity-0" }`} />
                  <Plus className={`absolute right-0 transition-all duration-300 ${
                      filterArea.size ? "-rotate-180 opacity-0" : "rotate-0 opacity-100" }`} />
              </Button>
              <div className={`w-full relative overflow-hidden transition-all ease-in-out duration-700
                             ${filterArea?.size ? "max-h-lvh" : "max-h-0"}`}>
                <div className="bg-slate-100 p-5">
                  {
                   quantityOfSizes?.map(size =>(
                        <label key={size?._id} className="flex items-center gap-2 cursor-pointer">
                         <input 
                         type="checkbox" checked={sizes.includes(size?._id)}
                         onChange={() => handleSizeChange(size?._id)}
                         />
                         {size?._id} <span className="text-sm">({size?.quantity}P)</span>
                        </label>
                     ))
                  }
                </div>
              </div>
            </div>
            }
  
            {/* AVAILABILITY based filter section */}
            <div className="my-5">
              <Button onClick={() => filterArea_IconToggle("inStock")} variant="ghost" buttonSize="sm" className="w-full relative flex items-center justify-between text-lg font-medium">
                 <span className="flex items-center gap-2" ><Menu />AVAILABILITY</span>
                  <Minus className={`absolute right-0 transition-all duration-300 ${
                      filterArea.inStock ? "rotate-0 opacity-100" : "rotate-180 opacity-0" }`} />
                  <Plus className={`absolute right-0 transition-all duration-300 ${
                      filterArea.inStock ? "-rotate-180 opacity-0" : "rotate-0 opacity-100" }`} />
              </Button>
              <div className={`w-full relative overflow-hidden transition-all ease-in-out duration-700
                             ${filterArea?.inStock ? "max-h-lvh" : "max-h-0"}`}>
                <div className="bg-slate-100 p-5">
                  <label className="flex items-center gap-2">
                    <input 
                     type="checkbox" checked={inStock}
                     onChange={() => setStock(!inStock)}
                    />
                     IN STOCK
                  </label>
                </div>
              </div>
            </div>
            
            {/* color based filter section */}
            <div className="my-5">
              <Button onClick={() => filterArea_IconToggle("color")} variant="ghost" buttonSize="sm" className="w-full relative flex items-center justify-between text-lg font-medium">
                 <span className="flex items-center gap-2" ><Menu />COLOR</span>
                  <Minus className={`absolute right-0 transition-all duration-300 ${
                      filterArea.color ? "rotate-0 opacity-100" : "rotate-180 opacity-0" }`} />
                  <Plus className={`absolute right-0 transition-all duration-300 ${
                      filterArea.color ? "-rotate-180 opacity-0" : "rotate-0 opacity-100" }`} />
              </Button>
              <div className={`w-full relative overflow-hidden transition-all ease-in-out duration-700
                       ${filterArea?.color ? "max-h-lvh" : "max-h-0"}`}>
                <div className="bg-slate-100 grid lg:grid-cols-2 gap-2 p-5">
                  {colorsArr.map(color => (
                   <div key={color?.name}>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="checkbox" className="hidden"
                          onChange={() => handleColorChange(color?.name)}
                        />
                        <span className={`h-5 w-5 rounded-full border ${color?.bg}`}></span>
                        <span className={`${colors.includes(color?.name) && "text-blue-500"}`}>{color?.name}</span>
                    </label>
                   </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
          
          {/* Overlay effect during open side nav for mobile view */}
         {
          mobileNav &&
          <div  onClick={() => setMobileNav(false)}
           className="fixed inset-0 bg-black/40 z-20"
          >
            <Delete size={30} className="absolute text-white top-14 right-2"/>
          </div>
         }

         {/* products display area */}
         <div className="w-full md:w-4/5 px-1 z-10">
           <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
           {filteredProducts?.map((product: Product) => (
             <div key={product?._id}>
                <div className="relative group overflow-hidden">
                  <Link
                    href={`/productDetails/${product?.subCategory?.split(" ").join("-")}/${product?._id}`}
                  >
                     <Image
                       src={product?.image}
                       alt="Picture of the author" width={450} height={550}
                       className=" hover:scale-105 transition-transform opacity-90"
                     />
                  </Link>
                  <QuickViewDialog 
                    product={product}
                    quantityOfSizes={quantityOfSizes}
                  ></QuickViewDialog>
                </div>
               
               <Link
                 href={`/productDetails/${product?.subCategory?.split(" ").join("-")}/${product?._id}`}
               >
                 <h3 className="text-sm md:text-xl text-center font-medium my-2">
                   {product?.name}
                 </h3>
               </Link>
              
               <p className="text-base">{product?.description}</p>
               <p className="text-lg font-light">BDT {product?.price} TK</p>
             </div>
           ))}
           </div>
         </div>
      </div>
      </section>
    );
};

export default MenProducts;