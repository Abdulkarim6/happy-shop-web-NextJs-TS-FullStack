"use client";

import { useState } from "react";
import { AddressType, Toast } from "../utils/interfaces";
import { deleteAddress } from "../actions/checkoutActions";

// ধরো addresses এইভাবে আসছে server থেকে (getSavedAddresses action দিয়ে)
const savedAddresses = [
  { id: "69944d650a1af267f47e339b", name: "Home", address: "Mirpur, Dhaka", phone: "01xxx" },
  { id: "2", name: "Office", address: "Gulshan, Dhaka", phone: "01xxx" },
  { id: "3", name: "Parents House", address: "Uttara, Dhaka", phone: "01xxx" },
];

const CheckoutClient = ({ addresses }:{addresses:AddressType[]}) => {
  const [selectedAddress, setSelectedAddress] = useState<string | null | undefined>(null);
  const [payButton, setPayButton] = useState<boolean>(false);

  const handleProceed = () => {
    if (!selectedAddress) {
      Toast.fire({
        icon: "warning",
        title: "Please select an address",
      });
    } else {
    }
    // if (selectedAddress) {
    //   console.log("Proceeding with address ID:", selectedAddress);
    //   // এখানে payment gateway বা order create action কল করো
    // }
  };

  const handleDeleteAdd = async (id: string | undefined) => {
    if (id) {
      await deleteAddress(id);
    }
  };
  return (
    <div className="bg-gray-50 font-sans">
      <div className="container mx-auto p-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3">
            <div className="bg-white p-6 rounded shadow-sm">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-700 mb-2">
                  Delivery Information
                </h2>
                <button className="btn-blue px-6 py-2 rounded font-bold shadow hover:shadow-lg transition">
                  Add new address
                </button>
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
                          <p className="font-semibold">
                            {addr.name}-{addr.phone}
                          </p>
                          <p className="text-gray-600">{addr.address}</p>
                        </div>
                      </label>
                      <div className="flex justify-between items-center">
                        <button className="px-5 py-1 rounded shadow hover:shadow-lg transition">
                          edit
                        </button>
                        <button
                          onClick={() => handleDeleteAdd(addr._id)}
                          className="px-5 py-1 rounded shadow hover:shadow-lg transition"
                        >
                          delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      Full name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first and last name"
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      Region
                    </label>
                    <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-500 focus:outline-none focus:border-blue-400 bg-white">
                      <option>Please choose your region</option>
                      <option>Dhaka</option>
                      <option>Chittagong</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="Please enter your phone number"
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      City
                    </label>
                    <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-500 focus:outline-none focus:border-blue-400 bg-white">
                      <option>Please choose your city</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      Building / House No / Floor / Street
                    </label>
                    <input
                      type="text"
                      placeholder="Please enter"
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      Area
                    </label>
                    <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-500 focus:outline-none focus:border-blue-400 bg-white">
                      <option>Please choose your area</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      Colony / Suburb / Locality / Landmark
                    </label>
                    <input
                      type="text"
                      placeholder="Please enter"
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="For Example: House# 123, Street# 123, ABC Road"
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-gray-700 mb-2">
                    Select a label for effective delivery:
                  </p>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      className="flex items-center gap-2 px-6 py-3 border-2 border-blue-400 rounded text-blue-500 font-bold text-xs uppercase bg-blue-50"
                    >
                      <i className="fas fa-briefcase"></i> Office
                    </button>
                    <button
                      type="button"
                      className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded text-gray-500 font-bold text-xs uppercase hover:border-gray-400"
                    >
                      <i className="fas fa-home"></i> Home
                    </button>
                  </div>
                </div>
              </form> */}
            </div>

            <div className="flex justify-end mt-4">
              <button className="btn-blue text-white px-10 py-3 rounded text-sm font-bold shadow hover:shadow-lg transition">
                SAVE
              </button>
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

              <div className="flex justify-between items-center mb-4">
                <h3 className="text-gray-700 font-medium">
                  Invoice and Contact Info
                </h3>
                <a href="#" className="text-blue-500 text-sm font-medium">
                  Edit
                </a>
              </div>

              <h3 className="text-gray-700 font-medium mb-4">Order Summary</h3>

              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Items Total (5 Items)</span>
                <span>৳ 1,305</span>
              </div>

              <div className="flex justify-between text-sm text-gray-600 mb-4 pb-4 border-b border-gray-200">
                <span>Delivery Fee</span>
                <span>৳ 70</span>
              </div>

              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-700">Total:</span>
                <span className="text-orange-custom text-lg font-bold">
                  ৳ 1,375
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
