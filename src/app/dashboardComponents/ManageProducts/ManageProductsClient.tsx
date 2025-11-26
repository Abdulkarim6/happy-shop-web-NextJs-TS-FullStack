"use client"
import { CategoriesType, Product, Toast } from '@/app/utils/interfaces';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { deleteProduct } from '@/app/actions/deleteProduct';

const ManageProductsClient = ({allProductsOfCategories, allCategories}:{allProductsOfCategories : Product[], allCategories:CategoriesType[]}) => {
    const [audience, setAudience] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState("");
    const [page, setPage] = useState(1);
    console.log("audience: ", audience, "selectedCategory: ", selectedSubCategory);
    
    useEffect(() =>{
      setSelectedSubCategory("");
      setPage(1);
    },[audience])
    
    const productLimit = 30;
    const filteredProducts = allProductsOfCategories?.filter(item => {
      const matchAudience = audience ? item.targetAudience?.toLowerCase() === audience?.toLowerCase() : true;
      const matchSubCategory = selectedSubCategory ? item.subCategory?.toLowerCase() === selectedSubCategory?.toLowerCase() : true;
    
      return matchAudience && matchSubCategory;
    })
    const productsPerPage = filteredProducts.slice((page-1)*productLimit, ((page-1)*productLimit +productLimit));
    const totalPage = Math.ceil(filteredProducts?.length / productLimit);
   
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

    const handleDelete = async(id:string) => {
     const res = await deleteProduct(id);
     if(res?.acknowledged){
        Toast.fire({
          icon:"success",
          title:res?.message
        });
      }else{
        Toast.fire({
          icon:"error",
          title:res?.message
        })
      }
    }
    
    return (
         <div className='w-full'>
        <div className='w-full flex flex-col md:flex-row md:justify-between items-start md:items-center gap-3 px-3'>
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

          <div className='w-fit flex items-center space-x-2'>
            <Pagination
             page={page}
             setPage={setPage}
             totalPage={totalPage}
            />
          </div>
       </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead className="w-300px">Name</TableHead>
              <TableHead>For</TableHead>
              <TableHead>InStock</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productsPerPage.map((product: Product) => (
              <TableRow key={product._id}>
                <TableCell>
                  <Image
                   alt={product.name}
                   src={product.image}
                   height={70} width={50}
                  />
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.targetAudience}</TableCell>
                <TableCell>
                  {typeof product.inStock === "boolean" ?
                    product.inStock ? "Stock" : "No Stock"
                    :
                    product.inStock + " stock"
                  }
                </TableCell>
                <TableCell>{product.price} TK</TableCell>
                <TableCell className='p-1'><button className='border-2 border-blue-500 text-blue-700 rounded p-1'>Update</button></TableCell>
                <TableCell className='p-1'><button className='border-2 border-red-500 text-red-700 rounded p-1'>Delete</button></TableCell>
                {/* <TableCell onClick={() => handleDelete(product?._id)} className='p-1'><button className='border-2 border-red-500 text-red-700 rounded p-1'>Delete</button></TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
};

export default ManageProductsClient;