"use client"
import { OrderedDataype } from "@/app/utils/interfaces";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import Image from "next/image";
import Link from "next/link";

const OrdersManageTable = ({allOrders}:{allOrders:OrderedDataype[]}) => {
    const handleStatusUpdate = async (productId: string, buyerId:string, newStatus: string) => {
      try {
        const response = await fetch(`/api/orders/update-status`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productId, status: newStatus }),
        });

        if (response.ok) {
          alert("Status updated successfully!");
          // এখানে আপনি চাইলে ডাটা রি-ফেচ (re-fetch) করতে পারেন যাতে ইউআই আপডেট হয়
        } else {
          alert("Failed to update status.");
        }
      } catch (error) {
        console.error("Error updating status:", error);
      }
    };

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">
              <input type="checkbox" />
            </TableHead>
            <TableHead>Image</TableHead>
            <TableHead className="w-[300px]">Product</TableHead>
            <TableHead>Single-Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total Price</TableHead>
            <TableHead>Buyer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Details</TableHead>
            <TableHead className="">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allOrders?.map((product: OrderedDataype) => (
            <TableRow key={product._id}>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
              <TableCell>
                <Image
                  alt={product.productName}
                  src={product.productImg}
                  height={70}
                  width={50}
                  className="rounded-md"
                />
              </TableCell>
              <TableCell className="font-medium">
                {product.productName}
              </TableCell>
              <TableCell>{product.productPrice} TK</TableCell>
              <TableCell>{product.productQuantity}</TableCell>
              <TableCell className="font-bold text-blue-600">
                {product.productPrice * product.productQuantity} TK
              </TableCell>
              <TableCell>
                <div className="flex flex-col text-xs">
                  <span className="font-semibold text-gray-500">
                    ID: {product.buyerId}
                  </span>
                  <span>{product.buyerEmail}</span>
                </div>
              </TableCell>
              <TableCell>
                <select
                  className="border border-gray-300 rounded p-1 text-sm bg-white outline-none focus:ring-1 focus:ring-blue-400 cursor-pointer"
                  defaultValue={product?.status || "Pending"}
                  onChange={(e) =>
                    handleStatusUpdate(
                      product?.productId,
                      product?.buyerId as string,
                      e.target.value
                    )
                  }
                >
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </TableCell>
              <TableCell>
                <Link href={`/dashboard/updateProduct/${product?._id}`}>
                  <button className="border-2 border-blue-500 text-blue-700 hover:bg-blue-50 rounded px-2 py-1 text-sm transition-colors">
                    View
                  </button>
                </Link>
              </TableCell>
              <TableCell>
                <button
                  onClick={() => {
                    if (window.confirm("আপনি কি নিশ্চিত?")) {
                      // handleDelete(product?._id)
                    }
                  }}
                  className="border-2 border-red-500 text-red-700 hover:bg-red-50 rounded px-2 py-1 text-sm transition-colors"
                >
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
};

export default OrdersManageTable;