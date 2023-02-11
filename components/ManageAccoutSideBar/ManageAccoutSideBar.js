import Link from "next/link";
import { useRouter } from "next/router";

import { FaCheck } from "react-icons/fa";
import profileLinksObj from "../../Utils/myProfileLinks";


// import Profile from './Profile';
const ManageAccoutSideBar = () => {
  const router = useRouter();

  const getCurrentColor = (profile) => {
    const asPath = `/profile/${router.query.slug?.[0]}`;

    return asPath === `/profile/${profile?.href}`
      ? " text-[#FB641B] font-bold mt-[16px] text-[24px]"
      : " text-black font-bold mt-[16px] text-[24px]";
  };

  return (
    <div>
      <div>
        <div>
          <p className="font-[500] text-[16px] text-[#001E00]">
            Hello, Abdul Korim
          </p>
          <div className="mt-[16px]">
            <button className="w-[172px] h-[30px] flex items-center justify-center gap-[8px] bg-[#0BD838] rounded-[15px]">
              <FaCheck className="text-[#FFFFFF]"></FaCheck>
              <span className="text-[#FFFFFF]">Verified Account</span>
            </button>
          </div>
        </div>

        {profileLinksObj?.map((profile, i) => {
          const url = `/profile/${profile.href}`;

          return (
            <div key={i} className="">
              <Link className={getCurrentColor(profile)} href={url}>
                <h1>{profile.title}</h1>
              </Link>

              {profile?.links && (
                <ul className="ml-6 ">
                  {profile?.links?.map((p, i) => (
                    <Link key={i} href={`/profile/${profile?.href}/${p?.href}`}>
                      <li
                      
                        className={
                          router.asPath ===
                          `/profile/${profile?.href}/${p?.href}`
                            ? "text-[#287DF3] mt-[0] text-[16px]"
                            : " text-[#686868]  mt-[8px]  text-[16px]"
                        }
                      >
                        {p?.title}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      {/* <div>
                <ProfileResponsive></ProfileResponsive>
            </div> */}
    </div>
  );
};

export default ManageAccoutSideBar;
