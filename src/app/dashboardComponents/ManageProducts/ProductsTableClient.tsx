"use client";
import { deleteProduct } from "@/app/actions/deleteProduct";
import { useManegePageContext } from "@/app/contexts/managePageStatesContext/useManegePageContext";
import { Product, Toast } from "@/app/utils/interfaces";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import Image from "next/image";
import { useEffect } from "react";

const ProductsTableClient = ({allProductsOfCategories}:{allProductsOfCategories : Product[]}) => {
const {audience,selectedSubCategory,page,setTotalPage} = useManegePageContext();

    const productLimit = 30;
    const filteredProducts = allProductsOfCategories?.filter(item => {
      const matchAudience = audience ? item.targetAudience?.toLowerCase() === audience?.toLowerCase() : true;
      const matchSubCategory = selectedSubCategory ? item.subCategory?.toLowerCase() === selectedSubCategory?.toLowerCase() : true;
    
      return matchAudience && matchSubCategory;
    });
    console.log("fP", filteredProducts?.length);
    
    const productsPerPage = filteredProducts.slice((page-1)*productLimit, ((page-1)*productLimit +productLimit));
    const totalPage = Math.ceil(filteredProducts?.length / productLimit);
    console.log('from table', totalPage);
    
    useEffect(() => {
    setTotalPage(totalPage);
    },[totalPage, setTotalPage]);

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
                  height={70}
                  width={50}
                />
              </TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.targetAudience}</TableCell>
              <TableCell>
                {typeof product.inStock === "boolean"
                  ? product.inStock
                    ? "Stock"
                    : "No Stock"
                  : product.inStock + " stock"}
              </TableCell>
              <TableCell>{product.price} TK</TableCell>
              <TableCell className="p-1">
                <button className="border-2 border-blue-500 text-blue-700 rounded p-1">
                  Update
                </button>
              </TableCell>
              <TableCell className="p-1">
                <button className="border-2 border-red-500 text-red-700 rounded p-1">
                  Delete
                </button>
              </TableCell>
              {/* <TableCell onClick={() => handleDelete(product?._id)} className='p-1'><button className='border-2 border-red-500 text-red-700 rounded p-1'>Delete</button></TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
};

export default ProductsTableClient;