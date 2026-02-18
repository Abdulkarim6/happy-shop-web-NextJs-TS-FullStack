import { saveAddressAction } from "../actions/checkoutActions";

type paramsType = {
  actionFor:"addNewAddr" | "editAddr";
  isPending:boolean;
  startTransition:(Callback: () => void) => void;
  setOpen:React.Dispatch<React.SetStateAction<boolean>>;
}

const AddressFormDialog = ({actionFor, isPending,startTransition,setOpen}:paramsType) => {

    const handleSaveAddress = async (formData: FormData) => {
      if(actionFor === "addNewAddr"){
        startTransition(async () => {
          const result = await saveAddressAction(formData);
    
          if (result?.success) {
            console.log(result?.message); 
            setOpen(false);
          } else {
            console.error(result?.message);
            alert("Something went wrong!");
          }
        });
      }
      
    };

    return (
      
          <form action={handleSaveAddress}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              {/* Full Name - Required */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Full name
                </label>
                <input
                  name="name"
                  type="text"
                  required // <--- এই যে required
                  placeholder="Enter your first and last name"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
                />
              </div>

              {/* Region - Required */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Region
                </label>
                <select
                  name="region"
                  required // <--- এই যে required
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-500 focus:outline-none focus:border-blue-400 bg-white"
                >
                  {/* ডিফল্ট ভ্যালু ফাঁকা রাখতে হবে যাতে required কাজ করে */}
                  <option value="">Please choose your region</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                </select>
              </div>

              {/* Phone Number - Required */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="text"
                  required
                  placeholder="Please enter your phone number"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
                />
              </div>

              {/* City - Required */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">City</label>
                <select
                  name="city"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-500 focus:outline-none focus:border-blue-400 bg-white"
                >
                  <option value="">Please choose your city</option>
                  <option value="Dhaka City">Dhaka City</option>
                  <option value="Chittagong City">Chittagong City</option>
                </select>
              </div>

              {/* Building - Required */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Building / House No / Floor / Street
                </label>
                <input
                  name="building"
                  type="text"
                  required
                  placeholder="Please enter"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
                />
              </div>

              {/* Area - Required */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">Area</label>
                <select
                  name="area"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-500 focus:outline-none focus:border-blue-400 bg-white"
                >
                  <option value="">Please choose your area</option>
                  <option value="Gulshan">Gulshan</option>
                  <option value="Banani">Banani</option>
                </select>
              </div>

              {/* Colony - Required */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Colony / Suburb / Locality / Landmark
                </label>
                <input
                  name="colony"
                  type="text"
                  required
                  placeholder="Please enter"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
                />
              </div>

              {/* Address - Required */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Address
                </label>
                <input
                  name="address"
                  type="text"
                  required
                  placeholder="House# 123, Street# 123, ABC Road"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>

            <div className="mt-6">
              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={isPending}
                  className={`flex items-center gap-2 px-6 py-3 border-2 rounded text-xs font-bold uppercase 
                  ${
                    isPending
                      ? "bg-gray-300 border-gray-300 text-gray-500 cursor-not-allowed"
                      : "border-blue-400 text-blue-500 bg-blue-50 hover:bg-blue-100"
                  }`}
                >
                  {isPending ? "SAVING..." : "SAVE"}
                </button>
              </div>
            </div>
          </form>
    );
};

export default AddressFormDialog;