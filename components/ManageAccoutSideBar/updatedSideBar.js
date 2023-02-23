import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaCheck } from "react-icons/fa";
import profileSidebarLinks from "../../Utils/updatedProfileLink";

const UpdatedSideBar = () => {
  const router = useRouter();

  const getCurrentColor = (profile) => {
    const asPath = `/profile/${router.query.slug?.[0]}`;

    return asPath === `/profile/${profile?.href}`
      ? " text-[#287DF3] font-[500] text-[18px]"
      : " text-black font-[500] text-[18px]";
  };
  return (
    <div className="flex justify-end w-full ">
      <div>
        <div>
          <p className="font-[500] text-[16px] text-[#001E00]">
            Hello, Abdul Korim
          </p>
          <div className="">
            <button className=" py-[6px] px-2 flex items-center justify-center gap-[8px] bg-[#0BD838] rounded-full ">
              <FaCheck className="text-[#FFFFFF]"></FaCheck>
              <span className="text-[#FFFFFF]">Verified Account</span>
            </button>
          </div>
        </div>
        <div className="shadow-xl rounded pl-4 pr-24 mt-4 py-3">
          {profileSidebarLinks?.map((profile, i) => {
            const url = `/profile/${profile.href}`;

            return (
              <div key={i} className="mt-[16px] ">
                <Link className={getCurrentColor(profile)} href={url}>
                  <h1>{profile.title}</h1>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UpdatedSideBar;
