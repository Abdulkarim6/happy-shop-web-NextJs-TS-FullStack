import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { CategoriesType } from '@/app/utils/interfaces';
import { useState } from 'react';

type paramsType = {
  allCategories: CategoriesType[];
  selectedSubCategory:string;
  setSelectedSubCategory:React.Dispatch<React.SetStateAction<string>>
  targetAudience:string | null;
  setTargetAudience:React.Dispatch<React.SetStateAction<string | null>>
}

const FormOfProductFields = ({selectedSubCategory, targetAudience, setTargetAudience,setSelectedSubCategory, allCategories}:paramsType) => {
    
    let subcategory;
    if (targetAudience === "men") {
       subcategory = allCategories[0]?.men;
      } else if(targetAudience === "women"){
        subcategory = allCategories[1]?.women;
      } else if(targetAudience === "kids"){
        subcategory = allCategories[2]?.kids;
      } else if(targetAudience === "accessories"){
        subcategory = allCategories[3]?.accessories;
    };

    const colorsArr = [
      { name: "Black", bg: "bg-black" }, { name: "Red", bg: "bg-red-500" },
      { name: "Green", bg: "bg-green-500" }, { name: "Yellow", bg: "bg-yellow-500" },
      { name: "White", bg: "bg-white" }, { name: "Blue", bg: "bg-blue-500" },
      { name: "Sky ", bg: "bg-sky-500" }, { name: "Orange", bg: "bg-orange-500" },
      { name: "Gray", bg: "bg-gray-500" }, { name: "Slate", bg: "bg-slate-500" },
      { name: "Maroon", bg: "bg-red-900" }, { name: "Purpal", bg: "bg-purple-500" }
    ];

     let sizes;
    if ( ["Shirts", "T-Shirts", "Tops", "Stylish Shirt Gaun"].includes(selectedSubCategory) ) {
      sizes = ["S", "M", "L", "XL", "XXL"];
    }
    else if ( ["Panjabi", "pant", "Trousers & T-shirt", "3-piece sets"].includes( selectedSubCategory ) ) {
      sizes = ["28", "30", "32", "34", "36"];
    }
    else if (["Saree", "Burqa"].includes(selectedSubCategory)) {
      sizes = ["Standard", "Free Size"];
    }
    else if (["Bag", "Watch"].includes(selectedSubCategory)) {
      sizes = [];
    }
    
    if (["Tops", "Boys", "Girls"].includes(selectedSubCategory)) {
      sizes = ["1Y", "2Y", "3Y", "4Y", "5Y", "6Y", "7Y", "8Y", "9Y", "10Y"];
    }

    return (
    <div className='fieldsContainer flex flex-col md:flex-row justify-around md:space-x-5 w-full'>
    <div className='w-full'>
        <div className="space-y-2 mb-2">
          <Label htmlFor="name">Product Name</Label>
          <Input name="name" id="name" type="text" placeholder="Product Name" className='border-slate-500' />
        </div>
        
        <div className="space-y-2 mb-2">
          <Label htmlFor="brand">Brand</Label>
          <Input name="brand" id="brand" type="text" placeholder="Brand Name" className='border-slate-500' />
        </div>
        
        <div className="space-y-2 mb-2">
          <Label htmlFor="targetAudience">Target Audience</Label>
          <Select name="targetAudience" value={targetAudience || undefined}  onValueChange={(e) => setTargetAudience(e)}>
            <SelectTrigger className="w-full border-slate-500">
             <SelectValue placeholder="Select a option" />
            </SelectTrigger>
            <SelectContent >
             <SelectGroup>
              {["men", "women", "kids", "accessories"]?.map((single, i) =>(
                <SelectItem key={i} value={single}>{single}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
         </Select>
        </div>

        <div className="space-y-2 mb-2">
          <Label htmlFor="subCategory">Sub Category: Enable after select for audience</Label>
          <Select name="subCategory" value={selectedSubCategory} disabled={!targetAudience} onValueChange={(e) => setSelectedSubCategory(e)}>
            <SelectTrigger className="w-full border-slate-500">
             <SelectValue placeholder="Select a option" />
            </SelectTrigger>
            <SelectContent >
             <SelectGroup>
              {subcategory?.map((single, i) =>(
                <SelectItem key={i} value={single?.subCategory}>{single?.subCategory}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
         </Select>
        </div>
        {
          targetAudience != "accessories" &&

        <div className="space-y-2 mb-2">
          <Label htmlFor="size">Size: Enable after select a Sub Category</Label>
          <Select name="size" disabled={!selectedSubCategory}>
            <SelectTrigger className="w-full border-slate-500">
             <SelectValue placeholder="Select a option" />
            </SelectTrigger>
            <SelectContent >
             <SelectGroup>
              {sizes?.map((single : string, i) =>(
                <SelectItem key={i} value={single}>{single}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
         </Select>
        </div>
        }

        <div className="space-y-2 mb-2">
          <Label htmlFor="description">Description</Label>
          <Textarea name="description" id="description" placeholder="Product Description" className='border-slate-500' />
        </div>
    </div>
    <div className='w-full'>
        <div className="space-y-2 mb-2">
          <Label htmlFor="price">Price</Label>
          <Input name="price" id="price" type="number" placeholder="Product Price" className='border-slate-500' />
        </div>
        
        <div className="space-y-2 mb-2">
          <Label htmlFor="inStock">In Stock</Label>
          <Input name="inStock" id="inStock" type="text" placeholder="true / false / quantity / text" className='border-slate-500' />
        </div>
        
        <div className="space-y-2 mb-2">
          <Label htmlFor="image">Product Image</Label>
          <Input name="image" id="image" type="file" placeholder="Image" className='border-slate-500' />
        </div>
        
        <div className="space-y-2 mb-2">
          <Label htmlFor="color">Color</Label>
           <Select name="color">
            <SelectTrigger className="w-full border-slate-500">
             <SelectValue placeholder="Select a option" />
            </SelectTrigger>
            <SelectContent >
             <SelectGroup>
              {colorsArr?.map((single, i) =>(
                <SelectItem key={i} value={single?.name} className={`${single?.bg} ${single?.name === "White" ? "text-black" : "text-white"}`}>{single?.name}</SelectItem>
              ))}
             </SelectGroup>
            </SelectContent>
           </Select>
        </div>
        
        <div className="space-y-2 mb-2">
          <Label htmlFor="ageGroup">Age Group</Label>
          <Input name="ageGroup" id="ageGroup" type="text" placeholder="Age Group" className='border-slate-500' />
        </div>

    </div>
    </div>
    );
};

export default FormOfProductFields;