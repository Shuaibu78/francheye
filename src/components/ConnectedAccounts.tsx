import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import arrowRight from "../assets/Arrow-right.svg";
import Instagram from "../assets/instagram-icon.svg";
import { IPlatform } from "@/interface/connectedAccount";
import { IAccount } from "@/interface";

const ConnectedAccounts = ({ accounts }: { accounts: IAccount[] }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<IPlatform>("TikTok");

  const filteredPlatformData = accounts?.filter(
    (platform: IAccount) => platform.platform.toLowerCase() === selectedPlatform.toLowerCase()
  );

  return (
    <section className="flex flex-col items-start justify-between w-full gap-x-1 mt-6">
      <div className="flex gap-x-[1px] items-center justify-center">
        <h5 className="text-base font-medium text-[#000]">Connected Accounts:</h5>
        <Select onValueChange={(value) => setSelectedPlatform(value as IPlatform)} defaultValue="TikTok">
          <SelectTrigger className="w-[110px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="TikTok" className="font-normal text-[15px]">TikTok</SelectItem>
            <SelectItem value="Instagram" className="font-normal text-[15px]">Instagram</SelectItem>
            <SelectItem value="YouTube" className="font-normal text-[15px]">YouTube</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-5">
        {filteredPlatformData.length > 0 ? filteredPlatformData.map((account: any, index: number) => (
          <div
            key={index}
            className="h-14 w-40 bg-white rounded-xl text-center"
          >
            <div className="flex items-center justify-between px-5">
              <img
                src={Instagram}
                alt="platform icon"
                className="h-4 w-4 mt-2"
              />
              <p className="text-xs mt-2">{account.username}</p>
              <img src={arrowRight} alt="arrow right" className="mt-2" />
            </div>

            <div className="flex gap-3 justify-center mt-1">
              <p className="text-[10px] flex flex-col">
                {account.views}{" "}
                <span className="text-[6px]">Total lifetime views</span>
              </p>
              <p className="text-[10px] flex flex-col">
                {account.likes}
                <span className="text-[6px] flex flex-col">Likes</span>
              </p>
              <p className="text-[10px] flex flex-col">
                {account.followers}
                <span className="text-[6px]">Followers</span>
              </p>
            </div>
          </div>
        )) : (
          <div className="flex justify-center items-center text-center">
            No Account Available
          </div>
        )}
      </div>
    </section>
  )
}

export default ConnectedAccounts