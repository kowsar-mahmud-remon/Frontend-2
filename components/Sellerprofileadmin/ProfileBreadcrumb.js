/* eslint-disable react/no-unescaped-entities */
import React from "react";

const ProfileBreadcrumb = () => {
  return (
    <div className="mt-[20px]">
      <p className="text-[18px] font-semibold text-[#686868]">
        Home {">"} Account & Settings {">"}{" "}
        <span className="text-[#001E00]">Profile</span>
      </p>
      <h1 className="text-[24px] mb-[32px] text-[#FB641B] mt-[8px] font-semibold">
        Profile
      </h1>
    </div>
  );
};

export default ProfileBreadcrumb;
