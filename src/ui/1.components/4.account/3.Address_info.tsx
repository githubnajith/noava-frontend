"use client";
// ------------------------
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/vendors/2.redux/store";
import { rdx_edit_address } from "@/vendors/2.redux/2.account/account_slice";
import { useAppSelector } from "@/vendors/2.redux/store";
// ?------------------------------------------------------------------------
const Address_info = (props: any) => {
  // ----------------------------
  const dispatch = useDispatch<AppDispatch>();
  const { shippingInfo } = props;
  // ----------------------------
  const edit_address = () => dispatch(rdx_edit_address(true));
  const rdx_edit_Address = useAppSelector((state) => state.account_reducer.edit_address);
  // ?------------------------------------------------------------------------
  return (
    <>
      {!rdx_edit_Address && shippingInfo && (
        <div className="mt-10 bg-gray-50 rounded-xl px-4 pt-8 lg:mt-0 space-y-6 w-full lg:w-1/2">
          <p className="text-xl font-medium">Shipping Details</p>
          <div className="">
            <div className="mt-6 border-t border-b py-2 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Name</p>
                <p className="font-semibold text-gray-900">{shippingInfo?.name}</p> 
              </div>
              {/* ---------------------------- */}
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Whatsapp Number</p>
                <p className="font-semibold text-gray-900">{shippingInfo?.whatsappNum}</p>
              </div>
              {/* ---------------------------- */}
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Email</p>
                <p className="font-semibold text-gray-900">{shippingInfo?.email}</p>
              </div>
              {/* ---------------------------- */}
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Door No</p>
                <p className="font-semibold text-gray-900">{shippingInfo?.doorNo}</p>
              </div>
              {/* ---------------------------- */}
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Street</p>
                <p className="font-semibold text-gray-900">{shippingInfo?.street}</p>
              </div>
              {/* ---------------------------- */}
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Landmark</p>
                <p className="font-semibold text-gray-900">{shippingInfo?.landmark}</p>
              </div>
              {/* ---------------------------- */}
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">City</p>
                <p className="font-semibold text-gray-900">{shippingInfo?.city}</p>
              </div>
              {/* ---------------------------- */}
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Pincode</p>
                <p className="font-semibold text-gray-900">{shippingInfo?.pincode}</p>
              </div>
            </div>
          </div>
          <div className="pb-4 text-center">
            <button onClick={edit_address} className="disabled:opacity-50 mt-1 mb-1  rounded-full w-54 bg-gray-900 px-6 py-3 font-medium text-white border border-black hover:bg-white hover:text-black">
              Edit Address
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Address_info;
