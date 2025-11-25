"use client"
import { Product } from '@/app/utils/interfaces';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const ManageProducts = ({allProductsOfCategories}:{allProductsOfCategories : Product[]}) => {
    const [page, setPage] = useState(1);
    
    const productLimit = 30;
    const products = allProductsOfCategories?.slice((page-1)*productLimit, ((page-1)*productLimit +productLimit));
    const totalPage = Math.ceil(allProductsOfCategories?.length / productLimit);

    let pages: (number | "...")[] = [];
    
    // If total <= 5, show all pages
    if (totalPage <= 5) {
     Array.from({ length: totalPage }, (_, i) => pages.push(i + 1));
    }
    // CASE 1: Current near the start (1,2,3)
   else if (page <= 3) {
    pages =  [1, 2, 3, 4, "...", totalPage];
   }
   // CASE 2: Current near the end
   else if (page >= totalPage - 2) {
    pages =  [1, "...", totalPage - 3, totalPage - 2, totalPage - 1, totalPage];
   }
   else{
   // CASE 3: Middle position
   pages= [1, "...", page - 1, page, page + 1, "...", totalPage];
   }
    
    return (
      <div className='w-full'>
        <div className='w-full flex justify-end items-center gap-3 px-3'>

        <Button variant="outline" disabled={page === 1}
         onClick={() => setPage(page - 1)}
          > Prev
        </Button>

        {pages.map((p, i) =>
          p === "..." ? (
            <span key={i} className="px-2">…</span>
          ) : (
            <Button
              key={i}
              variant={p === page ? "default" : "outline"}
              onClick={() => setPage(p)}
            >
              {p}
            </Button>
          )
        )}
  
        <Button variant="outline" disabled={page === totalPage}
          onClick={() => setPage(page + 1)}
          > Next
        </Button>
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
            {products.map((product: Product) => (
              <TableRow key={product._id}>
                <TableCell>
                  <Image
                   alt={product.name}
                   src={product.image}
                   height={50} width={50}
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
};

export default ManageProducts;