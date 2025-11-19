import { getAllProducts } from '@/app/utils/getAllProducts';
import { Product } from '@/app/utils/interfaces';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, } from "@/components/ui/table"

const ManageProducts = async() => {
    const allProductsOfCategories = await getAllProducts();
    console.log(allProductsOfCategories?.length);
    
    return (
      <div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>TargetAudience</TableHead>
              <TableHead>InStock</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allProductsOfCategories.map((product: Product) => (
              <TableRow key={product._id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.targetAudience}</TableCell>
                <TableCell>{product.inStock}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>Update</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            ))}
          </TableBody>
          {/* <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter> */}
        </Table>
      </div>
    );
};

export default ManageProducts;