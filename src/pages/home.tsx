import PriceRangeIcon from "@/components/icons/pricerangeicon";
import Navbar from "@/components/navbar";
import SigninBtn from "@/components/signinBtn";
import { HomeIcon, MapPinIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#FEF7F2]">
      <div>
        <Navbar />
      </div>
      <div className="grid grid-cols-2 m-16 ">
        <div className=" flex flex-col justify-center items-start mt-28 gap-y-8">
          <h1 className="text-7xl w-lg font-bold ">Find Your Dream Home</h1>
          <p className="text-lg w-sm  font-semibold">
            Explore our curated selection of exquisite properties meticulously
            tailored to your unique dream home vision
          </p>
          <SigninBtn size="lg" />
        </div>
        <div>
          <img
            src="/src/components/heroimgs/image.png"
            alt="hero img 1"
            className="w-3/5 h-auto rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-[35px] ">
        <div className=" flex flex-rows py-8  bg-[#DDC7BB] rounded-xl ">
          <div className="bg-[#FBF5F1] my-4 mx-2 py-2 px-2 w-64 flex items-center justify-between rounded-md  ">
            <div className="text-[#695346] font-bold px-4">Location</div>
            <MapPinIcon
              strokeWidth={3}
              color="#695346"
              className="px-2 size-8"
            />
          </div>
          <div className="bg-[#FBF5F1] my-4 mx-2 py-2 px-2 w-64 flex items-center justify-between rounded-md  ">
            <div className="text-[#695346] font-bold px-4">Type</div>
            <HomeIcon strokeWidth={3} color="#695346" className="px-2 size-8" />
          </div>
          <div className="bg-[#FBF5F1] my-4 mx-2 py-2 px-2 w-64 flex items-center justify-between rounded-md  ">
            <div className="text-[#695346] font-bold px-4">Price Range</div>
            <PriceRangeIcon />
          </div>
          <div className="my-4 mx-2 py-2 px-2 ">
            <SigninBtn size="homePg" />
          </div>
        </div>
      </div>
    </div>
  );
}
