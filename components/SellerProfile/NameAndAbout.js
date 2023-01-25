import Image from "next/image";
import React from "react";
import small from "../../assets/images/sellerProfile/smallLogo.png";

function NameAndAbout(props) {
  return (
    <div className="mt-20 w-full mx-auto text-center">
      <Image
        className="mx-auto mt-[16px]"
        src={small}
        width="200"
        height="40"
        alt="small logo image"
      />
    </div>
  );
}

export default NameAndAbout;
