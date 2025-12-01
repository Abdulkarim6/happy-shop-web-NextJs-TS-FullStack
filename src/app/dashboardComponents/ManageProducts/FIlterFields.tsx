"use client";
import { useManegePageContext } from '@/app/contexts/managePageStatesContext/useManegePageContext';
import { CategoriesType } from '@/app/utils/interfaces';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

const FIlterFields = ({allCategories}:{allCategories:CategoriesType[]}) => {
    const {audience,setAudience,selectedSubCategory,setSelectedSubCategory} = useManegePageContext();
    let subcategory;
    if (audience === "men") {
       subcategory = allCategories[0]?.men;
      } else if(audience === "women"){
        subcategory = allCategories[1]?.women;
      } else if(audience === "kids"){
        subcategory = allCategories[2]?.kids;
      } else if(audience === "accessories"){
        subcategory = allCategories[3]?.accessories;
    }

    return (
        <div className='flex space-x-3 items-center'>
            <h5 className='text-lg md:text-xl font-medium md:font-semibold'>Filters:</h5>
            <Select name="audience" value={audience} onValueChange={(e) => setAudience(e)}>
            <SelectTrigger className="w-full border-slate-500" size='sm'>
             <SelectValue placeholder="Select a option" />
            </SelectTrigger>
            <SelectContent >
             <SelectGroup>
              <SelectLabel>Audience</SelectLabel>
              {["men", "women", "kids", "accessories"]?.map((single, i) =>(
                <SelectItem key={i} value={single}>{single}</SelectItem>
              ))}
             </SelectGroup>
            </SelectContent>
           </Select>

           <Select name="subCategory" value={selectedSubCategory} disabled={!audience} onValueChange={(e) => setSelectedSubCategory(e)}>
            <SelectTrigger className="w-full border-slate-500" size='sm'>
             <SelectValue placeholder="Select a option" />
            </SelectTrigger>
            <SelectContent >
             <SelectGroup>
              <SelectLabel>Sub Category</SelectLabel>
              {subcategory?.map((single, i) =>(
                <SelectItem key={i} value={single?.subCategory}>{single?.subCategory}</SelectItem>
              ))}
            </SelectGroup>
            </SelectContent>
           </Select>
        </div>
    );
};

export default FIlterFields;