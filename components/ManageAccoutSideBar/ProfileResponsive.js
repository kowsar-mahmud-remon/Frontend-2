import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import profileLinksResponsiveObj from '../../Utils/myProfileLinksResponsive';
const ProfileResponsive = () => {
    return (
      <div className="">
        <div className="flex ml-[24px] items-center gap-[13px]">
          <FaArrowLeft className=""></FaArrowLeft>
          <h1 className="text-[20px]  font-[500] text-[#001E00]">Profile</h1>
        </div>
        <div className="">
          {profileLinksResponsiveObj?.map((profile, i) => (
            <div key={i} className="flex flex-col">
              <Link
                className="text-[#001E00] ml-[56px] mt-[14px]  font-[400]  text-[16px]"
                href={`/profile/${profile.href}`}
              >
                <ul>
                  <li>{profile.title}</li>
                </ul>
              </Link>
              <p
                className={`${
                  i !== profileLinksResponsiveObj.length - 1 &&
                  "h-[0px]  mt-[14px] ml-[20px] mr-[24px] border-[2px] border-solid  border-[#F2F2F2] w-[340px] "
                }`}
              ></p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default ProfileResponsive;