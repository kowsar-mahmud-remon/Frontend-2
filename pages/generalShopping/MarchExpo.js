import Image from "next/image";
import React from "react";
import cycle from "../../assets/images/cicyle-removebg-preview.png";
import bettary from "../../assets/images/bettary-removebg-preview.png";
import tyre from "../../assets/images/tyre-removebg-preview.png";

const MarchExpo = () => {
  const styling = {
    backgroundImage: `url("https://i.ibb.co/x8PGBbP/background.webp")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const butoon = "See what's new"
  const descrip = "Source 2023's latest product trends"

  const cards = [
    {
      name: "Lowest prices in 90 days",
      des: "Save with low prices and On-time Delivery Guarantee",
      img: cycle,
    },
    {
      name: "Renewable Energy Exhibition",
      des: "Get the latest green energy tech",
      img: bettary,
    },
    {
      name: "Featured suppliers",
      des: "with the highest sales volumes",
      img: tyre,
    },  
  ];

  return (
    <section className="lg:max-w-[1426px] rounded-lg mx-auto mt-10 mb-44" style={styling} >
      <div className="px-8 flex flex-wrap items-center justify-between">
        <div>
          <h1 className="font-bold text-[28px] text-white mb-3">
            March Expo 2023  
          </h1>
          <h1 className="text-lg text-white mb-6">
            {descrip}
          </h1>
          <div>
            <button className="px-6 py-2 rounded-[22px] text-[#000] bg-[#f4f4f4] text-lg">
             {butoon}
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 py-5">
          {cards.map((card) => {
            return (
              <>
                <div className="w-[212px] bg-white  rounded px-3">
                  <h3 className="text-sm font-bold pt-3 text-ellipsis w-[172px] whitespace-nowrap overflow-hidden">{card.name}</h3>
                  <p className="mt-1 text-xs text-ellipsis w-[172px] whitespace-nowrap overflow-hidden">{card.des}</p>
                  <div className=" py-3">
                    <Image
                      className="rounded w-[140px] h-[140px] mx-auto bg-[#f4f4f4]"
                      src={card.img}
                      width={140}
                      height={140}
                      alt=""
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MarchExpo;
