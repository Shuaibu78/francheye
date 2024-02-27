import HeroBg from "../assets/games-bg.svg";
import HatMan from "../assets/hat-man.svg";
import BlueMark from "../assets/blue-mark.svg";
import Star from "../assets/star.svg";
import Smiley from "../assets/smiley.svg";
import Nike from "../assets/check.svg";
import Location from "../assets/location.svg";
import { Button } from "./ui/button";
import ConnectedAccounts from "./ConnectedAccounts";
import PreviousWork from "./PreviousWork";
import { IPhoto, IUserData } from "@/interface";

const UserDetails = ({ previousWork, userDetail }: { previousWork: IPhoto[]; userDetail: IUserData }) => {
  const formattedUsername = `@${userDetail?.username.charAt(0).toLowerCase()}${userDetail?.username.slice(1)}`;
  const username = `${formattedUsername}/francheye.com`;

  return (
    <section className="flex flex-col items-start w-1/2 gap-x-1">
      <article className="relative">
        <img src={HeroBg} alt="games background" className="z-10" />

        <img
          src={HatMan}
          alt="user profile"
          className="absolute bottom-[-50px] left-[140px] transform -translate-x-1/2 w-[115px] h-[115px] rounded-full border-2 border-white z-20"
        />
      </article>

      <section className="flex items-start justify-between w-full gap-x-1 mt-20">
        <section className="flex flex-col items-start w-[65%] relative">
          <article className="flex flex-col gap-y-[2px]">
            <div className="flex gap-x-2 justify-start items-center align-middle">
              <h3 className="text-2xl font-medium text-[#000000]">
                {userDetail?.name}
              </h3>
              <img src={BlueMark} alt="blue check" />
            </div>

            <div className="flex gap-x-2 justify-start items-center align-middle">
              <p className="text-sm font-normal text-[#11111180]">
                {username}
              </p>
              <div className="flex gap-x-1 justify-start items-center align-middle">
                <img src={Star} alt="star" />
                <p className="text-sm font-normal text-[#11111180]">5.0 (21st)</p>
              </div>
            </div>

            <div className="flex gap-[2px]">
              {userDetail?.industries.map((industry) => (
                <p key={industry} className="text-sm font-normal text-[#11111180]">
                  {"#" + industry}
                </p>
              ))}
            </div>

            <div className="flex gap-x-1 justify-start items-center align-middle">
              <img
                src={Location}
                className="w-[15px] h-[15px]"
                alt="location"
              />
              <p className="text-sm font-normal text-[#11111180]">
                {userDetail?.country}
              </p>
            </div>
          </article>

          <article className="mt-7 flex flex-col gap-y-[2px]">
            <h3 className="text-base font-medium text-[#000000]">My Bio</h3>

            <p className="text-[15px] font-normal text-[#11111199]">
              {userDetail?.bio}
            </p>
          </article>
        </section>

        <section className="flex flex-col items-end w-[30%]">
          <Button variant="outline" className="bg-[#0014BC] text-white py-4 px-7 text-sm font-normal">Follow</Button>

          <article className="mt-4 flex flex-col items-end gap-y-[2px]">
            <h3 className="text-base font-medium text-[#111111]">Languages</h3>

            <div className="flex gap-1">
              {userDetail?.languages.map((language) => (
                <p key={language} className="text-[15px] font-normal text-[#11111199]">
                  {language + ","}
                </p>
              ))}
            </div>
          </article>

          <article className="mt-4 flex flex-col items-end gap-y-[2px]">
            <h3 className="text-base font-medium text-[#111111]">Content Type</h3>

            <div className="flex gap-x-1 justify-start items-center align-middle">
              <img
                src={Smiley}
                className="w-[15px] h-[15px]"
                alt="location"
              />
              <p className="text-[15px] font-normal text-[#11111199]">
                {userDetail?.contentType}
              </p>
            </div>
          </article>

          <article className="mt-4 flex flex-col items-end gap-y-[2px]">
            <h3 className="text-base font-medium text-[#111111]">Brands I’ve worked with</h3>

            <div className="flex gap-x-2 justify-start items-center align-middle">
              {[Nike, Nike, Nike].map((nike, index) => {
                return (
                  <img
                    src={nike}
                    key={index}
                    className="w-[40px] h-[40px]"
                    alt="nike"
                  />
                );
              })}
            </div>
          </article>
        </section>
      </section>

      <ConnectedAccounts accounts={userDetail?.accounts} />
      <PreviousWork previousWork={previousWork} />
    </section>
  )
}

export default UserDetails