import FranchEye from "../assets/francheye-Logo.svg";
import ProfilePic from "../assets/profile-pic.svg";
import { Button } from "./ui/button";


const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="flex items-center justify-between flex-row mx-auto w-full max-w-screen-xl px-2.5 md:px-10">
        <div className="flex items-center flex-shrink-0">
          <img className="w-[90px] h-[90px]" src={FranchEye} alt="FranchEye Logo" />
        </div>
        <div className="flex justify-end items-center gap-x-4">
          <div className="">
            <Button variant="outline" className="bg-[#111111] text-white py-4 px-7 text-sm font-normal">Share Profile</Button>
          </div>
          <div className="rounded-full">
            <img className="w-[75px] h-[75px]" src={ProfilePic} alt="user profile" />
          </div>
        </div>
      </nav>
      <hr className="text-[#F6F6F6]" />
    </div>
  )
};

export default Navbar;
