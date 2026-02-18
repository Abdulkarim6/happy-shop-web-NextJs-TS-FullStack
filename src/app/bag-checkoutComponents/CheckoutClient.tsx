"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import {Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import { AddressType, OrderedDataype, Toast } from "../utils/interfaces";
import { deleteAddress } from "../actions/checkoutActions";
import AddressFormDialog from "./AddressFormDialog";
import { Trash2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type paramsType = {addresses: AddressType[]; orders:OrderedDataype[]};

const CheckoutClient = ({ addresses, orders}:paramsType) => {
  const [selectedAddress, setSelectedAddress] = useState<string | null | undefined>(null);
  const [payButton, setPayButton] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleProceed = () => {
    if (!selectedAddress) {
      Toast.fire({
        icon: "warning",
        title: "Please select an address",
      });
    } else {
    }
  };

  const handleDeleteAdd = async (id: string | undefined) => {
    if (id) {
      await deleteAddress(id);
    }
  };

  const subTotal = orders.reduce((acc, item) =>
      acc + (Number(item.productPrice) * (item.productQuantity || 1)), 0
    );
  const deliveryFee = 70 as number;
  const total = subTotal + deliveryFee;

  return (
    <div className="bg-gray-50 font-sans">
      <div className="container mx-auto md:p-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3">
            <div className="bg-white px-2 md:px-6 py-1 rounded shadow-sm">
              <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                <h2 className="text-lg font-medium text-gray-700 mb-2">
                  Delivery Information
                </h2>
                {
                  addresses.length >= 3 ?
                  <span className="text-sm md:text-lg">You can add new address after delete an old address</span>
                    :
                <Dialog
                  open={open}
                  onOpenChange={(val) => {
                    if (!isPending) setOpen(val); // সাবমিট চলাকালীন বন্ধ হবে না
                  }}
                >
                  <DialogTrigger asChild className="my-5 ">
                    <Button variant="outline" className="my-0 md:my-2">Add new address</Button>
                  </DialogTrigger>
                  <DialogContent className="w-full bg-slate-100 sm:max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Add new shipping Address</DialogTitle>
                    </DialogHeader>
                    <AddressFormDialog
                      actionFor="addNewAddr"
                      startTransition={startTransition}
                      isPending={isPending}
                      setOpen={setOpen}
                    />
                  </DialogContent>
                </Dialog>
                }
              </div>

              <div className="space-y-2 mb-8">
                {addresses?.map((addr) => (
                  <div
                    key={addr._id}
                    className={`p-1 border rounded-lg cursor-pointer transition ${
                      selectedAddress === addr._id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <div className="flex justify-between w-full">
                      <label
                        onClick={() => setSelectedAddress(addr._id)}
                        className="flex items-center space-x-3 w-[76%] border-r-2 border-gray-300"
                      >
                        <input
                          type="radio"
                          name="address"
                          checked={selectedAddress === addr._id}
                          onChange={() => setSelectedAddress(addr._id)}
                          className="w-5 h-5"
                        />
                        <div>
                          <p className="text-xs md:text-lg md:font-semibold">
                            {addr.name}-{addr.phone}
                          </p>
                          <p className="text-xs md:text-lg text-gray-600">{addr.address}</p>
                        </div>
                      </label>
                      <div className="flex justify-between items-center">
                        {/* <Dialog
                          open={open}
                          onOpenChange={(val) => {
                            if (!isPending) setOpen(val); // সাবমিট চলাকালীন বন্ধ হবে না
                          }}
                        >
                          <DialogTrigger
                            asChild
                            className="px-5 py-1 rounded shadow hover:shadow-lg transition"
                          >
                            <button>Edit</button>
                          </DialogTrigger>
                          <DialogContent className="w-full bg-slate-100 sm:max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>
                                Edit shipping Address
                              </DialogTitle>
                            </DialogHeader>
                            <AddressFormDialog
                              actionFor="editAddr"
                              startTransition={startTransition}
                              isPending={isPending}
                              setOpen={setOpen}
                            />
                          </DialogContent>
                        </Dialog> */}
                        <button
                          onClick={() => handleDeleteAdd(addr._id)}
                          className="px-5 py-1 rounded shadow hover:shadow-lg transition"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
              <div className="">
                <div className="flex justify-between items-center px-2">
                  <h2 className="text-lg font-medium my-2">Your Orders</h2>
                  <Link href="/bag" className="underline text-blue-500">Go for edit bag</Link >
                </div>
        
                <div className="w-full grid grid-cols-1 md:grid-cols-2 bg-white border border-gray-200 p-5 relative md:mb-6">
                  {
                  !orders.length ?
                  <h2 className="text-lg font-medium mb-4">Your cart is empty</h2>
                      :
                  orders?.map((order: OrderedDataype) => {
                    const currentQty = order.productQuantity || 1;
                    const itemTotal = Number(order.productPrice) * currentQty;
        
                    return (<div key={order?.productName} className="flex gap-5 mb-5">
                      
        
                      <div className="flex gap-5">
                        <Image
                          alt={order?.productName}
                          src={order?.productImg}
                          height={50}
                          width={100}
                        />
        
                        <div className="flex-grow">
                          <h3 className="text-base font-medium text-gray-900">
                            {order?.productName}
                          </h3>

                          <span className="flex gap-5">
                           <p className="text-gray-500 text-sm mt-1 mb-4"> size: {order?.productQsize} </p>
                            <p className="text-gray-500 text-sm mt-1 mb-4"> Quantity:{currentQty} </p>
                          </span>

                          <span className="flex gap-5">
                            <p className="font-semibold">
                             Tk:{order?.productPrice}
                            </p>
                            <p className="font-semibold">
                              Total Tk : <strong className="text-gray-800">{itemTotal}</strong>
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                  )})}
                </div>
        
              </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="text-gray-700 font-medium mb-3">Promotion</h3>
              <div className="flex gap-2 mb-6">
                <input
                  type="text"
                  placeholder="Enter Store/Daraz Code"
                  className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                />
                <button className="btn-blue text-white px-6 py-2 rounded text-sm font-bold uppercase">
                  Apply
                </button>
              </div>

              {/* <div className="flex justify-between items-center mb-4">
                <h3 className="text-gray-700 font-medium">
                  Invoice and Contact Info
                </h3>
                <a href="#" className="text-blue-500 text-sm font-medium">
                  Edit
                </a>
              </div> */}

              <h3 className="text-gray-700 font-medium mb-4">Order Summary</h3>

              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Items Total (5 Items)</span>
                <span>৳ {subTotal}</span>
              </div>

              <div className="flex justify-between text-sm text-gray-600 mb-4 pb-4 border-b border-gray-200">
                <span>Delivery Fee</span>
                <span>৳ {deliveryFee}</span>
              </div>

              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-700">Total:</span>
                <span className="text-orange-custom text-lg font-bold">
                  ৳ {total}
                </span>
              </div>
              <div className="text-right text-xs text-gray-500 mb-6">
                VAT included, where applicable
              </div>

              {/* <button className="w-full bg-gray-300 text-white font-bold py-3 rounded uppercase cursor-not-allowed">
                Proceed to Pay
              </button> */}

              <button
                onClick={handleProceed}
                // disabled={!selectedAddress} // কোনো address সিলেক্ট না হলে disabled
                className={`w-full py-3 rounded-lg font-bold transition ${
                  selectedAddress
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-300 text-gray-500"
                }`}
              >
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutClient;
