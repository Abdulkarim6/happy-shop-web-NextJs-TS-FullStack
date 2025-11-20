import { getAllProducts } from '@/app/utils/getAllProducts';
import { Product } from '@/app/utils/interfaces';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import Image from 'next/image';

const ManageProducts = async() => {
    const allProductsOfCategories = await getAllProducts();
    console.log(allProductsOfCategories?.length);
    
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>For</TableHead>
              <TableHead>InStock</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allProductsOfCategories.map((product: Product) => (
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